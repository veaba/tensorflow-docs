[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/metrics_impl.py#L2651-L2726)  
---  
  
Computes various recall values for different `thresholds` on `predictions`.

    
    
    tf.compat.v1.metrics.recall_at_thresholds(
        labels,
        predictions,
        thresholds,
        weights=None,
        metrics_collections=None,
        updates_collections=None,
        name=None
    )
    

The `recall_at_thresholds` function creates four local variables,
`true_positives`, `true_negatives`, `false_positives` and `false_negatives`
for various values of thresholds. `recall[i]` is defined as the total weight
of values in `predictions` above `thresholds[i]` whose corresponding entry in
`labels` is `True`, divided by the total weight of `True` values in `labels`
(`true_positives[i] / (true_positives[i] + false_negatives[i])`).

For estimation of the metric over a stream of data, the function creates an
`update_op` operation that updates these variables and returns the `recall`.

If `weights` is `None`, weights default to 1. Use weights of 0 to mask values.

#### Args:

  * **`labels`** : The ground truth values, a `Tensor` whose dimensions must match `predictions`. Will be cast to `bool`.
  * **`predictions`** : A floating point `Tensor` of arbitrary shape and whose values are in the range `[0, 1]`.
  * **`thresholds`** : A python list or tuple of float thresholds in `[0, 1]`.
  * **`weights`** : Optional `Tensor` whose rank is either 0, or the same rank as `labels`, and must be broadcastable to `labels` (i.e., all dimensions must be either `1`, or the same as the corresponding `labels` dimension).
  * **`metrics_collections`** : An optional list of collections that `recall` should be added to.
  * **`updates_collections`** : An optional list of collections that `update_op` should be added to.
  * **`name`** : An optional variable_scope name.

#### Returns:

  * **`recall`** : A float `Tensor` of shape `[len(thresholds)]`.
  * **`update_op`** : An operation that increments the `true_positives`, `true_negatives`, `false_positives` and `false_negatives` variables that are used in the computation of `recall`.

#### Raises:

  * **`ValueError`** : If `predictions` and `labels` have mismatched shapes, or if `weights` is not `None` and its shape doesn't match `predictions`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
  * **`RuntimeError`** : If eager execution is enabled.

