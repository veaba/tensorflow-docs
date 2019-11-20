[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/linalg/slogdet)  
---  
  
Defined in generated file: `python/ops/gen_linalg_ops.py`

Computes the sign and the log of the absolute value of the determinant of

### Aliases:

  * [`tf.compat.v1.linalg.slogdet`](/api_docs/python/tf/linalg/slogdet)
  * [`tf.compat.v2.linalg.slogdet`](/api_docs/python/tf/linalg/slogdet)

    
    
    tf.linalg.slogdet(
        input,
        name=None
    )
    

one or more square matrices.

The input is a tensor of shape `[N, M, M]` whose inner-most 2 dimensions form
square matrices. The outputs are two tensors containing the signs and absolute
values of the log determinants for all N input submatrices `[..., :, :]` such
that the determinant = sign _exp(log_abs_determinant). The log_abs_determinant
is computed as det(P)_ sum(log(diag(LU))) where LU is the LU decomposition of
the input and P is the corresponding permutation matrix.

#### Args:

  * **`input`** : A `Tensor`. Must be one of the following types: `half`, `float32`, `float64`, `complex64`, `complex128`. Shape is `[N, M, M]`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A tuple of `Tensor` objects (sign, log_abs_determinant).

  * **`sign`** : A `Tensor`. Has the same type as `input`.
  * **`log_abs_determinant`** : A `Tensor`. Has the same type as `input`.

