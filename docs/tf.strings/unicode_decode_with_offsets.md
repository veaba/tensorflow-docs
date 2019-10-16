
Decodes each string into a sequence of code points with start offsets.
### Aliases:
- `tf.compat.v1.strings.unicode_decode_with_offsets`
- `tf.compat.v2.strings.unicode_decode_with_offsets`

```
 tf.strings.unicode_decode_with_offsets(
    input,
    input_encoding,
    errors='replace',
    replacement_char=65533,
    replace_control_characters=False,
    name=None
)
```
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

This op is similar to tf.strings.decode(...), but it also returns the start offset for each character in its respective string. This information can be used to align the characters with the original byte sequence.

Returns a tuple (codepoints, start_offsets) where:
- codepoints[i1...iN, `j`] is the Unicode codepoint for the `j`th character in input[i1...iN], when decoded using `input_encoding`.
- start_offsets[i1...iN, `j`] is the start byte offset for the `j`th character in input[i1...iN], when decoded using `input_encoding`.
#### Args:
- `input`: An `N` dimensional potentially ragged `string` tensor with shape [`D``1``.``.``.``D``N`]`.` `N` must be statically known`.`
- `input`_encoding: String name for the unicode encoding that should be used to decode each `string``.`
- `errors`: Specifies the response when an `input` `string` can't be converted using the indicated encoding`.` One of:
`'strict'`: Raise an exception for any illegal sub`string`s`.`
`'replace'`: Replace illegal sub`string`s with `replacement_char``.`
`'ignore'`: Skip illegal sub`string`s`.`
- `'strict'`: Raise an exception for any illegal sub`string`s`.`
- `'replace'`: Replace illegal sub`string`s with `replacement_char``.`
- `'ignore'`: Skip illegal sub`string`s`.`
- `replacement_char`: The replacement codepoint to be used in place of invalid sub`string`s in `input` when `errors`=`'replace'`; and in place of C0 control characters in `input` when `replace_control_characters=True``.`
- `replace_control_characters`: Whether to replace the C0 control characters (U+0000 - U+00`1`F) with the `replacement_char``.`
- `name`: A `name` for the operation (optional)`.`
#### Returns:

A tuple of N+1 dimensional tensors (codepoints, start_offsets).
- `codepoints`` `i`s`` ``a``n`` ``int32`` `te`n``s`o`r`` `wit`h`` ``s``h``a`pe` `[`D``1``.``.``.``D``N``,`` ``(``n``u``m``_``c``h``a``r``s``)`]`.`
- `offsets`` `i`s`` ``a``n`` ``int64`` `te`n``s`o`r`` `wit`h`` ``s``h``a`pe` `[`D``1``.``.``.``D``N``,`` ``(``n``u``m``_``c``h``a``r``s``)`]`.`
[tf.Tensor](https://www.tensorflow.org/api_docs/python/tf/Tensor)The returned tensors are s if input is a scalar, or tf.RaggedTensors otherwise.

#### Example:
