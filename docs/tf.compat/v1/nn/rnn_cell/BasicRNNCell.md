

## Class  `BasicRNNCell` 
最基本的RNN细胞。

Note that this cell is not optimized for performance. Please use `tf.contrib.cudnn_rnn.CudnnRNNTanh`  for better performance on GPU.

#### 参数：
- **`num_units`** : int, The number of units in the RNN cell.
- **`activation`** : Nonlinearity to use.  Default:  `tanh` . It could also be stringthat is within Keras activation function names.
- **`reuse`** : (optional) Python boolean describing whether to reuse variables in anexisting scope.  If not  `True` , and the existing scope already has thegiven variables, an error is raised.
- **`name`** : String, the name of the layer. Layers with the same name will shareweights, but to avoid mistakes we require reuse=True in such cases.
- **`dtype`** : Default dtype of the layer (default of  `None`  means use the type ofthe first input). Required when  `build`  is called before  `call` .
- **`**kwargs`** : Dict, keyword named properties for common layer attributes, like `trainable`  etc when constructing the cell from configs of get_config().


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L411-L436)

```
 __init__(
    num_units,
    activation=None,
    reuse=None,
    name=None,
    dtype=None,
    **kwargs
)
 
```

不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:This class is equivalent as tf.keras.layers.SimpleRNNCell, and will be replaced by that in Tensorflow 2.0.


## 属性


###  `graph` 
不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Stop using this property because tf.layers layers no longer track their graph.


###  `output_size` 
整数或张量形状：此单元格生成的输出大小。

###  `scope_name` 


###  `state_size` 
此单元格使用的状态大小。

It can be represented by an Integer, a TensorShape or a tuple of Integersor TensorShapes.

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L311-L340)

```
 zero_state(
    batch_size,
    dtype
)
 
```

Return zero-filled state tensor(s).

#### 参数：
- **`batch_size`** : int, float, or unit Tensor representing the batch size.
- **`dtype`** : the data type to use for the state.


#### 返回：
If  `state_size`  is an int or TensorShape, then the return value is a `N-D`  tensor of shape  `[batch_size, state_size]`  filled with zeros.

If  `state_size`  is a nested list or tuple, then the return value isa nested list or tuple (of the same structure) of  `2-D`  tensors withthe shapes  `[batch_size, s]`  for each s in  `state_size` .

