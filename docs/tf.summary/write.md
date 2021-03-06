将常规摘要写入默认的SummaryWriter（如果存在）。

```
 tf.summary.write(
    tag,
    tensor,
    step=None,
    metadata=None,
    name=None
)
 
```

This exists primarily to support the definition of type-specific summary opslike scalar() and image(), and is not intended for direct use unless defininga new type-specific summary op.

#### 参数：
- **`tag`** : string tag used to identify the summary (e.g. in TensorBoard), usuallygenerated with  `tf.summary.summary_scope` 
- **`tensor`** : the Tensor holding the summary data to write
- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. Ifomitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which mustnot be None.
- **`metadata`** : Optional SummaryMetadata, as a proto or serialized bytes
- **`name`** : Optional string name for this op.


#### 返回：
True on success, or false if no summary was written because no defaultsummary writer was available.

#### 加薪：
- **`ValueError`** : if a default writer exists, but no step was provided and[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.
