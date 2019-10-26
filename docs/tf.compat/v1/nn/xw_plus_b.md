Computes matmul(x, weights) + biases.

```
 tf.compat.v1.nn.xw_plus_b(
    x,
    weights,
    biases,
    name=None
)
```
#### Args:
- x: a 2D tensor. Dimensions typically: batch, in_units
- weights: a 2D tensor. Dimensions typically: in_units, out_units
- biases: a 1D tensor. Dimensions: out_units
- name: A name for the operation (optional). If not specified "xw_plus_b" is used.
#### Returns:
A 2-D Tensor computing matmul(x, weights) + biases. Dimensions typically: batch, out_units.
