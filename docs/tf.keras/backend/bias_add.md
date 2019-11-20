[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/bias_add) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5480-L5548)  
  
  
Adds a bias vector to a tensor.

### Aliases:

  * [`tf.compat.v1.keras.backend.bias_add`](/api_docs/python/tf/keras/backend/bias_add)
  * [`tf.compat.v2.keras.backend.bias_add`](/api_docs/python/tf/keras/backend/bias_add)

    
    
    tf.keras.backend.bias_add(
        x,
        bias,
        data_format=None
    )
    

#### Arguments:

  * **`x`** : Tensor or variable.
  * **`bias`** : Bias tensor to add.
  * **`data_format`** : string, `"channels_last"` or `"channels_first"`.

#### Returns:

Output tensor.

#### Raises:

  * **`ValueError`** : In one of the two cases below: 1\. invalid `data_format` argument. 2\. invalid bias shape. the bias should be either a vector or a tensor with ndim(x) - 1 dimension

