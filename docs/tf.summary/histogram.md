[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/summary/histogram) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorboard/tree/master/tensorboard/plugins/histogram/summary_v2.py)  
  
  
Write a histogram summary.

### Aliases:

  * [`tf.compat.v2.summary.histogram`](/api_docs/python/tf/summary/histogram)

    
    
    tf.summary.histogram(
        name,
        data,
        step=None,
        buckets=None,
        description=None
    )
    

#### Arguments:

  * **`name`** : A name for this summary. The summary tag used for TensorBoard will be this name prefixed by any active name scopes.
  * **`data`** : A `Tensor` of any shape. Must be castable to `float64`.
  * **`step`** : Explicit `int64`-castable monotonic step value for this summary. If omitted, this defaults to [`tf.summary.experimental.get_step()`](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which must not be None.
  * **`buckets`** : Optional positive `int`. The output will have this many buckets, except in two edge cases. If there is no data, then there are no buckets. If there is data but all points have the same value, then there is one bucket whose left and right endpoints are the same.
  * **`description`** : Optional long-form description for this summary, as a constant `str`. Markdown is supported. Defaults to empty.

#### Returns:

True on success, or false if no summary was emitted because no default summary
writer was available.

#### Raises:

  * **`ValueError`** : if a default writer exists, but no step was provided and [`tf.summary.experimental.get_step()`](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.

