Transcode the input text from a source encoding to a destination encoding.

**Aliases** : [ `tf.compat.v1.strings.unicode_transcode` ](/api_docs/python/tf/strings/unicode_transcode), [ `tf.compat.v2.strings.unicode_transcode` ](/api_docs/python/tf/strings/unicode_transcode)

```
 tf.strings.unicode_transcode(
    input,
    input_encoding,
    output_encoding,
    errors='replace',
    replacement_char=65533,
    replace_control_characters=False,
    name=None
)
 
```

### Used in the tutorials:
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
The input is a string tensor of any shape. The output is a string tensor ofthe same shape containing the transcoded strings. Output strings are alwaysvalid unicode. If the input contains invalid encoding positions, the `errors`  attribute sets the policy for how to deal with them. If the defaulterror-handling policy is used, invalid formatting will be substituted in theoutput by the  `replacement_char` . If the errors policy is to  `ignore` , anyinvalid encoding positions in the input are skipped and not included in theoutput. If it set to  `strict`  then any invalid formatting will result in anInvalidArgument error.

This operation can be used with  `output_encoding = input_encoding`  to enforcecorrect formatting for inputs even if they are already in the desired encoding.

If the input is prefixed by a Byte Order Mark needed to determine encoding(e.g. if the encoding is UTF-16 and the BOM indicates big-endian), then thatBOM will be consumed and not emitted into the output. If the input encodingis marked with an explicit endianness (e.g. UTF-16-BE), then the BOM isinterpreted as a non-breaking-space and is preserved in the output (includingalways for UTF-8).

The end result is that if the input is marked as an explicit endianness thetranscoding is faithful to all codepoints in the source. If it is not markedwith an explicit endianness, the BOM is not considered part of the string itselfbut as metadata, and so is not preserved in the output.

#### Args:
- **`input`** : A  `Tensor`  of type  `string` .The text to be processed. Can have any shape.
- **`input_encoding`** : A  `string` .Text encoding of the input strings. This is any of the encodings supportedby ICU ucnv algorithmic converters. Examples:  `"UTF-16", "US ASCII", "UTF-8"` .
- **`output_encoding`** : A  `string`  from:  `"UTF-8", "UTF-16-BE", "UTF-32-BE"` .The unicode encoding to use in the output. Must be one of `"UTF-8", "UTF-16-BE", "UTF-32-BE"` . Multi-byte encodings will be big-endian.
- **`errors`** : An optional  `string`  from:  `"strict", "replace", "ignore"` . Defaults to  `"replace"` .Error handling policy when there is invalid formatting found in the input.The value of 'strict' will cause the operation to produce a InvalidArgumenterror on any invalid input formatting. A value of 'replace' (the default) willcause the operation to replace any invalid formatting in the input with the `replacement_char`  codepoint. A value of 'ignore' will cause the operation toskip any invalid formatting in the input and produce no corresponding outputcharacter.
- **`replacement_char`** : An optional  `int` . Defaults to  `65533` .The replacement character codepoint to be used in place of any invalidformatting in the input when  `errors='replace'` . Any valid unicode codepoint maybe used. The default value is the default unicode replacement character is0xFFFD or U+65533.)

Note that for UTF-8, passing a replacement character expressible in 1 byte, suchas ' ', will preserve string alignment to the source since invalid bytes will bereplaced with a 1-byte replacement. For UTF-16-BE and UTF-16-LE, any 1 or 2 bytereplacement character will preserve byte alignment to the source.


- **`replace_control_characters`** : An optional  `bool` . Defaults to  `False` .Whether to replace the C0 control characters (00-1F) with the `replacement_char` . Default is false.


- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `string` .

