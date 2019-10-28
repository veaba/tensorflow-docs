## Class SparseCategoricalAccuracy
Calculates how often predictions matches integer labels.
### Aliases:
- Class `tf.compat.v1.keras.metrics.SparseCategoricalAccuracy`
- Class `tf.compat.v2.keras.metrics.SparseCategoricalAccuracy`
- Class `tf.compat.v2.metrics.SparseCategoricalAccuracy`
- Class `tf.metrics.SparseCategoricalAccuracy`
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
### Used in the tutorials:
- ``T``e``n``s``o``r``F``l``o``w`` ``2`` ``q``u``i``c``k``s``t``a``r``t`` ``f``o``r`` ``e``x``p``e``r``t``s``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``L``o``a``d`` ``N``u``m``P``y`` ``d``a``t``a``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
For example, if `y_true` is [[2], [1]] and `y_pred` is [[0.1, 0.9, 0.8], [0.05, 0.95, 0]] then the categorical accuracy is 1/2 or .5. If the weights were specified as [0.7, 0.3] then the categorical accuracy would be .3. You can provide logits of classes as `y_pred`, since argmax of logits and probabilities are same.
This metric creates two local variables, `total` and `count` that are used to compute the frequency with which `y_pred` matches `y_true`. This frequency is ultimately returned as `sparse categorical accuracy`: an idempotent operation that simply divides `total` by `count`.
If `sample_weight` is `None`, weights default to 1. Use `sample_weight` of 0 to mask values.
#### Usage:

```
 m = tf.keras.metrics.SparseCategoricalAccuracy()
m.update_state([[2], [1]], [[0.1, 0.9, 0.8], [0.05, 0.95, 0]])
print('Final result: ', m.result().numpy())  # Final result: 0.5
```
Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
    'sgd',
    loss='mse',
    metrics=[tf.keras.metrics.SparseCategoricalAccuracy()])
```
## __init__
View source

```
 __init__(
    name='sparse_categorical_accuracy',
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
