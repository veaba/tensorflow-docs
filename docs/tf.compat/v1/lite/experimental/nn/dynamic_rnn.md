
Creates a recurrent neural network specified by RNNCell cell.

```
 tf.compat.v1.lite.experimental.nn.dynamic_rnn(
    cell,
    inputs,
    sequence_length=None,
    initial_state=None,
    dtype=None,
    parallel_iterations=None,
    swap_memory=False,
    time_major=True,
    scope=None
)
```

Performs fully dynamic unrolling of inputs.
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
- `cell`: An instance of RNNCell.
- `inputs`:` `T`h``e`` `RNN` ``inputs``.`` `If` ``time_major == False`` `(d`e`f`a`ul`t`)`,`` ``t``h``i``s`` ``m`u`s``t`` ``b``e`` ``a`` ``Tensor`` `of` ``s``h``a`p`e`:` `[`b``a``t``c``h``_``s``i``z``e``,`` ``m``a``x``_``t``i``m``e``,`` ``.``.``.`]`,`` `or` ``a`` `n`e``s``t``e`d` ``t`upl`e`` `of` ``s`u`c``h`` ``e`l`e``m``e`n`t``s``.`` `If` ``t``i``m``e``_``m``a`jor` `==` `Tru`e``,`` ``t``h``i``s`` ``m`u`s``t`` ``b``e`` ``a`` ``Tensor`` `of` ``s``h``a`p`e`:` `[`m``a``x``_``t``i``m``e``,`` ``b``a``t``c``h``_``s``i``z``e``,`` ``.``.``.`]`,`` `or` ``a`` `n`e``s``t``e`d` ``t`upl`e`` `of` ``s`u`c``h`` ``e`l`e``m``e`n`t``s``.`` `T`h``i``s`` ``m``a`y` ``a`l`s`o` ``b``e`` ``a`` `(po`s``s``i``b`ly` `n`e``s``t``e`d)` ``t`upl`e`` `of` ``Tensor``s`` ``s``a``t``i``s`fy`i`ng` ``t``h``i``s`` `prop`e`r`t`y`.`` `T`h``e`` `f`i`r`s``t`` ``t`wo` `d`i``m``e`n`s``i`on`s`` ``m`u`s``t`` ``m``a``t``c``h`` ``a``c`ro`s``s`` ``a`ll` ``t``h``e`` ``inputs``,`` ``b`u`t`` `o`t``h``e`rw`i``s``e`` ``t``h``e`` `r`a`nk`s`` ``a`nd` `o`t``h``e`r` ``s``h``a`p`e`` ``c`o`m`pon`e`n`t``s`` ``m``a`y` `d`i`ff`e`r`.`` `In` ``t``h``i``s`` ``c``a``s``e``,`` ``i`npu`t`` ``t`o` ``cell`` ``a``t`` ``e``a``c``h`` ``t``i``m``e`-`s``t``e`p` `w`i`ll` `r`e`pl`i``c``a``t``e`` ``t``h``e`` ``s``t`ru`c``t`ur`e`` `of` ``t``h``e``s``e`` ``t`upl`e``s``,`` ``e``x``c``e`p`t`` `for` ``t``h``e`` ``t``i``m``e`` `d`i``m``e`n`s``i`on` `(fro`m`` `w`h``i``c``h`` ``t``h``e`` ``t``i``m``e`` ``i``s`` ``t``a`k`e`n)`.`` `T`h``e`` ``i`npu`t`` ``t`o` ``cell`` ``a``t`` ``e``a``c``h`` ``t``i``m``e`` ``s``t``e`p` `w`i`ll` ``b``e`` ``a`` ``Tensor`` `or` `(po`s``s``i``b`ly` `n`e``s``t``e`d)` ``t`upl`e`` `of` ``Tensor``s`` ``e``a``c``h`` `w`i``t``h`` `d`i``m``e`n`s``i`on`s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``.``.``.`]`.`
- `s``e`qu`e`n`c``e``_`l`e`ng`t``h`:` `(op`t``i`on`a`l)` `An` ``i`n`t`32/`i`n`t`64` `v`e``c``t`or` ``s``i``z``e`d` `[`b``a``t``c``h``_``s``i``z``e`]`.`` `U`s``e`d` ``t`o` ``c`opy-`t``h`roug`h`` ``s``t``a``t``e`` ``a`nd` ``z``e`ro-ou`t`` `ou`t`pu`t``s`` `w`h``e`n` `p`a``s``t`` ``a`` ``b``a``t``c``h`` ``e`l`e``m``e`n`t`'`s`` ``s``e`qu`e`n`c``e`` `l`e`ng`t``h``.`` `So` ``i``t`'`s`` ``m`or`e`` `for` `p`e`rfor`m``a`n`c``e`` ``t``h``a`n` ``c`orr`e``c``t`n`e``s``s``.`
- `i`n`i``t``i``a``l``_``s``t``a``t``e`:` `(op`t``i`on`a``l`)` `An` ``i`n`i``t``i``a``l`` ``s``t``a``t``e`` `for` ``t``h``e`` `RNN`.`` `If` ``cell``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`n` ``i`n`t``e`g`e`r`,`` ``t``h``i``s`` ``m`u`s``t`` ``b``e`` ``a`` ``Tensor`` `of` ``a`ppropr`i``a``t``e`` ``t`yp`e`` ``a`nd` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``cell``.``s``t``a``t``e``_``s``i``z``e`]`.`` `If` ``cell``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`` ``t`up`l``e``,`` ``t``h``i``s`` ``s``h`ou`l`d` ``b``e`` ``a`` ``t`up`l``e`` `of` ``t``e`n`s`or`s`` ``h``a`v`i`ng` ``s``h``a`p`e``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``s`]` `for` ``s`` ``i`n` ``cell``.``s``t``a``t``e``_``s``i``z``e``.`
- `dtype`:` `(op`t``i`on`a``l`)` `T`h``e`` `d`a``t``a`` ``t`yp`e`` `for` ``t``h``e`` ``i`n`i``t``i``a``l`` ``s``t``a``t``e`` ``a`nd` ``e``x`p`e``c``t``e`d` `ou`t`pu`t``.`` `R`e`qu`i`r`e`d` ``i`f` ``i`n`i``t``i``a``l``_``s``t``a``t``e`` ``i``s`` `no`t`` `prov`i`d`e`d` `or` `RNN` ``s``t``a``t``e`` ``h``a``s`` ``a`` ``h``e``t``e`rog`e`n`e`ou`s`` ``dtype``.`
- `parallel_iterations`:` `(D`e`f`a`u`l``t`:` `32)`.`` `T`h``e`` `nu`m``b``e`r` `of` ``i``t``e`r`a``t``i`on`s`` ``t`o` `run` ``i`n` `p`a`r`a``l``l``e``l``.`` `T`h`o`s``e`` `op`e`r`a``t``i`on`s`` `w`h``i``c``h`` `do` `no`t`` ``h``a`v`e`` ``a`ny` ``t``e``m`por`a``l`` `d`e`p`e`nd`e`n`c`y` ``a`nd` ``c``a`n` ``b``e`` `run` ``i`n` `p`a`r`a``l``l``e``l``,`` `w`i``l``l`` ``b``e``.`` `T`h``i``s`` `p`a`r`a``m``e``t``e`r` ``t`r`a`d`e``s`` `off` ``t``i``m``e`` `for` ``s`p`a``c``e``.`` `V`a``l`u`e``s`` `>>` `1` `u`s``e`` ``m`or`e`` ``m``e``m`ory` ``b`u`t`` ``t``a`k`e`` ``l``e``s``s`` ``t``i``m``e``,`` `w`h``i``l``e`` ``s``m``a``l``l``e`r` `v`a``l`u`e``s`` `u`s``e`` ``l``e``s``s`` ``m``e``m`ory` ``b`u`t`` ``c`o`m`pu`t``a``t``i`on`s`` ``t``a`k`e`` ``l`ong`e`r`.`
- `s`w`a`p`_``m``e``m`ory:` `Tr`a`n`s`p`a`r`e`n`t``l`y` ``s`w`a`p` ``t``h``e`` ``t``e`n`s`or`s`` `produ`c``e`d` ``i`n` `forw`a`rd` ``i`nf`e`r`e`n`c``e`` ``b`u`t`` `n`e``e`d`e`d` `for` ``b``a``c`k` `prop` `fro`m`` `GPU` ``t`o` `CPU`.`` `T`h``i``s`` ``a``l``l`ow`s`` ``t`r`a``i`n`i`ng` `RNN`s`` `w`h``i``c``h`` `wou`l`d` ``t`yp`i``c``a``l``l`y` `no`t`` `f`i``t`` `on` ``a`` ``s``i`ng`l``e`` `GPU`,`` `w`i``t``h`` `v`e`ry` ``m``i`n`i``m``a``l`` `(or` `no)` `p`e`rfor`m``a`n`c``e`` `p`e`n`a``l``t`y`.`
- `t``i``m``e``_``m``a`jor:` `T`h``e`` ``s``h``a``p``e`` `for`m``a``t`` `of` ``t``h``e`` ``inputs`` ``a`n`d`` ``outputs`` ``Tensor``s``.`` `If` ``t`ru`e``,`` ``t``h``e``s``e`` ``Tensor``s`` ``m`u`s``t`` ``b``e`` ``s``h``a``p``e``d`` `[`m``a``x``_``t``i``m``e``,`` ``b``a``t``c``h``_``s``i``z``e``,`` ``d``e``p``t``h`]`.`` `If` `f`a``l``s``e``,`` ``t``h``e``s``e`` ``Tensor``s`` ``m`u`s``t`` ``b``e`` ``s``h``a``p``e``d`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``m``a``x``_``t``i``m``e``,`` ``d``e``p``t``h`]`.`` `U`s``i`ng` ``t``i``m``e``_``m``a`jor` `=` `Tru`e`` ``i``s`` ``a`` ``b``i``t`` ``m`or`e`` ``e`ff`i``c``i``e`n`t`` ``b``e``c``a`u`s``e`` ``i``t`` ``a`vo`i``d``s`` ``t`r`a`n`s``p`o`s``e``s`` ``a``t`` ``t``h``e`` ``b``e`g`i`nn`i`ng` ``a`n`d`` ``e`n`d`` `of` ``t``h``e`` `RNN` ``c``a``l``c`u`l``a``t``i`on`.`` `How`e`v`e`r`,`` ``m`o`s``t`` ``Tensor`F`l`ow` ``d``a``t``a`` ``i``s`` ``b``a``t``c``h`-`m``a`jor`,`` ``s`o` ``b`y` ``d``e`f`a`u`l``t`` ``t``h``i``s`` `fun`c``t``i`on` ``a``c``c``e``p``t``s`` ``i`n`p`u`t`` ``a`n`d`` ``e``m``i``t``s`` `ou`t``p`u`t`` ``i`n` ``b``a``t``c``h`-`m``a`jor` `for`m``.`
- `s``c`o`p``e`:` `V`a`r`i``a``b``l``e`S`c`o`p``e`` `for` ``t``h``e`` ``c`r`e``a``t``e``d`` ``s`u`b`gr`a``p``h`;` ``d``e`f`a`u`l``t``s`` ``t`o` `"rnn"`.`
#### Returns:

A pair (outputs, state) where:
- `outputs`:` `T`h``e`` `RNN` ``o``u``t``p``u``t`` ``Tensor``.`
If` ``t``i``m``e``_``m``a`j`o`r` `==` `F`a``l``s``e`` `(d`e`f`a``u``l``t`)`,`` ``t``h``i``s`` `w`i``l``l`` ``b``e`` ``a`` ``Tensor`` ``s``h``a``p``e`d:` `[`b``a``t``c``h``_``s``i``z``e``,`` ``m``a``x``_``t``i``m``e``,`` ``c``e``l``l``.``o``u``t``p``u``t``_``s``i``z``e`]`.`
If` ``t``i``m``e``_``m``a`j`o`r` `==` `Tr`u``e``,`` ``t``h``i``s`` `w`i``l``l`` ``b``e`` ``a`` ``Tensor`` ``s``h``a``p``e`d:` `[`m``a``x``_``t``i``m``e``,`` ``b``a``t``c``h``_``s``i``z``e``,`` ``c``e``l``l``.``o``u``t``p``u``t``_``s``i``z``e`]`.`
N`o``t``e``,`` ``i`f` ``c``e``l``l``.``o``u``t``p``u``t``_``s``i``z``e`` ``i``s`` ``a`` `(`p``o``s``s``i``b``l`y` `n`e``s``t``e`d)` ``t``u``p``l``e`` ``o`f` ``i`n`t``e`g`e`r`s`` ``o`r` ``Tensor`S`h``a``p``e`` ``o``b`j`e``c``t``s``,`` ``t``h``e`n` ``outputs`` `w`i``l``l`` ``b``e`` ``a`` ``t``u``p``l``e`` ``h``a`v`i`ng` ``t``h``e`` ``s``a``m``e`` ``s``t`r`u``c``t``u`r`e`` ``a``s`` ``c``e``l``l``.``o``u``t``p``u``t``_``s``i``z``e``,`` ``c``o`n`t``a``i`n`i`ng` ``Tensor``s`` ``h``a`v`i`ng` ``s``h``a``p``e``s`` ``c``o`rr`e``s``p``o`nd`i`ng` ``t``o`` ``t``h``e`` ``s``h``a``p``e`` `d`a``t``a`` ``i`n` ``c``e``l``l``.``o``u``t``p``u``t``_``s``i``z``e``.`
- `s``t``a``t``e`:` `T`h``e`` `f`i`n`a``l`` ``s``t``a``t``e``.`` `If` ``c``e``l``l``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`n` ``i`n`t``,`` ``t``h``i``s`` `w`i``l``l`` ``b``e`` ``s``h``a``p``e`d` `[`b``a``t``c``h``_``s``i``z``e``,`` ``c``e``l``l``.``s``t``a``t``e``_``s``i``z``e`]`.`` `If` ``i``t`` ``i``s`` ``a`` ``Tensor`S`h``a``p``e``,`` ``t``h``i``s`` `w`i``l``l`` ``b``e`` ``s``h``a``p``e`d` `[`b``a``t``c``h``_``s``i``z``e`]` `+` ``c``e``l``l``.``s``t``a``t``e``_``s``i``z``e``.`` `If` ``i``t`` ``i``s`` ``a`` `(`p``o``s``s``i``b``l`y` `n`e``s``t``e`d)` ``t``u``p``l``e`` ``o`f` ``i`n`t``s`` ``o`r` ``Tensor`S`h``a``p``e``,`` ``t``h``i``s`` `w`i``l``l`` ``b``e`` ``a`` ``t``u``p``l``e`` ``h``a`v`i`ng` ``t``h``e`` ``c``o`rr`e``s``p``o`nd`i`ng` ``s``h``a``p``e``s``.`` `If` ``c``e``l``l``s`` ``a`r`e`` ``LSTMCells`` ``s``t``a``t``e`` `w`i``l``l`` ``b``e`` ``a`` ``t``u``p``l``e`` ``c``o`n`t``a``i`n`i`ng` ``a`` ``LSTMStateTuple`` `f`o`r` ``e``a``c``h`` ``c``e``l``l``.`
#### Raises:
- `TypeError`: If `cell` is not an instance of RNNCell.
- `ValueError`: If inputs is None or an empty list.
- `RuntimeError`: If not using control flow v2.
