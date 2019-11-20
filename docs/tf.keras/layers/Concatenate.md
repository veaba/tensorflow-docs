[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Concatenate) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L356-L443)  
  
  
## Class `Concatenate`

Layer that concatenates a list of inputs.

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Concatenate`](/api_docs/python/tf/keras/layers/Concatenate)
  * Class [`tf.compat.v2.keras.layers.Concatenate`](/api_docs/python/tf/keras/layers/Concatenate)

### Used in the tutorials:

  * [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
  * [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)

It takes as input a list of tensors, all of the same shape except for the
concatenation axis, and returns a single tensor, the concatenation of all
inputs.

#### Arguments:

  * **`axis`** : Axis along which to concatenate.
  * **`**kwargs`** : standard layer keyword arguments.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L368-L372)

    
    
    __init__(
        axis=-1,
        **kwargs
    )
    

[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/concatenate) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L693-L705)  
  
  
Functional interface to the `Concatenate` layer.

### Aliases:

  * [`tf.compat.v1.keras.layers.concatenate`](/api_docs/python/tf/keras/layers/concatenate)
  * [`tf.compat.v2.keras.layers.concatenate`](/api_docs/python/tf/keras/layers/concatenate)

    
    
    tf.keras.layers.concatenate(
        inputs,
        axis=-1,
        **kwargs
    )
    

### Used in the guide:

  * [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

### Used in the tutorials:

  * [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)

#### Arguments:

  * **`inputs`** : A list of input tensors (at least 2).
  * **`axis`** : Concatenation axis.
  * **`**kwargs`** : Standard layer keyword arguments.

#### Returns:

A tensor, the concatenation of the inputs alongside axis `axis`.

