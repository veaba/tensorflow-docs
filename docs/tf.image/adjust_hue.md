
Adjust hue of RGB images.
### Aliases:
- `tf.compat.v1.image.adjust_hue`
- `tf.compat.v2.image.adjust_hue`

```
 tf.image.adjust_hue(
    image,
    delta,
    name=None
)
```

This is a convenience method that converts an RGB image to float representation, converts it to HSV, add an offset to the hue channel, converts back to RGB and then back to the original data type. If several adjustments are chained it is advisable to minimize the number of redundant conversions.

image is an RGB image. The image hue is adjusted by converting the image(s) to HSV and rotating the hue channel (H) by delta. The image is then converted back to RGB.

delta must be in the interval [-1, 1].
#### Args:
- `image`: RGB `image` or `image`s. Size of the last dimension must be 3.
- `delta`: float. How much to add to the hue channel.
- `name`: A `name` for this operation (optional).
#### Returns:

Adjusted image(s), same shape and DType as image.
#### Usage Example:

```
 >> import tensorflow as tf
>> x = tf.random.normal(shape=(256, 256, 3))
>> tf.image.adjust_hue(x, 0.2)
```
