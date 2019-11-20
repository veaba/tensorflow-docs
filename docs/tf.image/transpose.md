[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/transpose) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L587-L614)  
---|---  
  
Transpose image(s) by swapping the height and width dimension.

### Aliases:

  * [`tf.compat.v1.image.transpose`](/api_docs/python/tf/image/transpose)
  * [`tf.compat.v1.image.transpose_image`](/api_docs/python/tf/image/transpose)
  * [`tf.compat.v2.image.transpose`](/api_docs/python/tf/image/transpose)

    
    
    tf.image.transpose(
        image,
        name=None
    )
    

#### Args:

  * **`image`** : 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.
  * **`name`** : A name for this operation (optional).

#### Returns:

If `image` was 4-D, a 4-D float Tensor of shape `[batch, width, height,
channels]` If `image` was 3-D, a 3-D float Tensor of shape `[width, height,
channels]`

#### Raises:

  * **`ValueError`** : if the shape of `image` not supported.

