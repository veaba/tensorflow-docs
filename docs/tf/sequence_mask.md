Returns a mask tensor representing the first N positions of each cell.
### Aliases:
- `tf.compat.v1.sequence_mask`
- `tf.compat.v2.sequence_mask`

```
 tf.sequence_mask(
    lengths,
    maxlen=None,
    dtype=tf.dtypes.bool,
    name=None
)
```
If `lengths` has shape `[d_1, d_2, ..., d_n]` the resulting tensor `mask` has `dtype` `dtype` and shape `[d_1, d_2, ..., d_n, maxlen]`, with

```
 mask[i_1, i_2, ..., i_n, j] = (j < lengths[i_1, i_2, ..., i_n])
```
#### Examples:

```
 tf.sequence_mask([1, 3, 2], 5)  # [[True, False, False, False, False],
                                #  [True, True, True, False, False],
                                #  [True, True, False, False, False]]

tf.sequence_mask([[1, 3],[2,0]])  # [[[True, False, False],
                                  #   [True, True, True]],
                                  #  [[True, True, False],
                                  #   [False, False, False]]]
```
#### Args:
- `lengths`: integer tensor, all its values <= maxlen.
- `maxlen`: scalar integer tensor, size of last dimension of returned tensor. Default is the maximum value in `lengths`.
- `dtype`: output type of the resulting tensor.
- `name`: `name` of the op.
#### Returns:
A mask tensor of shape lengths.shape + (maxlen,), cast to specified dtype.
#### Raises:
- `ValueError`: if `maxlen` is not a scalar.
