[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/linalg/eigh) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/linalg_ops.py#L309-L329)  
  
  
Computes the eigen decomposition of a batch of self-adjoint matrices.

### Aliases:

  * [`tf.compat.v1.linalg.eigh`](/api_docs/python/tf/linalg/eigh)
  * [`tf.compat.v1.self_adjoint_eig`](/api_docs/python/tf/linalg/eigh)
  * [`tf.compat.v2.linalg.eigh`](/api_docs/python/tf/linalg/eigh)

    
    
    tf.linalg.eigh(
        tensor,
        name=None
    )
    

Computes the eigenvalues and eigenvectors of the innermost N-by-N matrices in
`tensor` such that `tensor[...,:,:] * v[..., :,i] = e[..., i] * v[...,:,i]`,
for i=0...N-1.

#### Args:

  * **`tensor`** : `Tensor` of shape `[..., N, N]`. Only the lower triangular part of each inner inner matrix is referenced.
  * **`name`** : string, optional name of the operation.

#### Returns:

  * **`e`** : Eigenvalues. Shape is `[..., N]`. Sorted in non-decreasing order.
  * **`v`** : Eigenvectors. Shape is `[..., N, N]`. The columns of the inner most matrices contain eigenvectors of the corresponding matrices in `tensor`

