[tf.RaggedTensor](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)Type specification for a .

### Aliases:
- Class `tf.compat.v1.RaggedTensorSpec`
- Class `tf.compat.v2.RaggedTensorSpec`
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1934-L1963)


```
 __init__(
    shape=None,
    dtype=tf.dtypes.float32,
    ragged_rank=None,
    row_splits_dtype=tf.dtypes.int64
)
```
[tf.RaggedTensor](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)Constructs a type specification for a .

#### Args:
- `shape`: The `shape` of the RaggedTensor, or `None` to allow any `shape`. If a `shape` is specified, then all ragged dimensions must have size `None`.
- `dtype`: `tf.DType` of values in the RaggedTensor.
- `ragged_rank`: Python integer, the ragged rank of the RaggedTensor to be described. Defaults to `shape`.ndims - 1.
- `row_splits_dtype`: `dtype` for the RaggedTensor's `row_splits` tensor. One of `tf.int32` or `tf.int64`.
## Properties
### value_type
The Python type for values that are compatible with this TypeSpec.
## Methods
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L262-L265)


```
 __eq__(other)
```
Return self==value.
### __ne__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L267-L268)


```
 __ne__(other)
```
Return self!=value.
### from_value
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L2062-L2067)


```
 @classmethod
from_value(
    cls,
    value
)
```
### is_compatible_with
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L87-L102)


```
 is_compatible_with(spec_or_value)
```
Returns true if `spec_or_value` is compatible with this TypeSpec.
### most_specific_compatible_type
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L104-L126)


```
 most_specific_compatible_type(other)
```
Returns the most specific TypeSpec compatible with `self` and `other`.
#### Args:
- `other`: A `TypeSpec`.
#### Raises:
- `ValueError`: If there is no TypeSpec that is compatible with both `self` and `other`.
