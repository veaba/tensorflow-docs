Defined in generated file: python/ops/gen_array_ops.py
Constructs a tensor by tiling a given tensor.
### Aliases:
- tf.compat.v1.manip.tile
- tf.compat.v1.tile
- tf.compat.v2.tile

```
 tf.tile(
    input,
    multiples,
    name=None
)
```
### Used in the guide:
- Masking and padding with Keras
- Ragged tensors
This operation creates a new tensor by replicating input multiples times. The output tensor's i'th dimension has input.dims(i) * multiples[i] elements, and the values of input are replicated multiples[i] times along the 'i'th dimension. For example, tiling [a b c d] by [2] produces [a b c d a b c d].
#### Args:
- input: A Tensor. 1-D or higher.
- multiples: A Tensor. Must be one of the following types: int32, int64. 1-D. Length must be the same as the number of dimensions in input
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as input.
