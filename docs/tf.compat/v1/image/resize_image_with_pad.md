Resizes and pads an image to a target width and height.

```
 tf.compat.v1.image.resize_image_with_pad(    image,    target_height,    target_width,    method=ResizeMethodV1.BILINEAR,    align_corners=False) 
```

Resizes an image to a target width and height by keepingthe aspect ratio the same without distortion. If the targetdimensions don't match the image dimensions, the imageis resized and then padded with zeroes to match requesteddimensions.

#### Args:
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`target_height`** : Target height.
- **`target_width`** : Target width.
- **`method`** : Method to use for resizing image. See  `resize_images()` 
- **`align_corners`** : bool.  If True, the centers of the 4 corner pixels of theinput and output tensors are aligned, preserving the values at the cornerpixels. Defaults to  `False` .


#### Raises:
- **`ValueError`** : if  `target_height`  or  `target_width`  are zero or negative.


#### Returns:
Resized and padded image.If  `images`  was 4-D, a 4-D float Tensor of shape `[batch, new_height, new_width, channels]` .If  `images`  was 3-D, a 3-D float Tensor of shape `[new_height, new_width, channels]` .

