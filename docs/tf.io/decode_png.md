Decode a PNG-encoded image to a uint8 or uint16 tensor.

**Aliases** : [ `tf.compat.v1.image.decode_png` ](/api_docs/python/tf/io/decode_png), [ `tf.compat.v1.io.decode_png` ](/api_docs/python/tf/io/decode_png), [ `tf.compat.v2.image.decode_png` ](/api_docs/python/tf/io/decode_png), [ `tf.compat.v2.io.decode_png` ](/api_docs/python/tf/io/decode_png), [ `tf.image.decode_png` ](/api_docs/python/tf/io/decode_png)

```
 tf.io.decode_png(
    contents,
    channels=0,
    dtype=tf.dtypes.uint8,
    name=None
)
 
```

### Used in the guide:
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
The attr  `channels`  indicates the desired number of color channels for thedecoded image.

#### Accepted values are:
- 0: Use the number of channels in the PNG-encoded image.
- 1: output a grayscale image.
- 3: output an RGB image.
- 4: output an RGBA image.
If needed, the PNG-encoded image is transformed to match the requested numberof color channels.

This op also supports decoding JPEGs and non-animated GIFs since the interfaceis the same, though it is cleaner to use [ `tf.image.decode_image` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_image).

#### Args:
- **`contents`** : A  `Tensor`  of type  `string` . 0-D.  The PNG-encoded image.
- **`channels`** : An optional  `int` . Defaults to  `0` .Number of color channels for the decoded image.
- **`dtype`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.uint8, tf.uint16` . Defaults to [ `tf.uint8` ](https://tensorflow.google.cn/api_docs/python/tf#uint8).
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `dtype` .

