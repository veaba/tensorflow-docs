Write a histogram summary.

```
 tf.summary.histogram(    name,    data,    step=None,    buckets=None,    description=None) 
```

#### Arguments:
- **`name`** : A name for this summary. The summary tag used for TensorBoard willbe this name prefixed by any active name scopes.
- **`data`** : A  `Tensor`  of any shape. Must be castable to  `float64` .
- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. Ifomitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which mustnot be None.
- **`buckets`** : Optional positive  `int` . The output will have thismany buckets, except in two edge cases. If there is no data, thenthere are no buckets. If there is data but all points have thesame value, then there is one bucket whose left and rightendpoints are the same.
- **`description`** : Optional long-form description for this summary, as aconstant  `str` . Markdown is supported. Defaults to empty.


#### Returns:
True on success, or false if no summary was emitted because no defaultsummary writer was available.

#### Raises:
- **`ValueError`** : if a default writer exists, but no step was provided and[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.
