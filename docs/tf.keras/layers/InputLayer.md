

## Class  `InputLayer` 
用作网络入口点的层（层的图形）。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.InputLayer` ](/api_docs/python/tf/keras/layers/InputLayer), [ `tf.compat.v2.keras.layers.InputLayer` ](/api_docs/python/tf/keras/layers/InputLayer)

### 在教程中使用：
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
It can either wrap an existing tensor (pass an  `input_tensor`  argument)or create a placeholder tensor (pass arguments  `input_shape` , andoptionally,  `dtype` ).

It is generally recommend to use the functional layer API via  `Input` ,(which creates an  `InputLayer` ) without directly using  `InputLayer` .

This class can create placeholders for tf.Tensors, tf.SparseTensors, andtf.RaggedTensors by choosing 'sparse=True' or 'ragged=True'.

#### 参数：
- **`input_shape`** : Shape tuple (not including the batch axis), or  `TensorShape` instance (not including the batch axis).
- **`batch_size`** : Optional input batch size (integer or None).
- **`dtype`** : Datatype of the input.
- **`input_tensor`** : Optional tensor to use as layer inputinstead of creating a placeholder.
- **`sparse`** : Boolean, whether the placeholder created is meant to be sparse.
- **`ragged`** : Boolean, whether the placeholder created is meant to be ragged.In this case, values of 'None' in the 'shape' argument representragged dimensions. For more information about RaggedTensors, seehttps://www.tensorflow.org/guide/ragged_tensors.
- **`name`** : Name of the layer (string).


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/input_layer.py#L61-L148)

```
 __init__(
    input_shape=None,
    batch_size=None,
    dtype=None,
    input_tensor=None,
    sparse=False,
    name=None,
    ragged=False,
    **kwargs
)
 
```

