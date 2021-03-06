Encode strings into web-safe base64 format.

**别名** : [ `tf.compat.v1.encode_base64` ](/api_docs/python/tf/io/encode_base64), [ `tf.compat.v1.io.encode_base64` ](/api_docs/python/tf/io/encode_base64), [ `tf.compat.v2.io.encode_base64` ](/api_docs/python/tf/io/encode_base64)

```
 tf.io.encode_base64(
    input,
    pad=False,
    name=None
)
 
```

Refer to the following article for more information on base64 format:en.wikipedia.org/wiki/Base64. Base64 strings may have padding with '=' at theend so that the encoded has length multiple of 4. See Padding section of thelink above.

Web-safe means that the encoder uses - and _ instead of + and /.

#### 参数：
- **`input`** : A  `Tensor`  of type  `string` . Strings to be encoded.
- **`pad`** : An optional  `bool` . Defaults to  `False` .Bool whether padding is applied at the ends.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

