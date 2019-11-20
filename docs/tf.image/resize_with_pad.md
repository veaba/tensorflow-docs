[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L1437-L1474)  
---  
  
Resizes and pads an image to a target width and height.

### Aliases:

  * [`tf.compat.v2.image.resize_with_pad`](/api_docs/python/tf/image/resize_with_pad)

    
    
    tf.image.resize_with_pad(
        image,
        target_height,
        target_width,
        method=ResizeMethod.BILINEAR,
        antialias=False
    )
    

Resizes an image to a target width and height by keeping the aspect ratio the
same without distortion. If the target dimensions don't match the image
dimensions, the image is resized and then padded with zeroes to match
requested dimensions.

#### Args:

  * **`image`** : 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.
  * **`target_height`** : Target height.
  * **`target_width`** : Target width.
  * **`method`** : Method to use for resizing image. See [`image.resize()`](https://tensorflow.google.cn/api_docs/python/tf/image/resize)
  * **`antialias`** : Whether to use anti-aliasing when resizing. See 'image.resize()'.

#### Raises:

  * **`ValueError`** : if `target_height` or `target_width` are zero or negative.

#### Returns:

Resized and padded image. If `images` was 4-D, a 4-D float Tensor of shape
`[batch, new_height, new_width, channels]`. If `images` was 3-D, a 3-D float
Tensor of shape `[new_height, new_width, channels]`.

