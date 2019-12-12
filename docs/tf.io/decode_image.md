Function for  `decode_bmp` ,  `decode_gif` ,  `decode_jpeg` , and  `decode_png` .

**别名** : [ `tf.compat.v1.image.decode_image` ](/api_docs/python/tf/io/decode_image), [ `tf.compat.v1.io.decode_image` ](/api_docs/python/tf/io/decode_image), [ `tf.compat.v2.image.decode_image` ](/api_docs/python/tf/io/decode_image), [ `tf.compat.v2.io.decode_image` ](/api_docs/python/tf/io/decode_image), [ `tf.image.decode_image` ](/api_docs/python/tf/io/decode_image)

```
 tf.io.decode_image(
    contents,
    channels=None,
    dtype=tf.dtypes.uint8,
    name=None,
    expand_animations=True
)
 
```

### 在教程中使用：
- [Adversarial example using FGSM](https://tensorflow.google.cn/tutorials/generative/adversarial_fgsm)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
Detects whether an image is a BMP, GIF, JPEG, or PNG, and performs theappropriate operation to convert the input bytes  `string`  into a  `Tensor` of type  `dtype` .


**Note:**   `decode_gif`  returns a 4-D array  `[num_frames, height, width, 3]` , asopposed to  `decode_bmp` ,  `decode_jpeg`  and  `decode_png` , which return 3-Darrays  `[height, width, num_channels]` . Make sure to take this into accountwhen constructing your graph if you are intermixing GIF files with BMP, JPEG,and/or PNG files. Alternately, set the  `expand_animations`  argument of thisfunction to  `False` , in which case the op will return 3-dimensional tensorsand will truncate animated GIF files to the first frame.


#### 参数：
- **`contents`** : 0-D  `string` . The encoded image bytes.
- **`channels`** : An optional  `int` . Defaults to  `0` . Number of color channels forthe decoded image.
- **`dtype`** : The desired DType of the returned  `Tensor` .
- **`name`** : A name for the operation (optional)
- **`expand_animations`** : Controls the shape of the returned op's output. If `True` , the returned op will produce a 3-D tensor for PNG, JPEG, and BMPfiles; and a 4-D tensor for all GIFs, whether animated or not. If, `False` , the returned op will produce a 3-D tensor for all file types andwill truncate animated GIFs to the first frame.


#### 返回：
 `Tensor`  with type  `dtype`  and a 3- or 4-dimensional shape, depending onthe file type and the value of the  `expand_animations`  parameter.

#### 加薪：
- **`ValueError`** : On incorrect number of channels.
