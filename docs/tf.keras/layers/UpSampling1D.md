[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/UpSampling1D) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1881-L1913)  
---|---  
  
## Class `UpSampling1D`

Upsampling layer for 1D inputs.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.UpSampling1D`](/api_docs/python/tf/keras/layers/UpSampling1D)
  * Class [`tf.compat.v2.keras.layers.UpSampling1D`](/api_docs/python/tf/keras/layers/UpSampling1D)

Repeats each temporal step `size` times along the time axis.

#### Arguments:

  * **`size`** : Integer. Upsampling factor.

#### Input shape:

3D tensor with shape: `(batch, steps, features)`.

#### Output shape:

3D tensor with shape: `(batch, upsampled_steps, features)`.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1896-L1899)

    
    
    __init__(
        size=2,
        **kwargs
    )
    

