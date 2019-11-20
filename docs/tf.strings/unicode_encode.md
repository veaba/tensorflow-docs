[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/strings/unicode_encode) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_string_ops.py#L83-L175)  
  
  
Encodes each sequence of Unicode code points in `input` into a string.

### Aliases:

  * [`tf.compat.v1.strings.unicode_encode`](/api_docs/python/tf/strings/unicode_encode)
  * [`tf.compat.v2.strings.unicode_encode`](/api_docs/python/tf/strings/unicode_encode)

    
    
    tf.strings.unicode_encode(
        input,
        output_encoding,
        errors='replace',
        replacement_char=65533,
        name=None
    )
    

### Used in the tutorials:

  * [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

`result[i1...iN]` is the string formed by concatenating the Unicode codepoints
`input[1...iN, :]`, encoded using `output_encoding`.

#### Args:

  * **`input`** : An `N+1` dimensional potentially ragged integer tensor with shape `[D1...DN, num_chars]`.
  * **`output_encoding`** : Unicode encoding that should be used to encode each codepoint sequence. Can be `"UTF-8"`, `"UTF-16-BE"`, or `"UTF-32-BE"`.
  * **`errors`** : Specifies the response when an invalid codepoint is encountered (optional). One of: * `'replace'`: Replace invalid codepoint with the `replacement_char`. (default) * `'ignore'`: Skip invalid codepoints. * `'strict'`: Raise an exception for any invalid codepoint.
  * **`replacement_char`** : The replacement character codepoint to be used in place of any invalid input when `errors='replace'`. Any valid unicode codepoint may be used. The default value is the default unicode replacement character which is 0xFFFD (U+65533).
  * **`name`** : A name for the operation (optional).

#### Returns:

A `N` dimensional `string` tensor with shape `[D1...DN]`.

#### Example:

>
>       >>> input = [[71, 246, 246, 100, 110, 105, 103, 104, 116], [128522]]
>       >>> unicode_encode(input, 'UTF-8')
>       ['G\xc3\xb6\xc3\xb6dnight', '\xf0\x9f\x98\x8a']
>  

