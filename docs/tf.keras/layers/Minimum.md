

## Class  `Minimum` 
Layer that computes the minimum (element-wise) a list of inputs.

**别名** : [ `tf.compat.v1.keras.layers.Minimum` ](/api_docs/python/tf/keras/layers/Minimum), [ `tf.compat.v2.keras.layers.Minimum` ](/api_docs/python/tf/keras/layers/Minimum)

It takes as input a list of tensors,all of the same shape, and returnsa single tensor (also of the same shape).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

```
 __init__(**kwargs)
 
```

Functional interface to the  `Minimum`  layer.

**别名** : [ `tf.compat.v1.keras.layers.minimum` ](/api_docs/python/tf/keras/layers/minimum), [ `tf.compat.v2.keras.layers.minimum` ](/api_docs/python/tf/keras/layers/minimum)

```
 tf.keras.layers.minimum(
    inputs,
    **kwargs
)
 
```

#### 参数：
- **`inputs`** : A list of input tensors (at least 2).
- **`**kwargs`** : Standard layer keyword arguments.


#### 返回：
A tensor, the element-wise minimum of the inputs.

