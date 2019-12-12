Decode a JPEG-encoded image to a uint8 tensor.

**别名** : [ `tf.compat.v1.image.decode_jpeg` ](/api_docs/python/tf/io/decode_jpeg), [ `tf.compat.v1.io.decode_jpeg` ](/api_docs/python/tf/io/decode_jpeg), [ `tf.compat.v2.image.decode_jpeg` ](/api_docs/python/tf/io/decode_jpeg), [ `tf.compat.v2.io.decode_jpeg` ](/api_docs/python/tf/io/decode_jpeg), [ `tf.image.decode_jpeg` ](/api_docs/python/tf/io/decode_jpeg)

```
 tf.io.decode_jpeg(
    contents,
    channels=0,
    ratio=1,
    fancy_upscaling=True,
    try_recover_truncated=False,
    acceptable_fraction=1,
    dct_method='',
    name=None
)
 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)


### 在教程中使用：
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Load images](https://tensorflow.google.cn/tutorials/load_data/images)
- [TFRecord and tf.Example](https://tensorflow.google.cn/tutorials/load_data/tfrecord)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
The attr  `channels`  indicates the desired number of color channels for thedecoded image.

#### 接受值为：
- 0: Use the number of channels in the JPEG-encoded image.
- 1: output a grayscale image.
- 3: output an RGB image.
If needed, the JPEG-encoded image is transformed to match the requested numberof color channels.

The attr  `ratio`  allows downscaling the image by an integer factor duringdecoding.  Allowed values are: 1, 2, 4, and 8.  This is much faster thandownscaling the image later.

This op also supports decoding PNGs and non-animated GIFs since the interface isthe same, though it is cleaner to use [ `tf.image.decode_image` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_image).

#### 参数：
- **`contents`** : A  `Tensor`  of type  `string` . 0-D.  The JPEG-encoded image.
- **`channels`** : An optional  `int` . Defaults to  `0` .Number of color channels for the decoded image.
- **`ratio`** : An optional  `int` . Defaults to  `1` . Downscaling ratio.
- **`fancy_upscaling`** : An optional  `bool` . Defaults to  `True` .If true use a slower but nicer upscaling of thechroma planes (yuv420/422 only).
- **`try_recover_truncated`** : An optional  `bool` . Defaults to  `False` .If true try to recover an image from truncated input.
- **`acceptable_fraction`** : An optional  `float` . Defaults to  `1` .The minimum required fraction of lines before a truncatedinput is accepted.
- **`dct_method`** : An optional  `string` . Defaults to  `""` .string specifying a hint about the algorithm used fordecompression.  Defaults to "" which maps to a system-specificdefault.  Currently valid values are ["INTEGER_FAST","INTEGER_ACCURATE"].  The hint may be ignored (e.g., the internaljpeg library changes to a version that does not have that specificoption.)
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `uint8` .

