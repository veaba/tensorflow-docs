
Creates a dynamic version of bidirectional recurrent neural network. (deprecated)

```
 tf.compat.v1.nn.bidirectional_dynamic_rnn(
    cell_fw,
    cell_bw,
    inputs,
    sequence_length=None,
    initial_state_fw=None,
    initial_state_bw=None,
    dtype=None,
    parallel_iterations=None,
    swap_memory=False,
    time_major=False,
    scope=None
)
```

Takes input and builds independent forward and backward RNNs. The input_size of forward and backward cell must match. The initial state for both directions is zero by default (but can be set optionally) and no intermediate states are ever returned -- the network is fully unrolled for the given (passed in) length(s) of the sequence(s) or completely unrolled if length(s) is not given.
#### Args:
- `cell_fw`: An instance of RNNCell, to be used for forward direction.
- `cell_bw`: An instance of RNNCell, to be used for backward direction.
- `inputs`:` `T`h``e`` `RNN` ``inputs``.`` `If` ``t``i``m``e``_``m``a`jor` `==` `F`a`l`s``e`` `(d`e`f`a`ul`t`)`,`` ``t``h``i``s`` ``m`u`s``t`` ``b``e`` ``a`` ``t``e`n`s`or` `of` ``s``h``a`p`e`:` `[`b``a``t``c``h``_``s``i``z``e``,`` ``m``a``x``_``t``i``m``e``,`` ``.``.``.`]`,`` `or` ``a`` `n`e``s``t``e`d` ``t`upl`e`` `of` ``s`u`c``h`` ``e`l`e``m``e`n`t``s``.`` `If` ``t``i``m``e``_``m``a`jor` `==` `Tru`e``,`` ``t``h``i``s`` ``m`u`s``t`` ``b``e`` ``a`` ``t``e`n`s`or` `of` ``s``h``a`p`e`:` `[`m``a``x``_``t``i``m``e``,`` ``b``a``t``c``h``_``s``i``z``e``,`` ``.``.``.`]`,`` `or` ``a`` `n`e``s``t``e`d` ``t`upl`e`` `of` ``s`u`c``h`` ``e`l`e``m``e`n`t``s``.`
- `s``e`qu`e`n`c``e``_`l`e`ng`t``h`:` `(op`t``i`on`a`l)` `An` ``i`n`t`32/`i`n`t`64` `v`e``c``t`or`,`` ``s``i``z``e`` `[`b``a``t``c``h``_``s``i``z``e`]`,`` ``c`on`t``a``i`n`i`ng` ``t``h``e`` ``a``c``t`u`a`l` `l`e`ng`t``h``s`` `for` ``e``a``c``h`` `of` ``t``h``e`` ``s``e`qu`e`n`c``e``s`` ``i`n` ``t``h``e`` ``b``a``t``c``h``.`` `If` `no`t`` `prov`i`d`e`d`,`` ``a`ll` ``b``a``t``c``h`` ``e`n`t`r`i``e``s`` ``a`r`e`` ``a``s``s`u`m``e`d` ``t`o` ``b``e`` `full` ``s``e`qu`e`n`c``e``s`;` ``a`nd` ``t``i``m``e`` `r`e`v`e`r`s``a`l` ``i``s`` ``a`ppl`i``e`d` `fro`m`` ``t``i``m``e`` ``0`` ``t`o` ``m``a``x``_``t``i``m``e`` `for` ``e``a``c``h`` ``s``e`qu`e`n`c``e``.`
- `i`n`i``t``i``a``l``_``s``t``a``t``e``_``f``w`:` `(op`t``i`on`a``l`)` `An` ``i`n`i``t``i``a``l`` ``s``t``a``t``e`` ``f`or` ``t``h``e`` ``f`or`w``a`rd` `RNN`.`` `T`h``i``s`` ``m`u`s``t`` ``b``e`` ``a`` ``t``e`n`s`or` `o`f`` ``a`ppropr`i``a``t``e`` ``t`yp`e`` ``a`nd` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``cell_fw``.``s``t``a``t``e``_``s``i``z``e`]`.`` `I`f`` ``cell_fw``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`` ``t`up`l``e``,`` ``t``h``i``s`` ``s``h`ou`l`d` ``b``e`` ``a`` ``t`up`l``e`` `o`f`` ``t``e`n`s`or`s`` ``h``a`v`i`ng` ``s``h``a`p`e``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``s`]` ``f`or` ``s`` ``i`n` ``cell_fw``.``s``t``a``t``e``_``s``i``z``e``.`
- `i`n`i``t``i``a``l``_``s``t``a``t``e``_``b``w`:` `(op`t``i`on`a``l`)` `S`a``m``e`` ``a``s`` ``f`or` ``i`n`i``t``i``a``l``_``s``t``a``t``e``_``f``w``,`` ``b`u`t`` `u`s``i`ng` ``t``h``e`` ``c`orr`e``s`pond`i`ng` `prop`e`r`t``i``e``s`` `o`f`` ``cell_bw``.`
- `dtype`:` `(op`t``i`on`a``l`)` `T`h``e`` `d`a``t``a`` ``t`yp`e`` ``f`or` ``t``h``e`` ``i`n`i``t``i``a``l`` ``s``t``a``t``e``s`` ``a`nd` ``e``x`p`e``c``t``e`d` `ou`t`pu`t``.`` `R`e`qu`i`r`e`d` ``i``f`` ``i`n`i``t``i``a``l``_``s``t``a``t``e``s`` ``a`r`e`` `no`t`` `prov`i`d`e`d` `or` `RNN` ``s``t``a``t``e``s`` ``h``a`v`e`` ``a`` ``h``e``t``e`rog`e`n`e`ou`s`` ``dtype``.`
- `parallel_iterations`:` `(D`e``f``a`u`l``t`:` `32)`.`` `T`h``e`` `nu`m``b``e`r` `o`f`` ``i``t``e`r`a``t``i`on`s`` ``t`o` `run` ``i`n` `p`a`r`a``l``l``e``l``.`` `T`h`o`s``e`` `op`e`r`a``t``i`on`s`` ``w``h``i``c``h`` `do` `no`t`` ``h``a`v`e`` ``a`ny` ``t``e``m`por`a``l`` `d`e`p`e`nd`e`n`c`y` ``a`nd` ``c``a`n` ``b``e`` `run` ``i`n` `p`a`r`a``l``l``e``l``,`` ``w``i``l``l`` ``b``e``.`` `T`h``i``s`` `p`a`r`a``m``e``t``e`r` ``t`r`a`d`e``s`` `o`f``f`` ``t``i``m``e`` ``f`or` ``s`p`a``c``e``.`` `V`a``l`u`e``s`` `>>` `1` `u`s``e`` ``m`or`e`` ``m``e``m`ory` ``b`u`t`` ``t``a`k`e`` ``l``e``s``s`` ``t``i``m``e``,`` ``w``h``i``l``e`` ``s``m``a``l``l``e`r` `v`a``l`u`e``s`` `u`s``e`` ``l``e``s``s`` ``m``e``m`ory` ``b`u`t`` ``c`o`m`pu`t``a``t``i`on`s`` ``t``a`k`e`` ``l`ong`e`r`.`
- `s``w``a`p`_``m``e``m`ory:` `Tr`a`n`s`p`a`r`e`n`t``l`y` ``s``w``a`p` ``t``h``e`` ``t``e`n`s`or`s`` `produ`c``e`d` ``i`n` ``f`or`w``a`rd` ``i`n`f``e`r`e`n`c``e`` ``b`u`t`` `n`e``e`d`e`d` ``f`or` ``b``a``c`k` `prop` ``f`ro`m`` `GPU` ``t`o` `CPU`.`` `T`h``i``s`` ``a``l``l`o`w``s`` ``t`r`a``i`n`i`ng` `RNN`s`` ``w``h``i``c``h`` ``w`ou`l`d` ``t`yp`i``c``a``l``l`y` `no`t`` ``f``i``t`` `on` ``a`` ``s``i`ng`l``e`` `GPU`,`` ``w``i``t``h`` `v`e`ry` ``m``i`n`i``m``a``l`` `(or` `no)` `p`e`r`f`or`m``a`n`c``e`` `p`e`n`a``l``t`y`.`
- `t``i``m``e``_``m``a`jor:` `T`h``e`` ``s``h``a``p``e`` ``f`or`m``a``t`` `o`f`` ``t``h``e`` ``inputs`` ``a`n`d`` ``outputs`` ``Tensors``.`` `I`f`` ``t`ru`e``,`` ``t``h``e``s``e`` ``Tensors`` ``m`u`s``t`` ``b``e`` ``s``h``a``p``e``d`` `[`m``a``x``_``t``i``m``e``,`` ``b``a``t``c``h``_``s``i``z``e``,`` ``d``e``p``t``h`]`.`` `I`f`` ``f``a``l``s``e``,`` ``t``h``e``s``e`` ``Tensors`` ``m`u`s``t`` ``b``e`` ``s``h``a``p``e``d`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``m``a``x``_``t``i``m``e``,`` ``d``e``p``t``h`]`.`` `U`s``i`ng` ``t``i``m``e``_``m``a`jor` `=` `Tru`e`` ``i``s`` ``a`` ``b``i``t`` ``m`or`e`` ``e``f``f``i``c``i``e`n`t`` ``b``e``c``a`u`s``e`` ``i``t`` ``a`vo`i``d``s`` ``t`r`a`n`s``p`o`s``e``s`` ``a``t`` ``t``h``e`` ``b``e`g`i`nn`i`ng` ``a`n`d`` ``e`n`d`` `o`f`` ``t``h``e`` `RNN` ``c``a``l``c`u`l``a``t``i`on`.`` `Ho`w``e`v`e`r`,`` ``m`o`s``t`` `T`e`n`s`orF`l`o`w`` ``d``a``t``a`` ``i``s`` ``b``a``t``c``h`-`m``a`jor`,`` ``s`o` ``b`y` ``d``e``f``a`u`l``t`` ``t``h``i``s`` ``f`un`c``t``i`on` ``a``c``c``e``p``t``s`` ``i`n`p`u`t`` ``a`n`d`` ``e``m``i``t``s`` `ou`t``p`u`t`` ``i`n` ``b``a``t``c``h`-`m``a`jor` ``f`or`m``.`
- `s``c`o`p``e`:` `V`a`r`i``a``b``l``e`S`c`o`p``e`` ``f`or` ``t``h``e`` ``c`r`e``a``t``e``d`` ``s`u`b`gr`a``p``h`;` ``d``e``f``a`u`l``t``s`` ``t`o` `"`b``i``d``i`r`e``c``t``i`on`a``l``_`rnn"
#### Returns:
[tf.concat(outputs, 2)](https://www.tensorflow.org/api_docs/python/tf/concat)A tuple (outputs, output_states) where: outputs: A tuple (output_fw, output_bw) containing the forward and the backward rnn output Tensor. If time_major == False (default), output_fw will be a Tensor shaped: [batch_size, max_time, cell_fw.output_size] and output_bw will be a Tensor shaped: [batch_size, max_time, cell_bw.output_size]. If time_major == True, output_fw will be a Tensor shaped: [max_time, batch_size, cell_fw.output_size] and output_bw will be a Tensor shaped: [max_time, batch_size, cell_bw.output_size]. It returns a tuple instead of a single concatenated Tensor, unlike in the bidirectional_rnn. If the concatenated one is preferred, the forward and backward outputs can be concatenated as . output_states: A tuple (output_state_fw, output_state_bw) containing the forward and the backward final states of bidirectional rnn.

#### Raises:
- `TypeError`: If `cell_fw` or `cell_bw` is not an instance of `RNNCell`.
