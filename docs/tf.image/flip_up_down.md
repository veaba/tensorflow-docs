[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/flip_up_down) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L432-L450)  
  
  
Flip an image vertically (upside down).

### Aliases:

  * [`tf.compat.v1.image.flip_up_down`](/api_docs/python/tf/image/flip_up_down)
  * [`tf.compat.v2.image.flip_up_down`](/api_docs/python/tf/image/flip_up_down)

    
    
    tf.image.flip_up_down(image)
    

Outputs the contents of `image` flipped along the height dimension.

See also `reverse()`.

#### Args:

  * **`image`** : 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.

#### Returns:

A `Tensor` of the same type and shape as `image`.

#### Raises:

  * **`ValueError`** : if the shape of `image` not supported.

