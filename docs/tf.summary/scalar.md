Write a scalar summary.



### Aliases:

- [ `tf.compat.v2.summary.scalar` ](/api_docs/python/tf/summary/scalar)



```
 tf.summary.scalar(
    name,
    data,
    step=None,
    description=None
)
 
```



### Used in the guide:

- [Eager execution](https://tensorflow.google.cn/guide/eager)



### Used in the tutorials:

- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)



#### Arguments:

- **`name`** : A name for this summary. The summary tag used for TensorBoard will
be this name prefixed by any active name scopes.

- **`data`** : A real numeric scalar value, convertible to a  `float32`  Tensor.

- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. If
omitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which must
not be None.

- **`description`** : Optional long-form description for this summary, as a
constant  `str` . Markdown is supported. Defaults to empty.



#### Returns:
True on success, or false if no summary was written because no default
summary writer was available.



#### Raises:

- **`ValueError`** : if a default writer exists, but no step was provided and
[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.

