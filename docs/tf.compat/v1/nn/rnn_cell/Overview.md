[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v1/nn/rnn_cell)  
---  
  
Module for constructing RNN Cells.

## Classes

[`class
BasicLSTMCell`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/BasicLSTMCell):
DEPRECATED: Please use
[`tf.compat.v1.nn.rnn_cell.LSTMCell`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/LSTMCell)
instead.

[`class
BasicRNNCell`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/BasicRNNCell):
The most basic RNN cell.

[`class
DeviceWrapper`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/DeviceWrapper):
Operator that ensures an RNNCell runs on a particular device.

[`class
DropoutWrapper`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/DropoutWrapper):
Operator adding dropout to inputs and outputs of the given cell.

[`class
GRUCell`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/GRUCell):
Gated Recurrent Unit cell (cf.

[`class
LSTMCell`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/LSTMCell):
Long short-term memory unit (LSTM) recurrent network cell.

[`class
LSTMStateTuple`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/LSTMStateTuple):
Tuple used by LSTM Cells for `state_size`, `zero_state`, and output state.

[`class
MultiRNNCell`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/MultiRNNCell):
RNN cell composed sequentially of multiple simple cells.

[`class
RNNCell`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/RNNCell):
Abstract object representing an RNN cell.

[`class
ResidualWrapper`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/nn/rnn_cell/ResidualWrapper):
RNNCell wrapper that ensures cell inputs are added to the outputs.

