[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/ZeroPadding1D) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2073-L2110)  
---|---  
  
## Class `ZeroPadding1D`

Zero-padding layer for 1D input (e.g. temporal sequence).

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.ZeroPadding1D`](/api_docs/python/tf/keras/layers/ZeroPadding1D)
  * Class [`tf.compat.v2.keras.layers.ZeroPadding1D`](/api_docs/python/tf/keras/layers/ZeroPadding1D)

#### Arguments:

  * **`padding`** : Int, or tuple of int (length 2), or dictionary. 
    * If int: How many zeros to add at the beginning and end of the padding dimension (axis 1).
    * If tuple of int (length 2): How many zeros to add at the beginning and at the end of the padding dimension (`(left_pad, right_pad)`).

#### Input shape:

3D tensor with shape `(batch, axis_to_pad, features)`

#### Output shape:

3D tensor with shape `(batch, padded_axis, features)`

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2092-L2095)

    
    
    __init__(
        padding=1,
        **kwargs
    )
    

