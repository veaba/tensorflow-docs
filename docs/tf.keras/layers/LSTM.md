## Class LSTM
Long Short-Term Memory layer - Hochreiter 1997.
Inherits From: `LSTM`
### Aliases:
- Class `tf.compat.v2.keras.layers.LSTM`
### Used in the guide:
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``T``i``m``e`` ``s``e``r``i``e``s`` ``f``o``r``e``c``a``s``t``i``n``g``
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``L``o``a``d`` ``t``e``x``t``
Based on available runtime hardware and constraints, this layer will choose different implementations (cuDNN-based or pure-TensorFlow) to maximize the performance. If a GPU is available and all the arguments to the layer meet the requirement of the CuDNN kernel (see below for details), the layer will use a fast cuDNN implementation.
The requirements to use the cuDNN implementation are:
#### Arguments:
- `units`: Positive integer, dimensionality of the output space.
- `activation`: Activation function to use. Default: hyperbolic tangent (`tanh`). If you pass `None`, no `activation` is applied (ie. "linear" `activation`: a(x) = x).
- `recurrent_activation`: Activation function to use for the recurrent step. Default: `sigmoid` (`sigmoid`). If you pass `None`, no activation is applied (ie. "linear" activation: a(x) = x).
- `use_bias`: Boolean, whether the layer uses a bias vector.
- `kernel_initializer`: Initializer for the `kernel` weights matrix, used for the linear transformation of the inputs..
- `recurrent_initializer`: Initializer for the `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state..
- `bias_initializer`: Initializer for the bias vector.
- `unit_forget_bias`: Boolean. If True, add 1 to the bias of the forget gate at initialization. Setting it to true will also force `bias_initializer="zeros"`. This is recommended in Jozefowicz et al..
- `kernel_regularizer`: Regularizer function applied to the `kernel` weights matrix.
- `recurrent_regularizer`: Regularizer function applied to the `recurrent_kernel` weights matrix.
- `bias_regularizer`: Regularizer function applied to the bias vector.
- `activity_regularizer`: Regularizer function applied to the output of the layer (its "activation")..
- `kernel_constraint`: Constraint function applied to the `kernel` weights matrix.
- `recurrent_constraint`: Constraint function applied to the `recurrent_kernel` weights matrix.
- `bias_constraint`: Constraint function applied to the bias vector.
- `dropout`: Float between 0 and 1. Fraction of the units to drop for the linear transformation of the inputs.
- `recurrent_dropout`: Float between 0 and 1. Fraction of the units to drop for the linear transformation of the recurrent state.
- `implementation`: Implementation mode, either 1 or 2. Mode 1 will structure its operations as a larger number of smaller dot products and additions, whereas mode 2 will batch them into fewer, larger operations. These modes will have different performance profiles on different hardware and for different applications.
- `return_sequences`: Boolean. Whether to return the last output. in the output sequence, or the full sequence.
- `return_state`: Boolean. Whether to return the last state in addition to the output.
- `go_backwards`: Boolean (default False). If True, process the input sequence backwards and return the reversed sequence.
- `stateful`: Boolean (default False). If True, the last state for each sample at index i in a batch will be used as initial state for the sample of index i in the following batch.
- `unroll`: Boolean (default False). If True, the network will be `unroll`ed, else a symbolic loop will be used. Unrolling can speed-up a RNN, although it tends to be more memory-intensive. Unrolling is only suitable for short sequences.
#### Call arguments:
- `inputs`: A 3D tensor.
- `mask`: Binary tensor of shape `samples, timesteps)` indicating whether a given timestep should be `mask`ed.
- `training`: Python boolean indicating whether the layer should behave in `training` mode or in inference mode. This argument is passed to the cell when calling it. This is only relevant if `dropout` or `recurrent_dropout` is used.
- `initial_state`: List of initial state tensors to be passed to the first call of the cell.
## __init__
View source

```
 __init__(
    units,
    activation='tanh',
    recurrent_activation='sigmoid',
    use_bias=True,
    kernel_initializer='glorot_uniform',
    recurrent_initializer='orthogonal',
    bias_initializer='zeros',
    unit_forget_bias=True,
    kernel_regularizer=None,
    recurrent_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    kernel_constraint=None,
    recurrent_constraint=None,
    bias_constraint=None,
    dropout=0.0,
    recurrent_dropout=0.0,
    implementation=2,
    return_sequences=False,
    return_state=False,
    go_backwards=False,
    stateful=False,
    time_major=False,
    unroll=False,
    **kwargs
)
```
## Properties
### activation
### bias_constraint
### bias_initializer
### bias_regularizer
### dropout
### implementation
### kernel_constraint
### kernel_initializer
### kernel_regularizer
### recurrent_activation
### recurrent_constraint
### recurrent_dropout
### recurrent_initializer
### recurrent_regularizer
### states
### unit_forget_bias
### units
### use_bias
## Methods
### get_dropout_mask_for_cell
View source

```
 get_dropout_mask_for_cell(
    inputs,
    training,
    count=1
)
```
Get the dropout mask for RNN cell's input.
It will create mask based on context if there isn't any existing cached mask. If a new mask is generated, it will update the cache in the cell.
#### Args:
- `inputs`: the input tensor whose shape will be used to generate dropout mask.
- `training`: boolean tensor, whether its in `training` mode, dropout will be ignored in non-`training` mode.
- `count`: int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.
#### Returns:
List of mask tensor, generated or cached mask based on context.
### get_initial_state
View source

```
 get_initial_state(inputs)
```
### get_recurrent_dropout_mask_for_cell
View source

```
 get_recurrent_dropout_mask_for_cell(
    inputs,
    training,
    count=1
)
```
Get the recurrent dropout mask for RNN cell.
It will create mask based on context if there isn't any existing cached mask. If a new mask is generated, it will update the cache in the cell.
#### Args:
- `inputs`: the input tensor whose shape will be used to generate dropout mask.
- `training`: boolean tensor, whether its in `training` mode, dropout will be ignored in non-`training` mode.
- `count`: int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.
#### Returns:
List of mask tensor, generated or cached mask based on context.
### reset_dropout_mask
View source

```
 reset_dropout_mask()
```
Reset the cached dropout masks if any.
This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.
### reset_recurrent_dropout_mask
View source

```
 reset_recurrent_dropout_mask()
```
Reset the cached recurrent dropout masks if any.
This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.
### reset_states
View source

```
 reset_states(states=None)
```
