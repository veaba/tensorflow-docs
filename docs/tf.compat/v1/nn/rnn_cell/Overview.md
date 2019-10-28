Module for constructing RNN Cells.
## Classes
`class BasicLSTMCell`: DEPRECATED: Please use `tf.compat.v1.nn.rnn_cell.LSTMCell` instead.
`class BasicRNNCell`: The most basic RNN cell.
`class DeviceWrapper`: Operator that ensures an RNNCell runs on a particular device.
`class DropoutWrapper`: Operator adding dropout to inputs and outputs of the given cell.
`class GRUCell`: Gated Recurrent Unit cell (cf.
`class LSTMCell`: Long short-term memory unit (LSTM) recurrent network cell.
`class LSTMStateTuple`: Tuple used by LSTM Cells for `state_size`, `zero_state`, and output state.
`class MultiRNNCell`: RNN cell composed sequentially of multiple simple cells.
`class RNNCell`: Abstract object representing an RNN cell.
`class ResidualWrapper`: RNNCell wrapper that ensures cell inputs are added to the outputs.
