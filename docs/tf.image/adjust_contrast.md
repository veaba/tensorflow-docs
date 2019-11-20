[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/adjust_contrast) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L1624-L1671)  
---|---  
  
Adjust contrast of RGB or grayscale images.

### Aliases:

  * [`tf.compat.v1.image.adjust_contrast`](/api_docs/python/tf/image/adjust_contrast)
  * [`tf.compat.v2.image.adjust_contrast`](/api_docs/python/tf/image/adjust_contrast)

    
    
    tf.image.adjust_contrast(
        images,
        contrast_factor
    )
    

This is a convenience method that converts RGB images to float representation,
adjusts their contrast, and then converts them back to the original data type.
If several adjustments are chained, it is advisable to minimize the number of
redundant conversions.

`images` is a tensor of at least 3 dimensions. The last 3 dimensions are
interpreted as `[height, width, channels]`. The other dimensions only
represent a collection of images, such as `[batch, height, width, channels].`

Contrast is adjusted independently for each channel of each image.

For each channel, this Op computes the mean of the image pixels in the channel
and then adjusts each component `x` of each pixel to `(x - mean) *
contrast_factor + mean`.

#### Args:

  * **`images`** : Images to adjust. At least 3-D.
  * **`contrast_factor`** : A float multiplier for adjusting contrast.

#### Returns:

The contrast-adjusted image or images.

#### Usage Example:

    
    
    import tensorflow as tf
    x = tf.random.normal(shape=(256, 256, 3))
    tf.image.adjust_contrast(x,2)
    

