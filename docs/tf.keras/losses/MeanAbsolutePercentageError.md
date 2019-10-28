## Class MeanAbsolutePercentageError
Computes the mean absolute percentage error between `y_true` and `y_pred`.
### Aliases:
- Class `tf.compat.v1.keras.losses.MeanAbsolutePercentageError`
- Class `tf.compat.v2.keras.losses.MeanAbsolutePercentageError`
- Class `tf.compat.v2.losses.MeanAbsolutePercentageError`
- Class `tf.losses.MeanAbsolutePercentageError`
loss = 100 * abs(y_true - y_pred) / y_true
#### Usage:

```
 mape = tf.keras.losses.MeanAbsolutePercentageError()
loss = mape([0., 0., 1., 1.], [1., 1., 1., 0.])
print('Loss: ', loss.numpy())  # Loss: 5e+08
```
Usage with the `compile` API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.MeanAbsolutePercentageError())
```
## __init__
View source

```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name='mean_absolute_percentage_error'
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
View source

```
 __call__(
    y_true,
    y_pred,
    sample_weight=None
)
```
Invokes the `Loss` instance.
#### Args:
- `y_true`: Ground truth values. shape = `[batch_size, d0, .. dN]`
- `y_pred`: The predicted values. shape = `[batch_size, d0, .. dN]`
- `sample_weight`: Optional `sample_weight` acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If `sample_weight` is a tensor of size `[batch_size]`, then the total loss for each sample of the batch is rescaled by the corresponding element in the `sample_weight` vector. If the shape of `sample_weight` is `[batch_size, d0, .. dN-1]` (or can be broadcasted to this shape), then each loss element of `y_pred` is scaled by the corresponding value of `sample_weight`. (Note on`dN-1`: all loss functions reduce by 1 dimension, usually axis=-1.)
#### Returns:
Weighted loss float `Tensor`. If `reduction` is `NONE`, this has shape `[batch_size, d0, .. dN-1]`; otherwise, it is scalar. (Note `dN-1` because all loss functions reduce by 1 dimension, usually axis=-1.)
#### Raises:
- `ValueError`: If the shape of `sample_weight` is invalid.
### from_config
View source

```
 from_config(
    cls,
    config
)
```
