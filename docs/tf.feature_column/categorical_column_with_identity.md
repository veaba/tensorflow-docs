A  `CategoricalColumn`  that returns identity values.

**别名** : [ `tf.compat.v1.feature_column.categorical_column_with_identity` ](/api_docs/python/tf/feature_column/categorical_column_with_identity), [ `tf.compat.v2.feature_column.categorical_column_with_identity` ](/api_docs/python/tf/feature_column/categorical_column_with_identity)

```
 tf.feature_column.categorical_column_with_identity(
    key,
    num_buckets,
    default_value=None
)
 
```

Use this when your inputs are integers in the range  `[0, num_buckets)` , andyou want to use the input value itself as the categorical ID. Values outsidethis range will result in  `default_value`  if specified, otherwise it willfail.

Typically, this is used for contiguous ranges of integer indexes, butit doesn't have to be. This might be inefficient, however, if many of IDsare unused. Consider  `categorical_column_with_hash_bucket`  in that case.

For input dictionary  `features` ,  `features[key]`  is either  `Tensor`  or `SparseTensor` . If  `Tensor` , missing values can be represented by  `-1`  for intand  `''`  for string, which will be dropped by this feature column.

In the following examples, each input in the range  `[0, 1000000)`  is assignedthe same value. All other inputs are assigned  `default_value`  0. Note that aliteral 0 in inputs will result in the same default ID.

#### 线性模型：


```
 video_id = categorical_column_with_identity(
    key='video_id', num_buckets=1000000, default_value=0)
columns = [video_id, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction, _, _ = linear_model(features, columns)
 
```

DNN模型的嵌入：

```
 columns = [embedding_column(video_id, 9),...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = input_layer(features, columns)
 
```

#### 参数：
- **`key`** : A unique string identifying the input feature. It is used as thecolumn name and the dictionary key for feature parsing configs, feature `Tensor`  objects, and feature columns.
- **`num_buckets`** : Range of inputs and outputs is  `[0, num_buckets)` .
- **`default_value`** : If  `None` , this column's graph operations will fail forout-of-range inputs. Otherwise, this value must be in the range `[0, num_buckets)` , and will replace inputs in that range.


#### 返回：
A  `CategoricalColumn`  that returns identity values.

#### 加薪：
- **`ValueError`** : if  `num_buckets`  is less than one.
- **`ValueError`** : if  `default_value`  is not in range  `[0, num_buckets)` .
