[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/rgb_to_yiq) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L2857-L2876)  
  
  
Converts one or more images from RGB to YIQ.

### Aliases:

  * [`tf.compat.v1.image.rgb_to_yiq`](/api_docs/python/tf/image/rgb_to_yiq)
  * [`tf.compat.v2.image.rgb_to_yiq`](/api_docs/python/tf/image/rgb_to_yiq)

    
    
    tf.image.rgb_to_yiq(images)
    

Outputs a tensor of the same shape as the `images` tensor, containing the YIQ
value of the pixels. The output is only well defined if the value in images
are in [0,1].

#### Args:

  * **`images`** : 2-D or higher rank. Image data to convert. Last dimension must be size 3.

#### Returns:

  * **`images`** : tensor with the same shape as `images`.

