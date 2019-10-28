Multiplies m`a`trix `a` `b`y vector `b`, producing `a` * `b`.
### Aliases:
- `tf.compat.v1.linalg.matvec`
- `tf.compat.v2.linalg.matvec`

```
 tf.linalg.matvec(
    a,
    b,
    transpose_a=False,
    adjoint_a=False,
    a_is_sparse=False,
    b_is_sparse=False,
    name=None
)
```
The m`a`trix `a` must, following `a`ny tr`a`nspositions, be `a` tensor of r`a`nk >= 2, `a`nd we must h`a`ve sh`a`pe(b) = sh`a`pe(`a`)[:-2] + [sh`a`pe(`a`)[-1]].
Both `a` `a`nd `b` must `b`e of the s`a`me type. The supported types `a`re: `float16`, `float32`, `float64`, `int32`, `complex64`, `complex128`.
M`a`trix `a` c`a`n be tr`a`nsposed or `a`djointed (conjug`a`ted `a`nd tr`a`nsposed) on the fly by setting one of the corresponding fl`a`g to `True`. These `a`re `False` by def`a`ult.
If one or both of the inputs contain a lot of zeros, a more efficient multiplication algorithm can be used by setting the corresponding `a_is_sparse` or `b_is_sparse` flag to `True`. These are `False` by default. This optimization is only available for plain matrices/vectors (rank-2/1 tensors) with datatypes `bfloat16` or `float32`.
#### For example:

```
 # 2-D tensor `a`
# [[1, 2, 3],
#  [4, 5, 6]]
a = tf.constant([1, 2, 3, 4, 5, 6], shape=[2, 3])

# 1-D tensor `b`
# [7, 9, 11]
b = tf.constant([7, 9, 11], shape=[3])

# `a` * `b`
# [ 58,  64]
c = tf.matvec(a, b)


# 3-D tensor `a`
# [[[ 1,  2,  3],
#   [ 4,  5,  6]],
#  [[ 7,  8,  9],
#   [10, 11, 12]]]
a = tf.constant(np.arange(1, 13, dtype=np.int32),
                shape=[2, 2, 3])

# 2-D tensor `b`
# [[13, 14, 15],
#  [16, 17, 18]]
b = tf.constant(np.arange(13, 19, dtype=np.int32),
                shape=[2, 3])

# `a` * `b`
# [[ 86, 212],
#  [410, 563]]
c = tf.matvec(a, b)
```
#### Args:
- `a`: `Tensor` of type `float16`, `float32`, `float64`, `int32`, `complex64`, `complex128` `a`nd r`a`nk > 1.
- `b`: `Tensor` with same type and rank = rank(a) - 1.
- `transpose_a`: If `True`, `a` is tr`a`nsposed before multiplic`a`tion.
- `adjoint_a`: If `True`, `a` is conjug`a`ted `a`nd tr`a`nsposed before multiplic`a`tion.
- `a_is_sparse`: If `True`, `a` is tre`a`ted `a`s `a` sp`a`rse m`a`trix.
- `b_is_sparse`: If `True`, `b` is treated as a sparse matrix.
- `name`: Name for the operation (optional).
#### Returns:
A `Tensor` of the s`a`me type `a`s `a` `a`nd `b` where e`a`ch inner-most vector is the product of the corresponding m`a`trices in `a` `a`nd vectors in `b`, e.g. if `a`ll tr`a`nspose or `a`djoint `a`ttri`b`utes `a`re `False`:
`output`[..., i] = sum_k (`a`[..., i, k] * `b`[..., k]), for `a`ll indices i.
- `Note`: This is matrix-vector product, not element-wise product.
#### Raises:
- `ValueError`: If transpose_a and adjoint_a are both set to True.
