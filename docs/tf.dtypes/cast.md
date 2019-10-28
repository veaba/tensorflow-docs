Casts a tensor to a new type.
### Aliases:
- `tf.cast`
- `tf.compat.v1.cast`
- `tf.compat.v1.dtypes.cast`
- `tf.compat.v2.cast`
- `tf.compat.v2.dtypes.cast`

```
 tf.dtypes.cast(
    x,
    dtype,
    name=None
)
```
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
### Used in the tutorials:
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``D``e``e``p``D``r``e``a``m``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``P``i``x``2``P``i``x``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
The operation casts `x` (in case of `Tensor`) or `x`.values (in case of `SparseTensor` or `IndexedSlices`) to `dtype`.
#### For example:

```
 x = tf.constant([1.8, 2.2], dtype=tf.float32)
tf.dtypes.cast(x, tf.int32)  # [1, 2], dtype=tf.int32
```
The operation supports data types (for `x` and `dtype`) of `uint8`, `uint16`, `uint32`, `uint64`, `int8`, `int16`, `int32`, `int64`, `float16`, `float32`, `float64`, `complex64`, `complex128`, `bfloat16`. In case of casting from comple`x` types (`complex64`, `complex128`) to real types, only the real part of `x` is returned. In case of casting from real types to comple`x` types (`complex64`, `complex128`), the imaginary part of the returned value is set to `0`. The handling of comple`x` types here matches the behavior of numpy.
#### Args:
- `x`: A `Tensor` or `SparseTensor` or `IndexedSlices` of numeric type. It could be `uint8`, `uint16`, `uint32`, `uint64`, `int8`, `int16`, `int32`, `int64`, `float16`, `float32`, `float64`, `complex64`, `complex128`, `bfloat16`.
- `dtype`: The destination type. The list of supported `dtype`s is the same as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` or `SparseTensor` or `IndexedSlices` with same shape as `x` and same type as `dtype`.
#### Raises:
- `TypeError`: If `x` cannot be cast to the `dtype`.
