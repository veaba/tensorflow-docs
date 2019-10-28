Splits each string in `input` into a sequence of Unicode code points.
### Aliases:
- `tf.compat.v1.strings.unicode_split`
- `tf.compat.v2.strings.unicode_split`

```
 tf.strings.unicode_split(
    input,
    input_encoding,
    errors='replace',
    replacement_char=65533,
    name=None
)
```
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``
`result[i1...iN, j]` is the substring of `input[i1...iN]` that encodes its `j`th character, when decoded using `input_encoding`.
#### Args:
- `input`: An `N` dimensional potentially ragged `string` tensor with shape `[D1...DN]`. `N` must be statically known.
- `input_encoding`: String name for the unicode encoding that should be used to decode each string.
- `errors`: Specifies the response when an input string can't be converted using the indicated encoding. One of:
`'strict'`: Raise an exception for any illegal substrings.
`'replace'`: Replace illegal substrings with `replacement_char`.
`'ignore'`: Skip illegal substrings.
- `'strict'`: Raise an exception for any illegal substrings.
- `'replace'`: Replace illegal substrings with `replacement_char`.
- `'ignore'`: Skip illegal substrings.
- `replacement_char`: The replacement codepoint to be used in place of invalid substrings in `input` when `errors='replace'`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `N+1` dimensional `int32` tensor with shape [D1...DN, (num_chars)]. The returned tensor is a `tf.Tensor` if `input` is a scalar, or a `` otherwise.
#### Example:
