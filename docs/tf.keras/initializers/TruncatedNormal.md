

## Class  `TruncatedNormal` 
生成截断正态分布的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

**别名** : [ `tf.compat.v2.initializers.TruncatedNormal` ](/api_docs/python/tf/keras/initializers/TruncatedNormal), [ `tf.compat.v2.keras.initializers.TruncatedNormal` ](/api_docs/python/tf/keras/initializers/TruncatedNormal), [ `tf.initializers.TruncatedNormal` ](/api_docs/python/tf/keras/initializers/TruncatedNormal)

These values are similar to values from a  `random_normal_initializer` except that values more than two standard deviations from the meanare discarded and re-drawn. This is the recommended initializer forneural network weights and filters.

#### 参数：
- **`mean`** : a python scalar or a scalar tensor. Mean of the random valuesto generate.
- **`stddev`** : a python scalar or a scalar tensor. Standard deviation of therandom values to generate.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L324-L328)

```
 __init__(
    mean=0.0,
    stddev=0.05,
    seed=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L330-L343)

```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. Only floating point types aresupported.


#### 加薪：
- **`ValueError`** : If the dtype is not floating point


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)

```
 from_config(
    cls,
    config
)
 
```

从配置字典实例化初始值设定项。

#### 示例：


```
 initializer = RandomUniform(-1, 1)
config = initializer.get_config()
initializer = RandomUniform.from_config(config)
 
```

#### 参数：
- **`config`** : A Python dictionary.It will typically be the output of  `get_config` .


#### 返回：
初始化器实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L345-L350)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

