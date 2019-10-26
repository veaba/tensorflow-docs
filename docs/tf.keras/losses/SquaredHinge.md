## Class SquaredHinge
Computes the squared hinge loss between y_true and y_pred.
### Aliases:
- Class tf.compat.v1.keras.losses.SquaredHinge
- Class tf.compat.v2.keras.losses.SquaredHinge
- Class tf.compat.v2.losses.SquaredHinge
- Class tf.losses.SquaredHinge
loss = square(maximum(1 - y_true * y_pred, 0))
y_true values are expected to be -1 or 1. If binary (0 or 1) labels are provided we will convert them to -1 or 1.
#### Usage:

```
 sh = tf.keras.losses.SquaredHinge()
loss = sh([-1., 1., 1.], [0.6, -0.7, -0.5])

# loss = (max(0, 1 - y_true * y_pred))^2 = [1.6^2 + 1.7^2 + 1.5^2] / 3

print('Loss: ', loss.numpy())  # Loss: 2.566666
```
Usage with the compile API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.SquaredHinge())
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L591-L595)


```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name='squared_hinge'
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
