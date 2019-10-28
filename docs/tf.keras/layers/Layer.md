## Class Layer
Base layer class.
Inherits From: `Module`
### Aliases:
- Class `tf.compat.v1.keras.layers.Layer`
- Class `tf.compat.v2.keras.layers.Layer`
This is the class from which all layers inherit.
A layer is a class implementing common neural networks operations, such as convolution, batch norm, etc. These operations require managing weights, losses, updates, and inter-layer connectivity.
Users will just instantiate a layer and then treat it as a callable.
We recommend that descendants of `Layer` implement the following methods:
#### Arguments:
- `trainable`: Boolean, whether the layer's variables should be `trainable`.
- `name`: String `name` of the layer.
- `dtype`: The `dtype` of the layer's computations and weights (default of `None` means use `tf.keras.backend.floatx` in TensorFlow 2, or the type of the first input in TensorFlow 1).
- `dynamic`: Set this to `True` if your layer should only be run eagerly, and should not be used to generate a static computation graph. This would be the case for a Tree-RNN or a recursive network, for example, or generally for any layer that manipulates tensors using Python control flow. If `False`, we assume that the layer can safely be used to generate a static computation graph.
[tf.keras.mixed_precision.experimental.Policy](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy)

#### Mutable properties:
- `trainable`: Whether the layer should be trained (boolean).
- `input_spec`: Optional (list of) `InputSpec` object(s) specifying the constraints on inputs that can be accepted by the layer.
### Dtypes and casting
[Layer.dtype](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer#dtype)


```
 x = tf.ones((4, 4, 4, 4), dtype='float64')
layer = tf.keras.layers.Conv2D(filters=4, kernel_size=2)
print(layer.dtype)  # float32

# `layer` casts it's inputs to layer.dtype, which is float32, and does
# computations in float32.
y = layer(x)
```
Currently, only tensors in the first argument to the layer's `call` method are casted. For example:

```
 class MyLayer(tf.keras.layers.Layer):
  # Bug! `b` will not be casted.
  def call(self, a, b):
    return a + 1., b + 1.

a = tf.constant(1., dtype="float32")
b = tf.constant(1., dtype="float32")

layer = MyLayer(dtype="float64")
x, y = layer(a, b)
print(x.dtype)  # float64
print(y.dtype)  # float32. Not casted since `b` was not passed to first input
```
It is recommended to accept tensors only in the first argument. This way, all tensors are casted to the layer's dtype. `MyLayer` should therefore be written as:

```
 class MyLayer(tf.keras.layers.Layer):
  # Now, all tensor inputs will be casted.
  def call(self, inputs):
    a, b = inputs
    return a + 1., b + 1.

a = tf.constant(1., dtype="float32")
b = tf.constant(1., dtype="float32")

layer = MyLayer(dtype="float64")
x, y = layer((a, b))
print(x.dtype)  # float64
print(y.dtype)  # float64.
```
In a future minor release, tensors in other arguments may be casted as well.
Currently, other arguments are not automatically casted for technical reasons, but this may change in a future minor release.
A layer subclass can prevent its inputs from being autocasted by passing `autocast=False` to the layer constructor. For example:

```
 class MyLayer(tf.keras.layers.Layer):

  def __init__(self, **kwargs):
    kwargs['autocast']=False
    super(MyLayer, self).__init__(**kwargs)

  def call(self, inp):
    return inp

x = tf.ones((4, 4, 4, 4), dtype='float64')
layer = MyLayer()
print(layer.dtype)  # float32.
y = layer(x)  # MyLayer will not cast inputs to it's dtype of float32
print(y.dtype)  # float64
```
#### Running models in float64 in TensorFlow 2
