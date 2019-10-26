## Class Hinge
Computes the hinge loss between y_true and y_pred.
### Aliases:
- Class tf.compat.v1.keras.losses.Hinge
- Class tf.compat.v2.keras.losses.Hinge
- Class tf.compat.v2.losses.Hinge
- Class tf.losses.Hinge
loss = maximum(1 - y_true * y_pred, 0)
y_true values are expected to be -1 or 1. If binary (0 or 1) labels are provided we will convert them to -1 or 1.
#### Usage:

```
 h = tf.keras.losses.Hinge()
loss = h([-1., 1., 1.], [0.6, -0.7, -0.5])

# loss = max(0, 1 - y_true * y_pred) = [1.6 + 1.7 + 1.5] / 3

print('Loss: ', loss.numpy())  # Loss: 1.6
```
Usage with the compile API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.Hinge())
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L559-L560)


```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name='hinge'
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L96-L128)


```
 __call__(
    y_true,
    y_pred,
    sample_weight=None
)
```
Invokes the Loss instance.
#### Args:
- y_true: Ground truth values. shape = [batch_size, d0, .. dN]
- y_pred: The predicted values. shape = [batch_size, d0, .. dN]
- sample_weight: Optional sample_weight acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If sample_weight is a tensor of size [batch_size], then the total loss for each sample of the batch is rescaled by the corresponding element in the sample_weight vector. If the shape of sample_weight is [batch_size, d0, .. dN-1] (or can be broadcasted to this shape), then each loss element of y_pred is scaled by the corresponding value of sample_weight. (Note ondN-1: all loss functions reduce by 1 dimension, usually axis=-1.)
#### Returns:
Weighted loss float Tensor. If reduction is NONE, this has shape [batch_size, d0, .. dN-1]; otherwise, it is scalar. (Note dN-1 because all loss functions reduce by 1 dimension, usually axis=-1.)
#### Raises:
- ValueError: If the shape of sample_weight is invalid.
### from_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140)


```
 from_config(
    cls,
    config
)
```
Instantiates a Loss from its config (output of get_config()).
#### Args:
- config: Output of get_config().
#### Returns:
A Loss instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L223-L228)


```
 get_config()
```
Computes the hinge loss between y_true and y_pred.
### Aliases:
- tf.compat.v1.keras.losses.hinge
- tf.compat.v1.keras.metrics.hinge
- tf.compat.v2.keras.losses.hinge
- tf.compat.v2.keras.metrics.hinge
- tf.compat.v2.losses.hinge
- tf.compat.v2.metrics.hinge
- tf.keras.metrics.hinge
- tf.losses.hinge
- tf.metrics.hinge

```
 tf.keras.losses.hinge(
    y_true,
    y_pred
)
```
#### Args:
- y_true: The ground truth values. y_true values are expected to be -1 or 1. If binary (0 or 1) labels are provided they will be converted to -1 or 1.
- y_pred: The predicted values.
#### Returns:
Tensor with one scalar loss entry per sample.
