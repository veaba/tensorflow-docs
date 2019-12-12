

## Class  `CuDNNLSTM` 
由cudnn支持的快速lstm实现。

More information about cuDNN can be found on the [NVIDIAdeveloper website](https://developer.nvidia.com/cudnn).Can only be run on GPU.

#### 参数：
- **`units`** : Positive integer, dimensionality of the output space.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix, used forthe linear transformation of the inputs.
- **`unit_forget_bias`** : Boolean. If True, add 1 to the bias of the forget gateat initialization. Setting it to true will also force `bias_initializer="zeros"` . This is recommended in [Jozefowicz etal.](http://www.jmlr.org/proceedings/papers/v37/jozefowicz15.pdf)
- **`recurrent_initializer`** : Initializer for the  `recurrent_kernel`  weightsmatrix, used for the linear transformation of the recurrent state.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied to the  `kernel`  weightsmatrix.
- **`recurrent_regularizer`** : Regularizer function applied to the `recurrent_kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied to the output of thelayer (its "activation").
- **`kernel_constraint`** : Constraint function applied to the  `kernel`  weightsmatrix.
- **`recurrent_constraint`** : Constraint function applied to the `recurrent_kernel`  weights matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.
- **`return_sequences`** : Boolean. Whether to return the last output. in theoutput sequence, or the full sequence.
- **`return_state`** : Boolean. Whether to return the last state in addition to theoutput.
- **`go_backwards`** : Boolean (default False). If True, process the input sequencebackwards and return the reversed sequence.
- **`stateful`** : Boolean (default False). If True, the last state for each sampleat index i in a batch will be used as initial state for the sample ofindex i in the following batch.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/cudnn_recurrent.py#L382-L422)

```
 __init__(
    units,
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
    return_state=False,
    go_backwards=False,
    stateful=False,
    **kwargs
)
 
```

## 属性


###  `cell` 


###  `states` 


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

