## Class SparseTensorSpec
Type specification for a `tf.SparseTensor`.
### Aliases:
- Class `tf.compat.v1.SparseTensorSpec`
- Class `tf.compat.v2.SparseTensorSpec`
## __init__
View source

```
 __init__(
    shape=None,
    dtype=tf.dtypes.float32
)
```
Constructs a type specification for a `tf.SparseTensor`.
#### Args:
- `shape`: The dense `shape` of the `SparseTensor`, or `None` to allow any dense `shape`.
- `dtype`: `tf.DType` of values in the `SparseTensor`.
## Properties
### dtype
The `tf.dtypes.DType` specified by this type for the SparseTensor.
### shape
The `tf.TensorShape` specified by this type for the SparseTensor.
### value_type
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
