

## Class  `Average` 
Layer that averages a list of inputs.

**Aliases** : [ `tf.compat.v1.keras.layers.Average` ](/api_docs/python/tf/keras/layers/Average), [ `tf.compat.v2.keras.layers.Average` ](/api_docs/python/tf/keras/layers/Average)

It takes as input a list of tensors,all of the same shape, and returnsa single tensor (also of the same shape).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

```
 __init__(**kwargs)
 
```

Functional interface to the  `Average`  layer.

**Aliases** : [ `tf.compat.v1.keras.layers.average` ](/api_docs/python/tf/keras/layers/average), [ `tf.compat.v2.keras.layers.average` ](/api_docs/python/tf/keras/layers/average)

```
 tf.keras.layers.average(
    inputs,
    **kwargs
)
 
```

### Used in the guide:
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


#### Arguments:
- **`inputs`** : A list of input tensors (at least 2).
- **`**kwargs`** : Standard layer keyword arguments.


#### Returns:
A tensor, the average of the inputs.

