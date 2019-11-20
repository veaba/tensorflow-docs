[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/random_flip_up_down) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L323-L341)  
---|---  
  
Randomly flips an image vertically (upside down).

### Aliases:

  * [`tf.compat.v1.image.random_flip_up_down`](/api_docs/python/tf/image/random_flip_up_down)
  * [`tf.compat.v2.image.random_flip_up_down`](/api_docs/python/tf/image/random_flip_up_down)

    
    
    tf.image.random_flip_up_down(
        image,
        seed=None
    )
    

With a 1 in 2 chance, outputs the contents of `image` flipped along the first
dimension, which is `height`. Otherwise output the image as-is.

#### Args:

  * **`image`** : 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.
  * **`seed`** : A Python integer. Used to create a random seed. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.

#### Returns:

A tensor of the same type and shape as `image`.

#### Raises:

  * **`ValueError`** : if the shape of `image` not supported.

