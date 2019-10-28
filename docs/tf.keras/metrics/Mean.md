## Class Mean
Computes the (weighted) mean of the given values.
### Aliases:
- Class `tf.compat.v1.keras.metrics.Mean`
- Class `tf.compat.v2.keras.metrics.Mean`
- Class `tf.compat.v2.metrics.Mean`
- Class `tf.metrics.Mean`
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
### Used in the tutorials:
- ``T``e``n``s``o``r``F``l``o``w`` ``2`` ``q``u``i``c``k``s``t``a``r``t`` ``f``o``r`` ``e``x``p``e``r``t``s``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
For example, if values is [1, 3, 5, 7] then the mean is 4. If the weights were specified as [1, 1, 0, 0] then the mean would be 2.
This metric creates two variables, `total` and `count` that are used to compute the average of `values`. This average is ultimately returned as `mean` which is an idempotent operation that simply divides `total` by `count`.
If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0 to mask values.
#### Usage:

```
 m = tf.keras.metrics.Mean()
m.update_state([1, 3, 5, 7])
print('Final result: ', m.result().numpy())  # Final result: 4.0
```
Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.add_metric(tf.keras.metrics.Mean(name='mean_1')(outputs))
model.compile('sgd', loss='mse')
```
## __init__
View source

```
 __init__(
    name='mean',
    dtype=None
)
```
Creates a `Mean` instance.
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
