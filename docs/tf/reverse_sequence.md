Reverses variable length slices.
### Aliases:
- `tf.compat.v2.reverse_sequence`

```
 tf.reverse_sequence(
    input,
    seq_lengths,
    seq_axis=None,
    batch_axis=None,
    name=None
)
```
Th`i`s op f`i`rst sl`i`ces `input` along the d`i`mens`i`on `batch_axis`, and for each sl`i`ce `i`, reverses the f`i`rst `seq_lengths[i]` elements along the d`i`mens`i`on `seq_axis`.
The elements of `seq_lengths` must obey `seq_lengths`[i] <= input.dims[seq_dim], and `seq_lengths` must be a vector of length `input.dims[batch_dim]`.
The output sl`i`ce `i` along d`i`mens`i`on `batch_axis` `i`s then g`i`ven by `i`nput sl`i`ce `i`, w`i`th the f`i`rst `seq_lengths[i]` sl`i`ces along d`i`mens`i`on `seq_axis` reversed.
#### For example:

```
 # Given this:
batch_dim = 0
seq_dim = 1
input.dims = (4, 8, ...)
seq_lengths = [7, 2, 3, 5]

# then slices of input are reversed on seq_dim, but only up to seq_lengths:
output[0, 0:7, :, ...] = input[0, 7:0:-1, :, ...]
output[1, 0:2, :, ...] = input[1, 2:0:-1, :, ...]
output[2, 0:3, :, ...] = input[2, 3:0:-1, :, ...]
output[3, 0:5, :, ...] = input[3, 5:0:-1, :, ...]

# while entries past seq_lens are copied through:
output[0, 7:, :, ...] = input[0, 7:, :, ...]
output[1, 2:, :, ...] = input[1, 2:, :, ...]
output[2, 3:, :, ...] = input[2, 3:, :, ...]
output[3, 2:, :, ...] = input[3, 2:, :, ...]
```
In contrast, if:

```
 # Given this:
batch_dim = 2
seq_dim = 0
input.dims = (8, ?, 4, ...)
seq_lengths = [7, 2, 3, 5]

# then slices of input are reversed on seq_dim, but only up to seq_lengths:
output[0:7, :, 0, :, ...] = input[7:0:-1, :, 0, :, ...]
output[0:2, :, 1, :, ...] = input[2:0:-1, :, 1, :, ...]
output[0:3, :, 2, :, ...] = input[3:0:-1, :, 2, :, ...]
output[0:5, :, 3, :, ...] = input[5:0:-1, :, 3, :, ...]

# while entries past seq_lens are copied through:
output[7:, :, 0, :, ...] = input[7:, :, 0, :, ...]
output[2:, :, 1, :, ...] = input[2:, :, 1, :, ...]
output[3:, :, 2, :, ...] = input[3:, :, 2, :, ...]
output[2:, :, 3, :, ...] = input[2:, :, 3, :, ...]
```
#### Args:
- `input`: A `Tensor`. The `input` to reverse.
#### Returns:
A `Tensor`. Has the same type as `input`.
