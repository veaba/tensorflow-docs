

## Class  `Initializer` 
初始化器基类：所有初始化器都继承自该类。

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L58-L68)

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
 @classmethod
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L70-L76)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

