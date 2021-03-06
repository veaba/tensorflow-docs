Decode the first frame of a BMP-encoded image to a uint8 tensor.

**别名** : [ `tf.compat.v1.image.decode_bmp` ](/api_docs/python/tf/io/decode_bmp), [ `tf.compat.v1.io.decode_bmp` ](/api_docs/python/tf/io/decode_bmp), [ `tf.compat.v2.image.decode_bmp` ](/api_docs/python/tf/io/decode_bmp), [ `tf.compat.v2.io.decode_bmp` ](/api_docs/python/tf/io/decode_bmp), [ `tf.image.decode_bmp` ](/api_docs/python/tf/io/decode_bmp)

```
 tf.io.decode_bmp(
    contents,
    channels=0,
    name=None
)
 
```

The attr  `channels`  indicates the desired number of color channels for thedecoded image.

#### 接受值为：
- 0: Use the number of channels in the BMP-encoded image.
- 3: output an RGB image.
- 4: output an RGBA image.


#### 参数：
- **`contents`** : A  `Tensor`  of type  `string` . 0-D.  The BMP-encoded image.
- **`channels`** : An optional  `int` . Defaults to  `0` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `uint8` .

