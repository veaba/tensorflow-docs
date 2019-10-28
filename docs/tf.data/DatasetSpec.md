## Class DatasetSpec
Type specification for `tf.data.Dataset`.
### Aliases:
- Class `tf.compat.v1.data.DatasetSpec`
- Class `tf.compat.v1.data.experimental.DatasetStructure`
- Class `tf.compat.v2.data.DatasetSpec`
## __init__
View source

```
 __init__(
    element_spec,
    dataset_shape=()
)
```
Initialize self. See help(type(self)) for accurate signature.
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
 @staticmethod
from_value(value)
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
