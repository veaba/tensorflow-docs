Splits elements of a dataset into multiple elements on the batch dimension. (deprecated)

**别名** : [ `tf.compat.v1.data.experimental.unbatch` ](/api_docs/python/tf/data/experimental/unbatch), [ `tf.compat.v2.data.experimental.unbatch` ](/api_docs/python/tf/data/experimental/unbatch)

```
 tf.data.experimental.unbatch()
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.data.Dataset.unbatch()` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#unbatch).
For example, if elements of the dataset are shaped  `[B, a0, a1, ...]` ,where  `B`  may vary for each input element, then for each element in thedataset, the unbatched dataset will contain  `B`  consecutive elementsof shape  `[a0, a1, ...]` .

```
 # 注意：The following example uses `{ ... }` to represent the contents
# of a dataset.
a = { ['a', 'b', 'c'], ['a', 'b'], ['a', 'b', 'c', 'd'] }

a.apply(tf.data.experimental.unbatch()) == {
    'a', 'b', 'c', 'a', 'b', 'a', 'b', 'c', 'd'}
 
```

#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

