
Creates a recurrent neural network specified by RNNCell cell. (deprecated)

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

The dynamic calculation performed is, at time t for batch row b,

```
   (output, state)(b, t) =
    (t >= sequence_length(b))
      ? (zeros(cell.output_size), states(b, sequence_length(b) - 1))
      : cell(input(b, t), state(b, t - 1))
```
#### Args:
- `cell`: An instance of RNNCell.
- `inputs`:` `A` `l`e``n`g`t``h`` `T` `l`i``s``t`` `of` ``inputs``,`` ``e``a``c``h`` ``a`` ``Tensor`` `of` ``s``h``a``p``e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``i``n``p``u``t``_``s``i``z``e`]`,`` `or` ``a`` ``n``e``s``t``e`d` ``t``u``p`l`e`` `of` ``s``u``c``h`` ``e`l`e`m`e``n``t``s`.
- `i``n``i``t``i``a``l``_``s``t``a``t``e`:` `(o`p``t``i`o`n``a``l`)` `A`n`` ``i``n``i``t``i``a``l`` ``s``t``a``t``e`` `for` ``t``h``e`` `RNN`.`` `If` ``cell``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a``n`` ``i``n``t``e`g`e`r`,`` ``t``h``i``s`` `m`u``s``t`` ``b``e`` ``a`` ``Tensor`` `of` ``a``p``p`ro`p`r`i``a``t``e`` ``t`y`p``e`` ``a``n`d` ``s``h``a``p``e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``cell``.``s``t``a``t``e``_``s``i``z``e`]`.`` `If` ``cell``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`` ``t``u``p``l``e``,`` ``t``h``i``s`` ``s``h`o`u``l`d` ``b``e`` ``a`` ``t``u``p``l``e`` `of` ``t``e``n``s`or`s`` ``h``a`v`i``n`g` ``s``h``a``p``e``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``s`]` `for` ``s`` ``i``n`` ``cell``.``s``t``a``t``e``_``s``i``z``e``.`
- `dtype`:` `(o`p``t``i`o`n``a``l`)` `T`h``e`` `d`a``t``a`` ``t`y`p``e`` `for` ``t``h``e`` ``i``n``i``t``i``a``l`` ``s``t``a``t``e`` ``a``n`d` ``e`x`p``e``c``t``e`d` `o`u``t``p``u``t``.`` `R`e`q`u``i`r`e`d` ``i`f` ``i``n``i``t``i``a``l``_``s``t``a``t``e`` ``i``s`` ``n`o`t`` ``p`rov`i`d`e`d` `or` `RNN` ``s``t``a``t``e`` ``h``a``s`` ``a`` ``h``e``t``e`rog`e``n``e`o`u``s`` ``dtype``.`
#### Returns:

A pair (outputs, state) where:
- ``o``u``t``p``u``t``s`` ``i``s`` ``a`` ``l``e``n``g``t``h`` ``T`` ``l``i``s``t`` ``o``f`` ``o``u``t``p``u``t``s`` ``(``o``n``e`` ``f``o``r`` ``e``a``c``h`` ``i``n``p``u``t``)``,`` ``o``r`` ``a`` ``n``e``s``t``e``d`` ``t``u``p``l``e`` ``o``f`` ``s``u``c``h`` ``e``l``e``m``e``n``t``s``.``
- ``s``t``a``t``e`` ``i``s`` ``t``h``e`` ``f``i``n``a``l`` ``s``t``a``t``e``
#### Raises:
- `TypeError`: If `cell` is not an instance of RNNCell.
- `ValueError`: If `inputs` is `None` or an empty list, or if the input depth (column size) cannot be inferred from `inputs` via shape inference.
