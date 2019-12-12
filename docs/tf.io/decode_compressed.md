解压缩字符串。

**别名** : [ `tf.compat.v1.decode_compressed` ](/api_docs/python/tf/io/decode_compressed), [ `tf.compat.v1.io.decode_compressed` ](/api_docs/python/tf/io/decode_compressed), [ `tf.compat.v2.io.decode_compressed` ](/api_docs/python/tf/io/decode_compressed)

```
 tf.io.decode_compressed(
    bytes,
    compression_type='',
    name=None
)
 
```

This op decompresses each element of the  `bytes`  input  `Tensor` , whichis assumed to be compressed using the given  `compression_type` .

The  `output`  is a string  `Tensor`  of the same shape as  `bytes` ,each element containing the decompressed data from the correspondingelement in  `bytes` .

#### 参数：
- **`bytes`** : A  `Tensor`  of type  `string` .A Tensor of string which is compressed.
- **`compression_type`** : An optional  `string` . Defaults to  `""` .A scalar containing either (i) the empty string (nocompression), (ii) "ZLIB", or (iii) "GZIP".
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

