[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/separable_conv2d) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5008-L5062)  
---|---  
  
2D convolution with separable filters.

### Aliases:

  * [`tf.compat.v1.keras.backend.separable_conv2d`](/api_docs/python/tf/keras/backend/separable_conv2d)
  * [`tf.compat.v2.keras.backend.separable_conv2d`](/api_docs/python/tf/keras/backend/separable_conv2d)

    
    
    tf.keras.backend.separable_conv2d(
        x,
        depthwise_kernel,
        pointwise_kernel,
        strides=(1, 1),
        padding='valid',
        data_format=None,
        dilation_rate=(1, 1)
    )
    

#### Arguments:

  * **`x`** : input tensor
  * **`depthwise_kernel`** : convolution kernel for the depthwise convolution.
  * **`pointwise_kernel`** : kernel for the 1x1 convolution.
  * **`strides`** : strides tuple (length 2).
  * **`padding`** : string, `"same"` or `"valid"`.
  * **`data_format`** : string, `"channels_last"` or `"channels_first"`.
  * **`dilation_rate`** : tuple of integers, dilation rates for the separable convolution.

#### Returns:

Output tensor.

#### Raises:

  * **`ValueError`** : if `data_format` is neither `channels_last` or `channels_first`.
  * **`ValueError`** : if `strides` is not a tuple of 2 integers.

