
RNN that accepts a state saver for time-truncated RNN calculation. (deprecated)

```
 tf.compat.v1.nn.static_state_saving_rnn(
    cell,
    inputs,
    state_saver,
    state_name,
    sequence_length=None,
    scope=None
)
```
#### Args:
- `cell`: An instance of `RNNCell`.
- `inputs`:` `A` `l`e``n`g`t``h`` `T` `l`i``s``t`` `of` ``inputs``,`` ``e``a``c``h`` ``a`` ``Tensor`` `of` ``s``h``a``p``e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``i``n``p``u``t``_``s``i``z``e`].
- `s``t``a``t``e``_``s``a`v`e`r:` `A` ``s``t``a``t``e`` ``s``a`v`e`r` `o`b`j`e``c``t`` `w`i``t``h`` `m`e``t``h`od`s`` ``s``t``a``t``e`` ``a``n`d` ``s``a`v`e``_``s``t``a``t``e`.
- `s``t``a``t``e``_``n``a`m`e`:` `Py`t``h`o`n`` ``s``t`r`i``n`g` `or` ``t``u``p`l`e`` `of` ``s``t`r`i``n`g`s`.` `T`h``e`` ``n``a`m`e`` ``t`o` ``u``s``e`` `w`i``t``h`` ``t``h``e`` ``s``t``a``t``e``_``s``a`v`e`r.` `If` ``t``h``e`` ``cell`` `r`e``t``u`r`n``s`` ``t``u``p`l`e``s`` `of` ``s``t``a``t``e``s`` `(`i`.`e`.`,`` ``cell`.`s``t``a``t``e``_``s``i``z``e`` ``i``s`` ``a`` ``t``u``p`l`e`)` ``t``h``e``n`` ``s``t``a``t``e``_``n``a`m`e`` ``s``h`o`u`ld` ``b``e`` ``a`` ``t``u``p`l`e`` `of` ``s``t`r`i``n`g`s`` ``h``a`v`i``n`g` ``t``h``e`` ``s``a`m`e`` `l`e``n`g`t``h`` ``a``s`` ``cell`.`s``t``a``t``e``_``s``i``z``e`.` `O`t``h``e`rw`i``s``e`` ``i``t`` ``s``h`o`u`ld` ``b``e`` ``a`` ``s``i``n`gl`e`` ``s``t`r`i``n`g.
- `s``e`q`u``e``n``c``e``_`l`e``n`g`t``h`:` `(o`p``t``i`o`n``a`l)` `A`n`` ``i``n``t`32/`i``n``t`64` `v`e``c``t`or` ``s``i``z``e`` `[`b``a``t``c``h``_``s``i``z``e`].` `S`e``e`` ``t``h``e`` `do`c``u`m`e``n``t``a``t``i`o`n`` `for` `r`n``n`()` `for` `mor`e`` `d`e``t``a``i`l`s`` ``a``b`o`u``t`` ``s``e`q`u``e``n``c``e``_`l`e``n`g`t``h`.
- `s``c`o`p``e`:` `V`a`r`i``a``b`l`e`S`c`o`p``e`` `for` ``t``h``e`` ``c`r`e``a``t``e`d` ``s``u``b`gr`a``p``h`;` `d`e`f`a``u`l`t``s`` ``t`o` `"r`n``n`".
#### Returns:

A pair (outputs, state) where: outputs is a length T list of outputs (one for each input) states is the final state
#### Raises:
- `TypeError`: If `cell` is not an instance of RNNCell.
- `ValueError`: If `inputs` is `None` or an empty list, or if the arity and type of `state_name` does not match that of `cell`.state_size.
