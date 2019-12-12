

## Class  `Identity` 
生成标识矩阵的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

**别名** : [ `tf.compat.v2.initializers.Identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.compat.v2.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.compat.v2.keras.initializers.Identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.compat.v2.keras.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.initializers.Identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.keras.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity)

仅用于二维矩阵。

#### 参数：
- **`gain`** : Multiplicative factor to apply to the identity matrix.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L527-L528)

```
 __init__(gain=1.0)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L530-L551)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L553-L554)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

