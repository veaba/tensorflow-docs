
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

Similar to the unidirectional case above (rnn) but takes input and builds independent forward and backward RNNs with the final forward and backward outputs depth-concatenated, such that the output will have the format [time][batch][cell_fw.output_size + cell_bw.output_size]. The input_size of forward and backward cell must match. The initial state for both directions is zero by default (but can be set optionally) and no intermediate states are ever returned -- the network is fully unrolled for the given (passed in) length(s) of the sequence(s) or completely unrolled if length(s) is not given.
#### Args:
- `cell_fw`: An instance of RNNCell, to be used for forward direction.
- `cell_bw`: An instance of RNNCell, to be used for backward direction.
- `inputs`: A length T list of `inputs`, each a tensor of shape [batch_size, input_size], or a nested tuple of such elements.
- `initial_state_fw`:` `(op`t``i`on`a``l`)` `An` ``i`n`i``t``i``a``l`` ``s``t``a``t``e`` ``f`or` ``t``h``e`` ``f`or`w``a`rd` `RNN`.`` `T`h``i``s`` `mu`s``t`` ``b``e`` ``a`` ``t``e`n`s`or` `o`f`` ``a`ppropr`i``a``t``e`` ``t`yp`e`` ``a`nd` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``cell_fw``.``s``t``a``t``e``_``s``i``z``e`]`.`` `I`f`` ``cell_fw``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`` ``t`up`l``e``,`` ``t``h``i``s`` ``s``h`ou`l`d` ``b``e`` ``a`` ``t`up`l``e`` `o`f`` ``t``e`n`s`or`s`` ``h``a`v`i`ng` ``s``h``a`p`e``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``s`]` ``f`or` ``s`` ``i`n` ``cell_fw``.``s``t``a``t``e``_``s``i``z``e``.`
- `i`n`i``t``i``a``l``_``s``t``a``t``e``_``b``w`:` `(op`t``i`on`a``l`)` `S`a`m`e`` ``a``s`` ``f`or` ``initial_state_fw``,`` ``b`u`t`` `u`s``i`ng` ``t``h``e`` ``c`orr`e``s`pond`i`ng` `prop`e`r`t``i``e``s`` `o`f`` ``cell_bw``.`
- `dtype`:` `(op`t``i`on`a``l`)` `T`h``e`` `d`a``t``a`` ``t`yp`e`` ``f`or` ``t``h``e`` ``i`n`i``t``i``a``l`` ``s``t``a``t``e``.`` `R`e`qu`i`r`e`d` ``i``f`` ``e``i``t``h``e`r` `o`f`` ``t``h``e`` ``i`n`i``t``i``a``l`` ``s``t``a``t``e``s`` ``a`r`e`` `no`t`` `prov`i`d`e`d`.`
- `s``e`qu`e`n`c``e``_``l``e`ng`t``h`:` `(op`t``i`on`a``l`)` `An` ``i`n`t`32/`i`n`t`64` `v`e``c``t`or`,`` ``s``i``z``e`` `[`b``a``t``c``h``_``s``i``z``e`]`,`` ``c`on`t``a``i`n`i`ng` ``t``h``e`` ``a``c``t`u`a``l`` ``l``e`ng`t``h``s`` ``f`or` ``e``a``c``h`` `o`f`` ``t``h``e`` ``s``e`qu`e`n`c``e``s``.`
- `s``c`op`e`:` `V`a`r`i``a``b``l``e`S`c`op`e`` ``f`or` ``t``h``e`` ``c`r`e``a``t``e`d` ``s`u`b`gr`a`p`h`;` `d`e``f``a`u`l``t``s`` ``t`o` `"`b``i`d`i`r`e``c``t``i`on`a``l``_`rnn"
#### Returns:

A tuple (outputs, output_state_fw, output_state_bw) where: outputs is a length T list of outputs (one for each input), which are depth-concatenated forward and backward outputs. output_state_fw is the final state of the forward rnn. output_state_bw is the final state of the backward rnn.
#### Raises:
- `TypeError`: If `cell_fw` or `cell_bw` is not an instance of `RNNCell`.
- `ValueError`: If inputs is None or an empty list.
