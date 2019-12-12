Writes a summary using raw [ `tf.compat.v1.Summary` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary) protocol buffers.

```
 tf.summary.experimental.write_raw_pb(    tensor,    step=None,    name=None) 
```

Experimental: this exists to support the usage of V1-style manual summarywriting (via the construction of a [ `tf.compat.v1.Summary` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary) protocol buffer)with the V2 summary writing API.

#### 参数：
- **`tensor`** : the string Tensor holding one or more serialized  `Summary`  protobufs
- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. Ifomitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which mustnot be None.
- **`name`** : Optional string name for this op.


#### 返回：
True on success, or false if no summary was written because no defaultsummary writer was available.

#### 加薪：
- **`ValueError`** : if a default writer exists, but no step was provided and[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.
