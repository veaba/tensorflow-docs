## Class InputLayer

Layer to be used as an entry point into a Network (a graph of layers).
[Layer](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.layers.InputLayer`
- Class `tf.compat.v2.keras.layers.InputLayer`
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``

It can either wrap an existing tensor (pass an input_tensor argument) or create a placeholder tensor (pass arguments input_shape, and optionally, dtype).

It is generally recommend to use the functional layer API via Input, (which creates an InputLayer) without directly using InputLayer.

This class can create placeholders for tf.Tensors, tf.SparseTensors, and tf.RaggedTensors by choosing 'sparse=True' or 'ragged=True'.
#### Arguments:
- `input_shape`: Shape tuple (not including the batch axis), or `TensorShape` instance (not including the batch axis).
- `batch_size`: Optional input batch size (integer or None).
- `dtype`: Datatype of the input.
- `input_tensor`: Optional tensor to use as layer input instead of creating a placeholder.
- `sparse`: Boolean, whether the placeholder created is meant to be `sparse`.
- `ragged`: Boolean, whether the placeholder created is meant to be `ragged`. In this case, values of 'None' in the 'shape' argument represent `ragged` dimensions. For more information about RaggedTensors, see https://www.tensorflow.org/guide/`ragged`_tensors.
- `name`: Name of the layer (string).
## __init__
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
