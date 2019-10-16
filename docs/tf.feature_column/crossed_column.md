
Returns a column for performing crosses of categorical features.
### Aliases:
- `tf.compat.v1.feature_column.crossed_column`
- `tf.compat.v2.feature_column.crossed_column`

```
 tf.feature_column.crossed_column(
    keys,
    hash_bucket_size,
    hash_key=None
)
```
### Used in the tutorials:
- ``B``u``i``l``d`` ``a`` ``l``i``n``e``a``r`` ``m``o``d``e``l`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``s``
- ``C``l``a``s``s``i``f``y`` ``s``t``r``u``c``t``u``r``e``d`` ``d``a``t``a`` ``w``i``t``h`` ``f``e``a``t``u``r``e`` ``c``o``l``u``m``n``s``

Crossed features will be hashed according to hash_bucket_size. Conceptually, the transformation can be thought of as: Hash(cartesian product of features) % hash_bucket_size

For example, if the input features are:
- ``S``p``a``r``s``e``T``e``n``s``o``r`` ``r``e``f``e``r``r``e``d`` ``b``y`` ``f``i``r``s``t`` ``k``e``y``:``
- ``S``p``a``r``s``e``T``e``n``s``o``r`` ``r``e``f``e``r``r``e``d`` ``b``y`` ``s``e``c``o``n``d`` ``k``e``y``:``

then crossed feature will look like:

```
  shape = [2, 2]
{
    [0, 0]: Hash64("d", Hash64("a")) % hash_bucket_size
    [1, 0]: Hash64("e", Hash64("b")) % hash_bucket_size
    [1, 1]: Hash64("e", Hash64("c")) % hash_bucket_size
}
```

Here is an example to create a linear model with crosses of string features:

```
 keywords_x_doc_terms = crossed_column(['keywords', 'doc_terms'], 50K)
columns = [keywords_x_doc_terms, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
```

You could also use vocabulary lookup before crossing:

```
 keywords = categorical_column_with_vocabulary_file(
    'keywords', '/path/to/vocabulary/file', vocabulary_size=1K)
keywords_x_doc_terms = crossed_column([keywords, 'doc_terms'], 50K)
columns = [keywords_x_doc_terms, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
```

If an input feature is of numeric type, you can use categorical_column_with_identity, or bucketized_column, as in the example:

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

To use crossed column in DNN model, you need to add it in an embedding column as in this example:

```
 vertical_id_x_price = crossed_column([vertical_id, bucketized_price], 50K)
vertical_id_x_price_embedded = embedding_column(vertical_id_x_price, 10)
dense_tensor = input_layer(features, [vertical_id_x_price_embedded, ...])
```
#### Args:
- `keys`: An iterable identifying the features to be crossed. Each element can be either:
string: Will use the corresponding feature which must be of string type.
`CategoricalColumn`: Will use the transformed tensor produced by this column. Does not support hashed categorical column.
- string: Will use the corresponding feature which must be of string type.
- `CategoricalColumn`: Will use the transformed tensor produced by this column. Does not support hashed categorical column.
- `hash_bucket_size`: An int > 1. The number of buckets.
- `hash_key`: Specify the `hash_key` that will be used by the `FingerprintCat64` function to combine the crosses fingerprints on SparseCrossOp (optional).
#### Returns:

A CrossedColumn.
#### Raises:
- `ValueError`: If len(keys) < 2.
- `ValueError`: If any of the keys is neither a string nor `CategoricalColumn`.
- `ValueError`: If any of the keys is `HashedCategoricalColumn`.
- `ValueError`: If `hash_bucket_size < 1`.
