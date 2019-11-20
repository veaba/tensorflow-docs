[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Minimum) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L340-L352)  
---|---  
  
## Class `Minimum`

Layer that computes the minimum (element-wise) a list of inputs.

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Minimum`](/api_docs/python/tf/keras/layers/Minimum)
  * Class [`tf.compat.v2.keras.layers.Minimum`](/api_docs/python/tf/keras/layers/Minimum)

It takes as input a list of tensors, all of the same shape, and returns a
single tensor (also of the same shape).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

    
    
    __init__(**kwargs)
    

[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/minimum) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L679-L690)  
---|---  
  
Functional interface to the `Minimum` layer.

### Aliases:

  * [`tf.compat.v1.keras.layers.minimum`](/api_docs/python/tf/keras/layers/minimum)
  * [`tf.compat.v2.keras.layers.minimum`](/api_docs/python/tf/keras/layers/minimum)

    
    
    tf.keras.layers.minimum(
        inputs,
        **kwargs
    )
    

#### Arguments:

  * **`inputs`** : A list of input tensors (at least 2).
  * **`**kwargs`** : Standard layer keyword arguments.

#### Returns:

A tensor, the element-wise minimum of the inputs.

