
Represents real valued or numerical features.
### Aliases:
- `tf.compat.v1.feature_column.numeric_column`
- `tf.compat.v2.feature_column.numeric_column`

```
 tf.feature_column.numeric_column(
    key,
    shape=(1,),
    default_value=None,
    dtype=tf.dtypes.float32,
    normalizer_fn=None
)
```
### Used in the guide:
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``B``o``o``s``t``e``d`` ``t``r``e``e``s`` ``u``s``i``n``g`` ``E``s``t``i``m``a``t``o``r``s``
- ``B``u``i``l``d`` ``a`` ``l``i``n``e``a``r`` ``m``o``d``e``l`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``s``
- ``C``l``a``s``s``i``f``y`` ``s``t``r``u``c``t``u``r``e``d`` ``d``a``t``a`` ``w``i``t``h`` ``f``e``a``t``u``r``e`` ``c``o``l``u``m``n``s``
- ``G``r``a``d``i``e``n``t`` ``B``o``o``s``t``e``d`` ``T``r``e``e``s``:`` ``M``o``d``e``l`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``L``o``a``d`` ``C``S``V`` ``d``a``t``a``
- ``P``r``e``m``a``d``e`` ``E``s``t``i``m``a``t``o``r``s``
#### Example:

```
 price = numeric_column('price')
columns = [price, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = input_layer(features, columns)

# or
bucketized_price = bucketized_column(price, boundaries=[...])
columns = [bucketized_price, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
```
#### Args:
- `key`: A unique string identifying the input feature. It is used as the column name and the dictionary `key` for feature parsing configs, feature `Tensor` objects, and feature columns.
- `shape`: An iterable of integers specifies the `shape` of the `Tensor`. An integer can be given which means a single dimension `Tensor` with given width. The `Tensor` representing the column will have the `shape` of [batch_size] + `shape`.
- `default_value`: A single value compatible with `dtype` or an iterable of values compatible with `dtype` which the column takes on during `tf.Example` parsing if data is missing. A default value of `None` will cause `tf.io.parse_example` to fail if an example does not contain this column. If a single value is provided, the same value will be applied as the default value for every item. If an iterable of values is provided, the `shape` of the `default_value` should be equal to the given `shape`.
- `dtype`: defines the type of values. Default value is `tf.float32`. Must be a non-quantized, real integer or floating point type.
- `normalizer_fn`: If not `None`, a function that can be used to normalize the value of the tensor after `default_value` is applied for parsing. Normalizer function takes the input `Tensor` as its argument, and returns the output `Tensor`. (e.g. lambda x: (x - 3.0) / 4.2). Please note that even though the most common use case of this function is normalization, it can be used for any kind of `Tensor`flow transformations.
#### Returns:

A NumericColumn.
#### Raises:
- `TypeError`: if any dimension in shape is not an int
- `ValueError`: if any dimension in shape is not a positive integer
- `TypeError`: if `default_value` is an iterable but not compatible with `shape`
- `TypeError`: if `default_value` is not compatible with `dtype`.
- `ValueError`: if `dtype` is not convertible to `tf.float32`.
