

## Class  `RNNCellResidualWrapper` 
RNNCell包装器，确保单元输入添加到输出。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/rnn_cell_wrapper_v2.py#L108-L109)

```
 __init__(
    *args,
    **kwargs
)
 
```

Constructs a  `ResidualWrapper`  for  `cell` .

#### 参数：
- **`cell`** : An instance of  `RNNCell` .
- **`residual_fn`** : (Optional) The function to map raw cell inputs and raw celloutputs to the actual cell outputs of the residual network.Defaults to calling nest.map_structure on (lambda i, o: i + o), inputsand outputs.
- **`**kwargs`** : dict of keyword arguments for base layer.


## 属性


###  `output_size` 


###  `state_size` 


## 方法


###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L976-L977)

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
 
```

###  `zero_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_wrapper_impl.py#L344-L346)

```
 zero_state(
    batch_size,
    dtype
)
 
```

