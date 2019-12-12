

## Class  `LSTM` 
Long Short-Term Memory layer - Hochreiter 1997.

Inherits From: [ `LSTM` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/layers/LSTM)

### Used in the guide:
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)


### Used in the tutorials:
- [Time series forecasting](https://tensorflow.google.cn/tutorials/structured_data/time_series)
- [Text classification with an RNN](https://tensorflow.google.cn/tutorials/text/text_classification_rnn)
- [Load text](https://tensorflow.google.cn/tutorials/load_data/text)
Based on available runtime hardware and constraints, this layerwill choose different implementations (cuDNN-based or pure-TensorFlow)to maximize the performance. If a GPU is available and allthe arguments to the layer meet the requirement of the CuDNN kernel(see below for details), the layer will use a fast cuDNN implementation.

The requirements to use the cuDNN implementation are:

1.  `activation`  == 'tanh'
2.  `recurrent_activation`  == 'sigmoid'
3.  `recurrent_dropout`  == 0
4.  `unroll`  is False
5.  `use_bias`  is True
6. Inputs are not masked or strictly right padded.


#### Arguments:
- **`units`** : Positive integer, dimensionality of the output space.
- **`activation`** : Activation function to use.Default: hyperbolic tangent ( `tanh` ). If you pass  `None` , no activationis applied (ie. "linear" activation:  `a(x) = x` ).
- **`recurrent_activation`** : Activation function to use for the recurrent step.Default: sigmoid ( `sigmoid` ). If you pass  `None` , no activation isapplied (ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix, used forthe linear transformation of the inputs..
- **`recurrent_initializer`** : Initializer for the  `recurrent_kernel`  weightsmatrix, used for the linear transformation of the recurrent state..
- **`bias_initializer`** : Initializer for the bias vector.
- **`unit_forget_bias`** : Boolean. If True, add 1 to the bias of the forget gate atinitialization. Setting it to true will also force `bias_initializer="zeros"` . This is recommended in [Jozefowicz et  al.](http://www.jmlr.org/proceedings/papers/v37/jozefowicz15.pdf).
- **`kernel_regularizer`** : Regularizer function applied to the  `kernel`  weightsmatrix.
- **`recurrent_regularizer`** : Regularizer function applied to the `recurrent_kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied to the output of thelayer (its "activation")..
- **`kernel_constraint`** : Constraint function applied to the  `kernel`  weightsmatrix.
- **`recurrent_constraint`** : Constraint function applied to the  `recurrent_kernel` weights matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.
- **`dropout`** : Float between 0 and 1. Fraction of the units to drop for the lineartransformation of the inputs.
- **`recurrent_dropout`** : Float between 0 and 1. Fraction of the units to drop forthe linear transformation of the recurrent state.
- **`implementation`** : Implementation mode, either 1 or 2. Mode 1 will structureits operations as a larger number of smaller dot products and additions,whereas mode 2 will batch them into fewer, larger operations. These modeswill have different performance profiles on different hardware and fordifferent applications.
- **`return_sequences`** : Boolean. Whether to return the last output. in the outputsequence, or the full sequence.
- **`return_state`** : Boolean. Whether to return the last state in addition to theoutput.
- **`go_backwards`** : Boolean (default False). If True, process the input sequencebackwards and return the reversed sequence.
- **`stateful`** : Boolean (default False). If True, the last state for each sampleat index i in a batch will be used as initial state for the sample ofindex i in the following batch.
- **`unroll`** : Boolean (default False). If True, the network will be unrolled, elsea symbolic loop will be used. Unrolling can speed-up a RNN, although ittends to be more memory-intensive. Unrolling is only suitable for shortsequences.


#### Call arguments:
- **`inputs`** : A 3D tensor.
- **`mask`** : Binary tensor of shape  `(samples, timesteps)`  indicating whethera given timestep should be masked.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode or in inference mode. This argument is passed to the cellwhen calling it. This is only relevant if  `dropout`  or `recurrent_dropout`  is used.
- **`initial_state`** : List of initial state tensors to be passed to the firstcall of the cell.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent_v2.py#L826-L889)

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


###  `activation` 


###  `bias_constraint` 


###  `bias_initializer` 


###  `bias_regularizer` 


###  `dropout` 


###  `implementation` 


###  `kernel_constraint` 


###  `kernel_initializer` 


###  `kernel_regularizer` 


###  `recurrent_activation` 


###  `recurrent_constraint` 


###  `recurrent_dropout` 


###  `recurrent_initializer` 


###  `recurrent_regularizer` 


###  `states` 


###  `unit_forget_bias` 


###  `units` 


###  `use_bias` 


## Methods


###  `get_dropout_mask_for_cell` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1033-L1067)

```
 get_dropout_mask_for_cell(
    inputs,
    training,
    count=1
)
 
```

Get the dropout mask for RNN cell's input.

It will create mask based on context if there isn't any existing cachedmask. If a new mask is generated, it will update the cache in the cell.

#### Args:
- **`inputs`** : the input tensor whose shape will be used to generate dropoutmask.
- **`training`** : boolean tensor, whether its in training mode, dropout will beignored in non-training mode.
- **`count`** : int, how many dropout mask will be generated. It is useful for cellthat has internal weights fused together.


#### Returns:
List of mask tensor, generated or cached mask based on context.

###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L593-L614)

```
 get_initial_state(inputs)
 
```

###  `get_recurrent_dropout_mask_for_cell` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1069-L1105)

```
 get_recurrent_dropout_mask_for_cell(
    inputs,
    training,
    count=1
)
 
```

Get the recurrent dropout mask for RNN cell.

It will create mask based on context if there isn't any existing cachedmask. If a new mask is generated, it will update the cache in the cell.

#### Args:
- **`inputs`** : the input tensor whose shape will be used to generate dropoutmask.
- **`training`** : boolean tensor, whether its in training mode, dropout will beignored in non-training mode.
- **`count`** : int, how many dropout mask will be generated. It is useful for cellthat has internal weights fused together.


#### Returns:
List of mask tensor, generated or cached mask based on context.

###  `reset_dropout_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1009-L1019)

```
 reset_dropout_mask()
 
```

Reset the cached dropout masks if any.

This is important for the RNN layer to invoke this in it call() method sothat the cached mask is cleared before calling the cell.call(). The maskshould be cached across the timestep within the same batch, but shouldn'tbe cached between batches. Otherwise it will introduce unreasonable biasagainst certain index of data within the batch.

###  `reset_recurrent_dropout_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1021-L1031)

```
 reset_recurrent_dropout_mask()
 
```

Reset the cached recurrent dropout masks if any.

This is important for the RNN layer to invoke this in it call() method sothat the cached mask is cleared before calling the cell.call(). The maskshould be cached across the timestep within the same batch, but shouldn'tbe cached between batches. Otherwise it will introduce unreasonable biasagainst certain index of data within the batch.

###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L806-L858)

```
 reset_states(states=None)
 
```

