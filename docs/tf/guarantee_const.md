Defined in generated file: python/ops/gen_array_ops.py
Gives a guarantee to the TF runtime that the input tensor is a constant.
### Aliases:
- tf.compat.v1.guarantee_const
- tf.compat.v2.guarantee_const

```
 tf.guarantee_const(
    input,
    name=None
)
```
The runtime is then free to make optimizations based on this.
Only accepts value typed tensors as inputs and rejects resource variable handles as input.
Returns the input tensor without modification.
#### Args:
- input: A Tensor.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as input.
