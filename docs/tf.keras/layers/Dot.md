

## Class  `Dot` 
Layer that computes a dot product between samples in two tensors.

**Aliases** : [ `tf.compat.v1.keras.layers.Dot` ](/api_docs/python/tf/keras/layers/Dot), [ `tf.compat.v2.keras.layers.Dot` ](/api_docs/python/tf/keras/layers/Dot)

E.g. if applied to a list of two tensors  `a`  and  `b`  of shape `(batch_size, n)` , the output will be a tensor of shape  `(batch_size, 1)` where each entry  `i`  will be the dot product between `a[i]`  and  `b[i]` .

#### Arguments:
- **`axes`** : Integer or tuple of integers,axis or axes along which to take the dot product.
- **`normalize`** : Whether to L2-normalize samples along thedot product axis before taking the dot product.If set to True, then the output of the dot productis the cosine proximity between the two samples.
- **`**kwargs`** : Standard layer keyword arguments.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L465-L480)

```
 __init__(
    axes,
    normalize=False,
    **kwargs
)
 
```

Functional interface to the  `Dot`  layer.

**Aliases** : [ `tf.compat.v1.keras.layers.dot` ](/api_docs/python/tf/keras/layers/dot), [ `tf.compat.v2.keras.layers.dot` ](/api_docs/python/tf/keras/layers/dot)

```
 tf.keras.layers.dot(
    inputs,
    axes,
    normalize=False,
    **kwargs
)
 
```

#### Arguments:
- **`inputs`** : A list of input tensors (at least 2).
- **`axes`** : Integer or tuple of integers,axis or axes along which to take the dot product.
- **`normalize`** : Whether to L2-normalize samples along thedot product axis before taking the dot product.If set to True, then the output of the dot productis the cosine proximity between the two samples.
- **`**kwargs`** : Standard layer keyword arguments.


#### Returns:
A tensor, the dot product of the samples from the inputs.

