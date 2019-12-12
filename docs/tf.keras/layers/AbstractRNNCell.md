

## Class  `AbstractRNNCell` 
表示RNN单元格的抽象对象。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.AbstractRNNCell` ](/api_docs/python/tf/keras/layers/AbstractRNNCell), [ `tf.compat.v2.keras.layers.AbstractRNNCell` ](/api_docs/python/tf/keras/layers/AbstractRNNCell)

这是用自定义行为实现RNN单元的基类。

Every  `RNNCell`  must have the properties below and implement  `call`  withthe signature  `(output, next_state) = call(input, state)` .

#### 示例：


```
   class MinimalRNNCell(AbstractRNNCell):

    def __init__(self, units, **kwargs):
      self.units = units
      super(MinimalRNNCell, self).__init__(**kwargs)

    @property
    def state_size(self):
      return self.units

    def build(self, input_shape):
      self.kernel = self.add_weight(shape=(input_shape[-1], self.units),
                                    initializer='uniform',
                                    name='kernel')
      self.recurrent_kernel = self.add_weight(
          shape=(self.units, self.units),
          initializer='uniform',
          name='recurrent_kernel')
      self.built = True

    def call(self, inputs, states):
      prev_output = states[0]
      h = K.dot(inputs, self.kernel)
      output = h + K.dot(prev_output, self.recurrent_kernel)
      return output, output
 
```

This definition of cell differs from the definition used in the literature.In the literature, 'cell' refers to an object with a single scalar output.This definition refers to a horizontal array of such units.

An RNN cell, in the most abstract setting, is anything that hasa state and performs some operation that takes a matrix of inputs.This operation results in an output matrix with  `self.output_size`  columns.If  `self.state_size`  is an integer, this operation also results in a newstate matrix with  `self.state_size`  columns.  If  `self.state_size`  is a(possibly nested tuple of) TensorShape object(s), then it should return amatching structure of Tensors having shape  `[batch_size].concatenate(s)` for each  `s`  in  `self.batch_size` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L277-L363)

```
 __init__(
    trainable=True,
    name=None,
    dtype=None,
    dynamic=False,
    **kwargs
)
 
```

## 属性


###  `output_size` 
整数或张量形状：此单元格生成的输出大小。

###  `state_size` 
此单元格使用的状态大小。

It can be represented by an Integer, a TensorShape or a tuple of Integersor TensorShapes.

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

