Returns a linear prediction `Tensor` based on given `feature_columns`.

```
 tf.compat.v1.feature_column.linear_model(
    features,
    feature_columns,
    units=1,
    sparse_combiner='sum',
    weight_collections=None,
    trainable=True,
    cols_to_vars=None
)
```
This function generates a weighted sum based on output dimension `units`. Weighted sum refers to logits in classification problems. It refers to the prediction itself for linear regression problems.
Note on supported columns: `linear_model` treats categorical columns as `indicator_column`s. To be specific, assume the input as `SparseTensor` looks like:

```
   shape = [2, 2]
  {
      [0, 0]: "a"
      [1, 0]: "b"
      [1, 1]: "c"
  }
```
`linear_model` assigns weights for the presence of "a", "b", "c' implicitly, just like `indicator_column`, while `input_layer` explicitly requires wrapping each of categorical columns with an `embedding_column` or an `indicator_column`.
#### Example of usage:

```
 price = numeric_column('price')
price_buckets = bucketized_column(price, boundaries=[0., 10., 100., 1000.])
keywords = categorical_column_with_hash_bucket("keywords", 10K)
keywords_price = crossed_column('keywords', price_buckets, ...)
columns = [price_buckets, keywords, keywords_price ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
prediction = linear_model(features, columns)
```
The `sparse_combiner` argument works as follows For example, for two features represented as the categorical columns:

```
   # Feature 1

  shape = [2, 2]
  {
      [0, 0]: "a"
      [0, 1]: "b"
      [1, 0]: "c"
  }

  # Feature 2

  shape = [2, 3]
  {
      [0, 0]: "d"
      [1, 0]: "e"
      [1, 1]: "f"
      [1, 2]: "f"
  }
```
with `sparse_combiner` as "mean", the linear model outputs consequently are:

```
   y_0 = 1.0 / 2.0 * ( w_a + w_b ) + w_d + b
  y_1 = w_c + 1.0 / 3.0 * ( w_e + 2.0 * w_f ) + b
```
where `y_i` is the output, `b` is the `b`ias, and `w_x` is the weight assigned to the presence of `x` in the input features.
#### Args:
#### Returns:
A `Tensor` which represents predictions/logits of a linear model. Its shape is (batch_size, units) and its dtype is `float32`.
#### Raises:
- `ValueError`: if an item in `feature_columns` is neither a `_DenseColumn` nor `_CategoricalColumn`.
