

## Class  `Initializer` 
初始化器基类：所有初始化器都继承自该类。

**别名** : [ `tf.compat.v2.initializers.Initializer` ](/api_docs/python/tf/keras/initializers/Initializer), [ `tf.compat.v2.keras.initializers.Initializer` ](/api_docs/python/tf/keras/initializers/Initializer), [ `tf.initializers.Initializer` ](/api_docs/python/tf/keras/initializers/Initializer)

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L51-L59)

```
 __call__(
    shape,
    dtype=None
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. If not provided will return tensorof [ `tf.float32` ](https://tensorflow.google.cn/api_docs/python/tf#float32).


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)

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
- **`config`** : A Python dictionary.It will typically be the output of  `get_config` .


#### 返回：
初始化器实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L61-L67)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

