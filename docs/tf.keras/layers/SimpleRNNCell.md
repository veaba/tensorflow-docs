[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/SimpleRNNCell) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1109-L1268)  
---|---  
  
## Class `SimpleRNNCell`

Cell class for SimpleRNN.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.SimpleRNNCell`](/api_docs/python/tf/keras/layers/SimpleRNNCell)
  * Class [`tf.compat.v2.keras.layers.SimpleRNNCell`](/api_docs/python/tf/keras/layers/SimpleRNNCell)

#### Arguments:

  * **`units`** : Positive integer, dimensionality of the output space.
  * **`activation`** : Activation function to use. Default: hyperbolic tangent (`tanh`). If you pass `None`, no activation is applied (ie. "linear" activation: `a(x) = x`).
  * **`use_bias`** : Boolean, whether the layer uses a bias vector.
  * **`kernel_initializer`** : Initializer for the `kernel` weights matrix, used for the linear transformation of the inputs.
  * **`recurrent_initializer`** : Initializer for the `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state.
  * **`bias_initializer`** : Initializer for the bias vector.
  * **`kernel_regularizer`** : Regularizer function applied to the `kernel` weights matrix.
  * **`recurrent_regularizer`** : Regularizer function applied to the `recurrent_kernel` weights matrix.
  * **`bias_regularizer`** : Regularizer function applied to the bias vector.
  * **`kernel_constraint`** : Constraint function applied to the `kernel` weights matrix.
  * **`recurrent_constraint`** : Constraint function applied to the `recurrent_kernel` weights matrix.
  * **`bias_constraint`** : Constraint function applied to the bias vector.
  * **`dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the inputs.
  * **`recurrent_dropout`** : Float between 0 and 1. Fraction of the units to drop for the linear transformation of the recurrent state.

#### Call arguments:

  * **`inputs`** : A 2D tensor.
  * **`states`** : List of state tensors corresponding to the previous timestep.
  * **`training`** : Python boolean indicating whether the layer should behave in training mode or in inference mode. Only relevant when `dropout` or `recurrent_dropout` is used.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1149-L1185)

    
    
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
        kernel_constraint=None,
        recurrent_constraint=None,
        bias_constraint=None,
        dropout=0.0,
        recurrent_dropout=0.0,
        **kwargs
    )
    

## Methods

### `get_dropout_mask_for_cell`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1033-L1067)

    
    
    get_dropout_mask_for_cell(
        inputs,
        training,
        count=1
    )
    

Get the dropout mask for RNN cell's input.

It will create mask based on context if there isn't any existing cached mask.
If a new mask is generated, it will update the cache in the cell.

#### Args:

  * **`inputs`** : the input tensor whose shape will be used to generate dropout mask.
  * **`training`** : boolean tensor, whether its in training mode, dropout will be ignored in non-training mode.
  * **`count`** : int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.

#### Returns:

List of mask tensor, generated or cached mask based on context.

### `get_initial_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1233-L1234)

    
    
    get_initial_state(
        inputs=None,
        batch_size=None,
        dtype=None
    )
    

### `get_recurrent_dropout_mask_for_cell`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1069-L1105)

    
    
    get_recurrent_dropout_mask_for_cell(
        inputs,
        training,
        count=1
    )
    

Get the recurrent dropout mask for RNN cell.

It will create mask based on context if there isn't any existing cached mask.
If a new mask is generated, it will update the cache in the cell.

#### Args:

  * **`inputs`** : the input tensor whose shape will be used to generate dropout mask.
  * **`training`** : boolean tensor, whether its in training mode, dropout will be ignored in non-training mode.
  * **`count`** : int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.

#### Returns:

List of mask tensor, generated or cached mask based on context.

### `reset_dropout_mask`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1009-L1019)

    
    
    reset_dropout_mask()
    

Reset the cached dropout masks if any.

This is important for the RNN layer to invoke this in it call() method so that
the cached mask is cleared before calling the cell.call(). The mask should be
cached across the timestep within the same batch, but shouldn't be cached
between batches. Otherwise it will introduce unreasonable bias against certain
index of data within the batch.

### `reset_recurrent_dropout_mask`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1021-L1031)

    
    
    reset_recurrent_dropout_mask()
    

Reset the cached recurrent dropout masks if any.

This is important for the RNN layer to invoke this in it call() method so that
the cached mask is cleared before calling the cell.call(). The mask should be
cached across the timestep within the same batch, but shouldn't be cached
between batches. Otherwise it will introduce unreasonable bias against certain
index of data within the batch.

