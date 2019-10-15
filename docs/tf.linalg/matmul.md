
Multiplies matrix a by matrix b, producing a * b.
### Aliases:
- `tf.compat.v1.linalg.matmul`
- `tf.compat.v1.matmul`
- `tf.compat.v2.linalg.matmul`
- `tf.compat.v2.matmul`
- `tf.matmul`

```
 tf.linalg.matmul(
    a,
    b,
    transpose_a=False,
    transpose_b=False,
    adjoint_a=False,
    adjoint_b=False,
    a_is_sparse=False,
    b_is_sparse=False,
    name=None
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``U``s``e`` ``a`` ``G``P``U``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``C``u``s``t``o``m`` ``l``a``y``e``r``s``
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``

The inputs must, following any transpositions, be tensors of rank >= 2 where the inner 2 dimensions specify valid matrix multiplication arguments, and any further outer dimensions match.

Both matrices must be of the same type. The supported types are: float16, float32, float64, int32, complex64, complex128.

Either matrix can be transposed or adjointed (conjugated and transposed) on the fly by setting one of the corresponding flag to True. These are False by default.

If one or both of the matrices contain a lot of zeros, a more efficient multiplication algorithm can be used by setting the corresponding a_is_sparse or b_is_sparse flag to True. These are False by default. This optimization is only available for plain matrices (rank-2 tensors) with datatypes bfloat16 or float32.
#### For example:

```
 # 2-D tensor `a`
# [[1, 2, 3],
#  [4, 5, 6]]
a = tf.constant([1, 2, 3, 4, 5, 6], shape=[2, 3])

# 2-D tensor `b`
# [[ 7,  8],
#  [ 9, 10],
#  [11, 12]]
b = tf.constant([7, 8, 9, 10, 11, 12], shape=[3, 2])

# `a` * `b`
# [[ 58,  64],
#  [139, 154]]
c = tf.matmul(a, b)


# 3-D tensor `a`
# [[[ 1,  2,  3],
#   [ 4,  5,  6]],
#  [[ 7,  8,  9],
#   [10, 11, 12]]]
a = tf.constant(np.arange(1, 13, dtype=np.int32),
                shape=[2, 2, 3])

# 3-D tensor `b`
# [[[13, 14],
#   [15, 16],
#   [17, 18]],
#  [[19, 20],
#   [21, 22],
#   [23, 24]]]
b = tf.constant(np.arange(13, 25, dtype=np.int32),
                shape=[2, 3, 2])

# `a` * `b`
# [[[ 94, 100],
#   [229, 244]],
#  [[508, 532],
#   [697, 730]]]
c = tf.matmul(a, b)

# Since python >= 3.5 the @ operator is supported (see PEP 465).
# In TensorFlow, it simply calls the `tf.matmul()` function, so the
# following lines are equivalent:
d = a @ b @ [[10.], [11.]]
d = tf.matmul(tf.matmul(a, b), [[10.], [11.]])
```
#### Args:
- `a`: `Tensor` of type `float16`, `float32`, `float64`, `int32`, `complex64`, `complex128` `a`nd r`a`nk > 1.
- `b`: `Tensor` with s`a`me type `a`nd r`a`nk `a`s `a`.
- `transpose_a`: If `True`, `a` is tr`a`nsposed `b`efore multiplic`a`tion.
- `transpose_b`: If `True`, `b` is tr`a`nsposed `b`efore multiplic`a`tion.
- `a`djoint_`a`: If `True`, `a` is conjug`a`ted `a`nd tr`a`nsposed `b`efore multiplic`a`tion.
- `a`djoint_`b`: If `True`, `b` is conjug`a`ted `a`nd tr`a`nsposed `b`efore multiplic`a`tion.
- `a`_is_sp`a`rse: If `True`, `a` is tre`a`ted `a`s `a` sp`a`rse m`a`trix.
- `b`_is_sp`a`rse: If `True`, `b` is tre`a`ted `a`s `a` sp`a`rse m`a`trix.
- `name`: N`a`me for the oper`a`tion (option`a`l).
#### Returns:

A Tensor of the same type as a and b where each inner-most matrix is the product of the corresponding matrices in a and b, e.g. if all transpose or adjoint attributes are False:

output[..., i, j] = sum_k (a[..., i, k] * b[..., k, j]), for all indices i, j.
- `Note`: This is matrix product, not element-wise product.
#### Raises:
- `ValueError`: If transpose_a and adjoint_a, or transpose_b and adjoint_b are both set to True.
