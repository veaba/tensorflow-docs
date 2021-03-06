Converts any string-like python input types to unicode.

**别名** : [ `tf.compat.as_str` ](/api_docs/python/tf/compat/as_text), [ `tf.compat.v1.compat.as_str` ](/api_docs/python/tf/compat/as_text), [ `tf.compat.v1.compat.as_text` ](/api_docs/python/tf/compat/as_text), [ `tf.compat.v2.compat.as_str` ](/api_docs/python/tf/compat/as_text), [ `tf.compat.v2.compat.as_text` ](/api_docs/python/tf/compat/as_text)

```
 tf.compat.as_text(
    bytes_or_text,
    encoding='utf-8'
)
 
```

Returns the input as a unicode string. Uses utf-8 encoding for textby default.

#### 参数：
- **`bytes_or_text`** : A  `bytes` ,  `str` , or  `unicode`  object.
- **`encoding`** : A string indicating the charset for decoding unicode.


#### 返回：
A  `unicode`  (Python 2) or  `str`  (Python 3) object.

#### 加薪：
- **`TypeError`** : If  `bytes_or_text`  is not a binary or unicode string.
