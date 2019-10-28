Computes the global norm of multiple tensors.
### Aliases:
- `tf.compat.v1.global_norm`
- `tf.compat.v1.linalg.global_norm`
- `tf.compat.v2.linalg.global_norm`

```
 tf.linalg.global_norm(
    t_list,
    name=None
)
```
Given a tuple or list of tensors `t_list`, this operation returns the global norm of the elements in all tensors in `t_list`. The global norm is computed as:
