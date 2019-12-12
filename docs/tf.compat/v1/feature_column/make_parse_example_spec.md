Creates parsing spec dictionary from input feature_columns.

```
 tf.compat.v1.feature_column.make_parse_example_spec(feature_columns)
 
```

The returned dictionary can be used as arg 'features' in[ `tf.io.parse_example` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_example).

#### 典型用法示例：


```
 # Define features and transformations
feature_a = categorical_column_with_vocabulary_file(...)
feature_b = numeric_column(...)
feature_c_bucketized = bucketized_column(numeric_column("feature_c"), ...)
feature_a_x_feature_c = crossed_column(
    columns=["feature_a", feature_c_bucketized], ...)

feature_columns = set(
    [feature_b, feature_c_bucketized, feature_a_x_feature_c])
features = tf.io.parse_example(
    serialized=serialized_examples,
    features=make_parse_example_spec(feature_columns))
 
```

For the above example, make_parse_example_spec would return the dict:

```
 {
    "feature_a": parsing_ops.VarLenFeature(tf.string),
    "feature_b": parsing_ops.FixedLenFeature([1], dtype=tf.float32),
    "feature_c": parsing_ops.FixedLenFeature([1], dtype=tf.float32)
}
 
```

#### 参数：
- **`feature_columns`** : An iterable containing all feature columns. All itemsshould be instances of classes derived from  `_FeatureColumn` .


#### 返回：
A dict mapping each feature key to a  `FixedLenFeature`  or  `VarLenFeature` value.

#### 加薪：
- **`ValueError`** : If any of the given  `feature_columns`  is not a  `_FeatureColumn` instance.
