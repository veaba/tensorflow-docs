
Creates an RNN specified by RNNCell cell and loop function loop_fn.

```
 tf.compat.v1.nn.raw_rnn(
    cell,
    loop_fn,
    parallel_iterations=None,
    swap_memory=False,
    scope=None
)
```

NOTE: This method is still in testing, and the API may change.

This function is a more primitive version of dynamic_rnn that provides more direct access to the inputs each iteration. It also provides more control over when to start and finish reading the sequence, and what to emit for the output.

For example, it can be used to implement the dynamic decoder of a seq2seq model.

Instead of working with Tensor objects, most operations work with TensorArray objects directly.

The operation of raw_rnn, in pseudo-code, is basically the following:

```
 time = tf.constant(0, dtype=tf.int32)
(finished, next_input, initial_state, emit_structure, loop_state) = loop_fn(
    time=time, cell_output=None, cell_state=None, loop_state=None)
emit_ta = TensorArray(dynamic_size=True, dtype=initial_state.dtype)
state = initial_state
while not all(finished):
  (output, cell_state) = cell(next_input, state)
  (next_finished, next_input, next_state, emit, loop_state) = loop_fn(
      time=time + 1, cell_output=output, cell_state=cell_state,
      loop_state=loop_state)
  # Emit zeros and copy forward state for minibatch entries that are finished.
  state = tf.where(finished, state, next_state)
  emit = tf.where(finished, tf.zeros_like(emit_structure), emit)
  emit_ta = emit_ta.write(time, emit)
  # If any new minibatch entries are marked as finished, mark these.
  finished = tf.logical_or(finished, next_finished)
  time += 1
return (emit_ta, state, loop_state)
```

with the additional properties that output and state may be (possibly nested) tuples, as determined by cell.output_size and cell.state_size, and as a result the final state and emit_ta may themselves be tuples.

A simple implementation of dynamic_rnn via raw_rnn looks like this:

```
 inputs = tf.compat.v1.placeholder(shape=(max_time, batch_size, input_depth),
                        dtype=tf.float32)
sequence_length = tf.compat.v1.placeholder(shape=(batch_size,),
dtype=tf.int32)
inputs_ta = tf.TensorArray(dtype=tf.float32, size=max_time)
inputs_ta = inputs_ta.unstack(inputs)

cell = tf.compat.v1.nn.rnn_cell.LSTMCell(num_units)

def loop_fn(time, cell_output, cell_state, loop_state):
  emit_output = cell_output  # == None for time == 0
  if cell_output is None:  # time == 0
    next_cell_state = cell.zero_state(batch_size, tf.float32)
  else:
    next_cell_state = cell_state
  elements_finished = (time >= sequence_length)
  finished = tf.reduce_all(elements_finished)
  next_input = tf.cond(
      finished,
      lambda: tf.zeros([batch_size, input_depth], dtype=tf.float32),
      lambda: inputs_ta.read(time))
  next_loop_state = None
  return (elements_finished, next_input, next_cell_state,
          emit_output, next_loop_state)

outputs_ta, final_state, _ = raw_rnn(cell, loop_fn)
outputs = outputs_ta.stack()
```
#### Args:
- `cell`: An instance of RNNCell.
- `loop_fn`:` `A` ``c``a``l``l``a``b``l``e`` ``t``h``a``t`` ``t``a`k`e``s`` ``i`npu`t``s`` `(`time, cell_output, cell_state, loop_state`)` ``a`nd` `r`e``t`urn`s`` ``t``h``e`` ``t`up`l``e`` `(`finished, next_input, next_cell_state, emit_output, next_loop_state`)`.`` `H`e`r`e`` ``time`` ``i``s`` ``a`n` ``i`n`t`32` ``s``c``a``l``a`r` ``Tensor``,`` ``cell``_`ou`t`pu`t`` ``i``s`` ``a`` ``Tensor`` `or` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` `of` ``t``e`n`s`or`s`` ``a``s`` `d`e``t``e`rm`i`n`e`d` ``b`y` ``cell``.`ou`t`pu`t``_``s``i``z``e``,`` ``a`nd` ``cell``_``s``t``a``t``e`` ``i``s`` ``a`` ``Tensor`` `or` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` `of` ``t``e`n`s`or`s``,`` ``a``s`` `d`e``t``e`rm`i`n`e`d` ``b`y` ``t``h``e`` ``loop_fn`` `on` ``i``t``s`` `f`i`r`s``t`` ``c``a``l``l`` `(`a`nd` ``s``h`ou`l`d` `m`a``t``c``h`` ``cell``.``s``t``a``t``e``_``s``i``z``e`)`.`` `T`h``e`` `ou`t`pu`t``s`` ``a`r`e`:` ``finished``,`` ``a`` ``b`oo`l``e``a`n` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e`]`,`` ``next_input`:` ``t``h``e`` `n`e`x`t`` ``i`npu`t`` ``t`o` `f`e``e`d` ``t`o` ``cell``,`` ``next_cell_state`:` ``t``h``e`` `n`e`x`t`` ``s``t``a``t``e`` ``t`o` `f`e``e`d` ``t`o` ``cell``,`` ``a`nd` ``e`m`i``t``_`ou`t`pu`t`:` ``t``h``e`` `ou`t`pu`t`` ``t`o` ``s``t`or`e`` `for` ``t``h``i``s`` ``i``t``e`r`a``t``i`on`.`` `No`t``e`` ``t``h``a``t`` ``e`m`i``t``_`ou`t`pu`t`` ``s``h`ou`l`d` ``b``e`` ``a`` ``Tensor`` `or` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` `of` ``t``e`n`s`or`s`` `w`h``i``c``h`` ``i``s`` ``a`ggr`e`g`a``t``e`d` ``i`n` ``t``h``e`` ``e`m`i``t``_``t``a`` ``i`n`s``i`d`e`` ``t``h``e`` ``while_loop``.`` `For` ``t``h``e`` `f`i`r`s``t`` ``c``a``l``l`` ``t`o` ``loop_fn``,`` ``t``h``e`` ``e`m`i``t``_`ou`t`pu`t`` ``c`orr`e``s`pond`s`` ``t`o` ``t``h``e`` ``e`m`i``t``_``s``t`ru`c``t`ur`e`` `w`h``i``c``h`` ``i``s`` ``t``h``e`n` `u`s``e`d` ``t`o` `d`e``t``e`rm`i`n`e`` ``t``h``e`` ``s``i``z``e`` `of` ``t``h``e`` ``z``e`ro`_``t``e`n`s`or` `for` ``t``h``e`` ``e`m`i``t``_``t``a`` `(d`e`f`a`u`l``t``s`` ``t`o` ``cell``.`ou`t`pu`t``_``s``i``z``e`)`.`` `For` ``t``h``e`` ``s`u`b``s``e`qu`e`n`t`` ``c``a``l``l``s`` ``t`o` ``t``h``e`` ``loop_fn``,`` ``t``h``e`` ``e`m`i``t``_`ou`t`pu`t`` ``c`orr`e``s`pond`s`` ``t`o` ``t``h``e`` ``a``c``t`u`a``l`` `ou`t`pu`t`` ``t``e`n`s`or` ``t``h``a``t`` ``i``s`` ``t`o` ``b``e`` ``a`ggr`e`g`a``t``e`d` ``i`n` ``t``h``e`` ``e`m`i``t``_``t``a``.`` `T`h``e`` `p`a`r`a`m`e``t``e`r` ``cell``_``s``t``a``t``e`` ``a`nd` `ou`t`pu`t`` ``next_cell_state`` `m`a`y` ``b``e`` ``e``i``t``h``e`r` ``a`` ``s``i`ng`l``e`` `or` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` `of` ``t``e`n`s`or`s``.`` `T`h``e`` `p`a`r`a`m`e``t``e`r` ``loop_state`` ``a`nd` `ou`t`pu`t`` ``next_loop_state`` `m`a`y` ``b``e`` ``e``i``t``h``e`r` ``a`` ``s``i`ng`l``e`` `or` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` `of` ``Tensor`` ``a`nd` ``Tensor`Arr`a`y` `o`b`j`e``c``t``s``.`` `T`h``i``s`` ``l``a``s``t`` `p`a`r`a`m`e``t``e`r` `m`a`y` ``b``e`` ``i`gnor`e`d` ``b`y` ``loop_fn`` ``a`nd` ``t``h``e`` `r`e``t`urn` `v`a``l`u`e`` `m`a`y` ``b``e`` ``None``.`` `If` ``i``t`` ``i``s`` `no`t`` ``None``,`` ``t``h``e`n` ``t``h``e`` ``loop_state`` `w`i``l``l`` ``b``e`` `prop`a`g`a``t``e`d` ``t``h`roug`h`` ``t``h``e`` `RNN` ``l`oop`,`` `for` `u`s``e`` `pur`e``l`y` ``b`y` ``loop_fn`` ``t`o` `k`e``e`p` ``t`r`a``c`k` `of` ``i``t``s`` `own` ``s``t``a``t``e``.`` `T`h``e`` ``next_loop_state`` `p`a`r`a`m`e``t``e`r` `r`e``t`urn`e`d` `m`a`y` ``b``e`` ``None``.`` `T`h``e`` `f`i`r`s``t`` ``c``a``l``l`` ``t`o` ``loop_fn`` `w`i``l``l`` ``b``e`` ``time`` `=` `0`,`` ``cell``_`ou`t`pu`t`` `=` ``None``,`` ``cell``_``s``t``a``t``e`` `=` ``None``,`` ``a`nd` ``loop_state`` `=` ``None``.`` `For` ``t``h``i``s`` ``c``a``l``l`:` `T`h``e`` ``next_cell_state`` `v`a``l`u`e`` ``s``h`ou`l`d` ``b``e`` ``t``h``e`` `v`a``l`u`e`` `w`i``t``h`` `w`h``i``c``h`` ``t`o` ``i`n`i``t``i``a``l``i``z``e`` ``t``h``e`` ``cell`'`s`` ``s``t``a``t``e``.`` `I`t`` `m`a`y` ``b``e`` ``a`` `f`i`n`a``l`` ``s``t``a``t``e`` `from` ``a`` `pr`e`v`i`ou`s`` `RNN` `or` ``i``t`` `m`a`y` ``b``e`` ``t``h``e`` `ou`t`pu`t`` `of` ``cell``.``z``e`ro`_``s``t``a``t``e`()`.`` `I`t`` ``s``h`ou`l`d` ``b``e`` ``a`` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` ``s``t`ru`c``t`ur`e`` `of` ``t``e`n`s`or`s``.`` `If` ``cell``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`n` ``i`n`t``e`g`e`r`,`` ``t``h``i``s`` `mu`s``t`` ``b``e`` ``a`` ``Tensor`` `of` ``a`ppropr`i``a``t``e`` ``t`yp`e`` ``a`nd` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``cell``.``s``t``a``t``e``_``s``i``z``e`]`.`` `If` ``cell``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`` ``Tensor`S`h``a`p`e``,`` ``t``h``i``s`` `mu`s``t`` ``b``e`` ``a`` ``Tensor`` `of` ``a`ppropr`i``a``t``e`` ``t`yp`e`` ``a`nd` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e`]` `+` ``cell``.``s``t``a``t``e``_``s``i``z``e``.`` `If` ``cell``.``s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` `of` ``i`n`t``s`` `or` ``Tensor`S`h``a`p`e``,`` ``t``h``i``s`` `w`i``l``l`` ``b``e`` ``a`` ``t`up`l``e`` ``h``a`v`i`ng` ``t``h``e`` ``c`orr`e``s`pond`i`ng` ``s``h``a`p`e``s``.`` `T`h``e`` ``e`m`i``t``_`ou`t`pu`t`` `v`a``l`u`e`` `m`a`y` ``b``e`` ``e``i``t``h``e`r` ``None`` `or` ``a`` `(po`s``s``i``b``l`y` `n`e``s``t``e`d)` ``t`up`l``e`` ``s``t`ru`c``t`ur`e`` `of` ``t``e`n`s`or`s``,`` ``e``.`g`.``,`` `(`t`f`.``z``e`ro`s`(`s``h``a`p`e``_`0`,`` `d`t`yp`e`=d`t`yp`e``_`0)`,`` ``t`f`.``z``e`ro`s`(`s``h``a`p`e``_`1`,`` `d`t`yp`e`=d`t`yp`e``_`1))`.`` `If` ``t``h``i``s`` `f`i`r`s``t`` ``e`m`i``t``_`ou`t`pu`t`` `r`e``t`urn` `v`a``l`u`e`` ``i``s`` ``None``,`` ``t``h``e`n` ``t``h``e`` ``e`m`i``t``_``t``a`` `r`e``s`u`l``t`` `of` ``raw_rnn`` `w`i``l``l`` ``h``a`v`e`` ``t``h``e`` ``s``a`m`e`` ``s``t`ru`c``t`ur`e`` ``a`nd` `d`t`yp`e``s`` ``a``s`` ``cell``.`ou`t`pu`t``_``s``i``z``e``.`` `O`t``h``e`rw`i``s``e`` ``e`m`i``t``_``t``a`` `w`i``l``l`` ``h``a`v`e`` ``t``h``e`` ``s``a`m`e`` ``s``t`ru`c``t`ur`e``,`` ``s``h``a`p`e``s`` `(pr`e`p`e`nd`e`d` `w`i``t``h`` ``a`` ``b``a``t``c``h``_``s``i``z``e`` `d`i`m`e`n`s``i`on)`,`` ``a`nd` `d`t`yp`e``s`` ``a``s`` ``e`m`i``t``_`ou`t`pu`t``.`` `T`h``e`` ``a``c``t`u`a``l`` `v`a``l`u`e``s`` `r`e``t`urn`e`d` `for` ``e`m`i``t``_`ou`t`pu`t`` ``a``t`` ``t``h``i``s`` ``i`n`i``t``i``a``l``i``z``i`ng` ``c``a``l``l`` ``a`r`e`` ``i`gnor`e`d`.`` `No`t``e``,`` ``t``h``i``s`` ``e`m`i``t`` ``s``t`ru`c``t`ur`e`` `mu`s``t`` ``b``e`` ``c`on`s``i``s``t``e`n`t`` ``a``c`ro`s``s`` ``a``l``l`` ``time`` ``s``t``e`p`s``.`
- `parallel_iterations`:` `(D`e`f`a`u`l``t`:` `32)`.`` `T`h``e`` `num`b``e`r` `of` ``i``t``e`r`a``t``i`on`s`` ``t`o` `run` ``i`n` `p`a`r`a``l``l``e``l``.`` `T`h`o`s``e`` `op`e`r`a``t``i`on`s`` `w`h``i``c``h`` `do` `no`t`` ``h``a`v`e`` ``a`ny` ``t``e`mpor`a``l`` `d`e`p`e`nd`e`n`c`y` ``a`nd` ``c``a`n` ``b``e`` `run` ``i`n` `p`a`r`a``l``l``e``l``,`` `w`i``l``l`` ``b``e``.`` `T`h``i``s`` `p`a`r`a`m`e``t``e`r` ``t`r`a`d`e``s`` `off` ``time`` `for` ``s`p`a``c``e``.`` `V`a``l`u`e``s`` `>>` `1` `u`s``e`` `mor`e`` `m`e`mory` ``b`u`t`` ``t``a`k`e`` ``l``e``s``s`` ``time``,`` `w`h``i``l``e`` ``s`m`a``l``l``e`r` `v`a``l`u`e``s`` `u`s``e`` ``l``e``s``s`` `m`e`mory` ``b`u`t`` ``c`ompu`t``a``t``i`on`s`` ``t``a`k`e`` ``l`ong`e`r`.`
- `s`w`a`p`_`m`e`mory:` `Tr`a`n`s`p`a`r`e`n`t``l`y` ``s`w`a`p` ``t``h``e`` ``t``e`n`s`or`s`` `produ`c``e`d` ``i`n` `forw`a`rd` ``i`nf`e`r`e`n`c``e`` ``b`u`t`` `n`e``e`d`e`d` `for` ``b``a``c`k` `prop` `from` `GPU` ``t`o` `CPU`.`` `T`h``i``s`` ``a``l``l`ow`s`` ``t`r`a``i`n`i`ng` `RNN`s`` `w`h``i``c``h`` `wou`l`d` ``t`yp`i``c``a``l``l`y` `no`t`` `f`i``t`` `on` ``a`` ``s``i`ng`l``e`` `GPU`,`` `w`i``t``h`` `v`e`ry` `m`i`n`i`m`a``l`` `(or` `no)` `p`e`rform`a`n`c``e`` `p`e`n`a``l``t`y`.`
- `s``c`op`e`:` `V`a`r`i``a``b``l``e`S`c`op`e`` `for` ``t``h``e`` ``c`r`e``a``t``e`d` ``s`u`b`gr`a`p`h`;` `d`e`f`a`u`l``t``s`` ``t`o` `"rnn"`.`
#### Returns:

A tuple (emit_ta, final_state, final_loop_state) where:

emit_ta: The RNN output TensorArray. If loop_fn returns a (possibly nested) set of Tensors for emit_output during initialization, (inputs time = 0, cell_output = None, and loop_state = None), then emit_ta will have the same structure, dtypes, and shapes as emit_output instead. If loop_fn returns emit_output = None during this call, the structure of cell.output_size is used: If cell.output_size is a (possibly nested) tuple of integers or TensorShape objects, then emit_ta will be a tuple having the same structure as cell.output_size, containing TensorArrays whose elements' shapes correspond to the shape data in cell.output_size.

final_state: The final cell state. If cell.state_size is an int, this will be shaped [batch_size, cell.state_size]. If it is a TensorShape, this will be shaped [batch_size] + cell.state_size. If it is a (possibly nested) tuple of ints or TensorShape, this will be a tuple having the corresponding shapes.

final_loop_state: The final loop state as returned by loop_fn.
#### Raises:
- `TypeError`: If `cell` is not an instance of RNNCell, or `loop_fn` is not a `callable`.
