[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/flip_left_right) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L411-L429)  
  
  
Flip an image horizontally (left to right).

### Aliases:

  * [`tf.compat.v1.image.flip_left_right`](/api_docs/python/tf/image/flip_left_right)
  * [`tf.compat.v2.image.flip_left_right`](/api_docs/python/tf/image/flip_left_right)

    
    
    tf.image.flip_left_right(image)
    

### Used in the tutorials:

  * [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
  * [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)

Outputs the contents of `image` flipped along the width dimension.

See also `reverse()`.

#### Args:

  * **`image`** : 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.

#### Returns:

A tensor of the same type and shape as `image`.

#### Raises:

  * **`ValueError`** : if the shape of `image` not supported.

