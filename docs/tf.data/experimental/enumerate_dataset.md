A transformation that enumerates the elements of a dataset. (deprecated)

**别名** : [ `tf.compat.v1.data.experimental.enumerate_dataset` ](/api_docs/python/tf/data/experimental/enumerate_dataset), [ `tf.compat.v2.data.experimental.enumerate_dataset` ](/api_docs/python/tf/data/experimental/enumerate_dataset)

```
 tf.data.experimental.enumerate_dataset(start=0)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use `tf.data.Dataset.enumerate()
It is similar to python's  `enumerate` .For example:

```
 # 注意：The following examples use `{ ... }` to represent the
# contents of a dataset.
a = { 1, 2, 3 }
b = { (7, 8), (9, 10) }

# The nested structure of the `datasets` argument determines the
# structure of elements in the resulting dataset.
a.apply(tf.data.experimental.enumerate_dataset(start=5))
=> { (5, 1), (6, 2), (7, 3) }
b.apply(tf.data.experimental.enumerate_dataset())
=> { (0, (7, 8)), (1, (9, 10)) }
 
```

#### 参数：
- **`start`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the start value forenumeration.


#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

