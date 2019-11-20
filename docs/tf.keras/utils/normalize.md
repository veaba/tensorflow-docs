[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/utils/normalize) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/np_utils.py#L55-L69)  
  
  
Normalizes a Numpy array.

### Aliases:

  * [`tf.compat.v1.keras.utils.normalize`](/api_docs/python/tf/keras/utils/normalize)
  * [`tf.compat.v2.keras.utils.normalize`](/api_docs/python/tf/keras/utils/normalize)

    
    
    tf.keras.utils.normalize(
        x,
        axis=-1,
        order=2
    )
    

#### Arguments:

  * **`x`** : Numpy array to normalize.
  * **`axis`** : axis along which to normalize.
  * **`order`** : Normalization order (e.g. 2 for L2 norm).

#### Returns:

A normalized copy of the array.

