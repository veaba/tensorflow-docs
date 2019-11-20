[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L652-L701)  
---  
  
Writes a summary using raw
[`tf.compat.v1.Summary`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary)
protocol buffers.

### Aliases:

  * [`tf.compat.v2.summary.experimental.write_raw_pb`](/api_docs/python/tf/summary/experimental/write_raw_pb)

    
    
    tf.summary.experimental.write_raw_pb(
        tensor,
        step=None,
        name=None
    )
    

Experimental: this exists to support the usage of V1-style manual summary
writing (via the construction of a
[`tf.compat.v1.Summary`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary)
protocol buffer) with the V2 summary writing API.

#### Args:

  * **`tensor`** : the string Tensor holding one or more serialized `Summary` protobufs
  * **`step`** : Explicit `int64`-castable monotonic step value for this summary. If omitted, this defaults to [`tf.summary.experimental.get_step()`](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which must not be None.
  * **`name`** : Optional string name for this op.

#### Returns:

True on success, or false if no summary was written because no default summary
writer was available.

#### Raises:

  * **`ValueError`** : if a default writer exists, but no step was provided and [`tf.summary.experimental.get_step()`](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.

