![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Creates a callable TensorFlow graph from a Python function.

### Aliases:

- [ `tf.compat.v1.function` ](/api_docs/python/tf/function)

- [ `tf.compat.v2.function` ](/api_docs/python/tf/function)


```python
tf.function(
  func=None,
  input_signature=None,
  autograph=True,
  experimental_autograph_options=None,
  experimental_relax_shapes=False
)

```


### Used in the guide:

- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

### Used in the tutorials:

- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)

- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)

- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

 `function`  constructs a callable that executes a TensorFlow graph([ `tf.Graph` ](https://tensorflow.google.cn/api_docs/python/tf/Graph)) created by tracing the TensorFlow operations in  `func` .This allows the TensorFlow runtime to apply optimizations and exploitparallelism in the computation defined by  `func` .

<em>Example Usage</em>


```python
def f(x, y):
&nbsp; return tf.reduce_mean(tf.multiply(x ** 2, 3) + y)

g = tf.function(f)

x = tf.constant([[2.0, 3.0]])
y = tf.constant([[3.0, -2.0]])

# `f` and `g` will return the same value, but `g` will be executed as a
# TensorFlow graph.
assert f(x, y).numpy() == g(x, y).numpy()

# Tensors and tf.Variables used by the Python function are captured in the
# graph.
@tf.function
def h():
&nbsp; return f(x, y)

assert (h().numpy() == f(x, y).numpy()).all()

# Data-dependent control flow is also captured in the graph. Supported
# control flow statements include `if`, `for`, `while`, `break`, `continue`,
# `return`.
@tf.function
def g(x):
&nbsp; if tf.reduce_sum(x) &gt; 0:
  return x * x
&nbsp; else:
  return -x // 2

# print and TensorFlow side effects are supported, but exercise caution when
# using Python side effects like mutating objects, saving to files, etc.
l = []

@tf.function
def g(x):
&nbsp; for i in x:
  print(i)               &nbsp;# Works
  tf.compat.v1.assign(v, i)           &nbsp; # Works
  tf.compat.v1.py_func(lambda i: l.append(i))(i) &nbsp;# Works
  l.append(i)             &nbsp; # Caution! Doesn't work.

```


Note that unlike other TensorFlow operations, we don't convert pythonnumerical inputs to tensors. Moreover, a new graph is generated for eachdistinct python numerical value, for example calling  `g(2)`  and  `g(3)`  willgenerate two new graphs (while only one is generated if you call `g(tf.constant(2))`  and  `g(tf.constant(3))` ). Therefore, python numericalinputs should be restricted to arguments that will have few distinct values,such as hyperparameters like the number of layers in a neural network. Thisallows TensorFlow to optimize each variant of the neural network.

<em>Referencing [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)s</em>

The Python function  `func`  may reference stateful objects (such as[ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).These are captured as implicit inputs to the callable returned by  `function` .For example:


```python
c = tf.Variable(0)

@tf.function
def f(x):
&nbsp; c.assign_add(1)
&nbsp; return x + tf.compat.v1.to_float(c)

assert int(c) == 0
assert f(1.0) == 2.0
assert int(c) == 1
assert f(1.0) == 3.0
assert int(c) == 2

```


 `function`  can be applied to methods of an object. For example:


```python
class Dense(object):
&nbsp; def __init__(self):
  self.W = tf.Variable(tf.compat.v1.glorot_uniform_initializer()((10, 10)))
  self.b = tf.Variable(tf.zeros(10))

&nbsp; @tf.function
&nbsp; def compute(self, x):
  return tf.matmul(x, self.W) + self.b

d1 = Dense()
d2 = Dense()
x = tf.random.uniform((10, 10))
# d1 and d2 are using distinct variables
assert not (d1.compute(x).numpy() == d2.compute(x).numpy()).all()

```


<em>Usage with [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)</em>

The  `call`  methods of a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) subclass can be decorated with `function`  in order to apply graph execution optimizations on it.For example:


```python
class MyModel(tf.keras.Model):
&nbsp; def __init__(self, keep_probability=0.2):
  super(MyModel, self).__init__()
  self.dense1 = tf.keras.layers.Dense(4)
  self.dense2 = tf.keras.layers.Dense(5)
  self.keep_probability = keep_probability

&nbsp; @tf.function
&nbsp; def call(self, inputs, training=True):
  y = self.dense2(self.dense1(inputs))
  if training:
  &nbsp; return tf.nn.dropout(y, self.keep_probability)
  else:
  &nbsp; return y

model = MyModel()
model(x, training=True) &nbsp;# executes a graph, with dropout
model(x, training=False) # executes a graph, without dropout

```


<em>Input Signatures</em>

 `function`  instantiates a separate graph for every unique set of inputshapes and datatypes. For example, the following code snippet will resultin three distinct graphs being traced, as each input has a differentshape.


```python
@tf.function
def f(x): return tf.add(x, 1.)

scalar = tf.constant(1.0)
vector = tf.constant([1.0, 1.0])
matrix = tf.constant([[3.0]])

f(scalar)
f(vector)
f(matrix)

```


An "input signature" can be optionally provided to  `function`  to controlthe graphs traced. The input signature specifies the shape and type of each `Tensor`  argument to the function using a [ `tf.TensorSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TensorSpec) object. For example,the following code snippet ensures that a single graph is created where theinput  `Tensor`  is required to be a floating point tensor with no restrictionson shape.


```python
@tf.function(input_signature=[tf.TensorSpec(shape=None, dtype=tf.float32)])
def f(x): return tf.add(x, 1.)

```


When an  `input_signature`  is specified, the callable will convert the inputsto the specified TensorSpecs.

<em>Tracing and staging</em>

When  `autograph`  is  `True` , all Python control flow that depends on  `Tensor` values is staged into a TensorFlow graph. When  `autograph`  is  `False` , thefunction is traced and control flow is not allowed to depend on data.

Note that  `function`  only stages TensorFlow operations, all Python code that `func`  executes and does not depend on data will shape the <em>construction</em> ofthe graph.For example, consider the following:


```python
import numpy as np

def add_noise():
&nbsp; return tf.eye(5) + np.random.randn(5, 5)

traced = tf.function(add_noise)

```


 `add_noise()`  will return a different output every time it is invoked.However,  `traced()`  will return the same value every time it is called,since a particular random value generated by the  `np.random.randn`  call willbe inserted in the traced/staged TensorFlow graph as a constant. In thisparticular example, replacing  `np.random.randn(5, 5)`  with `tf.random.normal((5, 5))`  will result in the same behavior for  `add_noise()` and  `traced()` .

<em>Python Side-Effects</em>

A corollary of the previous discussion on tracing is the following: If aPython function  `func`  has Python side-effects, then executing  `func`  multipletimes may not be semantically equivalent to executing  `F = tf.function(func)` multiple times; this difference is due to the fact that  `function`  onlycaptures the subgraph of TensorFlow operations that is constructed when  `func` is invoked to trace a graph.

The same is true if code with Python side effects is used inside control flow,such as a loop. If your code uses side effects that are not intended tocontrol graph construction, wrap them inside [ `tf.compat.v1.py_func` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/py_func).

<em>Retracing</em>

A single tf.function object might need to map to multiple computation graphsunder the hood. This should be visible only as performance (tracing graphs hasa nonzero computational and memory cost) but should not affect the correctnessof the program. A traced function should return the same result as it wouldwhen run eagerly, assuming no unintended Python side-effects.

Calling a [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) with tensor arguments of different dtypes should leadto at least one computational graph per distinct set of dtypes. Alternatively,always calling a [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) with tensor arguments of the same shapes anddtypes and the same non-tensor arguments should not lead to additionalretracings of your function.

Other than that, TensorFlow reserves the right to retrace functions as manytimes as needed, to ensure that traced functions behave as they would when runeagerly and to provide the best end-to-end performance. For example, thebehavior of how many traces TensorFlow will do when the function is repeatedlycalled with different python scalars as arguments is left undefined to allowfor future optimizations.

To control the tracing behavior, use the following tools: - different [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) objects are guaranteed to not share traces; and - specifying a signature or using concrete function objects returned from   get_concrete_function() guarantees that only one function graph will be   built.

#### Args:

- **`func`** : function to be compiled. If  `func`  is None, returns a decorator thatcan be invoked with a single argument -  `func` . The end result isequivalent to providing all the arguments up front. In other words, `tf.function(input_signature=...)(func)`  is equivalent to[ `tf.function(func, input_signature=...)` ](https://tensorflow.google.cn/api_docs/python/tf/function). The former can be used todecorate Python functions, for example:@tf.function(input_signature=...)def foo(...): ...

- **`input_signature`** : A possibly nested sequence of [ `tf.TensorSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TensorSpec) objectsspecifying the shapes and dtypes of the Tensors that will be supplied tothis function. If  `None` , a separate function is instantiated for eachinferred input signature.  If input_signature is specified, every input to `func`  must be a  `Tensor` , and  `func`  cannot accept  `**kwargs` .

- **`autograph`** : Whether autograph should be applied on  `func`  before tracing agraph. This allows for dynamic control flow (Python if's, loops etc.)in the traced graph. See https://www.tensorflow.org/guide/autograph formore information.

- **`experimental_autograph_options`** : Experimental knobs (in the form of a tupleof tensorflow.autograph.Feature values) to control behavior whenautograph=True.

- **`experimental_relax_shapes`** : When true, argument shapes may be relaxed toavoid unecessary retracing.

#### Returns:

If  `func`  is not None, returns a callable that will execute the compiledfunction (and return zero or more [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objects).If  `func`  is None, returns a decorator that, when invoked with a single `func`  argument, returns a callable equivalent to the case above.

#### Raises:

- **`TypeError`** : If  `input_signature`  is neither  `None`  nor a sequence of `TensorSpec`  objects.
