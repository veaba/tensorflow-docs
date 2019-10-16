
Encodes each sequence of Unicode code points in input into a string.
### Aliases:
- `tf.compat.v1.strings.unicode_encode`
- `tf.compat.v2.strings.unicode_encode`

```
 tf.strings.unicode_encode(
    input,
    output_encoding,
    errors='replace',
    replacement_char=65533,
    name=None
)
```
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

result[i1...iN] is the string formed by concatenating the Unicode codepoints input[1...iN, :], encoded using output_encoding.
#### Args:
- `input`:` `A`n`` ``N`+`1`` `di`m`e`n``s`io`n``a`l` `pote`n`ti`a`lly` ``r``a`gged` `i`n`tege`r`` `te`n``s`o`r`` `wit`h`` ``s``h``a`pe` `[`D``1``.``.``.``D``N``,`` ``n``u``m``_``c``h``a``r``s`]`.`
- `output_encoding`:` `U`n`i`c`ode` `e`n``c`odi`n`g` `t`h``a`t` ``s``h`o`u`ld` `be` ``u``s`ed` `to` `e`n``c`ode` `e`a``c``h`` ``c`odepoi`n`t` ``s`eq`u`e`n``c`e`.`` `C`a``n`` `be` ``"UTF-8"``,`` ``"UTF-16-BE"``,`` `o`r`` ``"UTF-32-BE"``.`
- `errors`:` `Spe`c`ifie`s`` `t`h`e` ``r`e`s`po`n``s`e` `w`h`e`n`` ``a``n`` `i`n`v`a`lid` ``c`odepoi`n`t` `i`s`` `e`n``c`o`u``n`te`r`ed` `(optio`n``a`l)`.`` `O`n`e` `of:` `*` ``'replace'`:` `Repl`a``c`e` `i`n`v`a`lid` ``c`odepoi`n`t` `wit`h`` `t`h`e` ``r`epl`a``c`e`m`e`n`t`_``c``h``a``r``.`` `(def`a``u`lt)` `*` ``'ignore'`:` `Skip` `i`n`v`a`lid` ``c`odepoi`n`t`s``.`` `*` ``'strict'`:` `R`a`i`s`e` ``a``n`` `ex`c`eptio`n`` `fo`r`` ``a``n`y` `i`n`v`a`lid` ``c`odepoi`n`t`.`
- `r`epl`a``c`e`m`e`n`t`_``c``h``a``r`:` `T`h`e` ``r`epl`a``c`e`m`e`n`t` ``c``h``a``r``a``c`te`r`` ``c`odepoi`n`t` `to` `be` ``u``s`ed` `i`n`` `pl`a``c`e` `of` ``a``n`y` `i`n`v`a`lid` ``input`` `w`h`e`n`` ``errors`=`'replace'``.`` `A`n`y` `v`a`lid` ``u``n`i`c`ode` ``c`odepoi`n`t` ``m``a`y` `be` ``u``s`ed`.`` `T`h`e` `def`a``u`lt` `v`a`l`u`e` `i`s`` `t`h`e` `def`a``u`lt` ``u``n`i`c`ode` ``r`epl`a``c`e`m`e`n`t` ``c``h``a``r``a``c`te`r`` `w`h`i`c``h`` `i`s`` `0xFFF`D`` `(U+65533)`.`
- `n``a``m`e:` `A` ``n``a``m`e` `fo`r`` `t`h`e` `ope`r``a`tio`n`` `(optio`n``a`l)`.`
#### Returns:

A N dimensional string tensor with shape [D1...DN].
#### Example:
