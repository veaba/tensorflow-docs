Creates a bidirectional recurrent neural network. (deprecated)

```
 tf.compat.v1.nn.static_bidirectional_rnn(
    cell_fw,
    cell_bw,
    inputs,
    initial_state_fw=None,
    initial_state_bw=None,
    dtype=None,
    sequence_length=None,
    scope=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Please use  `keras.layers.Bidirectional(keras.layers.RNN(cell, unroll=True))` , which is equivalent to this API
Similar to the unidirectional case above (rnn) but takes input and buildsindependent forward and backward RNNs with the final forward and backwardoutputs depth-concatenated, such that the output will have the format[time][batch][cell_fw.output_size + cell_bw.output_size]. The input_size offorward and backward cell must match. The initial state for both directionsis zero by default (but can be set optionally) and no intermediate states areever returned -- the network is fully unrolled for the given (passed in)length(s) of the sequence(s) or completely unrolled if length(s) is not given.

#### 参数：
- **`cell_fw`** : An instance of RNNCell, to be used for forward direction.
- **`cell_bw`** : An instance of RNNCell, to be used for backward direction.
- **`inputs`** : A length T list of inputs, each a tensor of shape [batch_size,input_size], or a nested tuple of such elements.
- **`initial_state_fw`** : (optional) An initial state for the forward RNN. This mustbe a tensor of appropriate type and shape  `[batch_size,cell_fw.state_size]` . If  `cell_fw.state_size`  is a tuple, this should be atuple of tensors having shapes  `[batch_size, s] for s incell_fw.state_size` .
- **`initial_state_bw`** : (optional) Same as for  `initial_state_fw` , but using thecorresponding properties of  `cell_bw` .
- **`dtype`** : (optional) The data type for the initial state.  Required if eitherof the initial states are not provided.
- **`sequence_length`** : (optional) An int32/int64 vector, size  `[batch_size]` ,containing the actual lengths for each of the sequences.
- **`scope`** : VariableScope for the created subgraph; defaults to"bidirectional_rnn"


#### 返回：
A tuple (outputs, output_state_fw, output_state_bw) where:  outputs is a length  `T`  list of outputs (one for each input), which    are depth-concatenated forward and backward outputs.  output_state_fw is the final state of the forward rnn.  output_state_bw is the final state of the backward rnn.

#### 加薪：
- **`TypeError`** : If  `cell_fw`  or  `cell_bw`  is not an instance of  `RNNCell` .
- **`ValueError`** : If inputs is None or an empty list.
