

## Class  `TFLiteLSTMCell` 
Long short-term memory unit (LSTM) recurrent network cell.

This is used only for TfLite, it provides hints and it also makes thevariables in the desired for the tflite ops  (transposed and seaparated).

The default non-peephole implementation is based on:

https://pdfs.semanticscholar.org/1154/0131eae85b2e11d53df7f1360eeb6476e7f4.pdf

Felix Gers, Jurgen Schmidhuber, and Fred Cummins."Learning to forget: Continual prediction with LSTM." IET, 850-855, 1999.

窥视孔的实现基于：

https://research.google.com/pubs/archive/43905.pdf

Hasim Sak, Andrew Senior, and Francoise Beaufays."Long short-term memory recurrent neural network architectures for large scale acoustic modeling." INTERSPEECH, 2014.

The class uses optional peep-hole connections, optional cell clipping, andan optional projection layer.

Note that this cell is not optimized for performance. Please use `tf.contrib.cudnn_rnn.CudnnLSTM`  for better performance on GPU, or `tf.contrib.rnn.LSTMBlockCell`  and  `tf.contrib.rnn.LSTMBlockFusedCell`  forbetter performance on CPU.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/experimental/examples/lstm/rnn_cell.py#L190-L274)

```
 __init__(
    num_units,
    use_peepholes=False,
    cell_clip=None,
    initializer=None,
    num_proj=None,
    proj_clip=None,
    num_unit_shards=None,
    num_proj_shards=None,
    forget_bias=1.0,
    state_is_tuple=True,
    activation=None,
    reuse=None,
    name=None,
    dtype=None
)
 
```

初始化lstm单元的参数。

#### 参数：
- **`num_units`** : int, The number of units in the LSTM cell.
- **`use_peepholes`** : bool, set True to enable diagonal/peephole connections.
- **`cell_clip`** : (optional) A float value, if provided the cell state is clippedby this value prior to the cell output activation.
- **`initializer`** : (optional) The initializer to use for the weight andprojection matrices.
- **`num_proj`** : (optional) int, The output dimensionality for the projectionmatrices.  If None, no projection is performed.
- **`proj_clip`** : (optional) A float value.  If  `num_proj > 0`  and  `proj_clip`  isprovided, then the projected values are clipped elementwise to within `[-proj_clip, proj_clip]` .
- **`num_unit_shards`** : Deprecated, will be removed by Jan. 2017. Use avariable_scope partitioner instead.
- **`num_proj_shards`** : Deprecated, will be removed by Jan. 2017. Use avariable_scope partitioner instead.
- **`forget_bias`** : Biases of the forget gate are initialized by default to 1 inorder to reduce the scale of forgetting at the beginning of thetraining. Must set it manually to  `0.0`  when restoring from CudnnLSTMtrained checkpoints.
- **`state_is_tuple`** : If True, accepted and returned states are 2-tuples of the `c_state`  and  `m_state` .  If False, they are concatenated along thecolumn axis.  This latter behavior will soon be deprecated.
- **`activation`** : Activation function of the inner states.  Default:  `tanh` .
- **`reuse`** : (optional) Python boolean describing whether to reuse variables inan existing scope.  If not  `True` , and the existing scope already hasthe given variables, an error is raised.
- **`name`** : String, the name of the layer. Layers with the same name will shareweights, but to avoid mistakes we require reuse=True in such cases.
- **`dtype`** : Default dtype of the layer (default of  `None`  means use the type ofthe first input). Required when  `build`  is called before  `call` .  Whenrestoring from CudnnLSTM-trained checkpoints, use `CudnnCompatibleLSTMCell`  instead.


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

