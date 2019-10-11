
Creates a callable TensorFlow graph from a Python function.
### Aliases:
- `tf.compat.v1.function`
- `tf.compat.v2.function`

```
 tf.function(
    func=None,
    input_signature=None,
    autograph=True,
    experimental_autograph_options=None,
    experimental_relax_shapes=False
)
```
### Used in the guide:
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``P``i``x``2``P``i``x``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
[tf.Graph](https://tensorflow.google.cn/api_docs/python/tf/Graph)function constructs a callable that executes a TensorFlow graph () created by tracing the TensorFlow operations in func. This allows the TensorFlow runtime to apply optimizations and exploit parallelism in the computation defined by func.


Example Usage

```
 def f(x, y):
  return tf.reduce_mean(tf.multiply(x ** 2, 3) + y)

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
  return f(x, y)

assert (h().numpy() == f(x, y).numpy()).all()

# Data-dependent control flow is also captured in the graph. Supported
# control flow statements include `if`, `for`, `while`, `break`, `continue`,
# `return`.
@tf.function
def g(x):
  if tf.reduce_sum(x) > 0:
    return x * x
  else:
    return -x // 2

# print and TensorFlow side effects are supported, but exercise caution when
# using Python side effects like mutating objects, saving to files, etc.
l = []

@tf.function
def g(x):
  for i in x:
    print(i)                              # Works
    tf.compat.v1.assign(v, i)                       # Works
    tf.compat.v1.py_func(lambda i: l.append(i))(i)  # Works
    l.append(i)                           # Caution! Doesn't work.
```

Note that unlike other TensorFlow operations, we don't convert python numerical inputs to tensors. Moreover, a new graph is generated for each distinct python numerical value, for example calling g(2) and g(3) will generate two new graphs (while only one is generated if you call g(tf.constant(2)) and g(tf.constant(3))). Therefore, python numerical inputs should be restricted to arguments that will have few distinct values, such as hyperparameters like the number of layers in a neural network. This allows TensorFlow to optimize each variant of the neural network.
[tf.Variable](https://tensorflow.google.cn/api_docs/python/tf/Variable)Referencing s

[tf.Variable](https://tensorflow.google.cn/api_docs/python/tf/Variable)The Python function func may reference stateful objects (such as ). These are captured as implicit inputs to the callable returned by function. For example:


```
 c = tf.Variable(0)

@tf.function
def f(x):
  c.assign_add(1)
  return x + tf.compat.v1.to_float(c)

assert int(c) == 0
assert f(1.0) == 2.0
assert int(c) == 1
assert f(1.0) == 3.0
assert int(c) == 2
```

function can be applied to methods of an object. For example:

```
 class Dense(object):
  def __init__(self):
    self.W = tf.Variable(tf.compat.v1.glorot_uniform_initializer()((10, 10)))
    self.b = tf.Variable(tf.zeros(10))

  @tf.function
  def compute(self, x):
    return tf.matmul(x, self.W) + self.b

d1 = Dense()
d2 = Dense()
x = tf.random.uniform((10, 10))
# d1 and d2 are using distinct variables
assert not (d1.compute(x).numpy() == d2.compute(x).numpy()).all()
```
[tf.keras](https://tensorflow.google.cn/api_docs/python/tf/keras)Usage with 

[tf.keras.Model](https://tensorflow.google.cn/api_docs/python/tf/keras/Model)The call methods of a  subclass can be decorated with function in order to apply graph execution optimizations on it. For example:


```
 class MyModel(tf.keras.Model):
  def __init__(self, keep_probability=0.2):
    super(MyModel, self).__init__()
    self.dense1 = tf.keras.layers.Dense(4)
    self.dense2 = tf.keras.layers.Dense(5)
    self.keep_probability = keep_probability

  @tf.function
  def call(self, inputs, training=True):
    y = self.dense2(self.dense1(inputs))
    if training:
      return tf.nn.dropout(y, self.keep_probability)
    else:
      return y

model = MyModel()
model(x, training=True)  # executes a graph, with dropout
model(x, training=False) # executes a graph, without dropout
```

Input Signatures

function instantiates a separate graph for every unique set of input shapes and datatypes. For example, the following code snippet will result in three distinct graphs being traced, as each input has a different shape.

```
 @tf.function
def f(x): return tf.add(x, 1.)

scalar = tf.constant(1.0)
vector = tf.constant([1.0, 1.0])
matrix = tf.constant([[3.0]])

f(scalar)
f(vector)
f(matrix)
```
[tf.TensorSpec](https://tensorflow.google.cn/api_docs/python/tf/TensorSpec)An "input signature" can be optionally provided to function to control the graphs traced. The input signature specifies the shape and type of each Tensor argument to the function using a  object. For example, the following code snippet ensures that a single graph is created where the input Tensor is required to be a floating point tensor with no restrictions on shape.


```
 @tf.function(input_signature=[tf.TensorSpec(shape=None, dtype=tf.float32)])
def f(x): return tf.add(x, 1.)
```

When an input_signature is specified, the callable will convert the inputs to the specified TensorSpecs.

Tracing and staging

When autograph is True, all Python control flow that depends on Tensor values is staged into a TensorFlow graph. When autograph is False, the function is traced and control flow is not allowed to depend on data.

Note that function only stages TensorFlow operations, all Python code that func executes and does not depend on data will shape the construction of the graph. For example, consider the following:

```
 import numpy as np

def add_noise():
  return tf.eye(5) + np.random.randn(5, 5)

traced = tf.function(add_noise)
```

add_noise() will return a different output every time it is invoked. However, traced() will return the same value every time it is called, since a particular random value generated by the np.random.randn call will be inserted in the traced/staged TensorFlow graph as a constant. In this particular example, replacing np.random.randn(5, 5) with tf.random.normal((5, 5)) will result in the same behavior for add_noise() and traced().

Python Side-Effects

A corollary of the previous discussion on tracing is the following: If a Python function func has Python side-effects, then executing func multiple times may not be semantically equivalent to executing F = tf.function(func) multiple times; this difference is due to the fact that function only captures the subgraph of TensorFlow operations that is constructed when func is invoked to trace a graph.
[tf.compat.v1.py_func](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/py_func)The same is true if code with Python side effects is used inside control flow, such as a loop. If your code uses side effects that are not intended to control graph construction, wrap them inside .


Retracing

A single tf.function object might need to map to multiple computation graphs under the hood. This should be visible only as performance (tracing graphs has a nonzero computational and memory cost) but should not affect the correctness of the program. A traced function should return the same result as it would when run eagerly, assuming no unintended Python side-effects.
[tf.function](https://tensorflow.google.cn/api_docs/python/tf/function)Calling a  with tensor arguments of different dtypes should lead to at least one computational graph per distinct set of dtypes. Alternatively, always calling a  with tensor arguments of the same shapes and dtypes and the same non-tensor arguments should not lead to additional retracings of your function.


Other than that, TensorFlow reserves the right to retrace functions as many times as needed, to ensure that traced functions behave as they would when run eagerly and to provide the best end-to-end performance. For example, the behavior of how many traces TensorFlow will do when the function is repeatedly called with different python scalars as arguments is left undefined to allow for future optimizations.
[tf.function](https://tensorflow.google.cn/api_docs/python/tf/function)To control the tracing behavior, use the following tools: - different  objects are guaranteed to not share traces; and - specifying a signature or using concrete function objects returned from get_concrete_function() guarantees that only one function graph will be built.

#### Args:
- `func`: `func`tion to be compiled. If `func` is None, returns a decorator that can be invoked with a single argument - `func`. The end result is equivalent to providing all the arguments up front. In other words, tf.`func`tion(input_signature=...)(`func`) is equivalent to tf.`func`tion(`func`, input_signature=...). The former can be used to decorate Python `func`tions, for example: @tf.`func`tion(input_signature=...) def foo(...): ...
#### Returns:
[tf.Tensor](https://tensorflow.google.cn/api_docs/python/tf/Tensor)If func is not None, returns a callable that will execute the compiled function (and return zero or more  objects). If func is None, returns a decorator that, when invoked with a single func argument, returns a callable equivalent to the case above.

#### Raises:
- `TypeError`: If `input_signature` is neither `None` nor a sequence of `TensorSpec` objects.
