从给定的变量和结构构造数据集。

**别名** : [ `tf.compat.v1.data.experimental.from_variant` ](/api_docs/python/tf/data/experimental/from_variant), [ `tf.compat.v2.data.experimental.from_variant` ](/api_docs/python/tf/data/experimental/from_variant)

```
 tf.data.experimental.from_variant(
    variant,
    structure
)
 
```

#### 参数：
- **`variant`** : A scalar [ `tf.variant` ](https://tensorflow.google.cn/api_docs/python/tf#variant) tensor representing a dataset.
- **`structure`** : A  `tf.data.experimental.Structure`  object representing thestructure of each element in the dataset.


#### 返回：
A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) instance.

