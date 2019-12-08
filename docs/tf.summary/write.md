Writes a generic summary to the default SummaryWriter if one exists.



### Aliases:

- [ `tf.compat.v2.summary.write` ](/api_docs/python/tf/summary/write)



```
 tf.summary.write(
    tag,
    tensor,
    step=None,
    metadata=None,
    name=None
)
 
```

This exists primarily to support the definition of type-specific summary ops
like scalar() and image(), and is not intended for direct use unless defining
a new type-specific summary op.



#### Args:

- **`tag`** : string tag used to identify the summary (e.g. in TensorBoard), usually
generated with  `tf.summary.summary_scope` 

- **`tensor`** : the Tensor holding the summary data to write

- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. If
omitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which must
not be None.

- **`metadata`** : Optional SummaryMetadata, as a proto or serialized bytes

- **`name`** : Optional string name for this op.



#### Returns:
True on success, or false if no summary was written because no default
summary writer was available.



#### Raises:

- **`ValueError`** : if a default writer exists, but no step was provided and
[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.

