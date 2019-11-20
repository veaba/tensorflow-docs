[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/ConvLSTM2D) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional_recurrent.py#L758-L1062)  
---|---  
  
## Class `ConvLSTM2D`

Convolutional LSTM.

### Aliases:

  * Class [`tf.compat.v1.keras.layers.ConvLSTM2D`](/api_docs/python/tf/keras/layers/ConvLSTM2D)
  * Class [`tf.compat.v2.keras.layers.ConvLSTM2D`](/api_docs/python/tf/keras/layers/ConvLSTM2D)

It is similar to an LSTM layer, but the input transformations and recurrent
transformations are both convolutional.

#### Arguments:

  * **`filters`** : Integer, the dimensionality of the output space (i.e. the number of output filters in the convolution).
  * **`kernel_size`** : An integer or tuple/list of n integers, specifying the dimensions of the convolution window.
  * **`strides`** : An integer or tuple/list of n integers, specifying the strides of the convolution. Specifying any stride value != 1 is incompatible with specifying any `dilation_rate` value != 1.
  * **`padding`** : One of `"valid"` or `"same"` (case-insensitive).
  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, time, ..., channels)` while `channels_first` corresponds to inputs with shape `(batch, time, channels, ...)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "channels_last".
  * **`dilation_rate`** : An integer or tuple/list of n integers, specifying the dilation rate to use for dilated convolution. Currently, specifying any `dilation_rate` value != 1 is incompatible with specifying any `strides` value != 1.
  * **`activation`** : Activation function to use. By default hyperbolic tangent activation function is applied (`tanh(x)`).
  * **`recurrent_activation`** : Activation function to use for the recurrent step.
  * **`use_bias`** : Boolean, whether the layer uses a bias vector.
  * **`kernel_initializer`** : Initializer for the `kernel` weights matrix, used for the linear transformation of the inputs.
  * **`recurrent_initializer`** : Initializer for the `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state.
  * **`bias_initializer`** : Initializer for the bias vector.
  * **`unit_forget_bias`** : Boolean. If True, add 1 to the bias of the forget gate at initialization. Use in combination with `bias_initializer="zeros"`. This is recommended in [Jozefowicz et al.](http://www.jmlr.org/proceedings/papers/v37/jozefowicz15.pdf)
  * **`kernel_regularizer`** : Regularizer function applied to the `kernel` weights matrix.
  * **`recurrent_regularizer`** : Regularizer function applied to the `recurrent_kernel` weights matrix.
  * **`bias_regularizer`** : Regularizer function applied to the bias vector.
  * **`activity_regularizer`** : Regularizer function applied to.
  * **`kernel_constraint`** : Constraint function applied to the `kernel` weights matrix.
  * **`recurrent_constraint`** : Constraint function applied to the `recurrent_kernel` weights matrix.
  * **`bias_constraint`** : Constraint function applied to the bias vector.
  * **`return_sequences`** : Boolean. Whether to return the last output in the output sequence, or the full sequence.
  * **`go_backwards`** : Boolean (default False). If True, process the input sequence backwards.
  * **`stateful`** : Boolean (default False). If True, the last state for each sample at index i in a batch will be used as initial state for the sample of index i in the following batch.
  * **`dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the inputs.
  * **`recurrent_dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the recurrent state.

#### Call arguments:

  * **`inputs`** : A 5D tensor.
  * **`mask`** : Binary tensor of shape `(samples, timesteps)` indicating whether a given timestep should be masked.
  * **`training`** : Python boolean indicating whether the layer should behave in training mode or in inference mode. This argument is passed to the cell when calling it. This is only relevant if `dropout` or `recurrent_dropout` are set.
  * **`initial_state`** : List of initial state tensors to be passed to the first call of the cell.

#### Input shape:

  * If data_format='channels_first' 5D tensor with shape: `(samples, time, channels, rows, cols)`
  * If data_format='channels_last' 5D tensor with shape: `(samples, time, rows, cols, channels)`

#### Output shape:

  * If `return_sequences`
    * If data_format='channels_first' 5D tensor with shape: `(samples, time, filters, output_row, output_col)`
    * If data_format='channels_last' 5D tensor with shape: `(samples, time, output_row, output_col, filters)`
  * Else 
    * If data_format ='channels_first' 4D tensor with shape: `(samples, filters, output_row, output_col)`
    * If data_format='channels_last' 4D tensor with shape: `(samples, output_row, output_col, filters)` where `o_row` and `o_col` depend on the shape of the filter and the padding

#### Raises:

  * **`ValueError`** : in case of invalid constructor arguments.

#### References:

  * [Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting](http://arxiv.org/abs/1506.04214v1) The current implementation does not include the feedback loop on the cells output.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional_recurrent.py#L877-L931)

    
    
    __init__(
        filters,
        kernel_size,
        strides=(1, 1),
        padding='valid',
        data_format=None,
        dilation_rate=(1, 1),
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
        return_sequences=False,
        go_backwards=False,
        stateful=False,
        dropout=0.0,
        recurrent_dropout=0.0,
        **kwargs
    )
    

## Properties

### `activation`

### `bias_constraint`

### `bias_initializer`

### `bias_regularizer`

### `data_format`

### `dilation_rate`

### `dropout`

### `filters`

### `kernel_constraint`

### `kernel_initializer`

### `kernel_regularizer`

### `kernel_size`

### `padding`

### `recurrent_activation`

### `recurrent_constraint`

### `recurrent_dropout`

### `recurrent_initializer`

### `recurrent_regularizer`

### `states`

### `strides`

### `unit_forget_bias`

### `use_bias`

## Methods

### `get_initial_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional_recurrent.py#L278-L292)

    
    
    get_initial_state(inputs)
    

### `reset_states`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional_recurrent.py#L414-L482)

    
    
    reset_states(states=None)
    

