

## Class  `GlorotNormal` 
The Glorot normal initializer, also called Xavier normal initializer.

Inherits From: [ `VarianceScaling` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/VarianceScaling)

**别名** : [ `tf.compat.v2.initializers.GlorotNormal` ](/api_docs/python/tf/keras/initializers/GlorotNormal), [ `tf.compat.v2.initializers.glorot_normal` ](/api_docs/python/tf/keras/initializers/GlorotNormal), [ `tf.compat.v2.keras.initializers.GlorotNormal` ](/api_docs/python/tf/keras/initializers/GlorotNormal), [ `tf.compat.v2.keras.initializers.glorot_normal` ](/api_docs/python/tf/keras/initializers/GlorotNormal), [ `tf.initializers.GlorotNormal` ](/api_docs/python/tf/keras/initializers/GlorotNormal), [ `tf.initializers.glorot_normal` ](/api_docs/python/tf/keras/initializers/GlorotNormal), [ `tf.keras.initializers.glorot_normal` ](/api_docs/python/tf/keras/initializers/GlorotNormal)

It draws samples from a truncated normal distribution centered on 0with  `stddev = sqrt(2 / (fan_in + fan_out))` where  `fan_in`  is the number of input units in the weight tensorand  `fan_out`  is the number of output units in the weight tensor.

#### 参数：
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.


#### 参考文献：
[Glorot et al., 2010](http://proceedings.mlr.press/v9/glorot10a.html)([pdf](http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf))

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L603-L608)

```
 __init__(seed=None)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L404-L437)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L610-L611)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

