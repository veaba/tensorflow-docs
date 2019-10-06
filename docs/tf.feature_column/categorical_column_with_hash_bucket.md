
Represents sparse feature where ids are set by hashing.
### Aliases:
- `tf.compat.v1.feature_column.categorical_column_with_hash_bucket`
- `tf.compat.v2.feature_column.categorical_column_with_hash_bucket`

```
 tf.feature_column.categorical_column_with_hash_bucket(
    key,
    hash_bucket_size,
    dtype=tf.dtypes.string
)
```
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``C``l``a``s``s``i``f``y`` ``s``t``r``u``c``t``u``r``e``d`` ``d``a``t``a`` ``w``i``t``h`` ``f``e``a``t``u``r``e`` ``c``o``l``u``m``n``s``

Use this when your sparse features are in string or integer format, and you want to distribute your inputs into a finite number of buckets by hashing. output_id = Hash(input_feature_string) % bucket_size for string type input. For int type input, the value is converted to its string representation first and then hashed by the same formula.

For input dictionary features, features[key] is either Tensor or SparseTensor. If Tensor, missing values can be represented by -1 for int and '' for string, which will be dropped by this feature column.
#### Example:

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
#### Args:
- `key`: A unique string identifying the input feature. It is used as the column name and the dictionary `key` for feature parsing configs, feature `Tensor` objects, and feature columns.
- `hash_bucket_size`: An int > 1. The number of buckets.
- `dtype`: The type of features. Only string and integer types are supported.
#### Returns:

A HashedCategoricalColumn.
#### Raises:
- `ValueError`: `hash_bucket_size` is not greater than 1.
- `ValueError`: `dtype` is neither string nor integer.
