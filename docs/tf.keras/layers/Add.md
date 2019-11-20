[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Add) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L222-L249)  
---|---  
  
## Class `Add`

Layer that adds a list of inputs.

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Add`](/api_docs/python/tf/keras/layers/Add)
  * Class [`tf.compat.v2.keras.layers.Add`](/api_docs/python/tf/keras/layers/Add)

It takes as input a list of tensors, all of the same shape, and returns a
single tensor (also of the same shape).

#### Examples:

    
    
        import keras
    
        input1 = keras.layers.Input(shape=(16,))
        x1 = keras.layers.Dense(8, activation='relu')(input1)
        input2 = keras.layers.Input(shape=(32,))
        x2 = keras.layers.Dense(8, activation='relu')(input2)
        # equivalent to `added = keras.layers.add([x1, x2])`
        added = keras.layers.Add()([x1, x2])
        out = keras.layers.Dense(4)(added)
        model = keras.models.Model(inputs=[input1, input2], outputs=out)
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

    
    
    __init__(**kwargs)
    

[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/add) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L561-L587)  
---|---  
  
Functional interface to the `Add` layer.

### Aliases:

  * [`tf.compat.v1.keras.layers.add`](/api_docs/python/tf/keras/layers/add)
  * [`tf.compat.v2.keras.layers.add`](/api_docs/python/tf/keras/layers/add)

    
    
    tf.keras.layers.add(
        inputs,
        **kwargs
    )
    

### Used in the guide:

  * [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)

#### Arguments:

  * **`inputs`** : A list of input tensors (at least 2).
  * **`**kwargs`** : Standard layer keyword arguments.

#### Returns:

A tensor, the sum of the inputs.

#### Examples:

    
    
        import keras
    
        input1 = keras.layers.Input(shape=(16,))
        x1 = keras.layers.Dense(8, activation='relu')(input1)
        input2 = keras.layers.Input(shape=(32,))
        x2 = keras.layers.Dense(8, activation='relu')(input2)
        added = keras.layers.add([x1, x2])
    
        out = keras.layers.Dense(4)(added)
        model = keras.models.Model(inputs=[input1, input2], outputs=out)
    

