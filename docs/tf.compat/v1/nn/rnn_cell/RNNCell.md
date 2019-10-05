## Class RNNCell

Abstract object representing an RNN cell.
[Layer](https://www.tensorflow.org/api_docs/python/tf/compat/v1/layers/Layer)Inherits From: 


Every RNNCell must have the properties below and implement call with the signature (output, next_state) = call(input, state). The optional third input argument, scope, is allowed for backwards compatibility purposes; but should be left off for new subclasses.

This definition of cell differs from the definition used in the literature. In the literature, 'cell' refers to an object with a single scalar output. This definition refers to a horizontal array of such units.

An RNN cell, in the most abstract setting, is anything that has a state and performs some operation that takes a matrix of inputs. This operation results in an output matrix with self.output_size columns. If self.state_size is an integer, this operation also results in a new state matrix with self.state_size columns. If self.state_size is a (possibly nested tuple of) TensorShape object(s), then it should return a matching structure of Tensors having shape [batch_size].concatenate(s) for each s in self.batch_size.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L205-L212)


```
 __init__(
    trainable=True,
    name=None,
    dtype=None,
    **kwargs
)
```
## Properties
### graph

DEPRECATED FUNCTION
### output_size

Integer or TensorShape: size of outputs produced by this cell.
### scope_name
### state_size

size(s) of state(s) used by this cell.

It can be represented by an Integer, a TensorShape or a tuple of Integers or TensorShapes.
## Methods
### get_initial_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309)


```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
```
### zero_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L311-L340)


```
 zero_state(
    batch_size,
    dtype
)
```

Return zero-filled state tensor(s).
#### Args:
- `batch_size`: int, float, or unit Tensor representing the batch size.
- `dtype`: the data type to use for the state.
#### Returns:

If state_size is an int or TensorShape, then the return value is a N-D tensor of shape [batch_size, state_size] filled with zeros.

If state_size is a nested list or tuple, then the return value is a nested list or tuple (of the same structure) of 2-D tensors with the shapes [batch_size, s] for each s in state_size.
