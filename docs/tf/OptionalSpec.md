## Class OptionalSpec
Represents an optional potentially containing a structured value.
Inherits From: `TypeSpec`
### Aliases:
- Class `tf.compat.v1.OptionalSpec`
- Class `tf.compat.v1.data.experimental.OptionalStructure`
- Class `tf.compat.v2.OptionalSpec`
## __init__
View source

```
 __init__(value_structure)
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
