
Write an audio summary.
### Aliases:
- `tf.compat.v2.summary.audio`

```
 tf.summary.audio(
    name,
    data,
    sample_rate,
    step=None,
    max_outputs=3,
    encoding=None,
    description=None
)
```
#### Arguments:
- `name`: A `name` for this summary. The summary tag used for TensorBoard will be this `name` prefixed by any active `name` scopes.
- `data`:` `A` ``Tensor`` `represen`t`ing` `audio` ``data`` `wi`t`h` `shape` `[`k``,`` ``t``,`` ``c`]`,`` `where` ``k`` `is` ``t`he` `number` `of` `audio` ``c`lips`,`` ``t`` `is` ``t`he` `number` `of` `frames`,`` `and` ``c`` `is` ``t`he` `number` `of` ``c`hannels`.`` `Elemen`t`s` `should` `be` `floa`t`ing`-`poin`t`` `values` `in` `[`-``1``.``0``,`` ``1``.``0`]`.`` `Any` `of` ``t`he` `dimensions` `may` `be` `s`t`a`t`i`c`ally` `un`k`nown` `(i`.`e`.``,`` ``None`)`.`
- `sample_rate`:` `An` ``int`` `or` `ran`k``-``0`` ``int`32` ``Tensor`` ``t`ha`t`` `represen`t`s` ``t`he` `sample` `ra`t`e`,`` `in` `Hz`.`` `Mus`t`` `be` `posi`t`ive`.`
- `step`:` `Expli`c`i`t`` ``int`64`-``c`as`t`able` `mono`t`oni`c`` ``step`` `value` `for` ``t`his` `summary`.`` `If` `omi`t``t`ed`,`` ``t`his` `defaul`t`s` ``t`o` ``t`f`.`summary`.`experimen`t`al`.`ge`t`_`step`()`,`` `whi`c`h` `mus`t`` `no`t`` `be` ``None``.`
- `max_outputs`:` `Op`t`ional` ``int`` `or` `ran`k``-``0`` ``int`eger` ``Tensor``.`` `A`t`` `mos`t`` ``t`his` `many` `audio` ``c`lips` `will` `be` `emi`t``t`ed` `a`t`` `ea`c`h` ``step``.`` `When` `more` ``t`han` ``max_outputs`` `many` ``c`lips` `are` `provided`,`` ``t`he` `firs`t`` ``max_outputs`` `many` ``c`lips` `will` `be` `used` `and` ``t`he` `res`t`` `silen`t`ly` `dis`c`arded`.`
- `encoding`:` `Op`t`ional` ``c`ons`t`an`t`` ``str`` `for` ``t`he` `desired` ``encoding``.`` `Only` `"wav"` `is` ``c`urren`t`ly` `suppor`t`ed`,`` `bu`t`` ``t`his` `is` `no`t`` `guaran`t`eed` ``t`o` `remain` ``t`he` `defaul`t``,`` `so` `if` `you` `wan`t`` `"wav"` `in` `par`t`i`c`ular`,`` `se`t`` ``t`his` `expli`c`i`t`ly`.`
- `description`:` `Op`t`ional` `long`-`form` ``description`` `for` ``t`his` `summary`,`` `as` `a` ``c`ons`t`an`t`` ``str``.`` `Mar`k`down` `is` `suppor`t`ed`.`` `Defaul`t`s` ``t`o` `emp`t`y`.`
#### Returns:

True on success, or false if no summary was emitted because no default summary writer was available.
#### Raises:
- `ValueError`: if a default writer exists, but no step was provided and `tf.summary.experimental.get_step`() is None.
