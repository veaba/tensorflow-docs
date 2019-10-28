## Class CategoricalHinge
Computes the categorical hinge metric between `y_true` and `y_pred`.
### Aliases:
- Class `tf.compat.v1.keras.metrics.CategoricalHinge`
- Class `tf.compat.v2.keras.metrics.CategoricalHinge`
- Class `tf.compat.v2.metrics.CategoricalHinge`
- Class `tf.metrics.CategoricalHinge`
For example, if `y_true` is [0., 1., 1.], and `y_pred` is [1., 0., 1.] the categorical hinge metric value is 1.0.
#### Usage:

```
 m = tf.keras.metrics.CategoricalHinge()
m.update_state([0., 1., 1.], [1., 0., 1.])
print('Final result: ', m.result().numpy())  # Final result: 1.0
```
Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', metrics=[tf.keras.metrics.CategoricalHinge()])
```
## __init__
View source

```
 __init__(
    name='categorical_hinge',
    dtype=None
)
```
Creates a `MeanMetricWrapper` instance.
#### Args:
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
