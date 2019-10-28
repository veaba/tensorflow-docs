Creates a recurrent neural network specified by RNNCell `cell`. (deprecated)

```
 tf.compat.v1.nn.static_rnn(
    cell,
    inputs,
    initial_state=None,
    dtype=None,
    sequence_length=None,
    scope=None
)
```
The simplest form of RNN network generated is:

```
   state = cell.zero_state(...)
  outputs = []
  for input_ in inputs:
    output, state = cell(input_, state)
    outputs.append(output)
  return (outputs, state)
```
However, a few other options are available:
An initial state can be provided. If the sequence_length vector is provided, dynamic calculation is performed. This method of calculation does not compute the RNN steps past the maximum sequence length of the minibatch (thus saving computational time), and properly propagates the state at an example's sequence length to the final state output.
The dynamic calcula`t`ion performed is, a`t` `t`ime `t` for `b`a`t`ch row `b`,

```
   (output, state)(b, t) =
    (t >= sequence_length(b))
      ? (zeros(cell.output_size), states(b, sequence_length(b) - 1))
      : cell(input(b, t), state(b, t - 1))
```
#### Args:
- `cell`: An instance of RNNCell.
- `inputs`: A length T list of `inputs`, each a `Tensor` of shape `[batch_size, input_size]`, or a nested tuple of such elements.
- `initial_state`: (optional) An initial state for the RNN. If `cell.state_size` is an integer, this must be a `Tensor` of appropriate type and shape `[batch_size, cell.state_size]`. If `cell.state_size` is a tuple, this should be a tuple of tensors having shapes `[batch_size, s] for s in cell.state_size`.
- `dtype`: (optional) The data type for the initial state and expected output. Required if initial_state is not provided or RNN state has a heterogeneous `dtype`.
- `sequence_length`: Specifies the length of each sequence in inputs. An int32 or int64 vector (tensor) size `[batch_size]`, values in `[0, T)`.
- `scope`: VariableScope for the created subgraph; defaults to "rnn".
#### Returns:
A pair (outputs, state) where:
- ``o``u``t``p``u``t``s`` ``i``s`` ``a`` ``l``e``n``g``t``h`` ``T`` ``l``i``s``t`` ``o``f`` ``o``u``t``p``u``t``s`` ``(``o``n``e`` ``f``o``r`` ``e``a``c``h`` ``i``n``p``u``t``)``,`` ``o``r`` ``a`` ``n``e``s``t``e``d`` ``t``u``p``l``e`` ``o``f`` ``s``u``c``h`` ``e``l``e``m``e``n``t``s``.``
- ``s``t``a``t``e`` ``i``s`` ``t``h``e`` ``f``i``n``a``l`` ``s``t``a``t``e``
#### Raises:
- `TypeError`: If `cell` is not an instance of RNNCell.
- `ValueError`: If `inputs` is `None` or an empty list, or if the input depth (column size) cannot be inferred from `inputs` via shape inference.
