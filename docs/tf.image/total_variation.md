[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/total_variation) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L2320-L2388)  
---|---  
  
Calculate and return the total variation for one or more images.

### Aliases:

  * [`tf.compat.v1.image.total_variation`](/api_docs/python/tf/image/total_variation)
  * [`tf.compat.v2.image.total_variation`](/api_docs/python/tf/image/total_variation)

    
    
    tf.image.total_variation(
        images,
        name=None
    )
    

### Used in the tutorials:

  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

The total variation is the sum of the absolute differences for neighboring
pixel-values in the input images. This measures how much noise is in the
images.

This can be used as a loss-function during optimization so as to suppress
noise in images. If you have a batch of images, then you should calculate the
scalar loss-value as the sum: `loss =
tf.reduce_sum(tf.image.total_variation(images))`

This implements the anisotropic 2-D version of the formula described here:

https://en.wikipedia.org/wiki/Total_variation_denoising

#### Args:

  * **`images`** : 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.
  * **`name`** : A name for the operation (optional).

#### Raises:

  * **`ValueError`** : if images.shape is not a 3-D or 4-D vector.

#### Returns:

The total variation of `images`.

If `images` was 4-D, return a 1-D float Tensor of shape `[batch]` with the
total variation for each image in the batch. If `images` was 3-D, return a
scalar float with the total variation for that image.

