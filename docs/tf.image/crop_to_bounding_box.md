Crops an image to a specified bounding box.
### Aliases:
- `tf.compat.v1.image.crop_to_bounding_box`
- `tf.compat.v2.image.crop_to_bounding_box`

```
 tf.image.crop_to_bounding_box(
    image,
    offset_height,
    offset_width,
    target_height,
    target_width
)
```
This op cuts a rectangular part out of `image`. The top-left corner of the returned `image` is at `offset_height, offset_width` in `image`, and its lower-right corner is at `offset_height + target_height, offset_width + target_width`.
#### Args:
- `image`: 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.
- `offset_height`: Vertical coordinate of the top-left corner of the result in the input.
- `offset_width`: Horizontal coordinate of the top-left corner of the result in the input.
- `target_height`: Height of the result.
- `target_width`: Width of the result.
#### Returns:
If `image` was 4-D, a 4-D float Tensor of shape `[batch, target_height, target_width, channels]` If `image` was 3-D, a 3-D float Tensor of shape `[target_height, target_width, channels]`
#### Raises:
- `ValueError`: If the shape of `image` is incompatible with the `offset_`* or `target_`* arguments, or either `offset_`height or `offset_`width is negative, or either `target_`height or `target_`width is not positive.
