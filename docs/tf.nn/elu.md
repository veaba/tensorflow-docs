Defined in generated file: `python/ops/gen_nn_ops.py`
Computes exponential linear: exp(``) - 1 if < 0, `` otherwise.
### Aliases:
- `tf.compat.v1.nn.elu`
- `tf.compat.v2.nn.elu`

```
 tf.nn.elu(
    features,
    name=None
)
```
See Fast and Accurate Deep Network Learning by Exponential Linear Units (ELUs)
#### Args:
- `features`: A `Tensor`. Must be one of the following types: `half`, `bfloat16`, `float32`, `float64`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `features`.
