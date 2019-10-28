## Class RaggedTensorSpec
Type specification for a `tf.RaggedTensor`.
### Aliases:
- Class `tf.compat.v1.RaggedTensorSpec`
- Class `tf.compat.v2.RaggedTensorSpec`
## __init__
View source

```
 __init__(
    shape=None,
    dtype=tf.dtypes.float32,
    ragged_rank=None,
    row_splits_dtype=tf.dtypes.int64
)
```
Constructs a type specification for a `tf.RaggedTensor`.
#### Args:
- `shape`: The `shape` of the RaggedTensor, or `None` to allow any `shape`. If a `shape` is specified, then all ragged dimensions must have size `None`.
- `dtype`: `tf.DType` of values in the RaggedTensor.
- `ragged_rank`: Python integer, the ragged rank of the RaggedTensor to be described. Defaults to `shape.ndims - 1`.
- `row_splits_dtype`: `dtype` for the RaggedTensor's `row_splits` tensor. One of `tf.int32` or `tf.int64`.
## Properties
### value_type
The Python type for values that are compatible with this TypeSpec.
## Methods
### __eq__
View source

```
 __eq__(other)
```
Return self==value.
### __ne__
View source

```
 __ne__(other)
```
Return self!=value.
### from_value
View source

```
 @classmethod
from_value(
    cls,
    value
)
```
### is_compatible_with
View source

```
 is_compatible_with(spec_or_value)
```
Returns true if `spec_or_value` is compatible with this TypeSpec.
### most_specific_compatible_type
View source

```
 most_specific_compatible_type(other)
```
Returns the most specific TypeSpec compatible with `self` and `other`.
#### Args:
- `other`: A `TypeSpec`.
#### Raises:
- `ValueError`: If there is no TypeSpec that is compatible with both `self` and `other`.
