PNG-encode an image.

**别名** : [ `tf.compat.v1.image.encode_png` ](/api_docs/python/tf/image/encode_png), [ `tf.compat.v2.image.encode_png` ](/api_docs/python/tf/image/encode_png)

```
 tf.image.encode_png(
    image,
    compression=-1,
    name=None
)
 
```

 `image`  is a 3-D uint8 or uint16 Tensor of shape  `[height, width, channels]` where  `channels`  is:

- 1: for grayscale.
- 2: for grayscale + alpha.
- 3: for RGB.
- 4: for RGBA.
The ZLIB compression level,  `compression` , can be -1 for the PNG-encoderdefault or a value from 0 to 9.  9 is the highest compression level, generatingthe smallest output, but is slower.

#### 参数：
- **`image`** : A  `Tensor` . Must be one of the following types:  `uint8` ,  `uint16` .3-D with shape  `[height, width, channels]` .
- **`compression`** : An optional  `int` . Defaults to  `-1` . Compression level.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

