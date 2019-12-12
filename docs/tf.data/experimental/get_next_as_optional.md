Returns an  `Optional`  that contains the next value from the iterator.

**别名** : [ `tf.compat.v1.data.experimental.get_next_as_optional` ](/api_docs/python/tf/data/experimental/get_next_as_optional), [ `tf.compat.v2.data.experimental.get_next_as_optional` ](/api_docs/python/tf/data/experimental/get_next_as_optional)

```
 tf.data.experimental.get_next_as_optional(iterator)
 
```

If  `iterator`  has reached the end of the sequence, the returned  `Optional` will have no value.

#### 参数：
- **`iterator`** : A [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) object.


#### 返回：
An  `Optional`  object representing the next value from the iterator (if ithas one) or no value.

