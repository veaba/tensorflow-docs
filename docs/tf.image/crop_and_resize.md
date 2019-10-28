Extracts crops from the input image tensor and resizes them.
### Aliases:
- `tf.compat.v2.image.crop_and_resize`

```
 tf.image.crop_and_resize(
    image,
    boxes,
    box_indices,
    crop_size,
    method='bilinear',
    extrapolation_value=0,
    name=None
)
```
Extracts crops from the input image tensor and resizes them using bilinear sampling or nearest neighbor sampling (possibly with aspect ratio change) to a common output size specified by `crop_size`. This is more general than the `crop_to_bounding_box` op which extracts a fixed size slice from the input image and does not allow resizing or aspect ratio change.
[tf.compat.v1.image.resize_bilinear()](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_bilinear)

#### Args:
- `image`: A 4-D tensor of shape `[batch, image_height, image_width, depth]`. Both `image`_height and `image`_width need to be positive.
#### Returns:
A 4-D tensor of shape `[num_boxes, crop_height, crop_width, depth]`.
