[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/metrics_impl.py#L1411-L1463)  
---  
  
Computes the percentage of values less than the given threshold.

    
    
    tf.compat.v1.metrics.percentage_below(
        values,
        threshold,
        weights=None,
        metrics_collections=None,
        updates_collections=None,
        name=None
    )
    

The `percentage_below` function creates two local variables, `total` and
`count` that are used to compute the percentage of `values` that fall below
`threshold`. This rate is weighted by `weights`, and it is ultimately returned
as `percentage` which is an idempotent operation that simply divides `total`
by `count`.

For estimation of the metric over a stream of data, the function creates an
`update_op` operation that updates these variables and returns the
`percentage`.

If `weights` is `None`, weights default to 1. Use weights of 0 to mask values.

#### Args:

  * **`values`** : A numeric `Tensor` of arbitrary size.
  * **`threshold`** : A scalar threshold.
  * **`weights`** : Optional `Tensor` whose rank is either 0, or the same rank as `values`, and must be broadcastable to `values` (i.e., all dimensions must be either `1`, or the same as the corresponding `values` dimension).
  * **`metrics_collections`** : An optional list of collections that the metric value variable should be added to.
  * **`updates_collections`** : An optional list of collections that the metric update ops should be added to.
  * **`name`** : An optional variable_scope name.

#### Returns:

  * **`percentage`** : A `Tensor` representing the current mean, the value of `total` divided by `count`.
  * **`update_op`** : An operation that increments the `total` and `count` variables appropriately.

#### Raises:

  * **`ValueError`** : If `weights` is not `None` and its shape doesn't match `values`, or if either `metrics_collections` or `updates_collections` are not a list or tuple.
  * **`RuntimeError`** : If eager execution is enabled.

