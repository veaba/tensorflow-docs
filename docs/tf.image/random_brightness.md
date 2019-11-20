[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/random_brightness) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L1522-L1545)  
---|---  
  
Adjust the brightness of images by a random factor.

### Aliases:

  * [`tf.compat.v1.image.random_brightness`](/api_docs/python/tf/image/random_brightness)
  * [`tf.compat.v2.image.random_brightness`](/api_docs/python/tf/image/random_brightness)

    
    
    tf.image.random_brightness(
        image,
        max_delta,
        seed=None
    )
    

Equivalent to `adjust_brightness()` using a `delta` randomly picked in the
interval `[-max_delta, max_delta)`.

#### Args:

  * **`image`** : An image or images to adjust.
  * **`max_delta`** : float, must be non-negative.
  * **`seed`** : A Python integer. Used to create a random seed. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.

#### Returns:

The brightness-adjusted image(s).

#### Raises:

  * **`ValueError`** : if `max_delta` is negative.

