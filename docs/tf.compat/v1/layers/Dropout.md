

## Class  `Dropout` 
对输入应用辍学。

Inherits From: [ `Dropout` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dropout), [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

Dropout consists in randomly setting a fraction  `rate`  of input units to 0at each update during training time, which helps prevent overfitting.The units that are kept are scaled by  `1 / (1 - rate)` , so that theirsum is unchanged at training time and inference time.

#### 参数：
- **`rate`** : The dropout rate, between 0 and 1. E.g.  `rate=0.1`  would drop out10% of input units.
- **`noise_shape`** : 1D tensor of type  `int32`  representing the shape of thebinary dropout mask that will be multiplied with the input.For instance, if your inputs have shape `(batch_size, timesteps, features)` , and you want the dropout maskto be the same for all timesteps, you can use `noise_shape=[batch_size, 1, features]` .
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed).for behavior.
- **`name`** : The name of the layer (string).


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/core.py#L214-L223)

```
 __init__(
    rate=0.5,
    noise_shape=None,
    seed=None,
    name=None,
    **kwargs
)
 
```

## 属性


###  `graph` 
不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Stop using this property because tf.layers layers no longer track their graph.


###  `scope_name` 
Applies Dropout to the input. (deprecated)

```
 tf.compat.v1.layers.dropout(
    inputs,
    rate=0.5,
    noise_shape=None,
    seed=None,
    training=False,
    name=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use keras.layers.dropout instead.
Dropout consists in randomly setting a fraction  `rate`  of input units to 0at each update during training time, which helps prevent overfitting.The units that are kept are scaled by  `1 / (1 - rate)` , so that theirsum is unchanged at training time and inference time.

#### 参数：
- **`inputs`** : Tensor input.
- **`rate`** : The dropout rate, between 0 and 1. E.g. "rate=0.1" would drop out10% of input units.
- **`noise_shape`** : 1D tensor of type  `int32`  representing the shape of thebinary dropout mask that will be multiplied with the input.For instance, if your inputs have shape `(batch_size, timesteps, features)` , and you want the dropout maskto be the same for all timesteps, you can use `noise_shape=[batch_size, 1, features]` .
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.
- **`training`** : Either a Python boolean, or a TensorFlow boolean scalar tensor(e.g. a placeholder). Whether to return the output in training mode(apply dropout) or in inference mode (return the input untouched).
- **`name`** : The name of the layer (string).


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : if eager execution is enabled.
