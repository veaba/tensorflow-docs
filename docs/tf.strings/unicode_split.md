Splits each string in  `input`  into a sequence of Unicode code points.

**别名** : [ `tf.compat.v1.strings.unicode_split` ](/api_docs/python/tf/strings/unicode_split), [ `tf.compat.v2.strings.unicode_split` ](/api_docs/python/tf/strings/unicode_split)

```
 tf.strings.unicode_split(
    input,
    input_encoding,
    errors='replace',
    replacement_char=65533,
    name=None
)
 
```

### 在教程中使用：
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
 `result[i1...iN, j]`  is the substring of  `input[i1...iN]`  that encodes its `j` th character, when decoded using  `input_encoding` .

#### 参数：
- **`input`** : An  `N`  dimensional potentially ragged  `string`  tensor with shape `[D1...DN]` .   `N`  must be statically known.
- **`input_encoding`** : String name for the unicode encoding that should be used todecode each string.
- **`errors`** : Specifies the response when an input string can't be convertedusing the indicated encoding. One of:
- **`replacement_char`** : The replacement codepoint to be used in place of invalidsubstrings in  `input`  when  `errors='replace'` .
- **`name`** : A name for the operation (optional).
    -  `'strict'` : Raise an exception for any illegal substrings.
    -  `'replace'` : Replace illegal substrings with  `replacement_char` .
    -  `'ignore'` : Skip illegal substrings.


#### 返回：
A  `N+1`  dimensional  `int32`  tensor with shape  `[D1...DN, (num_chars)]` .The returned tensor is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) if  `input`  is a scalar, or a[ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor) otherwise.

#### 示例：


```
 >>> input = [s.encode('utf8') for s in (u'G\xf6\xf6dnight', u'\U0001f60a')]
>>> tf.strings.unicode_split(input, 'UTF-8').tolist()
[['G', '\xc3\xb6', '\xc3\xb6', 'd', 'n', 'i', 'g', 'h', 't'],
 ['\xf0\x9f\x98\x8a']]
 
```

