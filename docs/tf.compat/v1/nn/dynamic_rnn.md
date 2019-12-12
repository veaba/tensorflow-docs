Creates a recurrent neural network specified by RNNCell  `cell` . (deprecated)

```
 tf.compat.v1.nn.dynamic_rnn(    cell,    inputs,    sequence_length=None,    initial_state=None,    dtype=None,    parallel_iterations=None,    swap_memory=False,    time_major=False,    scope=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Please use [ `keras.layers.RNN(cell)` ](/api_docs/python/tf/keras/layers/RNN), which is equivalent to this API
Performs fully dynamic unrolling of  `inputs` .

#### Example:


```
 # create a BasicRNNCell
rnn_cell = tf.compat.v1.nn.rnn_cell.BasicRNNCell(hidden_size)

# 'outputs' is a tensor of shape [batch_size, max_time, cell_state_size]

# defining initial state
initial_state = rnn_cell.zero_state(batch_size, dtype=tf.float32)

# 'state' is a tensor of shape [batch_size, cell_state_size]
outputs, state = tf.compat.v1.nn.dynamic_rnn(rnn_cell, input_data,
                                   initial_state=initial_state,
                                   dtype=tf.float32)
 
```

```
 # create 2 LSTMCells
rnn_layers = [tf.compat.v1.nn.rnn_cell.LSTMCell(size) for size in [128, 256]]

# create a RNN cell composed sequentially of a number of RNNCells
multi_rnn_cell = tf.compat.v1.nn.rnn_cell.MultiRNNCell(rnn_layers)

# 'outputs' is a tensor of shape [batch_size, max_time, 256]
# 'state' is a N-tuple where N is the number of LSTMCells containing a
# tf.nn.rnn_cell.LSTMStateTuple for each cell
outputs, state = tf.compat.v1.nn.dynamic_rnn(cell=multi_rnn_cell,
                                   inputs=data,
                                   dtype=tf.float32)
 
```

#### Args:
- **`cell`** : An instance of RNNCell.
- **`inputs`** : The RNN inputs.If  `time_major == False`  (default), this must be a  `Tensor`  of shape: `[batch_size, max_time, ...]` , or a nested tuple of such elements.If  `time_major == True` , this must be a  `Tensor`  of shape:  `[max_time,batch_size, ...]` , or a nested tuple of such elements. This may also bea (possibly nested) tuple of Tensors satisfying this property.  Thefirst two dimensions must match across all the inputs, but otherwise theranks and other shape components may differ. In this case, input to `cell`  at each time-step will replicate the structure of these tuples,except for the time dimension (from which the time is taken). The inputto  `cell`  at each time step will be a  `Tensor`  or (possibly nested)tuple of Tensors each with dimensions  `[batch_size, ...]` .
- **`sequence_length`** : (optional) An int32/int64 vector sized  `[batch_size]` . Usedto copy-through state and zero-out outputs when past a batch element'ssequence length.  This parameter enables users to extract the last validstate and properly padded outputs, so it is provided for correctness.
- **`initial_state`** : (optional) An initial state for the RNN. If  `cell.state_size` is an integer, this must be a  `Tensor`  of appropriate type and shape `[batch_size, cell.state_size]` . If  `cell.state_size`  is a tuple, thisshould be a tuple of tensors having shapes  `[batch_size, s] for s incell.state_size` .
- **`dtype`** : (optional) The data type for the initial state and expected output.Required if initial_state is not provided or RNN state has a heterogeneousdtype.
- **`parallel_iterations`** : (Default: 32).  The number of iterations to run inparallel.  Those operations which do not have any temporal dependency andcan be run in parallel, will be.  This parameter trades off time forspace.  Values >> 1 use more memory but take less time, while smallervalues use less memory but computations take longer.
- **`swap_memory`** : Transparently swap the tensors produced in forward inferencebut needed for back prop from GPU to CPU.  This allows training RNNs whichwould typically not fit on a single GPU, with very minimal (or no)performance penalty.
- **`time_major`** : The shape format of the  `inputs`  and  `outputs`  Tensors. If true,these  `Tensors`  must be shaped  `[max_time, batch_size, depth]` . If false,these  `Tensors`  must be shaped  `[batch_size, max_time, depth]` . Using `time_major = True`  is a bit more efficient because it avoids transposesat the beginning and end of the RNN calculation.  However, most TensorFlowdata is batch-major, so by default this function accepts input and emitsoutput in batch-major form.
- **`scope`** : VariableScope for the created subgraph; defaults to "rnn".


#### Returns:
A pair (outputs, state) where:

- **`outputs`** : The RNN output  `Tensor` .

If time_major == False (default), this will be a  `Tensor`  shaped: `[batch_size, max_time, cell.output_size]` .

If time_major == True, this will be a  `Tensor`  shaped: `[max_time, batch_size, cell.output_size]` .

Note, if  `cell.output_size`  is a (possibly nested) tuple of integersor  `TensorShape`  objects, then  `outputs`  will be a tuple having thesame structure as  `cell.output_size` , containing Tensors having shapescorresponding to the shape data in  `cell.output_size` .


- **`state`** : The final state.  If  `cell.state_size`  is an int, thiswill be shaped  `[batch_size, cell.state_size]` .  If it is a `TensorShape` , this will be shaped  `[batch_size] + cell.state_size` .If it is a (possibly nested) tuple of ints or  `TensorShape` , this willbe a tuple having the corresponding shapes. If cells are  `LSTMCells`  `state`  will be a tuple containing a  `LSTMStateTuple`  for each cell.


#### Raises:
- **`TypeError`** : If  `cell`  is not an instance of RNNCell.
- **`ValueError`** : If inputs is None or an empty list.
