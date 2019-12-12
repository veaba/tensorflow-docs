表示通过哈希设置ID的稀疏特性。

**别名** : [ `tf.compat.v1.feature_column.categorical_column_with_hash_bucket` ](/api_docs/python/tf/feature_column/categorical_column_with_hash_bucket), [ `tf.compat.v2.feature_column.categorical_column_with_hash_bucket` ](/api_docs/python/tf/feature_column/categorical_column_with_hash_bucket)

```
 tf.feature_column.categorical_column_with_hash_bucket(
    key,
    hash_bucket_size,
    dtype=tf.dtypes.string
)
 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)


### 在教程中使用：
- [Classify structured data with feature columns](https://tensorflow.google.cn/tutorials/structured_data/feature_columns)
Use this when your sparse features are in string or integer format, and youwant to distribute your inputs into a finite number of buckets by hashing.output_id = Hash(input_feature_string) % bucket_size for string type input.For int type input, the value is converted to its string representation firstand then hashed by the same formula.

For input dictionary  `features` ,  `features[key]`  is either  `Tensor`  or `SparseTensor` . If  `Tensor` , missing values can be represented by  `-1`  for intand  `''`  for string, which will be dropped by this feature column.

#### 示例：


```
 keywords = categorical_column_with_hash_bucket("keywords", 10K)
columns = [keywords, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)

# or
keywords_embedded = embedding_column(keywords, 16)
columns = [keywords_embedded, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = input_layer(features, columns)
 
```

#### 参数：
- **`key`** : A unique string identifying the input feature. It is used as thecolumn name and the dictionary key for feature parsing configs, feature `Tensor`  objects, and feature columns.
- **`hash_bucket_size`** : An int > 1. The number of buckets.
- **`dtype`** : The type of features. Only string and integer types are supported.


#### 返回：
A  `HashedCategoricalColumn` .

#### 加薪：
- **`ValueError`** :  `hash_bucket_size`  is not greater than 1.
- **`ValueError`** :  `dtype`  is neither string nor integer.
