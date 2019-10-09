## Class LSTMCell

Cell class for the LSTM layer.
[LSTMCell](https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/layers/LSTMCell)Inherits From: 

### Aliases:
- Class `tf.compat.v2.keras.layers.LSTMCell`
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `units`: Positive integer, dimensionality of the output space.
- `activation`: Activation function to use. Default: hyperbolic tangent (`tanh`). If you pass `None`, no `activation` is applied (ie. "linear" `activation`: a(x) = x).
- `recurrent_activation`: Activation function to use for the recurrent step. Default: `sigmoid` (`sigmoid`). If you pass `None`, no `activation` is applied (ie. "linear" `activation`: a(x) = x).
- `use_bias`: Boolean, whether the layer uses a bias vector.
- `kernel_initializer`: Initializer for the `kernel` weights matrix, used for the linear transformation of the inputs.
- `recurrent_initializer`: Initializer for the `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state.
- `bias_initializer`: Initializer for the bias vector.
- `unit_forget_bias`: Boolean. If True, add 1 to the bias of the forget gate at initialization. Setting it to true will also force `bias_initializer`="zeros". This is recommended in Jozefowicz et al.
- `kernel`_regularizer: Regularizer function applied to the `kernel` weights matrix.
- `recurrent_regularizer`: Regularizer function applied to the `recurrent_kernel` weights matrix.
- `bias_regularizer`: Regularizer function applied to the bias vector.
- `kernel`_constraint: Constraint function applied to the `kernel` weights matrix.
- `recurrent_constraint`: Constraint function applied to the `recurrent_kernel` weights matrix.
- `bias_constraint`: Constraint function applied to the bias vector.
- `dropout`: Float between 0 and 1. Fraction of the `units` to drop for the linear transformation of the inputs.
- `recurrent_dropout`: Float between 0 and 1. Fraction of the `units` to drop for the linear transformation of the recurrent state.
- `implementation`: Implementation mode, either 1 or 2. Mode 1 will structure its operations as a larger number of smaller dot products and additions, whereas mode 2 (default) will batch them into fewer, larger operations. These modes will have different performance profiles on different hardware and for different applications.
#### Call arguments:
- `inputs`: A 2D tensor.
- `states`: List of state tensors corresponding to the previous timestep.
- `training`: Python boolean indicating whether the layer should behave in `training` mode or in inference mode. Only relevant when `dropout` or `recurrent_dropout` is used.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent_v2.py#L702-L739)


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
    kernel_constraint=None,
    recurrent_constraint=None,
    bias_constraint=None,
    dropout=0.0,
    recurrent_dropout=0.0,
    implementation=2,
    **kwargs
)
```
## Methods
### get_dropout_mask_for_cell
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1033-L1067)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L2312-L2314)


```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
```
### get_recurrent_dropout_mask_for_cell
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1069-L1105)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1009-L1019)


```
 reset_dropout_mask()
```

Reset the cached dropout masks if any.

This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.
### reset_recurrent_dropout_mask
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1021-L1031)


```
 reset_recurrent_dropout_mask()
```

Reset the cached recurrent dropout masks if any.

This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.