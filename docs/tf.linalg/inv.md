[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/linalg/inv)  
---  
  
Defined in generated file: `python/ops/gen_linalg_ops.py`

Computes the inverse of one or more square invertible matrices or their

### Aliases:

  * [`tf.compat.v1.linalg.inv`](/api_docs/python/tf/linalg/inv)
  * [`tf.compat.v1.matrix_inverse`](/api_docs/python/tf/linalg/inv)
  * [`tf.compat.v2.linalg.inv`](/api_docs/python/tf/linalg/inv)

    
    
    tf.linalg.inv(
        input,
        adjoint=False,
        name=None
    )
    

adjoints (conjugate transposes).

The input is a tensor of shape `[..., M, M]` whose inner-most 2 dimensions
form square matrices. The output is a tensor of the same shape as the input
containing the inverse for all input submatrices `[..., :, :]`.

The op uses LU decomposition with partial pivoting to compute the inverses.

If a matrix is not invertible there is no guarantee what the op does. It may
detect the condition and raise an exception or it may simply return a garbage
result.

#### Args:

  * **`input`** : A `Tensor`. Must be one of the following types: `float64`, `float32`, `half`, `complex64`, `complex128`. Shape is `[..., M, M]`.
  * **`adjoint`** : An optional `bool`. Defaults to `False`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `input`.

