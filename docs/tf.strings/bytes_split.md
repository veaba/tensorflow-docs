Split string elements of  `input`  into bytes.

**别名** : [ `tf.compat.v1.strings.bytes_split` ](/api_docs/python/tf/strings/bytes_split), [ `tf.compat.v2.strings.bytes_split` ](/api_docs/python/tf/strings/bytes_split)

```
 tf.strings.bytes_split(
    input,
    name=None
)
 
```

#### 示例：


```
 tf.strings.bytes_split('hello') 
 ['h', 'e', 'l', 'l', 'o'] 
 tf.strings.bytes_split(['hello', '123']) 
 <RaggedTensor [['h', 'e', 'l', 'l', 'o'], ['1', '2', '3']]> 

```

Note that this op splits strings into bytes, not unicode characters.  Tosplit strings into unicode characters, use [ `tf.strings.unicode_split` ](https://tensorflow.google.cn/api_docs/python/tf/strings/unicode_split).

See also: [ `tf.io.decode_raw` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_raw), [ `tf.strings.split` ](https://tensorflow.google.cn/api_docs/python/tf/strings/split), [ `tf.strings.unicode_split` ](https://tensorflow.google.cn/api_docs/python/tf/strings/unicode_split).

#### 参数：
- **`input`** : A string  `Tensor`  or  `RaggedTensor` : the strings to split.  Musthave a statically known rank ( `N` ).
- **`name`** : A name for the operation (optional).


#### 返回：
A  `RaggedTensor`  of rank  `N+1` : the bytes that make up the source strings.

