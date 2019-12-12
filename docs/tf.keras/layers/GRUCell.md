

## Class  `GRUCell` 
GRU层的单元格类。

Inherits From: [ `GRUCell` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/layers/GRUCell)

#### 参数：
- **`units`** : Positive integer, dimensionality of the output space.
- **`activation`** : Activation function to use. Default: hyperbolic tangent( `tanh` ). If you pass None, no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`recurrent_activation`** : Activation function to use for the recurrent step.Default: sigmoid ( `sigmoid` ). If you pass  `None` , no activation isapplied (ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix,used for the linear transformation of the inputs.
- **`recurrent_initializer`** : Initializer for the  `recurrent_kernel` weights matrix, used for the linear transformation of the recurrent state.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied to the  `kernel`  weightsmatrix.
- **`recurrent_regularizer`** : Regularizer function applied to the `recurrent_kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`kernel_constraint`** : Constraint function applied to the  `kernel`  weightsmatrix.
- **`recurrent_constraint`** : Constraint function applied to the  `recurrent_kernel` weights matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.
- **`dropout`** : Float between 0 and 1. Fraction of the units to drop for thelinear transformation of the inputs.
- **`recurrent_dropout`** : Float between 0 and 1. Fraction of the units to drop forthe linear transformation of the recurrent state.
- **`implementation`** : Implementation mode, either 1 or 2.Mode 1 will structure its operations as a larger number ofsmaller dot products and additions, whereas mode 2 (default) willbatch them into fewer, larger operations. These modes willhave different performance profiles on different hardware andfor different applications.
- **`reset_after`** : GRU convention (whether to apply reset gate after orbefore matrix multiplication). False = "before",True = "after" (default and CuDNN compatible).


#### 调用参数：
- **`inputs`** : A 2D tensor.
- **`states`** : List of state tensors corresponding to the previous timestep.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode or in inference mode. Only relevant when  `dropout`  or `recurrent_dropout`  is used.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent_v2.py#L106-L143)

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
    kernel_constraint=None,
    recurrent_constraint=None,
    bias_constraint=None,
    dropout=0.0,
    recurrent_dropout=0.0,
    implementation=2,
    reset_after=True,
    **kwargs
)
 
```

## 方法


###  `get_dropout_mask_for_cell` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1033-L1067)

```
 get_dropout_mask_for_cell(
    inputs,
    training,
    count=1
)
 
```

获取RNN单元输入的退出掩码。

It will create mask based on context if there isn't any existing cachedmask. If a new mask is generated, it will update the cache in the cell.

#### 参数：
- **`inputs`** : the input tensor whose shape will be used to generate dropoutmask.
- **`training`** : boolean tensor, whether its in training mode, dropout will beignored in non-training mode.
- **`count`** : int, how many dropout mask will be generated. It is useful for cellthat has internal weights fused together.


#### 返回：
List of mask tensor, generated or cached mask based on context.

###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1761-L1762)

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
 
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

获取RNN细胞的复发性脱落面具。

It will create mask based on context if there isn't any existing cachedmask. If a new mask is generated, it will update the cache in the cell.

#### 参数：
- **`inputs`** : the input tensor whose shape will be used to generate dropoutmask.
- **`training`** : boolean tensor, whether its in training mode, dropout will beignored in non-training mode.
- **`count`** : int, how many dropout mask will be generated. It is useful for cellthat has internal weights fused together.


#### 返回：
List of mask tensor, generated or cached mask based on context.

###  `reset_dropout_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1009-L1019)

```
 reset_dropout_mask()
 
```

重置缓存的退出掩码（如果有）。

This is important for the RNN layer to invoke this in it call() method sothat the cached mask is cleared before calling the cell.call(). The maskshould be cached across the timestep within the same batch, but shouldn'tbe cached between batches. Otherwise it will introduce unreasonable biasagainst certain index of data within the batch.

###  `reset_recurrent_dropout_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1021-L1031)

```
 reset_recurrent_dropout_mask()
 
```

如果存在，则重置缓存的重复退出掩码。

This is important for the RNN layer to invoke this in it call() method sothat the cached mask is cleared before calling the cell.call(). The maskshould be cached across the timestep within the same batch, but shouldn'tbe cached between batches. Otherwise it will introduce unreasonable biasagainst certain index of data within the batch.

