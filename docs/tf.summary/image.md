
Write an image summary.
### Aliases:
- `tf.compat.v2.summary.image`

```
 tf.summary.image(
    name,
    data,
    step=None,
    max_outputs=3,
    description=None
)
```
#### Arguments:
- `name`: A `name` for this summary. The summary tag used for TensorBoard will be this `name` prefixed by any active `name` scopes.
- `data`:` `A` ``Tensor`` `representing` `pixel` ``data`` ``w`it`h`` `s`h`ape` `[`k``,`` ``h``,`` ``w``,`` ``c`]`,`` ``w``h`ere` ``k`` `is` `t`h`e` `number` `of` `images`,`` ``h`` `and` ``w`` `are` `t`h`e` ``h`eig`h`t` `and` ``w`idt`h`` `of` `t`h`e` `images`,`` `and` ``c`` `is` `t`h`e` `number` `of` ``c``h`annels`,`` ``w``h`i`c``h`` `s`h`ould` `be` `1`,`` `2`,`` `3`,`` `or` `4` `(grays`c`ale`,`` `grays`c`ale` ``w`it`h`` `alp`h`a`,`` `RGB`,`` `RGBA).` `Any` `of` `t`h`e` `dimensions` `may` `be` `stati`c`ally` `un`k`no`w`n` `(i.e.`,`` ``None`).` `Floating` `point` ``data`` ``w`ill` `be` ``c`lipped` `to` `t`h`e` `range` `[0`,`1).
- `step`:` `Expli`c`it` ``int64`-`c`astable` `monotoni`c`` ``step`` `value` `for` `t`h`is` `summary.` `If` `omitted`,`` `t`h`is` `defaults` `to` ``tf.summary.experimental.get_step`()`,`` ``w``h`i`c``h`` `must` `not` `be` ``None`.
- `max_outputs`:` `Optional` ``int`` `or` `ran`k`-0` ``int`eger` ``Tensor`.` `At` `most` `t`h`is` `many` `images` ``w`ill` `be` `emitted` `at` `ea`c``h`` ``step`.` `W`h`en` `more` `t`h`an` ``max_outputs`` `many` `images` `are` `provided`,`` `t`h`e` `first` ``max_outputs`` `many` `images` ``w`ill` `be` `used` `and` `t`h`e` `rest` `silently` `dis`c`arded.
- `description`:` `Optional` `long-form` ``description`` `for` `t`h`is` `summary`,`` `as` `a` ``c`onstant` ``str`.` `Mar`k`do`w`n` `is` `supported.` `Defaults` `to` `empty.
#### Returns:

True on success, or false if no summary was emitted because no default summary writer was available.
#### Raises:
- `ValueError`: if a default writer exists, but no step was provided and `tf.summary.experimental.get_step`() is None.
