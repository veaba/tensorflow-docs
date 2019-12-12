

## Class  `Ones` 
生成初始化为1的张量的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)

**别名** : [ `tf.compat.v1.initializers.ones` ](/api_docs/python/tf/compat/v1/keras/initializers/Ones), [ `tf.compat.v1.keras.initializers.ones` ](/api_docs/python/tf/compat/v1/keras/initializers/Ones), [ `tf.compat.v1.ones_initializer` ](/api_docs/python/tf/compat/v1/keras/initializers/Ones)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L125-L129)

```
 __init__(dtype=tf.dtypes.float32)
 
```

不推荐使用的函数参数


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L131-L134)

```
 __call__(
    shape,
    dtype=None,
    partition_info=None
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. If not provided use the initializerdtype.
- **`partition_info`** : Optional information about the possible partitioning of atensor.


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L78-L97)

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
- **`config`** : A Python dictionary. It will typically be the output of `get_config` .


#### 返回：
初始化器实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L136-L137)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

