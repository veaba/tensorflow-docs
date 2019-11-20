[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/is_jpeg) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L2129-L2146)  
  
  
Convenience function to check if the 'contents' encodes a JPEG image.

### Aliases:

  * [`tf.compat.v1.image.is_jpeg`](/api_docs/python/tf/io/is_jpeg)
  * [`tf.compat.v1.io.is_jpeg`](/api_docs/python/tf/io/is_jpeg)
  * [`tf.compat.v2.image.is_jpeg`](/api_docs/python/tf/io/is_jpeg)
  * [`tf.compat.v2.io.is_jpeg`](/api_docs/python/tf/io/is_jpeg)
  * [`tf.image.is_jpeg`](/api_docs/python/tf/io/is_jpeg)

    
    
    tf.io.is_jpeg(
        contents,
        name=None
    )
    

#### Args:

  * **`contents`** : 0-D `string`. The encoded image bytes.
  * **`name`** : A name for the operation (optional)

#### Returns:

A scalar boolean tensor indicating if 'contents' may be a JPEG image. is_jpeg
is susceptible to false positives.

