[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/image_gradients) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L3422-L3460)  
  
  
Returns image gradients (dy, dx) for each color channel.

### Aliases:

  * [`tf.compat.v1.image.image_gradients`](/api_docs/python/tf/image/image_gradients)
  * [`tf.compat.v2.image.image_gradients`](/api_docs/python/tf/image/image_gradients)

    
    
    tf.image.image_gradients(image)
    

Both output tensors have the same shape as the input: [batch_size, h, w, d].
The gradient values are organized so that [I(x+1, y) - I(x, y)] is in location
(x, y). That means that dy will always have zeros in the last row, and dx will
always have zeros in the last column.

#### Arguments:

  * **`image`** : Tensor with shape [batch_size, h, w, d].

#### Returns:

Pair of tensors (dy, dx) holding the vertical and horizontal image gradients
(1-step finite difference).

#### Raises:

  * **`ValueError`** : If `image` is not a 4D tensor.

