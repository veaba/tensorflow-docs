Computes false positives at provided threshold values.

```
 tf.compat.v1.metrics.false_positives_at_thresholds(
    labels,
    predictions,
    thresholds,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
 
```

If  `weights`  is  `None` , weights default to 1. Use weights of 0 to mask values.

#### Args:
- **`labels`** : A  `Tensor`  whose shape matches  `predictions` . Will be cast to `bool` .
- **`predictions`** : A floating point  `Tensor`  of arbitrary shape and whose valuesare in the range  `[0, 1]` .
- **`thresholds`** : A python list or tuple of float thresholds in  `[0, 1]` .
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `labels`  dimension).
- **`metrics_collections`** : An optional list of collections that  `false_positives` should be added to.
- **`updates_collections`** : An optional list of collections that  `update_op`  shouldbe added to.
- **`name`** : An optional variable_scope name.


#### Returns:
- **`false_positives`** :  A float  `Tensor`  of shape  `[len(thresholds)]` .
- **`update_op`** : An operation that updates the  `false_positives`  variable andreturns its current value.


#### Raises:
- **`ValueError`** : If  `predictions`  and  `labels`  have mismatched shapes, or if `weights`  is not  `None`  and its shape doesn't match  `predictions` , or ifeither  `metrics_collections`  or  `updates_collections`  are not a list ortuple.
- **`RuntimeError`** : If eager execution is enabled.
