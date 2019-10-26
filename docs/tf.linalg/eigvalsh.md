Computes the eigenvalues of one or more self-adjoint matrices.
### Aliases:
- tf.compat.v1.linalg.eigvalsh
- tf.compat.v1.self_adjoint_eigvals
- tf.compat.v2.linalg.eigvalsh

```
 tf.linalg.eigvalsh(
    tensor,
    name=None
)
```
#### Args:
- tensor: Tensor of shape [..., N, N].
- name: string, optional name of the operation.
#### Returns:
- e: Eigenvalues. Shape is [..., N]. The vector e[..., :] contains the N eigenvalues of tensor[..., :, :].
