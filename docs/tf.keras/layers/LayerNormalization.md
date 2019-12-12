

## Class  `LayerNormalization` 
Layer normalization layer (Ba et al., 2016).

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**Aliases** : [ `tf.compat.v1.keras.layers.LayerNormalization` ](/api_docs/python/tf/keras/layers/LayerNormalization), [ `tf.compat.v2.keras.layers.LayerNormalization` ](/api_docs/python/tf/keras/layers/LayerNormalization)

### Used in the tutorials:
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
Normalize the activations of the previous layer for each given example in abatch independently, rather than across a batch like Batch Normalization.i.e. applies a transformation that maintains the mean activation within eachexample close to 0 and the activation standard deviation close to 1.

#### Arguments:
- **`axis`** : Integer or List/Tuple. The axis that should be normalized(typically the features axis).
- **`epsilon`** : Small float added to variance to avoid dividing by zero.
- **`center`** : If True, add offset of  `beta`  to normalized tensor.If False,  `beta`  is ignored.
- **`scale`** : If True, multiply by  `gamma` .If False,  `gamma`  is not used.When the next layer is linear (also e.g. [ `nn.relu` ](https://tensorflow.google.cn/api_docs/python/tf/nn/relu)),this can be disabled since the scalingwill be done by the next layer.
- **`beta_initializer`** : Initializer for the beta weight.
- **`gamma_initializer`** : Initializer for the gamma weight.
- **`beta_regularizer`** : Optional regularizer for the beta weight.
- **`gamma_regularizer`** : Optional regularizer for the gamma weight.
- **`beta_constraint`** : Optional constraint for the beta weight.
- **`gamma_constraint`** : Optional constraint for the gamma weight.
- **`trainable`** : Boolean, if  `True`  the variables will be marked as trainable.


#### Input shape:
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### Output shape:
Same shape as input.

#### References:
- [Layer Normalization](https://arxiv.org/abs/1607.06450)


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/normalization.py#L913-L947)

```
 __init__(
    axis=-1,
    epsilon=0.001,
    center=True,
    scale=True,
    beta_initializer='zeros',
    gamma_initializer='ones',
    beta_regularizer=None,
    gamma_regularizer=None,
    beta_constraint=None,
    gamma_constraint=None,
    trainable=True,
    name=None,
    **kwargs
)
 
```

