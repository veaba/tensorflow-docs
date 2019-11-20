[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/rgb_to_grayscale) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L1821-L1848)  
---|---  
  
Converts one or more images from RGB to Grayscale.

### Aliases:

  * [`tf.compat.v1.image.rgb_to_grayscale`](/api_docs/python/tf/image/rgb_to_grayscale)
  * [`tf.compat.v2.image.rgb_to_grayscale`](/api_docs/python/tf/image/rgb_to_grayscale)

    
    
    tf.image.rgb_to_grayscale(
        images,
        name=None
    )
    

Outputs a tensor of the same `DType` and rank as `images`. The size of the
last dimension of the output is 1, containing the Grayscale value of the
pixels.

#### Args:

  * **`images`** : The RGB tensor to convert. Last dimension must have size 3 and should contain RGB values.
  * **`name`** : A name for the operation (optional).

#### Returns:

The converted grayscale image(s).

