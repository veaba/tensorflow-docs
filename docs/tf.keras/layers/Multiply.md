[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Multiply) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L292-L304)  
---|---  
  
## Class `Multiply`

Layer that multiplies (element-wise) a list of inputs.

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Multiply`](/api_docs/python/tf/keras/layers/Multiply)
  * Class [`tf.compat.v2.keras.layers.Multiply`](/api_docs/python/tf/keras/layers/Multiply)

It takes as input a list of tensors, all of the same shape, and returns a
single tensor (also of the same shape).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

    
    
    __init__(**kwargs)
    

[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/multiply) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L619-L630)  
---|---  
  
Functional interface to the `Multiply` layer.

### Aliases:

  * [`tf.compat.v1.keras.layers.multiply`](/api_docs/python/tf/keras/layers/multiply)
  * [`tf.compat.v2.keras.layers.multiply`](/api_docs/python/tf/keras/layers/multiply)

    
    
    tf.keras.layers.multiply(
        inputs,
        **kwargs
    )
    

#### Arguments:

  * **`inputs`** : A list of input tensors (at least 2).
  * **`**kwargs`** : Standard layer keyword arguments.

#### Returns:

A tensor, the element-wise product of the inputs.

