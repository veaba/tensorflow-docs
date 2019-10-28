Converts one or more images from RGB to YUV.
### Aliases:
- `tf.compat.v1.image.rgb_to_yuv`
- `tf.compat.v2.image.rgb_to_yuv`

```
 tf.image.rgb_to_yuv(images)
```
Outputs a tensor of the same shape as the `images` tensor, containing the YUV value of the pixels. The output is only well defined if the value in `images` are in [0,1].
#### Args:
- `images`: 2-D or higher rank. Image data to convert. Last dimension must be size 3.
#### Returns:
- `images`: tensor with the same shape as `images`.
