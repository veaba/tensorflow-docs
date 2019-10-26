## Class Dense
Just your regular densely-connected NN layer.
[Layer](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.layers.Dense
- Class tf.compat.v2.keras.layers.Dense
### Used in the guide:
- Train and evaluate with Keras
- The Keras functional API in TensorFlow
- Keras overview
- Writing custom layers and models with Keras
- Save and serialize models with Keras
### Used in the tutorials:
- Explore overfit and underfit
- Load a pandas.DataFrame
- Transformer model for language understanding
- Image captioning with visual attention
- Image classification
Dense implements the operation: output = activation(dot(input, kernel) + bias) where activation is the element-wise activation function passed as the activation argument, kernel is a weights matrix created by the layer, and bias is a bias vector created by the layer (only applicable if use_bias is True).
#### Example:

```
 # as first layer in a sequential model:
model = Sequential()
model.add(Dense(32, input_shape=(16,)))
# now the model will take as input arrays of shape (*, 16)
# and output arrays of shape (*, 32)

# after the first layer, you don't need to specify
# the size of the input anymore:
model.add(Dense(32))
```
#### Arguments:
- units: Positive integer, dimensionality of the output space.
- activation: Activation function to use. If you don't specify anything, no activation is applied (ie. "linear" activation: a(x) = x).
- use_bias: Boolean, whether the layer uses a bias vector.
- kernel_initializer: Initializer for the kernel weights matrix.
- bias_initializer: Initializer for the bias vector.
- kernel_regularizer: Regularizer function applied to the kernel weights matrix.
- bias_regularizer: Regularizer function applied to the bias vector.
- activity_regularizer: Regularizer function applied to the output of the layer (its "activation")..
- kernel_constraint: Constraint function applied to the kernel weights matrix.
- bias_constraint: Constraint function applied to the bias vector.
#### Input shape:
N-D tensor with shape: (batch_size, ..., input_dim). The most common situation would be a 2D input with shape (batch_size, input_dim).
#### Output shape:
N-D tensor with shape: (batch_size, ..., units). For instance, for a 2D input with shape (batch_size, input_dim), the output would have shape (batch_size, units).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L978-L1006)


```
 __init__(
    units,
    activation=None,
    use_bias=True,
    kernel_initializer='glorot_uniform',
    bias_initializer='zeros',
    kernel_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    kernel_constraint=None,
    bias_constraint=None,
    **kwargs
)
```
