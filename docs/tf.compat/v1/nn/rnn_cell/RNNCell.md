

## Class  `RNNCell` 
表示RNN单元格的抽象对象。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

Every  `RNNCell`  must have the properties below and implement  `call`  withthe signature  `(output, next_state) = call(input, state)` .  The optionalthird input argument,  `scope` , is allowed for backwards compatibilitypurposes; but should be left off for new subclasses.

This definition of cell differs from the definition used in the literature.In the literature, 'cell' refers to an object with a single scalar output.This definition refers to a horizontal array of such units.

An RNN cell, in the most abstract setting, is anything that hasa state and performs some operation that takes a matrix of inputs.This operation results in an output matrix with  `self.output_size`  columns.If  `self.state_size`  is an integer, this operation also results in a newstate matrix with  `self.state_size`  columns.  If  `self.state_size`  is a(possibly nested tuple of) TensorShape object(s), then it should return amatching structure of Tensors having shape  `[batch_size].concatenate(s)` for each  `s`  in  `self.batch_size` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L205-L212)

```
 __init__(
    trainable=True,
    name=None,
    dtype=None,
    **kwargs
)
 
```

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

