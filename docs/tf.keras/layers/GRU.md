

## Class  `GRU` 
Gated Recurrent Unit - Cho et al. 2014.

Inherits From: [ `GRU` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/layers/GRU)

### Used in the guide:
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)


### Used in the tutorials:
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)
Based on available runtime hardware and constraints, this layerwill choose different implementations (cuDNN-based or pure-TensorFlow)to maximize the performance. If a GPU is available and allthe arguments to the layer meet the requirement of the CuDNN kernel(see below for details), the layer will use a fast cuDNN implementation.

The requirements to use the cuDNN implementation are:

1.  `activation`  == 'tanh'
2.  `recurrent_activation`  == 'sigmoid'
3.  `recurrent_dropout`  == 0
4.  `unroll`  is False
5.  `use_bias`  is True
6.  `reset_after`  is True
7. Inputs are not masked or strictly right padded.
There are two variants of the GRU implementation. The default one is based on[v3](https://arxiv.org/abs/1406.1078v3) and has reset gate applied to hiddenstate before matrix multiplication. The other one is based on[original](https://arxiv.org/abs/1406.1078v1) and has the order reversed.

The second variant is compatible with CuDNNGRU (GPU-only) and allowsinference on CPU. Thus it has separate biases for  `kernel`  and `recurrent_kernel` . To use this variant, set  `'reset_after'=True`  and `recurrent_activation='sigmoid'` .

#### Arguments:
- **`units`** : Positive integer, dimensionality of the output space.
- **`activation`** : Activation function to use.Default: hyperbolic tangent ( `tanh` ).If you pass  `None` , no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`recurrent_activation`** : Activation function to usefor the recurrent step.Default: sigmoid ( `sigmoid` ).If you pass  `None` , no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix,used for the linear transformation of the inputs.
- **`recurrent_initializer`** : Initializer for the  `recurrent_kernel` weights matrix,used for the linear transformation of the recurrent state.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied tothe  `kernel`  weights matrix.
- **`recurrent_regularizer`** : Regularizer function applied tothe  `recurrent_kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its "activation")..
- **`kernel_constraint`** : Constraint function applied tothe  `kernel`  weights matrix.
- **`recurrent_constraint`** : Constraint function applied tothe  `recurrent_kernel`  weights matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.
- **`dropout`** : Float between 0 and 1.Fraction of the units to drop for the linear transformation of the inputs.
- **`recurrent_dropout`** : Float between 0 and 1.Fraction of the units to drop forthe linear transformation of the recurrent state.
- **`implementation`** : Implementation mode, either 1 or 2.Mode 1 will structure its operations as a larger number ofsmaller dot products and additions, whereas mode 2 willbatch them into fewer, larger operations. These modes willhave different performance profiles on different hardware andfor different applications.
- **`return_sequences`** : Boolean. Whether to return the last outputin the output sequence, or the full sequence.
- **`return_state`** : Boolean. Whether to return the last statein addition to the output.
- **`go_backwards`** : Boolean (default False).If True, process the input sequence backwards and return thereversed sequence.
- **`stateful`** : Boolean (default False). If True, the last statefor each sample at index i in a batch will be used as initialstate for the sample of index i in the following batch.
- **`unroll`** : Boolean (default False).If True, the network will be unrolled,else a symbolic loop will be used.Unrolling can speed-up a RNN,although it tends to be more memory-intensive.Unrolling is only suitable for short sequences.
- **`reset_after`** : GRU convention (whether to apply reset gate after orbefore matrix multiplication). False = "before",True = "after" (default and CuDNN compatible).


#### Call arguments:
- **`inputs`** : A 3D tensor.
- **`mask`** : Binary tensor of shape  `(samples, timesteps)`  indicating whethera given timestep should be masked.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode or in inference mode. This argument is passed to the cellwhen calling it. This is only relevant if  `dropout`  or `recurrent_dropout`  is used.
- **`initial_state`** : List of initial state tensors to be passed to the firstcall of the cell.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent_v2.py#L249-L309)

```
 __init__(
    units,
    activation='tanh',
    recurrent_activation='sigmoid',
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
    implementation=2,
    return_sequences=False,
    return_state=False,
    go_backwards=False,
    stateful=False,
    unroll=False,
    time_major=False,
    reset_after=True,
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


###  `reset_after` 


###  `states` 


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

