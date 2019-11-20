[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/grayscale_to_rgb) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L1851-L1876)  
---|---  
  
Converts one or more images from Grayscale to RGB.

### Aliases:

  * [`tf.compat.v1.image.grayscale_to_rgb`](/api_docs/python/tf/image/grayscale_to_rgb)
  * [`tf.compat.v2.image.grayscale_to_rgb`](/api_docs/python/tf/image/grayscale_to_rgb)

    
    
    tf.image.grayscale_to_rgb(
        images,
        name=None
    )
    

Outputs a tensor of the same `DType` and rank as `images`. The size of the
last dimension of the output is 3, containing the RGB value of the pixels. The
input images' last dimension must be size 1.

#### Args:

  * **`images`** : The Grayscale tensor to convert. Last dimension must be size 1.
  * **`name`** : A name for the operation (optional).

#### Returns:

The converted grayscale image(s).

