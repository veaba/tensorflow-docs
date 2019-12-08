

## Class  `CuDNNGRU` 
Fast GRU implementation backed by cuDNN.

More information about cuDNN can be found on the <a href="https://developer.nvidia.com/cudnn">NVIDIA
developer website</a>.
Can only be run on GPU.



#### Arguments:

- **`units`** : Positive integer, dimensionality of the output space.

- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix, used for
the linear transformation of the inputs.

- **`recurrent_initializer`** : Initializer for the  `recurrent_kernel`  weights
matrix, used for the linear transformation of the recurrent state.

- **`bias_initializer`** : Initializer for the bias vector.

- **`kernel_regularizer`** : Regularizer function applied to the  `kernel`  weights
matrix.

- **`recurrent_regularizer`** : Regularizer function applied to the
 `recurrent_kernel`  weights matrix.

- **`bias_regularizer`** : Regularizer function applied to the bias vector.

- **`activity_regularizer`** : Regularizer function applied to the output of the
layer (its "activation").

- **`kernel_constraint`** : Constraint function applied to the  `kernel`  weights
matrix.

- **`recurrent_constraint`** : Constraint function applied to the
 `recurrent_kernel`  weights matrix.

- **`bias_constraint`** : Constraint function applied to the bias vector.

- **`return_sequences`** : Boolean. Whether to return the last output in the output
sequence, or the full sequence.

- **`return_state`** : Boolean. Whether to return the last state in addition to the
output.

- **`go_backwards`** : Boolean (default False). If True, process the input sequence
backwards and return the reversed sequence.

- **`stateful`** : Boolean (default False). If True, the last state for each sample
at index i in a batch will be used as initial state for the sample of
index i in the following batch.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/cudnn_recurrent.py#L198-L236)



```
 __init__(
    units,
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
    return_sequences=False,
    return_state=False,
    go_backwards=False,
    stateful=False,
    **kwargs
)
 
```



## Properties


###  `cell` 


###  `states` 


## Methods


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

