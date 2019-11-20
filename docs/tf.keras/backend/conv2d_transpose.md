[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/conv2d_transpose) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4868-L4938)  
---|---  
  
2D deconvolution (i.e.

### Aliases:

  * [`tf.compat.v1.keras.backend.conv2d_transpose`](/api_docs/python/tf/keras/backend/conv2d_transpose)
  * [`tf.compat.v2.keras.backend.conv2d_transpose`](/api_docs/python/tf/keras/backend/conv2d_transpose)

    
    
    tf.keras.backend.conv2d_transpose(
        x,
        kernel,
        output_shape,
        strides=(1, 1),
        padding='valid',
        data_format=None,
        dilation_rate=(1, 1)
    )
    

transposed convolution).

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`kernel`** : kernel tensor.
  * **`output_shape`** : 1D int tensor for the output shape.
  * **`strides`** : strides tuple.
  * **`padding`** : string, `"same"` or `"valid"`.
  * **`data_format`** : string, `"channels_last"` or `"channels_first"`.
  * **`dilation_rate`** : Tuple of 2 integers.

#### Returns:

A tensor, result of transposed 2D convolution.

#### Raises:

  * **`ValueError`** : if `data_format` is neither `channels_last` or `channels_first`.

