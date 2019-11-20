[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/SimpleRNN) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1272-L1492)  
---|---  
  
## Class `SimpleRNN`

Fully-connected RNN where the output is to be fed back to input.

Inherits From:
[`RNN`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/RNN)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.SimpleRNN`](/api_docs/python/tf/keras/layers/SimpleRNN)
  * Class [`tf.compat.v2.keras.layers.SimpleRNN`](/api_docs/python/tf/keras/layers/SimpleRNN)

### Used in the guide:

  * [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)

#### Arguments:

  * **`units`** : Positive integer, dimensionality of the output space.
  * **`activation`** : Activation function to use. Default: hyperbolic tangent (`tanh`). If you pass None, no activation is applied (ie. "linear" activation: `a(x) = x`).
  * **`use_bias`** : Boolean, whether the layer uses a bias vector.
  * **`kernel_initializer`** : Initializer for the `kernel` weights matrix, used for the linear transformation of the inputs.
  * **`recurrent_initializer`** : Initializer for the `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state.
  * **`bias_initializer`** : Initializer for the bias vector.
  * **`kernel_regularizer`** : Regularizer function applied to the `kernel` weights matrix.
  * **`recurrent_regularizer`** : Regularizer function applied to the `recurrent_kernel` weights matrix.
  * **`bias_regularizer`** : Regularizer function applied to the bias vector.
  * **`activity_regularizer`** : Regularizer function applied to the output of the layer (its "activation")..
  * **`kernel_constraint`** : Constraint function applied to the `kernel` weights matrix.
  * **`recurrent_constraint`** : Constraint function applied to the `recurrent_kernel` weights matrix.
  * **`bias_constraint`** : Constraint function applied to the bias vector.
  * **`dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the inputs.
  * **`recurrent_dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the recurrent state.
  * **`return_sequences`** : Boolean. Whether to return the last output in the output sequence, or the full sequence.
  * **`return_state`** : Boolean. Whether to return the last state in addition to the output.
  * **`go_backwards`** : Boolean (default False). If True, process the input sequence backwards and return the reversed sequence.
  * **`stateful`** : Boolean (default False). If True, the last state for each sample at index i in a batch will be used as initial state for the sample of index i in the following batch.
  * **`unroll`** : Boolean (default False). If True, the network will be unrolled, else a symbolic loop will be used. Unrolling can speed-up a RNN, although it tends to be more memory-intensive. Unrolling is only suitable for short sequences.

#### Call arguments:

  * **`inputs`** : A 3D tensor.
  * **`mask`** : Binary tensor of shape `(samples, timesteps)` indicating whether a given timestep should be masked.
  * **`training`** : Python boolean indicating whether the layer should behave in training mode or in inference mode. This argument is passed to the cell when calling it. This is only relevant if `dropout` or `recurrent_dropout` is used.
  * **`initial_state`** : List of initial state tensors to be passed to the first call of the cell.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1335-L1387)

    
    
    __init__(
        units,
        activation='tanh',
        use_bias=True,
        kernel_initializer='glorot_uniform',
        recurrent_initializer='orthogonal',
        bias_initializer='zeros',
        kernel_regularizer=None,
        recurrent_regularizer=None,
        bias_regularizer=None,
        activity_regularizer=None,
        kernel_constraint=None,
        recurrent_constraint=None,
        bias_constraint=None,
        dropout=0.0,
        recurrent_dropout=0.0,
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

### `kernel_constraint`

### `kernel_initializer`

### `kernel_regularizer`

### `recurrent_constraint`

### `recurrent_dropout`

### `recurrent_initializer`

### `recurrent_regularizer`

### `states`

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
    

