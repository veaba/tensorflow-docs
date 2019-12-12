Converts  `bytearray` ,  `bytes` , or unicode python input types to  `bytes` .

**别名** : [ `tf.compat.v1.compat.as_bytes` ](/api_docs/python/tf/compat/as_bytes), [ `tf.compat.v2.compat.as_bytes` ](/api_docs/python/tf/compat/as_bytes)

```
 tf.compat.as_bytes(
    bytes_or_text,
    encoding='utf-8'
)
 
```

Uses utf-8 encoding for text by default.

#### 参数：
- **`bytes_or_text`** : A  `bytearray` ,  `bytes` ,  `str` , or  `unicode`  object.
- **`encoding`** : A string indicating the charset for encoding unicode.


#### 返回：
A  `bytes`  object.

#### 加薪：
- **`TypeError`** : If  `bytes_or_text`  is not a binary or unicode string.
