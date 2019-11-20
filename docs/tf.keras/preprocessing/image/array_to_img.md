[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/preprocessing/image/array_to_img)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/preprocessing/image.py#L47-L74)  
---|---  
  
Converts a 3D Numpy array to a PIL Image instance.

### Aliases:

  * [`tf.compat.v1.keras.preprocessing.image.array_to_img`](/api_docs/python/tf/keras/preprocessing/image/array_to_img)
  * [`tf.compat.v2.keras.preprocessing.image.array_to_img`](/api_docs/python/tf/keras/preprocessing/image/array_to_img)

    
    
    tf.keras.preprocessing.image.array_to_img(
        x,
        data_format=None,
        scale=True,
        dtype=None
    )
    

### Used in the tutorials:

  * [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)

#### Arguments:

  * **`x`** : Input Numpy array.
  * **`data_format`** : Image data format. either "channels_first" or "channels_last".
  * **`scale`** : Whether to rescale image values to be within `[0, 255]`.
  * **`dtype`** : Dtype to use.

#### Returns:

A PIL Image instance.

#### Raises:

  * **`ImportError`** : if PIL is not available.
  * **`ValueError`** : if invalid `x` or `data_format` is passed.

