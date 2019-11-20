[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/experimental/examples/lstm/rnn_cell.py#L160-L528)  
---  
  
## Class `TFLiteLSTMCell`

Long short-term memory unit (LSTM) recurrent network cell.

This is used only for TfLite, it provides hints and it also makes the
variables in the desired for the tflite ops (transposed and seaparated).

The default non-peephole implementation is based on:

https://pdfs.semanticscholar.org/1154/0131eae85b2e11d53df7f1360eeb6476e7f4.pdf

Felix Gers, Jurgen Schmidhuber, and Fred Cummins. "Learning to forget:
Continual prediction with LSTM." IET, 850-855, 1999.

The peephole implementation is based on:

https://research.google.com/pubs/archive/43905.pdf

Hasim Sak, Andrew Senior, and Francoise Beaufays. "Long short-term memory
recurrent neural network architectures for large scale acoustic modeling."
INTERSPEECH, 2014.

The class uses optional peep-hole connections, optional cell clipping, and an
optional projection layer.

Note that this cell is not optimized for performance. Please use
`tf.contrib.cudnn_rnn.CudnnLSTM` for better performance on GPU, or
`tf.contrib.rnn.LSTMBlockCell` and `tf.contrib.rnn.LSTMBlockFusedCell` for
better performance on CPU.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/experimental/examples/lstm/rnn_cell.py#L190-L274)

    
    
    __init__(
        num_units,
        use_peepholes=False,
        cell_clip=None,
        initializer=None,
        num_proj=None,
        proj_clip=None,
        num_unit_shards=None,
        num_proj_shards=None,
        forget_bias=1.0,
        state_is_tuple=True,
        activation=None,
        reuse=None,
        name=None,
        dtype=None
    )
    

Initialize the parameters for an LSTM cell.

#### Args:

  * **`num_units`** : int, The number of units in the LSTM cell.
  * **`use_peepholes`** : bool, set True to enable diagonal/peephole connections.
  * **`cell_clip`** : (optional) A float value, if provided the cell state is clipped by this value prior to the cell output activation.
  * **`initializer`** : (optional) The initializer to use for the weight and projection matrices.
  * **`num_proj`** : (optional) int, The output dimensionality for the projection matrices. If None, no projection is performed.
  * **`proj_clip`** : (optional) A float value. If `num_proj > 0` and `proj_clip` is provided, then the projected values are clipped elementwise to within `[-proj_clip, proj_clip]`.
  * **`num_unit_shards`** : Deprecated, will be removed by Jan. 2017. Use a variable_scope partitioner instead.
  * **`num_proj_shards`** : Deprecated, will be removed by Jan. 2017. Use a variable_scope partitioner instead.
  * **`forget_bias`** : Biases of the forget gate are initialized by default to 1 in order to reduce the scale of forgetting at the beginning of the training. Must set it manually to `0.0` when restoring from CudnnLSTM trained checkpoints.
  * **`state_is_tuple`** : If True, accepted and returned states are 2-tuples of the `c_state` and `m_state`. If False, they are concatenated along the column axis. This latter behavior will soon be deprecated.
  * **`activation`** : Activation function of the inner states. Default: `tanh`.
  * **`reuse`** : (optional) Python boolean describing whether to reuse variables in an existing scope. If not `True`, and the existing scope already has the given variables, an error is raised.
  * **`name`** : String, the name of the layer. Layers with the same name will share weights, but to avoid mistakes we require reuse=True in such cases.
  * **`dtype`** : Default dtype of the layer (default of `None` means use the type of the first input). Required when `build` is called before `call`. When restoring from CudnnLSTM-trained checkpoints, use `CudnnCompatibleLSTMCell` instead.

## Properties

### `graph`

DEPRECATED FUNCTION

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Stop using this property because tf.layers
layers no longer track their graph.

### `output_size`

Integer or TensorShape: size of outputs produced by this cell.

### `scope_name`

### `state_size`

size(s) of state(s) used by this cell.

It can be represented by an Integer, a TensorShape or a tuple of Integers or
TensorShapes.

## Methods

### `get_initial_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309)

    
    
    get_initial_state(
        inputs=None,
        batch_size=None,
        dtype=None
    )
    

### `zero_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L311-L340)

    
    
    zero_state(
        batch_size,
        dtype
    )
    

Return zero-filled state tensor(s).

#### Args:

  * **`batch_size`** : int, float, or unit Tensor representing the batch size.
  * **`dtype`** : the data type to use for the state.

#### Returns:

If `state_size` is an int or TensorShape, then the return value is a `N-D`
tensor of shape `[batch_size, state_size]` filled with zeros.

If `state_size` is a nested list or tuple, then the return value is a nested
list or tuple (of the same structure) of `2-D` tensors with the shapes
`[batch_size, s]` for each s in `state_size`.

