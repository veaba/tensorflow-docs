Resize images to size using the specified method.
### Aliases:
- tf.compat.v1.image.resize_images

```
 tf.compat.v1.image.resize(
    images,
    size,
    method=ResizeMethodV1.BILINEAR,
    align_corners=False,
    preserve_aspect_ratio=False,
    name=None
)
```
[tf.compat.v1.image.resize_image_with_pad](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_image_with_pad)Resized images will be distorted if their original aspect ratio is not the same as size. To avoid distortions see .

method can be one of:
- ResizeMethod.BILINEAR: Bilinear interpolation.
- ResizeMethod.NEAREST_NEIGHBOR: Nearest neighbor interpolation.
- ResizeMethod.BICUBIC: Bicubic interpolation.
- ResizeMethod.AREA: Area interpolation.
[ResizeMethod.NEAREST_NEIGHBOR](https://tensorflow.google.cn/api_docs/python/tf/image/ResizeMethod#NEAREST_NEIGHBOR)The return value has the same type as images if method is . It will also have the same type as images if the size of images can be statically determined to be the same as size, because images is returned in this case. Otherwise, the return value has type float32.

#### Args:
- images: 4-D Tensor of shape [batch, height, width, channels] or 3-D Tensor of shape [height, width, channels].
- size: A 1-D int32 Tensor of 2 elements: new_height, new_width. The new size for the images.
- method: ResizeMethod. Defaults to ResizeMethod.BILINEAR.
- align_corners: bool. If True, the centers of the 4 corner pixels of the input and output tensors are aligned, preserving the values at the corner pixels. Defaults to False.
- preserve_aspect_ratio: Whether to preserve the aspect ratio. If this is set, then images will be resized to a size that fits in size while preserving the aspect ratio of the original image. Scales up the image if size is bigger than the current size of the image. Defaults to False.
- name: A name for this operation (optional).
#### Raises:
- ValueError: if the shape of images is incompatible with the shape arguments to this function
- ValueError: if size has invalid shape or type.
- ValueError: if an unsupported resize method is specified.
#### Returns:
If images was 4-D, a 4-D float Tensor of shape [batch, new_height, new_width, channels]. If images was 3-D, a 3-D float Tensor of shape [new_height, new_width, channels].
