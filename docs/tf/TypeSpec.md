## Class TypeSpec
Specifies a TensorFlow value type.
### Aliases:
- Class `tf.compat.v1.TypeSpec`
- Class `tf.compat.v1.data.experimental.Structure`
- Class `tf.compat.v2.TypeSpec`
A `tf.TypeSpec` provides metadata describing an object accepted or returned by TensorFlow APIs. Concrete subclasses, such as `tf.TensorSpec` and `tf.RaggedTensorSpec`, are used to describe different value types.
For example, `tf.function`'s `input_signature` argument accepts a list (or nested structure) of `TypeSpec`s.
Creating new subclasses of TypeSpec (outside of TensorFlow core) is not currently supported. In particular, we may make breaking changes to the private methods and properties defined by this base class.
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
