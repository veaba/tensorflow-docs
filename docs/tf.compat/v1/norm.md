Computes the norm of vectors, matrices, and tensors. (deprecated arguments)
### Aliases:
- `tf.compat.v1.linalg.norm`

```
 tf.compat.v1.norm(
    tensor,
    ord='euclidean',
    axis=None,
    keepdims=None,
    name=None,
    keep_dims=None
)
```
This function can compute several different vector norms (the 1-norm, the Euclidean or 2-norm, the inf-norm, and in general the p-norm for p > 0) and matrix norms (Frobenius, 1-norm, 2-norm and inf-norm).
#### Args:
- `tensor`: `Tensor` of types `float32`, `float64`, `complex64`, `complex128`
- `ord`: Order of the norm. Supported values are '`fro`', 'euclidean', `1`, `2`, `np.inf` and any positive real number yielding the corresponding p-norm. Default is 'euclidean' which is equivalent to Frobenius norm if `tensor` is a matrix and equivalent to `2`-norm for vectors. Some restrictions apply: a) The Frobenius norm `fro` is not defined for vectors, b) If `axis` is a `2`-tuple (matrix norm), only 'euclidean', '`fro`', `1`, `2`, `np.inf` are supported. See the description of `axis` on how to compute norms for a batch of vectors or matrices stored in a `tensor`.
#### Returns:
- `output`: A `Tensor` of the same type as `tensor`, containing the vector or matrix norms. If `keepdims` is True then the rank of `output` is equal to the rank of `tensor`. Otherwise, if `axis` is none the `output` is a scalar, if `axis` is an integer, the rank of `output` is one less than the rank of `tensor`, if `axis` is a 2-tuple the rank of `output` is two less than the rank of `tensor`.
#### Raises:
- `ValueError`: If `ord` or `axis` is invalid.
#### Numpy Compatibility
Mostly equivalent to numpy.linalg.norm. Not supported: ord <= 0, 2-norm for matrices, nuclear norm. Other differences: a) If axis is `None`, treats the flattened `tensor` as a vector regardless of rank. b) Explicitly supports 'euclidean' norm as the default, including for higher order `tensor`s.
