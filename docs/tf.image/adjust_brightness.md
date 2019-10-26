Adjust the brightness of RGB or Grayscale images.
### Aliases:
- tf.compat.v1.image.adjust_brightness
- tf.compat.v2.image.adjust_brightness

```
 tf.image.adjust_brightness(
    image,
    delta
)
```
This is a convenience method that converts RGB images to float representation, adjusts their brightness, and then converts them back to the original data type. If several adjustments are chained, it is advisable to minimize the number of redundant conversions.
The value delta is added to all components of the tensor image. image is converted to float and scaled appropriately if it is in fixed-point representation, and delta is converted to the same data type. For regular images, delta should be in the range [0,1), as it is added to the image in floating point representation, where pixel values are in the [0,1) range.
#### Args:
- image: RGB image or images to adjust.
- delta: A scalar. Amount to add to the pixel values.
#### Returns:
A brightness-adjusted tensor of the same shape and type as image.
#### Usage Example:

```
 import tensorflow as tf
x = tf.random.normal(shape=(256, 256, 3))
tf.image.adjust_brightness(x, delta=0.1)
```
