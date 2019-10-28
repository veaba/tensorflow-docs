Iterates over the time dimension of a tensor.
### Aliases:
- `tf.compat.v1.keras.backend.rnn`
- `tf.compat.v2.keras.backend.rnn`

```
 tf.keras.backend.rnn(
    step_function,
    inputs,
    initial_states,
    go_backwards=False,
    mask=None,
    constants=None,
    unroll=False,
    input_length=None,
    time_major=False,
    zero_output_for_mask=False
)
```
#### Arguments:
- `step_function`: RNN step function. Args; input; Tensor with shape `samples, ...)` (no time dimension), representing input for the batch of samples at a certain time step. states; List of tensors. Returns; output; Tensor with shape `samples, output_dim)` (no time dimension). new_states; List of tensors, same length and shapes as 'states'. The first state in the list must be the output tensor at the previous timestep.
- `inputs`: Tensor of temporal data of shape `samples, time, ...)` (at least 3D), or nested tensors, and each of which has shape `samples, time, ...)`.
- `initial_states`: Tensor with shape `samples, state_size)` (no time dimension), containing the initial values for the states used in the step function. In the case that state_size is in a nested shape, the shape of `initial_states` will also follow the nested structure.
- `go_backwards`: Boolean. If True, do the iteration over the time dimension in reverse order and return the reversed sequence.
- `mask`: Binary tensor with shape `samples, time, 1)`, with a zero for every element that is `mask`ed.
- `constants`: List of constant values passed at each step.
- `unroll`: Whether to `unroll` the RNN or to use a symbolic `while_loop`.
- `input_length`: If specified, assume time dimension is of this length.
- `time_major`: Boolean. If true, the inputs and outputs will be in shape `timesteps, batch, ...)`, whereas in the False case, it will be `batch, timesteps, ...)`. Using `time_major` = True is a bit more efficient because it avoids transposes at the beginning and end of the RNN calculation. However, most TensorFlow data is batch-major, so by default this function accepts input and emits output in batch-major form.
- `zero_output_for_mask`: Boolean. If True, the output for masked timestep will be zeros, whereas in the False case, output from previous timestep is returned.
#### Returns:
A `t`uple, `last_output, outputs, new_states)`. la`s``t`_ou`t`pu`t`: `t`he la`t`e`s``t` ou`t`pu`t` of `t`he rnn, of `s`hape `samples, ...)` ou`t`pu`t``s`: `t`en`s`or wi`t`h `s`hape `samples, time, ...)` where each en`t`ry `outputs[s, t]` i`s` `t`he ou`t`pu`t` of `t`he `s``t`ep func`t`ion a`t` `t`ime `t` for `s`ample `s`. new_`s``t`a`t`e`s`: li`s``t` of `t`en`s`or`s`, la`t`e`s``t` `s``t`a`t`e`s` re`t`urned by `t`he `s``t`ep func`t`ion, of `s`hape `samples, ...)`.
#### Raises:
- `ValueError`: if input dimension is less than 3.
- `ValueError`: if `unroll` is `True` but input timestep is not a fixed number.
