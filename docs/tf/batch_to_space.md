BatchToSpace for N-D tensors of type T.
### Aliases:
- `tf.compat.v2.batch_to_space`

```
 tf.batch_to_space(
    input,
    block_shape,
    crops,
    name=None
)
```
This operation reshapes the "batch" dimension 0 into `M + 1` dimensions of shape `block_shape + [batch]`, interleaves these blocks back into the grid defined by the spatial dimensions `[1, ..., M]`, to obtain a result with the same rank as the input. The spatial dimensions of this intermediate result are then optionally cropped according to `crops` to produce the output. This is the reverse of SpaceToBatch. See below for a precise description.
#### Args:
- `input`: A `Tensor`. N-D with shape `input`_shape = [batch] + spatial_shape + remaining_shape, where spatial_shape has M dimensions.
#### Returns:
A `Tensor`. Has the same type as `input`.
