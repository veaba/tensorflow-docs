Function for decode_bmp, decode_gif, decode_jpeg, and decode_png.
### Aliases:
- tf.compat.v1.image.decode_image
- tf.compat.v1.io.decode_image
- tf.compat.v2.image.decode_image
- tf.compat.v2.io.decode_image
- tf.image.decode_image

```
 tf.io.decode_image(
    contents,
    channels=None,
    dtype=tf.dtypes.uint8,
    name=None,
    expand_animations=True
)
```
### Used in the tutorials:
- Adversarial example using FGSM
- Neural style transfer
Detects whether an image is a BMP, GIF, JPEG, or PNG, and performs the appropriate operation to convert the input bytes string into a Tensor of type dtype.
#### Args:
- contents: 0-D string. The encoded image bytes.
- channels: An optional int. Defaults to 0. Number of color channels for the decoded image.
- dtype: The desired DType of the returned Tensor.
- name: A name for the operation (optional)
- expand_animations: Controls the shape of the returned op's output. If True, the returned op will produce a 3-D tensor for PNG, JPEG, and BMP files; and a 4-D tensor for all GIFs, whether animated or not. If, False, the returned op will produce a 3-D tensor for all file types and will truncate animated GIFs to the first frame.
#### Returns:
Tensor with type dtype and a 3- or 4-dimensional shape, depending on the file type and the value of the expand_animations parameter.
#### Raises:
- ValueError: On incorrect number of channels.
