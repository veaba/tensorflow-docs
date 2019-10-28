Constructs symbolic derivatives of sum of `ys` w.r.t. x in `xs`.
### Aliases:
- `tf.compat.v2.gradients`

```
 tf.gradients(
    ys,
    xs,
    grad_ys=None,
    name='gradients',
    gate_gradients=False,
    aggregation_method=None,
    stop_gradients=None,
    unconnected_gradients=tf.UnconnectedGradients.NONE
)
```
`ys` and `xs` are each a `Tensor` or a list of tensors. `grad_ys` is a list of `Tensor`, holding the gradients received by the `ys`. The list must be the same length as `ys`.
