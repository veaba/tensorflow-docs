[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L2396-L2666)  
---  
  
## Class `LSTM`

Long Short-Term Memory layer - Hochreiter 1997.

Inherits From:
[`RNN`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/RNN)

Note that this cell is not optimized for performance on GPU. Please use
[`tf.compat.v1.keras.layers.CuDNNLSTM`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/layers/CuDNNLSTM)
for better performance on GPU.

#### Arguments:

  * **`units`** : Positive integer, dimensionality of the output space.
  * **`activation`** : Activation function to use. Default: hyperbolic tangent (`tanh`). If you pass `None`, no activation is applied (ie. "linear" activation: `a(x) = x`).
  * **`recurrent_activation`** : Activation function to use for the recurrent step. Default: hard sigmoid (`hard_sigmoid`). If you pass `None`, no activation is applied (ie. "linear" activation: `a(x) = x`).
  * **`use_bias`** : Boolean, whether the layer uses a bias vector.
  * **`kernel_initializer`** : Initializer for the `kernel` weights matrix, used for the linear transformation of the inputs..
  * **`recurrent_initializer`** : Initializer for the `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state.
  * **`bias_initializer`** : Initializer for the bias vector.
  * **`unit_forget_bias`** : Boolean. If True, add 1 to the bias of the forget gate at initialization. Setting it to true will also force `bias_initializer="zeros"`. This is recommended in [Jozefowicz et al.](http://www.jmlr.org/proceedings/papers/v37/jozefowicz15.pdf).
  * **`kernel_regularizer`** : Regularizer function applied to the `kernel` weights matrix.
  * **`recurrent_regularizer`** : Regularizer function applied to the `recurrent_kernel` weights matrix.
  * **`bias_regularizer`** : Regularizer function applied to the bias vector.
  * **`activity_regularizer`** : Regularizer function applied to the output of the layer (its "activation")..
  * **`kernel_constraint`** : Constraint function applied to the `kernel` weights matrix.
  * **`recurrent_constraint`** : Constraint function applied to the `recurrent_kernel` weights matrix.
  * **`bias_constraint`** : Constraint function applied to the bias vector.
  * **`dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the inputs.
  * **`recurrent_dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the recurrent state.
  * **`implementation`** : Implementation mode, either 1 or 2. Mode 1 will structure its operations as a larger number of smaller dot products and additions, whereas mode 2 will batch them into fewer, larger operations. These modes will have different performance profiles on different hardware and for different applications.
  * **`return_sequences`** : Boolean. Whether to return the last output. in the output sequence, or the full sequence.
  * **`return_state`** : Boolean. Whether to return the last state in addition to the output.
  * **`go_backwards`** : Boolean (default False). If True, process the input sequence backwards and return the reversed sequence.
  * **`stateful`** : Boolean (default False). If True, the last state for each sample at index i in a batch will be used as initial state for the sample of index i in the following batch.
  * **`unroll`** : Boolean (default False). If True, the network will be unrolled, else a symbolic loop will be used. Unrolling can speed-up a RNN, although it tends to be more memory-intensive. Unrolling is only suitable for short sequences.
  * **`time_major`** : The shape format of the `inputs` and `outputs` tensors. If True, the inputs and outputs will be in shape `(timesteps, batch, ...)`, whereas in the False case, it will be `(batch, timesteps, ...)`. Using `time_major = True` is a bit more efficient because it avoids transposes at the beginning and end of the RNN calculation. However, most TensorFlow data is batch-major, so by default this function accepts input and emits output in batch-major form.

#### Call arguments:

  * **`inputs`** : A 3D tensor.
  * **`mask`** : Binary tensor of shape `(samples, timesteps)` indicating whether a given timestep should be masked.
  * **`training`** : Python boolean indicating whether the layer should behave in training mode or in inference mode. This argument is passed to the cell when calling it. This is only relevant if `dropout` or `recurrent_dropout` is used.
  * **`initial_state`** : List of initial state tensors to be passed to the first call of the cell.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L2486-L2543)

    
    
    __init__(
        units,
        activation='tanh',
        recurrent_activation='hard_sigmoid',
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
        implementation=1,
        return_sequences=False,
        return_state=False,
        go_backwards=False,
        stateful=False,
        unroll=False,
        **kwargs
    )
    

## Properties

### `activation`

### `bias_constraint`

### `bias_initializer`

### `bias_regularizer`

### `dropout`

### `implementation`

### `kernel_constraint`

### `kernel_initializer`

### `kernel_regularizer`

### `recurrent_activation`

### `recurrent_constraint`

### `recurrent_dropout`

### `recurrent_initializer`

### `recurrent_regularizer`

### `states`

### `unit_forget_bias`

### `units`

### `use_bias`

## Methods

### `get_initial_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L593-L614)

    
    
    get_initial_state(inputs)
    

### `reset_states`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L806-L858)

    
    
    reset_states(states=None)
    

