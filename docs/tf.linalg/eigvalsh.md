[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/linalg/eigvalsh) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg_ops.py#L332-L352)  
---|---  
  
Computes the eigenvalues of one or more self-adjoint matrices.

### Aliases:

  * [`tf.compat.v1.linalg.eigvalsh`](/api_docs/python/tf/linalg/eigvalsh)
  * [`tf.compat.v1.self_adjoint_eigvals`](/api_docs/python/tf/linalg/eigvalsh)
  * [`tf.compat.v2.linalg.eigvalsh`](/api_docs/python/tf/linalg/eigvalsh)

    
    
    tf.linalg.eigvalsh(
        tensor,
        name=None
    )
    

**Note:** If your program backpropagates through this function, you should
replace it with a call to tf.linalg.eigh (possibly ignoring the second output)
to avoid computing the eigen decomposition twice. This is because the
eigenvectors are used to compute the gradient w.r.t. the eigenvalues. See
_SelfAdjointEigV2Grad in linalg_grad.py.

#### Args:

  * **`tensor`** : `Tensor` of shape `[..., N, N]`.
  * **`name`** : string, optional name of the operation.

#### Returns:

  * **`e`** : Eigenvalues. Shape is `[..., N]`. The vector `e[..., :]` contains the `N` eigenvalues of `tensor[..., :, :]`.

