

## Class  `TfLiteRNNCell` 
The most basic RNN cell.

This is used only for TfLite, it provides hints and it also makes thevariables in the desired for the tflite ops.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/experimental/examples/lstm/rnn_cell.py#L47-L84)

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

Initializes the parameters for an RNN cell.

#### Args:
- **`num_units`** : int, The number of units in the RNN cell.
- **`activation`** : Nonlinearity to use.  Default:  `tanh` . It could also be stringthat is within Keras activation function names.
- **`reuse`** : (optional) Python boolean describing whether to reuse variables inan existing scope. Raises an error if not  `True`  and the existing scopealready has the given variables.
- **`name`** : String, the name of the layer. Layers with the same name will shareweights, but to avoid mistakes we require reuse=True in such cases.
- **`dtype`** : Default dtype of the layer (default of  `None`  means use the type ofthe first input). Required when  `build`  is called before  `call` .
- **`**kwargs`** : Dict, keyword named properties for common layer attributes, like `trainable`  etc when constructing the cell from configs of get_config().


#### Raises:
- **`ValueError`** : If the existing scope already has the given variables.


## Properties


###  `graph` 
DEPRECATED FUNCTION


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Stop using this property because tf.layers layers no longer track their graph.


###  `output_size` 
Integer or TensorShape: size of outputs produced by this cell.

###  `scope_name` 


###  `state_size` 
size(s) of state(s) used by this cell.

It can be represented by an Integer, a TensorShape or a tuple of Integersor TensorShapes.

## Methods


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

#### Args:
- **`batch_size`** : int, float, or unit Tensor representing the batch size.
- **`dtype`** : the data type to use for the state.


#### Returns:
If  `state_size`  is an int or TensorShape, then the return value is a `N-D`  tensor of shape  `[batch_size, state_size]`  filled with zeros.

If  `state_size`  is a nested list or tuple, then the return value isa nested list or tuple (of the same structure) of  `2-D`  tensors withthe shapes  `[batch_size, s]`  for each s in  `state_size` .

