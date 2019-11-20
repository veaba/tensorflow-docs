[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/linalg/adjoint) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg/linalg_impl.py#L98-L124)  
---|---  
  
Transposes the last two dimensions of and conjugates tensor `matrix`.

### Aliases:

  * [`tf.compat.v1.linalg.adjoint`](/api_docs/python/tf/linalg/adjoint)
  * [`tf.compat.v2.linalg.adjoint`](/api_docs/python/tf/linalg/adjoint)

    
    
    tf.linalg.adjoint(
        matrix,
        name=None
    )
    

#### For example:

    
    
    x = tf.constant([[1 + 1j, 2 + 2j, 3 + 3j],
                     [4 + 4j, 5 + 5j, 6 + 6j]])
    tf.linalg.adjoint(x)  # [[1 - 1j, 4 - 4j],
                          #  [2 - 2j, 5 - 5j],
                          #  [3 - 3j, 6 - 6j]]
    

#### Args:

  * **`matrix`** : A `Tensor`. Must be `float16`, `float32`, `float64`, `complex64`, or `complex128` with shape `[..., M, M]`.
  * **`name`** : A name to give this `Op` (optional).

#### Returns:

The adjoint (a.k.a. Hermitian transpose a.k.a. conjugate transpose) of matrix.

