RNN that accepts a state saver for time-truncated RNN calculation. (deprecated)

```
 tf.compat.v1.nn.static_state_saving_rnn(    cell,    inputs,    state_saver,    state_name,    sequence_length=None,    scope=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Please use [ `keras.layers.RNN(cell, stateful=True)` ](/api_docs/python/tf/keras/layers/RNN), which is equivalent to this API


#### 参数：
- **`cell`** : An instance of  `RNNCell` .
- **`inputs`** : A length T list of inputs, each a  `Tensor`  of shape  `[batch_size,input_size]` .
- **`state_saver`** : A state saver object with methods  `state`  and  `save_state` .
- **`state_name`** : Python string or tuple of strings.  The name to use with thestate_saver. If the cell returns tuples of states (i.e.,  `cell.state_size` is a tuple) then  `state_name`  should be a tuple of strings having the samelength as  `cell.state_size` .  Otherwise it should be a single string.
- **`sequence_length`** : (optional) An int32/int64 vector size [batch_size]. See thedocumentation for rnn() for more details about sequence_length.
- **`scope`** : VariableScope for the created subgraph; defaults to "rnn".


#### 返回：
A pair (outputs, state) where:  outputs is a length T list of outputs (one for each input)  states is the final state

#### 加薪：
- **`TypeError`** : If  `cell`  is not an instance of RNNCell.
- **`ValueError`** : If  `inputs`  is  `None`  or an empty list, or if the arity andtype of  `state_name`  does not match that of  `cell.state_size` .
