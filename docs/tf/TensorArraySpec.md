## Class TensorArraySpec
Type specification for a `tf.TensorArray`.
Inherits From: `TypeSpec`
### Aliases:
- Class `tf.compat.v1.TensorArraySpec`
- Class `tf.compat.v2.TensorArraySpec`
## __init__
View source

```
 __init__(
    element_shape=None,
    dtype=tf.dtypes.float32,
    dynamic_size=False,
    infer_shape=True
)
```
Constructs a type specification for a `tf.TensorArray`.
#### Args:
- `element_shape`: The shape of each element in the `TensorArray`.
- `dtype`: Data type of the `TensorArray`.
- `dynamic_size`: Whether the `TensorArray` can grow past its initial size.
- `infer_shape`: Whether shape inference is enabled.
## Properties
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
 @staticmethod
from_value(value)
```
### is_compatible_with
View source

```
 is_compatible_with(other)
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
