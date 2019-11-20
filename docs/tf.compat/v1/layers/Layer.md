[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/base.py#L158-L579)  
---  
  
## Class `Layer`

Base layer class.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

It is considered legacy, and we recommend the use of
[`tf.keras.layers.Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)
instead.

#### Arguments:

  * **`trainable`** : Boolean, whether the layer's variables should be trainable.
  * **`name`** : String name of the layer.
  * **`dtype`** : Default dtype of the layer's weights (default of `None` means use the type of the first input).

Read-only properties: name: The name of the layer (string). dtype: Default
dtype of the layer's weights (default of `None` means use the type of the
first input). trainable_variables: List of trainable variables.
non_trainable_variables: List of non-trainable variables. variables: List of
all variables of this layer, trainable and non-trainable. updates: List of
update ops of this layer. losses: List of losses added by this layer.
trainable_weights: List of variables to be included in backprop.
non_trainable_weights: List of variables that should not be included in
backprop. weights: The concatenation of the lists trainable_weights and
non_trainable_weights (in this order).

#### Mutable properties:

  * **`trainable`** : Whether the layer should be trained (boolean).
  * **`input_spec`** : Optional (list of) `InputSpec` object(s) specifying the constraints on inputs that can be accepted by the layer.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/base.py#L192-L235)

    
    
    __init__(
        trainable=True,
        name=None,
        dtype=None,
        **kwargs
    )
    

## Properties

### `graph`

DEPRECATED FUNCTION

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Stop using this property because tf.layers
layers no longer track their graph.

### `scope_name`

