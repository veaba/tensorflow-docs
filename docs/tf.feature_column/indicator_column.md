Represents multi-hot representation of given categorical column.

**别名** : [ `tf.compat.v1.feature_column.indicator_column` ](/api_docs/python/tf/feature_column/indicator_column), [ `tf.compat.v2.feature_column.indicator_column` ](/api_docs/python/tf/feature_column/indicator_column)

```
 tf.feature_column.indicator_column(categorical_column) 
```

### 在教程中使用：
- [Classify structured data with feature columns](https://tensorflow.google.cn/tutorials/structured_data/feature_columns)
- [Boosted trees using Estimators](https://tensorflow.google.cn/tutorials/estimator/boosted_trees)
- [Build a linear model with Estimators](https://tensorflow.google.cn/tutorials/estimator/linear)
- [Load CSV data](https://tensorflow.google.cn/tutorials/load_data/csv)


- For DNN model,  `indicator_column`  can be used to wrap any `categorical_column_*`  (e.g., to feed to DNN). Consider to Use `embedding_column`  if the number of buckets/unique(values) are large.


- For Wide (aka linear) model,  `indicator_column`  is the internalrepresentation for categorical column when passing categorical columndirectly (as any element in feature_columns) to  `linear_model` . See `linear_model`  for details.


```
 name = indicator_column(categorical_column_with_vocabulary_list(
    'name', ['bob', 'george', 'wanda'])
columns = [name, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = input_layer(features, columns)

dense_tensor == [[1, 0, 0]]  # If "name" bytes_list is ["bob"]
dense_tensor == [[1, 0, 1]]  # If "name" bytes_list is ["bob", "wanda"]
dense_tensor == [[2, 0, 0]]  # If "name" bytes_list is ["bob", "bob"]
 
```

#### 参数：
- **`categorical_column`** : A  `CategoricalColumn`  which is created by `categorical_column_with_*`  or  `crossed_column`  functions.


#### 返回：
An  `IndicatorColumn` .

