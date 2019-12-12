

## Class  `MultiRNNCell` 
RNN细胞由多个简单细胞组成。

Inherits From: [ `RNNCell` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/RNNCell)

#### 示例：


```
 num_units = [128, 64]
cells = [BasicLSTMCell(num_units=n) for n in num_units]
stacked_rnn_cell = MultiRNNCell(cells)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L1210-L1249)

```
 __init__(
    cells,
    state_is_tuple=True
)
 
```

Create a RNN cell composed sequentially of a number of RNNCells. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:This class is equivalent as tf.keras.layers.StackedRNNCells, and will be replaced by that in Tensorflow 2.0.


#### 参数：
- **`cells`** : list of RNNCells that will be composed in this order.
- **`state_is_tuple`** : If True, accepted and returned states are n-tuples, where `n = len(cells)` .  If False, the states are all concatenated along thecolumn axis.  This latter behavior will soon be deprecated.


#### 加薪：
- **`ValueError`** : if cells is empty (not allowed), or at least one of the cellsreturns a state tuple but the flag  `state_is_tuple`  is  `False` .


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L1262-L1269)

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

