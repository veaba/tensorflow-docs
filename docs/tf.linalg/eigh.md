Computes the eigen decomposition of a batch of self-adjoint matrices.

**别名** : [ `tf.compat.v1.linalg.eigh` ](/api_docs/python/tf/linalg/eigh), [ `tf.compat.v1.self_adjoint_eig` ](/api_docs/python/tf/linalg/eigh), [ `tf.compat.v2.linalg.eigh` ](/api_docs/python/tf/linalg/eigh)

```
 tf.linalg.eigh(
    tensor,
    name=None
)
 
```

Computes the eigenvalues and eigenvectors of the innermost N-by-N matricesin  `tensor`  such that `tensor[...,:,:] * v[..., :,i] = e[..., i] * v[...,:,i]` , for i=0...N-1.

#### 参数：
- **`tensor`** :  `Tensor`  of shape  `[..., N, N]` . Only the lower triangular part ofeach inner inner matrix is referenced.
- **`name`** : string, optional name of the operation.


#### 返回：
- **`e`** : Eigenvalues. Shape is  `[..., N]` . Sorted in non-decreasing order.
- **`v`** : Eigenvectors. Shape is  `[..., N, N]` . The columns of the inner mostmatrices contain eigenvectors of the corresponding matrices in  `tensor` 
