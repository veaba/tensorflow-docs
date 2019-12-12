对元素进行分组并执行缩减的转换。

**别名** : [ `tf.compat.v1.data.experimental.group_by_reducer` ](/api_docs/python/tf/data/experimental/group_by_reducer), [ `tf.compat.v2.data.experimental.group_by_reducer` ](/api_docs/python/tf/data/experimental/group_by_reducer)

```
 tf.data.experimental.group_by_reducer(
    key_func,
    reducer
)
 
```

This transformation maps element of a dataset to a key using  `key_func`  andgroups the elements by key. The  `reducer`  is used to process each group; its `init_func`  is used to initialize state for each group when it is created, the `reduce_func`  is used to update the state every time an element is mapped tothe matching group, and the  `finalize_func`  is used to map the final state toan output value.

#### 参数：
- **`key_func`** : A function mapping a nested structure of tensors(having shapes and types defined by  `self.output_shapes`  and `self.output_types` ) to a scalar [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) tensor.
- **`reducer`** : An instance of  `Reducer` , which captures the reduction logic usingthe  `init_func` ,  `reduce_func` , and  `finalize_func`  functions.


#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

