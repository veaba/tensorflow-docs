

## Class  `random_uniform_initializer` 
生成具有均匀分布的张量的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

**别名** : [ `tf.compat.v2.initializers.RandomUniform` ](/api_docs/python/tf/random_uniform_initializer), [ `tf.compat.v2.keras.initializers.RandomUniform` ](/api_docs/python/tf/random_uniform_initializer), [ `tf.compat.v2.random_uniform_initializer` ](/api_docs/python/tf/random_uniform_initializer), [ `tf.initializers.RandomUniform` ](/api_docs/python/tf/random_uniform_initializer), [ `tf.keras.initializers.RandomUniform` ](/api_docs/python/tf/random_uniform_initializer)

#### 参数：
- **`minval`** : A python scalar or a scalar tensor. Lower bound of the rangeof random values to generate.
- **`maxval`** : A python scalar or a scalar tensor. Upper bound of the rangeof random values to generate.  Defaults to 1 for float types.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L232-L236)

```
 __init__(
    minval=-0.05,
    maxval=0.05,
    seed=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L238-L253)

```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. Only floating point and integertypes are supported.


#### 加薪：
- **`ValueError`** : If the dtype is not numeric.


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L255-L260)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

