Represents multi-hot representation of given categorical column.
### Aliases:
- tf.compat.v1.feature_column.indicator_column
- tf.compat.v2.feature_column.indicator_column

```
 tf.feature_column.indicator_column(categorical_column)
```
### Used in the tutorials:
- Classify structured data with feature columns
- Boosted trees using Estimators
- Build a linear model with Estimators
- Load CSV data
- For DNN model, indicator_column can be used to wrap any categorical_column_* (e.g., to feed to DNN). Consider to Use embedding_column if the number of buckets/unique(values) are large.
- For Wide (aka linear) model, indicator_column is the internal representation for categorical column when passing categorical column directly (as any element in feature_columns) to linear_model. See linear_model for details.

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
#### Args:
- categorical_column: A CategoricalColumn which is created by categorical_column_with_* or crossed_column functions.
#### Returns:
An IndicatorColumn.
