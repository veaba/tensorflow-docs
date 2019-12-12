Splits each string into a sequence of code points with start offsets.

**Aliases** : [ `tf.compat.v1.strings.unicode_split_with_offsets` ](/api_docs/python/tf/strings/unicode_split_with_offsets), [ `tf.compat.v2.strings.unicode_split_with_offsets` ](/api_docs/python/tf/strings/unicode_split_with_offsets)

```
 tf.strings.unicode_split_with_offsets(
    input,
    input_encoding,
    errors='replace',
    replacement_char=65533,
    name=None
)
 
```

This op is similar to  `tf.strings.decode(...)` , but it also returns thestart offset for each character in its respective string.  This informationcan be used to align the characters with the original byte sequence.

Returns a tuple  `(chars, start_offsets)`  where:

-  `chars[i1...iN, j]`  is the substring of  `input[i1...iN]`  that encodes its `j` th character, when decoded using  `input_encoding` .
-  `start_offsets[i1...iN, j]`  is the start byte offset for the  `j` thcharacter in  `input[i1...iN]` , when decoded using  `input_encoding` .


#### Args:
- **`input`** : An  `N`  dimensional potentially ragged  `string`  tensor with shape `[D1...DN]` .   `N`  must be statically known.
- **`input_encoding`** : String name for the unicode encoding that should be used todecode each string.
- **`errors`** : Specifies the response when an input string can't be convertedusing the indicated encoding. One of:
- **`replacement_char`** : The replacement codepoint to be used in place of invalidsubstrings in  `input`  when  `errors='replace'` .
- **`name`** : A name for the operation (optional).
    -  `'strict'` : Raise an exception for any illegal substrings.
    -  `'replace'` : Replace illegal substrings with  `replacement_char` .
    -  `'ignore'` : Skip illegal substrings.


#### Returns:
A tuple of  `N+1`  dimensional tensors  `(codepoints, start_offsets)` .

-  `codepoints`  is an  `int32`  tensor with shape  `[D1...DN, (num_chars)]` .
-  `offsets`  is an  `int64`  tensor with shape  `[D1...DN, (num_chars)]` .
The returned tensors are [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor)s if  `input`  is a scalar, or[ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)s otherwise.

#### Example:


```
  >>> input = [s.encode('utf8') for s in (u'G\xf6\xf6dnight', u'\U0001f60a')]
 >>> result = tf.strings.unicode_split_with_offsets(input, 'UTF-8')
 >>> result[0].tolist()  # character substrings
 [['G', '\xc3\xb6', '\xc3\xb6', 'd', 'n', 'i', 'g', 'h', 't'],
  ['\xf0\x9f\x98\x8a']]
 >>> result[1].tolist()  # offsets
[[0, 1, 3, 5, 6, 7, 8, 9, 10], [0]]
 
```

