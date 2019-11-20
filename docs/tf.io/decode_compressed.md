[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/decode_compressed)  
---  
  
Defined in generated file: `python/ops/gen_parsing_ops.py`

Decompress strings.

### Aliases:

  * [`tf.compat.v1.decode_compressed`](/api_docs/python/tf/io/decode_compressed)
  * [`tf.compat.v1.io.decode_compressed`](/api_docs/python/tf/io/decode_compressed)
  * [`tf.compat.v2.io.decode_compressed`](/api_docs/python/tf/io/decode_compressed)

    
    
    tf.io.decode_compressed(
        bytes,
        compression_type='',
        name=None
    )
    

This op decompresses each element of the `bytes` input `Tensor`, which is
assumed to be compressed using the given `compression_type`.

The `output` is a string `Tensor` of the same shape as `bytes`, each element
containing the decompressed data from the corresponding element in `bytes`.

#### Args:

  * **`bytes`** : A `Tensor` of type `string`. A Tensor of string which is compressed.
  * **`compression_type`** : An optional `string`. Defaults to `""`. A scalar containing either (i) the empty string (no compression), (ii) "ZLIB", or (iii) "GZIP".
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `string`.

