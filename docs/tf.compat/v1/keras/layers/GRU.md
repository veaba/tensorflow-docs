

## Class  `GRU` 
Gated Recurrent Unit - Cho et al. 2014.

Inherits From: [ `RNN` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/RNN)

There are two variants. The default one is based on 1406.1078v3 andhas reset gate applied to hidden state before matrix multiplication. Theother one is based on original 1406.1078v1 and has the order reversed.

The second variant is compatible with CuDNNGRU (GPU-only) and allowsinference on CPU. Thus it has separate biases for  `kernel`  and `recurrent_kernel` . Use  `'reset_after'=True`  and `recurrent_activation='sigmoid'` .

#### 参数：
- **`units`** : Positive integer, dimensionality of the output space.
- **`activation`** : Activation function to use.Default: hyperbolic tangent ( `tanh` ).If you pass  `None` , no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`recurrent_activation`** : Activation function to usefor the recurrent step.Default: hard sigmoid ( `hard_sigmoid` ).If you pass  `None` , no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix,used for the linear transformation of the inputs.
- **`recurrent_initializer`** : Initializer for the  `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied tothe  `kernel`  weights matrix.
- **`recurrent_regularizer`** : Regularizer function applied tothe  `recurrent_kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its "activation")..
- **`kernel_constraint`** : Constraint function applied tothe  `kernel`  weights matrix.
- **`recurrent_constraint`** : Constraint function applied tothe  `recurrent_kernel`  weights matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.
- **`dropout`** : Float between 0 and 1.Fraction of the units to drop forthe linear transformation of the inputs.
- **`recurrent_dropout`** : Float between 0 and 1.Fraction of the units to drop forthe linear transformation of the recurrent state.
- **`implementation`** : Implementation mode, either 1 or 2.Mode 1 will structure its operations as a larger number ofsmaller dot products and additions, whereas mode 2 willbatch them into fewer, larger operations. These modes willhave different performance profiles on different hardware andfor different applications.
- **`return_sequences`** : Boolean. Whether to return the last outputin the output sequence, or the full sequence.
- **`return_state`** : Boolean. Whether to return the last statein addition to the output.
- **`go_backwards`** : Boolean (default False).If True, process the input sequence backwards and return thereversed sequence.
- **`stateful`** : Boolean (default False). If True, the last statefor each sample at index i in a batch will be used as initialstate for the sample of index i in the following batch.
- **`unroll`** : Boolean (default False).If True, the network will be unrolled,else a symbolic loop will be used.Unrolling can speed-up a RNN,although it tends to be more memory-intensive.Unrolling is only suitable for short sequences.
- **`time_major`** : The shape format of the  `inputs`  and  `outputs`  tensors.If True, the inputs and outputs will be in shape `(timesteps, batch, ...)` , whereas in the False case, it will be `(batch, timesteps, ...)` . Using  `time_major = True`  is a bit moreefficient because it avoids transposes at the beginning and end of theRNN calculation. However, most TensorFlow data is batch-major, so bydefault this function accepts input and emits output in batch-majorform. 
- **`reset_after`** : GRU convention (whether to apply reset gate after orbefore matrix multiplication). False = "before" (default),True = "after" (CuDNN compatible).


#### 调用参数：
- **`inputs`** : A 3D tensor.
- **`mask`** : Binary tensor of shape  `(samples, timesteps)`  indicating whethera given timestep should be masked.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode or in inference mode. This argument is passed to the cellwhen calling it. This is only relevant if  `dropout`  or `recurrent_dropout`  is used.
- **`initial_state`** : List of initial state tensors to be passed to the firstcall of the cell.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1859-L1916)

```
 __init__(
    units,
    activation='tanh',
    recurrent_activation='hard_sigmoid',
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
    implementation=1,
    return_sequences=False,
    return_state=False,
    go_backwards=False,
    stateful=False,
    unroll=False,
    reset_after=False,
    **kwargs
)
 
```

## 属性


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


## 方法


###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L593-L614)

```
 get_initial_state(inputs)
 
```

###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L806-L858)

```
 reset_states(states=None)
 
```

