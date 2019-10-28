Defined in generated file: `python/ops/gen_array_ops.py`
BatchToSpace for N-D tensors of type T.
### Aliases:
- `tf.compat.v1.manip.batch_to_space_nd`

```
 tf.compat.v1.batch_to_space_nd(
    input,
    block_shape,
    crops,
    name=None
)
```
This operation reshapes the "batch" dimension 0 into `M + 1` dimensions of shape `block_shape + [batch]`, interleaves these blocks back into the grid defined by the spatial dimensions `[1, ..., M]`, to obtain a result with the same rank as the input. The spatial dimensions of this intermediate result are then optionally cropped according to `crops` to produce the output. This is the reverse of SpaceToBatch. See below for a precise description.
#### Args:
- `input`: A `Tensor`. N-D with shape `input`_shape = [batch] + spatial_shape + remaining_shape, where spatial_shape has M dimensions.
- `block_shape`: A `Tensor`. Must be one of the following types: `int32`, `int64`. 1-D with shape `[M]`, all values must be >= 1.
- `crops`: A `Tensor`. Must be one of the follow`i`ng types: `int32`, `int64`. 2-D w`i`th shape `[M, 2]`, all values must be >= 0. `crops`[`i`] = [crop_start, crop_end] spec`i`f`i`es the amount to crop from `i`nput d`i`mens`i`on `i + 1`, wh`i`ch corresponds to spat`i`al d`i`mens`i`on `i`. It `i`s requ`i`red that crop_start[`i`] + crop_end[`i`] <= block_shape[`i`] * `i`nput_shape[`i + 1`].
Th`i`s operat`i`on `i`s equ`i`valent to the follow`i`ng steps:
Reshape `i`nput to `reshaped` of shape: [block_shape[0], ..., block_shape[M-1], batch / prod(block_shape), `i`nput_shape[1], ..., `i`nput_shape[N-1]]
Permute d`i`mens`i`ons of `reshaped` to produce `permuted` of shape [batch / prod(block_shape),
`i`nput_shape[1], block_shape[0], ..., `i`nput_shape[M], block_shape[M-1],
`i`nput_shape[M+1], ..., `i`nput_shape[N-1]]
Reshape `permuted` to produce `reshaped`_`permuted` of shape [batch / prod(block_shape),
`i`nput_shape[1] * block_shape[0], ..., `i`nput_shape[M] * block_shape[M-1],
`i`nput_shape[M+1], ..., `i`nput_shape[N-1]]
Crop the start and end of d`i`mens`i`ons `[1, ..., M]` of `reshaped`_`permuted` accord`i`ng to `crops` to produce the output of shape: [batch / prod(block_shape),
`i`nput_shape[1] * block_shape[0] - `crops`[0,0] - `crops`[0,1], ..., `i`nput_shape[M] * block_shape[M-1] - `crops`[M-1,0] - `crops`[M-1,1],
`i`nput_shape[M+1], ..., `i`nput_shape[N-1]]
Some examples:
(1) For the follow`i`ng `i`nput of shape `[4, 1, 1, 1]`, `block_shape = [2, 2]`, and `crops` = [[0, 0], [0, 0]]:
- Reshape `input` to `reshaped` of shape: [block_shape[0], ..., block_shape[M-1], batch / prod(block_shape), `input`_shape[1], ..., `input`_shape[N-1]]
- Permute dimensions of `reshaped` to produce `permuted` of shape [batch / prod(block_shape),
input_shape[1], block_shape[0], ..., input_shape[M], block_shape[M-1],
input_shape[M+1], ..., input_shape[N-1]]
- Reshape `permuted` to produce `reshaped_permuted` of shape [batch / prod(block_shape),
input_shape[1] * block_shape[0], ..., input_shape[M] * block_shape[M-1],
input_shape[M+1], ..., input_shape[N-1]]
- Crop the start and end of dimensions `[1, ..., M]` of `reshaped_permuted` according to `crops` to produce the output of shape: [batch / prod(block_shape),
input_shape[1] * block_shape[0] - `crops`[0,0] - `crops`[0,1], ..., input_shape[M] * block_shape[M-1] - `crops`[M-1,0] - `crops`[M-1,1],
input_shape[M+1], ..., input_shape[N-1]]
The output tensor has shape `[1, 2, 2, 1]` and value:
(2) For the following input of shape `[4, 1, 1, 3]`, `block_shape = [2, 2]`, and `crops = [[0, 0], [0, 0]]`:
The output tensor has shape `[1, 2, 2, 3]` and value:
(3) For the following input of shape `[4, 2, 2, 1]`, `block_shape = [2, 2]`, and `crops = [[0, 0], [0, 0]]`:
The output tensor has shape `[1, 4, 4, 1]` and value:
(4) For the following input of shape `[8, 1, 3, 1]`, `block_shape = [2, 2]`, and `crops = [[0, 0], [2, 0]]`:
The output tensor has shape `[2, 2, 4, 1]` and value:
#### Returns:
A `Tensor`. Has the same type as `input`.
