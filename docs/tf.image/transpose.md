Transpose image(s) by swapping the height and width dimension.
### Aliases:
- tf.compat.v1.image.transpose
- tf.compat.v1.image.transpose_image
- tf.compat.v2.image.transpose

```
 tf.image.transpose(
    image,
    name=None
)
```
#### Args:
- image: 4-D Tensor of shape [batch, height, width, channels] or 3-D Tensor of shape [height, width, channels].
- name: A name for this operation (optional).
#### Returns:
If image was 4-D, a 4-D float Tensor of shape [batch, width, height, channels] If image was 3-D, a 3-D float Tensor of shape [width, height, channels]
#### Raises:
- ValueError: if the shape of image not supported.
