
Computes various recall values for different thresholds on predictions.

```
 tf.compat.v1.metrics.recall_at_thresholds(
    labels,
    predictions,
    thresholds,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
```

The recall_at_thresholds function creates four local variables, true_positives, true_negatives, false_positives and false_negatives for various values of thresholds. recall[i] is defined as the total weight of values in predictions above thresholds[i] whose corresponding entry in labels is True, divided by the total weight of True values in labels (true_positives[i] / (true_positives[i] + false_negatives[i])).

For estimation of the metric over a stream of data, the function creates an update_op operation that updates these variables and returns the recall.

If weights is None, weights default to 1. Use weights of 0 to mask values.
#### Args:
- `labels`: The ground truth values, a `Tensor` whose dimensions must match `predictions`. Will be cast to `bool`.
- `predictions`:` `A` `floating` `point` ``Tensor`` `of` `arbitrary` `shape` `and` `whose` `values` `are` `in` `the` `range` `[`0``,`` ``1`].
- `thresholds`:` `A` `python` `list` `or` `tuple` `of` `float` ``thresholds`` `in` `[`0``,`` ``1`].
- `weights`:` `Optional` ``Tensor`` `whose` `rank` `is` `either` ``0``,`` `or` `the` `same` `rank` `as` ``labels``,`` `and` `must` `be` `broadcastable` `to` ``labels`` `(i.e.`,`` `all` `dimensions` `must` `be` `either` ``1``,`` `or` `the` `same` `as` `the` `corresponding` ``labels`` `dimension).
- `metrics_collections`:` `An` `optional` `list` `of` `collections` `that` ``recall`` `should` `be` `added` `to.
- `updates_collections`:` `An` `optional` `list` `of` `collections` `that` ``update_op`` `should` `be` `added` `to.
- `name`:` `An` `optional` `variable_scope` ``name`.
#### Returns:
- `recall`: A f`l``o`a`t` `Tensor` `o`f `s``h`ap`e` [`l``e``n``(``t``h``r``e``s``h``o``l``d``s``)`].
- `update_op`: A`n` `o`p`e``r`a`t`i`o``n` `t``h`a`t` i`n`c`r``e`m`e``n``t``s` `t``h``e` `t``r`u`e`_p`o``s`i`t`iv`e``s`, `t``r`u`e`_`n``e`ga`t`iv`e``s`, `false_positives` a`n``d` `false_negatives` va`r`iab`l``e``s` `t``h`a`t` a`r``e` u`s``e``d` i`n` `t``h``e` c`o`mpu`t`a`t`i`o``n` `o`f `recall`.
#### Raises:
- `ValueError`: If `predictions` and `labels` have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
- `RuntimeError`: If eager execution is enabled.
