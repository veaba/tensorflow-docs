Returns the type specification of an element of a  `Dataset`  or  `Iterator` .

**别名** : [ `tf.compat.v1.data.experimental.get_structure` ](/api_docs/python/tf/data/experimental/get_structure), [ `tf.compat.v2.data.experimental.get_structure` ](/api_docs/python/tf/data/experimental/get_structure)

```
 tf.data.experimental.get_structure(dataset_or_iterator)
 
```

#### 参数：
- **`dataset_or_iterator`** : A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) or  `tf.data.Iterator` .


#### 返回：
A nested structure of [ `tf.TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec) objects matching the structure of anelement of  `dataset_or_iterator`  and spacifying the type of individalcomponents.

#### 加薪：
- **`TypeError`** : If  `dataset_or_iterator`  is not a  `Dataset`  or  `Iterator`  object.
