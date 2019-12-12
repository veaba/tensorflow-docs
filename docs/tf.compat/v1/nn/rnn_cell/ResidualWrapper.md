

## Class  `ResidualWrapper` 
RNNCell包装器，确保单元输入添加到输出。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L1181-L1182)

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


###  `graph` 
不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Stop using this property because tf.layers layers no longer track their graph.


###  `output_size` 


###  `scope_name` 


###  `state_size` 


## 方法


###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309)

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

