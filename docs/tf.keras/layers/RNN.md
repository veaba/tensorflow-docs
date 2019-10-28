## Class RNN
Base class for recurrent layers.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.RNN`
- Class `tf.compat.v2.keras.layers.RNN`
### Used in the guide:
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
#### Call arguments:
- `inputs`: Input tensor.
- `mask`: Binary tensor of shape `samples, timesteps)` indicating whether a given timestep should be `mask`ed.
- `training`: Python boolean indicating whether the layer should behave in `training` mode or in inference mode. This argument is passed to the cell when calling it. This is for use with cells that use dropout.
- `initial_state`: List of initial state tensors to be passed to the first call of the cell.
- `constants`: List of constant tensors to be passed to the cell at each timestep.
#### Input shape:
N-D tensor with shape `batch_size, timesteps, ...)` or `timesteps, batch_size, ...)` when time_major is True.
#### Output shape:
- If `return_state`: a list of tensors. The first tensor is the output. The remaining tensors are the last states, each with shape `batch_size, state_size)`, where `state_size` could be a high dimension tensor shape.
- If `return_sequences`: N-D tensor with shape `batch_size, timesteps, output_size)`, where `output_size` could be a high dimension tensor shape, or `timesteps, batch_size, output_size)` when `time_major` is True.
- Else, N-D tensor with shape `batch_size, output_size)`, where `output_size` could be a high dimension tensor shape.
#### Masking:
This layer supports masking for input data with a variable number of timesteps. To introduce masks to your data, use an Embedding layer with the `mask_zero` parameter set to `True`.
Note on using statefulness in RNNs: You can set RNN layers to be 'stateful', which means that the states computed for the samples in one batch will be reused as initial states for the samples in the next batch. This assumes a one-to-one mapping between samples in different successive batches.
