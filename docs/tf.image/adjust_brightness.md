Adjust the brightness of RGB or Grayscale images.

**Aliases** : [ `tf.compat.v1.image.adjust_brightness` ](/api_docs/python/tf/image/adjust_brightness), [ `tf.compat.v2.image.adjust_brightness` ](/api_docs/python/tf/image/adjust_brightness)

```
 tf.image.adjust_brightness(
    image,
    delta
)
 
```

This is a convenience method that converts RGB images to floatrepresentation, adjusts their brightness, and then converts them back to theoriginal data type. If several adjustments are chained, it is advisable tominimize the number of redundant conversions.

The value  `delta`  is added to all components of the tensor  `image` .  `image`  isconverted to  `float`  and scaled appropriately if it is in fixed-pointrepresentation, and  `delta`  is converted to the same data type. For regularimages,  `delta`  should be in the range  `[0,1)` , as it is added to the image infloating point representation, where pixel values are in the  `[0,1)`  range.

#### Args:
- **`image`** : RGB image or images to adjust.
- **`delta`** : A scalar. Amount to add to the pixel values.


#### Returns:
A brightness-adjusted tensor of the same shape and type as  `image` .

#### Usage Example:


```
 import tensorflow as tf
x = tf.random.normal(shape=(256, 256, 3))
tf.image.adjust_brightness(x, delta=0.1)
 
```

