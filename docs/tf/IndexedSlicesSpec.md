## Class IndexedSlicesSpec
Type specification for a `tf.IndexedSlices`.
Inherits From: `TypeSpec`
### Aliases:
- Class `tf.compat.v1.IndexedSlicesSpec`
- Class `tf.compat.v2.IndexedSlicesSpec`
## __init__
View source

```
 __init__(
    shape=None,
    dtype=tf.dtypes.float32,
    indices_dtype=tf.dtypes.int64,
    dense_shape_dtype=None,
    indices_shape=None
)
```
Constructs a type specification for a `tf.IndexedSlices`.
#### Args:
- `shape`: The dense `shape` of the `IndexedSlices`, or `None` to allow any dense `shape`.
- `dtype`: `tf.DType` of values in the `IndexedSlices`.
- `indices_dtype`: `tf.DType` of the `indices` in the `IndexedSlices`. One of `tf.int32` or `tf.int64`.
- `dense_shape_dtype`: `tf.DType` of the `dense_shape` in the `IndexedSlices`. One of `tf.int32`, `tf.int64`, or `None` (if the `IndexedSlices` has no `dense_shape` tensor).
- `indices_shape`: The shape of the `indices` component, which indicates how many slices are in the `IndexedSlices`.
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
