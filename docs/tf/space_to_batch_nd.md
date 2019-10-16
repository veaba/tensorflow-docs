Defined in generated file: `python/ops/gen_array_ops.py`
SpaceToBatch for N-D tensors of type T.
### Aliases:
- `tf.compat.v1.manip.space_to_batch_nd`
- `tf.compat.v1.space_to_batch_nd`
- `tf.compat.v2.space_to_batch_nd`

```
 tf.space_to_batch_nd(
    input,
    block_shape,
    paddings,
    name=None
)
```
This operation divides "spatial" dimensions `[1, ..., M]` of the input into a grid of blocks of shape `block_shape`, and interleaves these blocks with the "batch" dimension (0) such that in the output, the spatial dimensions `[1, ..., M]` correspond to the position within the grid, and the batch dimension combines both the position within a spatial block and the original batch position. Prior to division into blocks, the spatial dimensions of the input are optionally zero padded according to `paddings`. See below for a precise description.
#### Args:
- `input`: A `Tensor`. N-D with shape `input`_shape = [batch] + spatial_shape + remaining_shape, where spatial_shape has `M` dimensions.
- `block_shape`: A `Tensor`. `M`ust be one of the following types: `int32`, `int64`. 1-D with shape `[M]`, all values must be >= 1.
- `paddings`: A `Tensor`. `M`ust be one of the follow`i`ng types: `int32`, `int64`. 2-D w`i`th shape `[M, 2]`, all values must be >= 0. `paddings`[`i`] = [pad_start, pad_end] spec`i`f`i`es the padd`i`ng for `input` d`i`mens`i`on `i + 1`, wh`i`ch corresponds to spat`i`al d`i`mens`i`on `i`. It `i`s requ`i`red that `block_shape`[`i`] d`i`v`i`des `input`_shape[`i + 1`] + pad_start + pad_end.
Th`i`s operat`i`on `i`s equ`i`valent to the follow`i`ng steps:
Zero-pad the start and end of d`i`mens`i`ons `[1, ..., M]` of the `input` accord`i`ng to `paddings` to produce `padded` of shape `padded`_shape.
Reshape `padded` to `reshaped_padded` of shape:
[batch] + [`padded`_shape[1] / `block_shape`[0], `block_shape`[0], ..., `padded`_shape`[M]` / `block_shape`[`M`-1], `block_shape`[`M`-1]] + rema`i`n`i`ng_shape
Permute d`i`mens`i`ons of `reshaped_padded` to produce `permuted_reshaped_padded` of shape:
`block_shape` + [batch] + [`padded`_shape[1] / `block_shape`[0], ..., `padded`_shape`[M]` / `block_shape`[`M`-1]] + rema`i`n`i`ng_shape
Reshape `permuted_reshaped_padded` to flatten `block_shape` `i`nto the batch d`i`mens`i`on, produc`i`ng an output tensor of shape:
[batch * prod(`block_shape`)] + [`padded`_shape[1] / `block_shape`[0], ..., `padded`_shape`[M]` / `block_shape`[`M`-1]] + rema`i`n`i`ng_shape
Some examples:
(1) For the follow`i`ng `input` of shape `[1, 2, 2, 1]`, `block_shape` = [2, 2], and `paddings` = [[0, 0], [0, 0]]:
- Zero-pad the start and end of d`i`mens`i`ons `[1, ..., M]` of the `input` accord`i`ng to `paddings` to produce `padded` of shape `padded`_shape.
- Reshape `padded` to `reshaped_padded` of shape:
[batch] + [`padded`_shape[1] / `block_shape`[0], `block_shape`[0], ..., `padded`_shape`[M]` / `block_shape`[`M`-1], `block_shape`[`M`-1]] + rema`i`n`i`ng_shape
- Permute d`i`mens`i`ons of `reshaped_padded` to produce `permuted_reshaped_padded` of shape:
`block_shape` + [batch] + [`padded`_shape[1] / `block_shape`[0], ..., `padded`_shape`[M]` / `block_shape`[`M`-1]] + rema`i`n`i`ng_shape
- Reshape `permuted_reshaped_padded` to flatten `block_shape` `i`nto the batch d`i`mens`i`on, produc`i`ng an output tensor of shape:
[batch * prod(`block_shape`)] + [`padded`_shape[1] / `block_shape`[0], ..., `padded`_shape`[M]` / `block_shape`[`M`-1]] + rema`i`n`i`ng_shape
The output tensor has shape `[4, 1, 1, 1]` and value:
(2) For the following input of shape `[1, 2, 2, 3]`, `block_shape = [2, 2]`, and `paddings = [[0, 0], [0, 0]]`:
The output tensor has shape `[4, 1, 1, 3]` and value:
(3) For the following input of shape `[1, 4, 4, 1]`, `block_shape = [2, 2]`, and `paddings = [[0, 0], [0, 0]]`:
The output tensor has shape `[4, 2, 2, 1]` and value:
(4) For the following input of shape `[2, 2, 4, 1]`, block_shape = `[2, 2]`, and paddings = `[[0, 0], [2, 0]]`:
The output tensor has shape `[8, 1, 3, 1]` and value:
Among others, this operation is useful for reducing atrous convolution into regular convolution. * `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `input`.
