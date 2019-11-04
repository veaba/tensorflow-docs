![](https://tensorflow.google.cn/images/tf_logo_32px.png)
## Class  `Module` 

Base neural network module class.

### Aliases:

- Class [ `tf.compat.v1.Module` ](/api_docs/python/tf/Module)

- Class [ `tf.compat.v2.Module` ](/api_docs/python/tf/Module)

### Used in the guide:

- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

A module is a named container for [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)s, other [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module)s andfunctions which apply to user input. For example a dense layer in a neuralnetwork might be implemented as a [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module):


```python
&nbsp;class Dense(tf.Module):
&nbsp; &nbsp;def __init__(self, in_features, output_features, name=None):
  &nbsp;super(Dense, self).__init__(name=name)
  &nbsp;self.w = tf.Variable(
    &nbsp;tf.random.normal([input_features, output_features]), name='w')
  &nbsp;self.b = tf.Variable(tf.zeros([output_features]), name='b')

&nbsp; &nbsp;def __call__(self, x):
  &nbsp;y = tf.matmul(x, self.w) + self.b
  &nbsp;return tf.nn.relu(y)

```


You can use the Dense layer as you would expect:


```python
d = Dense(input_features=64, output_features=10)
d(tf.ones([100, 64]))
#==&gt; &lt;tf.Tensor: ...&gt;

```


By subclassing [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) instead of  `object`  any [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) or[ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) instances assigned to object properties can be collected usingthe  `variables` ,  `trainable_variables`  or  `submodules`  property:


```python
d.variables
#==&gt; (&lt;tf.Variable 'b:0' ...&gt;, &lt;tf.Variable 'w:0' ...&gt;)

```


Subclasses of [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) can also take advantage of the  `_flatten`  methodwhich can be used to implement tracking of any other types.

All [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) classes have an associated [ `tf.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/name_scope) which can be usedto group operations in TensorBoard and create hierarchies for variable nameswhich can help with debugging. We suggest using the name scope when creatingnested submodules/parameters or for forward methods whose graph you might wantto inspect in TensorBoard. You can enter the name scope explicitly using `with self.name_scope:`  or you can annotate methods (apart from  `__init__` )with  `@tf.Module.with_name_scope` .


```python
class MLP(tf.Module):
&nbsp; def __init__(self, input_size, sizes, name=None):
  super(MLP, self).__init__(name=name)
  self.layers = []
  with self.name_scope:
  &nbsp; for size in sizes:
    self.layers.append(Dense(input_size=input_size, output_size=size))
    input_size = size

&nbsp; @tf.Module.with_name_scope
&nbsp; def __call__(self, x):
  for layer in self.layers:
  &nbsp; x = layer(x)
  return x

```


##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/module/module.py#L107-L122)


```python
__init__(name=None)

```


Initialize self.  See help(type(self)) for accurate signature.

## Properties

###  `name` 

Returns the name of this module as passed or determined in the ctor.

NOTE: This is not the same as the  `self.name_scope.name`  which includesparent module names.

###  `name_scope` 

Returns a [ `tf.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/name_scope) instance for this class.

###  `submodules` 

Sequence of all sub-modules.

Submodules are modules which are properties of this module, or found asproperties of modules which are properties of this module (and so on).


```python
a = tf.Module()
b = tf.Module()
c = tf.Module()
a.b = b
b.c = c
assert list(a.submodules) == [b, c]
assert list(b.submodules) == [c]
assert list(c.submodules) == []

```


#### Returns:

A sequence of all submodules.

###  `trainable_variables` 

Sequence of variables owned by this module and it's submodules.

>**Note:**  this method uses reflection to find variables on the current instanceand submodules. For performance reasons you may wish to cache the resultof calling this method if you don't expect the return value to change.

#### Returns:

A sequence of variables for the current module (sorted by attributename) followed by variables from all submodules recursively (breadthfirst).

###  `variables` 

Sequence of variables owned by this module and it's submodules.

>**Note:**  this method uses reflection to find variables on the current instanceand submodules. For performance reasons you may wish to cache the resultof calling this method if you don't expect the return value to change.

#### Returns:

A sequence of variables for the current module (sorted by attributename) followed by variables from all submodules recursively (breadthfirst).

## Methods

###  `with_name_scope` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/module/module.py#L260-L294)


```python
@classmethod
with_name_scope(
  cls,
  method
)

```


Decorator to automatically enter the module name scope.


```python
class MyModule(tf.Module):
&nbsp; @tf.Module.with_name_scope
&nbsp; def __call__(self, x):
  if not hasattr(self, 'w'):
  &nbsp; self.w = tf.Variable(tf.random.normal([x.shape[1], 64]))
  return tf.matmul(x, self.w)

```


Using the above module would produce [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)s and [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor)s whosenames included the module name:


```python
mod = MyModule()
mod(tf.ones([8, 32]))
# ==&gt; &lt;tf.Tensor: ...&gt;
mod.w
# ==&gt; &lt;tf.Variable ...'my_module/w:0'&gt;

```


#### Args:

- **`method`** : The method to wrap.

#### Returns:

The original method wrapped such that it enters the module's name scope.
