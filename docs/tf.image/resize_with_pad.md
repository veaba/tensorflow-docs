调整图像大小并将其填充到目标宽度和高度。

```
 tf.image.resize_with_pad(    image,    target_height,    target_width,    method=ResizeMethod.BILINEAR,    antialias=False) 
```

Resizes an image to a target width and height by keepingthe aspect ratio the same without distortion. If the targetdimensions don't match the image dimensions, the imageis resized and then padded with zeroes to match requesteddimensions.

#### 参数：
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`target_height`** : Target height.
- **`target_width`** : Target width.
- **`method`** : Method to use for resizing image. See [ `image.resize()` ](https://tensorflow.google.cn/api_docs/python/tf/image/resize)
- **`antialias`** : Whether to use anti-aliasing when resizing. See 'image.resize()'.


#### 加薪：
- **`ValueError`** : if  `target_height`  or  `target_width`  are zero or negative.


#### 返回：
Resized and padded image.If  `images`  was 4-D, a 4-D float Tensor of shape `[batch, new_height, new_width, channels]` .If  `images`  was 3-D, a 3-D float Tensor of shape `[new_height, new_width, channels]` .

