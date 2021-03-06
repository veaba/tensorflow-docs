裁剪和/或将图像填充到目标宽度和高度。

**别名** : [ `tf.compat.v1.image.resize_image_with_crop_or_pad` ](/api_docs/python/tf/image/resize_with_crop_or_pad), [ `tf.compat.v1.image.resize_with_crop_or_pad` ](/api_docs/python/tf/image/resize_with_crop_or_pad), [ `tf.compat.v2.image.resize_with_crop_or_pad` ](/api_docs/python/tf/image/resize_with_crop_or_pad)

```
 tf.image.resize_with_crop_or_pad(
    image,
    target_height,
    target_width
)
 
```

Resizes an image to a target width and height by either centrallycropping the image or padding it evenly with zeros.

If  `width`  or  `height`  is greater than the specified  `target_width`  or `target_height`  respectively, this op centrally crops along that dimension.If  `width`  or  `height`  is smaller than the specified  `target_width`  or `target_height`  respectively, this op centrally pads with 0 along thatdimension.

#### 参数：
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`target_height`** : Target height.
- **`target_width`** : Target width.


#### 加薪：
- **`ValueError`** : if  `target_height`  or  `target_width`  are zero or negative.


#### 返回：
Cropped and/or padded image.If  `images`  was 4-D, a 4-D float Tensor of shape `[batch, new_height, new_width, channels]` .If  `images`  was 3-D, a 3-D float Tensor of shape `[new_height, new_width, channels]` .

