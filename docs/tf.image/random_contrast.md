[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/random_contrast) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L1548-L1576)  
  
  
Adjust the contrast of an image or images by a random factor.

### Aliases:

  * [`tf.compat.v1.image.random_contrast`](/api_docs/python/tf/image/random_contrast)
  * [`tf.compat.v2.image.random_contrast`](/api_docs/python/tf/image/random_contrast)

    
    
    tf.image.random_contrast(
        image,
        lower,
        upper,
        seed=None
    )
    

Equivalent to `adjust_contrast()` but uses a `contrast_factor` randomly picked
in the interval `[lower, upper]`.

#### Args:

  * **`image`** : An image tensor with 3 or more dimensions.
  * **`lower`** : float. Lower bound for the random contrast factor.
  * **`upper`** : float. Upper bound for the random contrast factor.
  * **`seed`** : A Python integer. Used to create a random seed. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.

#### Returns:

The contrast-adjusted image(s).

#### Raises:

  * **`ValueError`** : if `upper <= lower` or if `lower < 0`.

