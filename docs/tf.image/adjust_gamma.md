[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/adjust_gamma) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L1674-L1725)  
---|---  
  
Performs Gamma Correction on the input image.

### Aliases:

  * [`tf.compat.v1.image.adjust_gamma`](/api_docs/python/tf/image/adjust_gamma)
  * [`tf.compat.v2.image.adjust_gamma`](/api_docs/python/tf/image/adjust_gamma)

    
    
    tf.image.adjust_gamma(
        image,
        gamma=1,
        gain=1
    )
    

Also known as Power Law Transform. This function converts the input images at
first to float representation, then transforms them pixelwise according to the
equation `Out = gain * In**gamma`, and then converts the back to the original
data type.

#### Args:

  * **`image`** : RGB image or images to adjust.
  * **`gamma`** : A scalar or tensor. Non negative real number.
  * **`gain`** : A scalar or tensor. The constant multiplier.

#### Returns:

A Tensor. A Gamma-adjusted tensor of the same shape and type as `image`.

#### Usage Example:

    
    
    >> import tensorflow as tf
    >> x = tf.random.normal(shape=(256, 256, 3))
    >> tf.image.adjust_gamma(x, 0.2)
    

#### Raises:

  * **`ValueError`** : If gamma is negative.

#### Notes:

For gamma greater than 1, the histogram will shift towards left and the output
image will be darker than the input image. For gamma less than 1, the
histogram will shift towards right and the output image will be brighter than
the input image.

#### References:

[1] http://en.wikipedia.org/wiki/Gamma_correction

