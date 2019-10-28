## Class Sum
Computes the (weighted) sum of the given values.
### Aliases:
- Class `tf.compat.v1.keras.metrics.Sum`
- Class `tf.compat.v2.keras.metrics.Sum`
- Class `tf.compat.v2.metrics.Sum`
- Class `tf.metrics.Sum`
For example, if values is [1, 3, 5, 7] then the sum is 16. If the weights were specified as [1, 1, 0, 0] then the sum would be 4.
This metric creates one variable, `total`, that is used to compute the `sum` of `values`. This is ultimately returned as `sum`.
If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0 to mask values.
#### Usage:

```
 m = tf.keras.metrics.Sum()
m.update_state([1, 3, 5, 7])
print('Final result: ', m.result().numpy())  # Final result: 16.0
```
Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.add_metric(tf.keras.metrics.Sum(name='sum_1')(outputs))
model.compile('sgd', loss='mse')
```
## __init__
View source

```
 __init__(
    name='sum',
    dtype=None
)
```
Creates a `Sum` instance.
#### Args:
- `name`: (Optional) string `name` of the metric instance.
- `dtype`: (Optional) data type of the metric result.
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
    values,
    sample_weight=None
)
```
Accumulates statistics for computing the reduction metric.
