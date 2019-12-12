Computes the eigenvalues of one or more self-adjoint matrices.

**Aliases** : [ `tf.compat.v1.linalg.eigvalsh` ](/api_docs/python/tf/linalg/eigvalsh), [ `tf.compat.v1.self_adjoint_eigvals` ](/api_docs/python/tf/linalg/eigvalsh), [ `tf.compat.v2.linalg.eigvalsh` ](/api_docs/python/tf/linalg/eigvalsh)

```
 tf.linalg.eigvalsh(
    tensor,
    name=None
)
 
```


**Note:**  If your program backpropagates through this function, you should replaceit with a call to tf.linalg.eigh (possibly ignoring the second output) toavoid computing the eigen decomposition twice. This is because theeigenvectors are used to compute the gradient w.r.t. the eigenvalues. See_SelfAdjointEigV2Grad in linalg_grad.py.


#### Args:
- **`tensor`** :  `Tensor`  of shape  `[..., N, N]` .
- **`name`** : string, optional name of the operation.


#### Returns:
- **`e`** : Eigenvalues. Shape is  `[..., N]` . The vector  `e[..., :]`  contains the  `N` eigenvalues of  `tensor[..., :, :]` .
