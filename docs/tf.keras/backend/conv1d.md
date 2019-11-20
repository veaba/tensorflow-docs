[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/conv1d) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L4775-L4822)  
---|---  
  
1D convolution.

### Aliases:

  * [`tf.compat.v1.keras.backend.conv1d`](/api_docs/python/tf/keras/backend/conv1d)
  * [`tf.compat.v2.keras.backend.conv1d`](/api_docs/python/tf/keras/backend/conv1d)

    
    
    tf.keras.backend.conv1d(
        x,
        kernel,
        strides=1,
        padding='valid',
        data_format=None,
        dilation_rate=1
    )
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`kernel`** : kernel tensor.
  * **`strides`** : stride integer.
  * **`padding`** : string, `"same"`, `"causal"` or `"valid"`.
  * **`data_format`** : string, one of "channels_last", "channels_first".
  * **`dilation_rate`** : integer dilate rate.

#### Returns:

A tensor, result of 1D convolution.

#### Raises:

  * **`ValueError`** : if `data_format` is neither `channels_last` or `channels_first`.

