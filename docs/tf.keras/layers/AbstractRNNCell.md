[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/AbstractRNNCell) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L893-L977)  
  
  
## Class `AbstractRNNCell`

Abstract object representing an RNN cell.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.AbstractRNNCell`](/api_docs/python/tf/keras/layers/AbstractRNNCell)
  * Class [`tf.compat.v2.keras.layers.AbstractRNNCell`](/api_docs/python/tf/keras/layers/AbstractRNNCell)

This is the base class for implementing RNN cells with custom behavior.

Every `RNNCell` must have the properties below and implement `call` with the
signature `(output, next_state) = call(input, state)`.

#### Examples:

    
    
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
    

This definition of cell differs from the definition used in the literature. In
the literature, 'cell' refers to an object with a single scalar output. This
definition refers to a horizontal array of such units.

An RNN cell, in the most abstract setting, is anything that has a state and
performs some operation that takes a matrix of inputs. This operation results
in an output matrix with `self.output_size` columns. If `self.state_size` is
an integer, this operation also results in a new state matrix with
`self.state_size` columns. If `self.state_size` is a (possibly nested tuple
of) TensorShape object(s), then it should return a matching structure of
Tensors having shape `[batch_size].concatenate(s)` for each `s` in
`self.batch_size`.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L277-L363)

    
    
    __init__(
        trainable=True,
        name=None,
        dtype=None,
        dynamic=False,
        **kwargs
    )
    

## Properties

### `output_size`

Integer or TensorShape: size of outputs produced by this cell.

### `state_size`

size(s) of state(s) used by this cell.

It can be represented by an Integer, a TensorShape or a tuple of Integers or
TensorShapes.

## Methods

### `get_initial_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L976-L977)

    
    
    get_initial_state(
        inputs=None,
        batch_size=None,
        dtype=None
    )
    

