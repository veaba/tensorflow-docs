[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/image/psnr) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/image_ops_impl.py#L3005-L3056)  
---|---  
  
Returns the Peak Signal-to-Noise Ratio between a and b.

### Aliases:

  * [`tf.compat.v1.image.psnr`](/api_docs/python/tf/image/psnr)
  * [`tf.compat.v2.image.psnr`](/api_docs/python/tf/image/psnr)

    
    
    tf.image.psnr(
        a,
        b,
        max_val,
        name=None
    )
    

This is intended to be used on signals (or images). Produces a PSNR value for
each image in batch.

The last three dimensions of input are expected to be [height, width, depth].

#### Example:

    
    
        # Read images from file.
        im1 = tf.decode_png('path/to/im1.png')
        im2 = tf.decode_png('path/to/im2.png')
        # Compute PSNR over tf.uint8 Tensors.
        psnr1 = tf.image.psnr(im1, im2, max_val=255)
    
        # Compute PSNR over tf.float32 Tensors.
        im1 = tf.image.convert_image_dtype(im1, tf.float32)
        im2 = tf.image.convert_image_dtype(im2, tf.float32)
        psnr2 = tf.image.psnr(im1, im2, max_val=1.0)
        # psnr1 and psnr2 both have type tf.float32 and are almost equal.
    

#### Arguments:

  * **`a`** : First set of images.
  * **`b`** : Second set of images.
  * **`max_val`** : The dynamic range of the images (i.e., the difference between the maximum the and minimum allowed values).
  * **`name`** : Namespace to embed the computation in.

#### Returns:

The scalar PSNR between a and b. The returned tensor has type
[`tf.float32`](https://tensorflow.google.cn/api_docs/python/tf#float32) and
shape [batch_size, 1].

