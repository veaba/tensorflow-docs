[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/sobel_edges) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L3463-L3501)  
---|---  
  
Returns a tensor holding Sobel edge maps.

### Aliases:

  * [`tf.compat.v1.image.sobel_edges`](/api_docs/python/tf/image/sobel_edges)
  * [`tf.compat.v2.image.sobel_edges`](/api_docs/python/tf/image/sobel_edges)

    
    
    tf.image.sobel_edges(image)
    

### Used in the tutorials:

  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

#### Arguments:

  * **`image`** : Image tensor with shape [batch_size, h, w, d] and type float32 or float64. The image(s) must be 2x2 or larger.

#### Returns:

Tensor holding edge maps for each channel. Returns a tensor with shape
[batch_size, h, w, d, 2] where the last two dimensions hold [[dy[0], dx[0]],
[dy[1], dx[1]], ..., [dy[d-1], dx[d-1]]] calculated using the Sobel filter.

