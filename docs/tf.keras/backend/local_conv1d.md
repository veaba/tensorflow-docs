[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/local_conv1d) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5404-L5436)  
  
  
Apply 1D conv with un-shared weights.

### Aliases:

  * [`tf.compat.v1.keras.backend.local_conv1d`](/api_docs/python/tf/keras/backend/local_conv1d)
  * [`tf.compat.v2.keras.backend.local_conv1d`](/api_docs/python/tf/keras/backend/local_conv1d)

    
    
    tf.keras.backend.local_conv1d(
        inputs,
        kernel,
        kernel_size,
        strides,
        data_format=None
    )
    

#### Arguments:

  * **`inputs`** : 3D tensor with shape: (batch_size, steps, input_dim) if data_format is "channels_last" or (batch_size, input_dim, steps) if data_format is "channels_first".
  * **`kernel`** : the unshared weight for convolution, with shape (output_length, feature_dim, filters).
  * **`kernel_size`** : a tuple of a single integer, specifying the length of the 1D convolution window.
  * **`strides`** : a tuple of a single integer, specifying the stride length of the convolution.
  * **`data_format`** : the data format, channels_first or channels_last.

#### Returns:

A 3d tensor with shape: (batch_size, output_length, filters) if
data_format='channels_first' or 3D tensor with shape: (batch_size, filters,
output_length) if data_format='channels_last'.

