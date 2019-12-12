返回一列，用于执行分类功能的交叉。

**别名** : [ `tf.compat.v1.feature_column.crossed_column` ](/api_docs/python/tf/feature_column/crossed_column), [ `tf.compat.v2.feature_column.crossed_column` ](/api_docs/python/tf/feature_column/crossed_column)

```
 tf.feature_column.crossed_column(
    keys,
    hash_bucket_size,
    hash_key=None
)
 
```

### 在教程中使用：
- [Classify structured data with feature columns](https://tensorflow.google.cn/tutorials/structured_data/feature_columns)
- [Build a linear model with Estimators](https://tensorflow.google.cn/tutorials/estimator/linear)
Crossed features will be hashed according to  `hash_bucket_size` . Conceptually,the transformation can be thought of as:  Hash(cartesian product of features) %  `hash_bucket_size` 

For example, if the input features are:

- SparseTensor referred by first key:


```
 shape = [2, 2]
{
    [0, 0]: "a"
    [1, 0]: "b"
    [1, 1]: "c"
}
 
```

- SparseTensor referred by second key:


```
 shape = [2, 1]
{
    [0, 0]: "d"
    [1, 0]: "e"
}
 
```

然后交叉特征看起来像：

```
  shape = [2, 2]
{
    [0, 0]: Hash64("d", Hash64("a")) % hash_bucket_size
    [1, 0]: Hash64("e", Hash64("b")) % hash_bucket_size
    [1, 1]: Hash64("e", Hash64("c")) % hash_bucket_size
}
 
```

下面是创建具有字符串交叉特征的线性模型的示例：

```
 keywords_x_doc_terms = crossed_column(['keywords', 'doc_terms'], 50K)
columns = [keywords_x_doc_terms, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
 
```

也可以在交叉之前使用词汇表查找：

```
 keywords = categorical_column_with_vocabulary_file(
    'keywords', '/path/to/vocabulary/file', vocabulary_size=1K)
keywords_x_doc_terms = crossed_column([keywords, 'doc_terms'], 50K)
columns = [keywords_x_doc_terms, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
 
```

If an input feature is of numeric type, you can use `categorical_column_with_identity` , or  `bucketized_column` , as in the example:

```
 # vertical_id is an integer categorical feature.
vertical_id = categorical_column_with_identity('vertical_id', 10K)
price = numeric_column('price')
# bucketized_column converts numerical feature to a categorical one.
bucketized_price = bucketized_column(price, boundaries=[...])
vertical_id_x_price = crossed_column([vertical_id, bucketized_price], 50K)
columns = [vertical_id_x_price, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
 
```

To use crossed column in DNN model, you need to add it in an embedding columnas in this example:

```
 vertical_id_x_price = crossed_column([vertical_id, bucketized_price], 50K)
vertical_id_x_price_embedded = embedding_column(vertical_id_x_price, 10)
dense_tensor = input_layer(features, [vertical_id_x_price_embedded, ...])
 
```

#### 参数：
- **`keys`** : An iterable identifying the features to be crossed. Each element canbe either:
- **`hash_bucket_size`** : An int > 1. The number of buckets.
- **`hash_key`** : Specify the hash_key that will be used by the  `FingerprintCat64` function to combine the crosses fingerprints on SparseCrossOp (optional).
    - string: Will use the corresponding feature which must be of string type.
    -  `CategoricalColumn` : Will use the transformed tensor produced by thiscolumn. Does not support hashed categorical column.


#### 返回：
A  `CrossedColumn` .

#### 加薪：
- **`ValueError`** : If  `len(keys) < 2` .
- **`ValueError`** : If any of the keys is neither a string nor  `CategoricalColumn` .
- **`ValueError`** : If any of the keys is  `HashedCategoricalColumn` .
- **`ValueError`** : If  `hash_bucket_size < 1` .
