
Represents multi-hot representation of given categorical column.
### Aliases:
- `tf.compat.v1.feature_column.indicator_column`
- `tf.compat.v2.feature_column.indicator_column`

```
 tf.feature_column.indicator_column(categorical_column)
```
### Used in the tutorials:
- ``B``o``o``s``t``e``d`` ``t``r``e``e``s`` ``u``s``i``n``g`` ``E``s``t``i``m``a``t``o``r``s``
- ``B``u``i``l``d`` ``a`` ``l``i``n``e``a``r`` ``m``o``d``e``l`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``s``
- ``C``l``a``s``s``i``f``y`` ``s``t``r``u``c``t``u``r``e``d`` ``d``a``t``a`` ``w``i``t``h`` ``f``e``a``t``u``r``e`` ``c``o``l``u``m``n``s``
- ``L``o``a``d`` ``C``S``V`` ``d``a``t``a``
- For DNN model, `indicator_column` can be used to wrap any `categorical_column_`* (e.g., to feed to DNN). Consider to Use `embedding_column` if the number of buckets/unique(values) are large.
- For Wide (aka linear) model, `indicator_column` is the internal representation for categorical column when passing categorical column directly (as any element in feature_columns) to `linear_model`. See `linear_model` for details.

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
- `categorical_column`: A `CategoricalColumn` which is created by `categorical_column`_with_* or `crossed_column` functions.
#### Returns:

An IndicatorColumn.
