写一篇课文摘要。

```
 tf.summary.text(
    name,
    data,
    step=None,
    description=None
)
 
```

#### 参数：
- **`name`** : A name for this summary. The summary tag used for TensorBoard willbe this name prefixed by any active name scopes.
- **`data`** : A UTF-8 string tensor value.
- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. Ifomitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which mustnot be None.
- **`description`** : Optional long-form description for this summary, as aconstant  `str` . Markdown is supported. Defaults to empty.


#### 返回：
True on success, or false if no summary was emitted because no defaultsummary writer was available.

#### 加薪：
- **`ValueError`** : if a default writer exists, but no step was provided and[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.
