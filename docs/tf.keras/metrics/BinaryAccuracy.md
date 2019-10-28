## Class BinaryAccuracy
Calculates how often predictions matches labels.
### Aliases:
- Class `tf.compat.v1.keras.metrics.BinaryAccuracy`
- Class `tf.compat.v2.keras.metrics.BinaryAccuracy`
- Class `tf.compat.v2.metrics.BinaryAccuracy`
- Class `tf.metrics.BinaryAccuracy`
### Used in the tutorials:
- ``C``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``o``n`` ``i``m``b``a``l``a``n``c``e``d`` ``d``a``t``a``
For example, if `y_true` is [1, 1, 0, 0] and `y_pred` is [0.98, 1, 0, 0.6] then the binary accuracy is 3/4 or .75. If the weights were specified as [1, 0, 0, 1] then the binary accuracy would be 1/2 or .5.
This metric creates two local variables, `total` and `count` that are used to compute the frequency with which `y_pred` matches `y_true`. This frequency is ultimately returned as `binary accuracy`: an idempotent operation that simply divides `total` by `count`.
If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0 to mask values.
#### Usage:

```
 m = tf.keras.metrics.BinaryAccuracy()
m.update_state([1, 1, 0, 0], [0.98, 1, 0, 0.6])
print('Final result: ', m.result().numpy())  # Final result: 0.75
```
Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.BinaryAccuracy()])
```
## __init__
View source

```
 __init__(
    name='binary_accuracy',
    dtype=None,
    threshold=0.5
)
```
Creates a `BinaryAccuracy` instance.
#### Args:
- `name`: (Optional) string `name` of the metric instance.
- `dtype`: (Optional) data type of the metric result.
- `threshold`: (Optional) Float representing the `threshold` for deciding whether prediction values are 1 or 0.
## __new__
View source

```
 __new__(
    cls,
    *args,
    **kwargs
)
```
Create and return a new object. See help(type) for accurate signature.
## Methods
### reset_states
View source

```
 reset_states()
```
Resets all of the metric state variables.
This function is called between epochs/steps, when a metric is evaluated during training.
### result
View source

```
 result()
```
Computes and returns the metric value tensor.
Result computation is an idempotent operation that simply calculates the metric value using the state variables.
### update_state
View source

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
```
Accumulates metric statistics.
`y_true` and `y_pred` should have the same shape.
#### Args:
- `y_true`: The ground truth values.
- `y_pred`: The predicted values.
- `sample_weight`: Optional weighting of each example. Defaults to 1. Can be a `Tensor` whose rank is either 0, or the same rank as `y_true`, and must be broadcastable to `y_true`.
#### Returns:
Update op.
