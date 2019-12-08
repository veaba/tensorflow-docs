Creates parsing spec dictionary from input feature_columns.



### Aliases:

- [ `tf.compat.v2.feature_column.make_parse_example_spec` ](/api_docs/python/tf/feature_column/make_parse_example_spec)



```
 tf.feature_column.make_parse_example_spec(feature_columns)
 
```



### Used in the guide:

- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

The returned dictionary can be used as arg 'features' in
[ `tf.io.parse_example` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_example).



#### Typical usage example:


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



#### Args:

- **`feature_columns`** : An iterable containing all feature columns. All items
should be instances of classes derived from  `FeatureColumn` .



#### Returns:
A dict mapping each feature key to a  `FixedLenFeature`  or  `VarLenFeature` 
value.



#### Raises:

- **`ValueError`** : If any of the given  `feature_columns`  is not a  `FeatureColumn` 
instance.

