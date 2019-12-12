在输入数据集中扫描函数的转换。

**别名** : [ `tf.compat.v1.data.experimental.scan` ](/api_docs/python/tf/data/experimental/scan), [ `tf.compat.v2.data.experimental.scan` ](/api_docs/python/tf/data/experimental/scan)

```
 tf.data.experimental.scan(
    initial_state,
    scan_func
)
 
```

This transformation is a stateful relative of [ `tf.data.Dataset.map` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#map).In addition to mapping  `scan_func`  across the elements of the input dataset, `scan()`  accumulates one or more state tensors, whose initial values are `initial_state` .

#### 参数：
- **`initial_state`** : A nested structure of tensors, representing the initial stateof the accumulator.
- **`scan_func`** : A function that maps  `(old_state, input_element)`  to `(new_state, output_element). It must take two arguments and return apair of nested structures of tensors. The` new_state `must match thestructure of` initial_state`.


#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

