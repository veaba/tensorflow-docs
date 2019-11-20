[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/strings/unicode_decode) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_string_ops.py#L179-L222)  
  
  
Decodes each string in `input` into a sequence of Unicode code points.

### Aliases:

  * [`tf.compat.v1.strings.unicode_decode`](/api_docs/python/tf/strings/unicode_decode)
  * [`tf.compat.v2.strings.unicode_decode`](/api_docs/python/tf/strings/unicode_decode)

    
    
    tf.strings.unicode_decode(
        input,
        input_encoding,
        errors='replace',
        replacement_char=65533,
        replace_control_characters=False,
        name=None
    )
    

### Used in the tutorials:

  * [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

`result[i1...iN, j]` is the Unicode codepoint for the `j`th character in
`input[i1...iN]`, when decoded using `input_encoding`.

#### Args:

  * **`input`** : An `N` dimensional potentially ragged `string` tensor with shape `[D1...DN]`. `N` must be statically known.
  * **`input_encoding`** : String name for the unicode encoding that should be used to decode each string.
  * **`errors`** : Specifies the response when an input string can't be converted using the indicated encoding. One of: 
    * `'strict'`: Raise an exception for any illegal substrings.
    * `'replace'`: Replace illegal substrings with `replacement_char`.
    * `'ignore'`: Skip illegal substrings.
  * **`replacement_char`** : The replacement codepoint to be used in place of invalid substrings in `input` when `errors='replace'`; and in place of C0 control characters in `input` when `replace_control_characters=True`.
  * **`replace_control_characters`** : Whether to replace the C0 control characters `(U+0000 - U+001F)` with the `replacement_char`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `N+1` dimensional `int32` tensor with shape `[D1...DN, (num_chars)]`. The
returned tensor is a
[`tf.Tensor`](https://tensorflow.google.cn/api_docs/python/tf/Tensor) if
`input` is a scalar, or a
[`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)
otherwise.

#### Example:

>
>     >>> input = [s.encode('utf8') for s in (u'G\xf6\xf6dnight',
> u'\U0001f60a')]
>     >>> tf.strings.unicode_decode(input, 'UTF-8').tolist()
>     [[71, 246, 246, 100, 110, 105, 103, 104, 116], [128522]]
>  

