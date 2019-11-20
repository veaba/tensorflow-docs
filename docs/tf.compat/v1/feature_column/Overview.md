[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v1/feature_column)  
---  
  
Public API for tf.feature_column namespace.

## Functions

[`bucketized_column(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/bucketized_column):
Represents discretized dense input.

[`categorical_column_with_hash_bucket(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/categorical_column_with_hash_bucket):
Represents sparse feature where ids are set by hashing.

[`categorical_column_with_identity(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/categorical_column_with_identity):
A `CategoricalColumn` that returns identity values.

[`categorical_column_with_vocabulary_file(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/feature_column/categorical_column_with_vocabulary_file):
A `CategoricalColumn` with a vocabulary file.

[`categorical_column_with_vocabulary_list(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/categorical_column_with_vocabulary_list):
A `CategoricalColumn` with in-memory vocabulary.

[`crossed_column(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/crossed_column):
Returns a column for performing crosses of categorical features.

[`embedding_column(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/embedding_column):
`DenseColumn` that converts from sparse, categorical input.

[`indicator_column(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/indicator_column):
Represents multi-hot representation of given categorical column.

[`input_layer(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/feature_column/input_layer):
Returns a dense `Tensor` as input layer based on given `feature_columns`.

[`linear_model(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/feature_column/linear_model):
Returns a linear prediction `Tensor` based on given `feature_columns`.

[`make_parse_example_spec(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/feature_column/make_parse_example_spec):
Creates parsing spec dictionary from input feature_columns.

[`numeric_column(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/numeric_column):
Represents real valued or numerical features.

[`sequence_categorical_column_with_hash_bucket(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/sequence_categorical_column_with_hash_bucket):
A sequence of categorical terms where ids are set by hashing.

[`sequence_categorical_column_with_identity(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/sequence_categorical_column_with_identity):
Returns a feature column that represents sequences of integers.

[`sequence_categorical_column_with_vocabulary_file(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/sequence_categorical_column_with_vocabulary_file):
A sequence of categorical terms where ids use a vocabulary file.

[`sequence_categorical_column_with_vocabulary_list(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/sequence_categorical_column_with_vocabulary_list):
A sequence of categorical terms where ids use an in-memory list.

[`sequence_numeric_column(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/sequence_numeric_column):
Returns a feature column that represents sequences of numeric data.

[`shared_embedding_columns(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/feature_column/shared_embedding_columns):
List of dense columns that convert from sparse, categorical input.

[`weighted_categorical_column(...)`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/weighted_categorical_column):
Applies weight values to a `CategoricalColumn`.

