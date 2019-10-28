Computes the eigen decomposition of a batch of self-adjoint matrices.
### Aliases:
- `tf.compat.v1.linalg.eigh`
- `tf.compat.v1.self_adjoint_eig`
- `tf.compat.v2.linalg.eigh`

```
 tf.linalg.eigh(
    tensor,
    name=None
)
```
Computes the eigenvalues and eigenvectors of the innermost N-by-N matrices in `tensor` such that `tensor`[...,:,:] * v[..., :,i] = e[..., i] * v[...,:,i], for i=0...N-1.
#### Args:
- `tensor`: `Tensor` of shape `[..., N, N]`. Only the lower triangular part of each inner inner matrix is referenced.
- `name`: string, optional `name` of the operation.
#### Returns:
- `e`: Eig`e`nvalu`e`s. Shap`e` is `[..., N]`. Sort`e`d in non-d`e`cr`e`asing ord`e`r.
- `v`: Eigen`v`ectors. Shape is `[..., N, N]`. The columns of the inner most matrices contain eigen`v`ectors of the corresponding matrices in `tensor`
