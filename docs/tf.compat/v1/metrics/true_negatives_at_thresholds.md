
Computes true negatives at provided threshold values.

```
 tf.compat.v1.metrics.true_negatives_at_thresholds(
    labels,
    predictions,
    thresholds,
    weights=None,
    metrics_collections=None,
    updates_collections=None,
    name=None
)
```

If weights is None, weights default to 1. Use weights of 0 to mask values.
#### Args:
- `labels`: A `Tensor` whose shape matches `predictions`. Will be cast to `bool`.
- `predictions`:` `A` `floating` `point` ``Tensor`` `of` `arbitrary` `shape` `and` `whose` `values` `are` `in` `the` `range` `[`0``,`` ``1`].
- `thresholds`:` `A` `python` `list` `or` `tuple` `of` `float` ``thresholds`` `in` `[`0``,`` ``1`].
- `weights`:` `Optional` ``Tensor`` `whose` `rank` `is` `either` ``0``,`` `or` `the` `same` `rank` `as` ``labels``,`` `and` `must` `be` `broadcastable` `to` ``labels`` `(i.e.`,`` `all` `dimensions` `must` `be` `either` ``1``,`` `or` `the` `same` `as` `the` `corresponding` ``labels`` `dimension).
- `metrics_collections`:` `An` `optional` `list` `of` `collections` `that` ``true_negatives`` `should` `be` `added` `to.
- `updates_collections`:` `An` `optional` `list` `of` `collections` `that` ``update_op`` `should` `be` `added` `to.
- `name`:` `An` `optional` `variable_scope` ``name`.
#### Returns:
- `true_negatives`: A f`l``o`a`t` `Tensor` `o`f `s``h`ap`e` [`l``e``n``(``t``h``r``e``s``h``o``l``d``s``)`].
- `update_op`: A`n` `o`p`e``r`a`t`i`o``n` `t``h`a`t` up`d`a`t``e``s` `t``h``e` `true_negatives` va`r`iab`l``e` a`n``d` `r``e``t`u`r``n``s` i`t``s` cu`r``r``e``n``t` va`l`u`e`.
#### Raises:
- `ValueError`: If `predictions` and `labels` have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
- `RuntimeError`: If eager execution is enabled.
