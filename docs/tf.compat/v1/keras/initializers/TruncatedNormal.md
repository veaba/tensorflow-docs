

## Class  `TruncatedNormal` 
生成截断正态分布的初始值设定项。

Inherits From: [ `truncated_normal_initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/truncated_normal_initializer)

These values are similar to values from a  `random_normal_initializer` except that values more than two standard deviations from the meanare discarded and re-drawn. This is the recommended initializer forneural network weights and filters.

#### 参数：
- **`mean`** : a python scalar or a scalar tensor. Mean of the random values togenerate. Defaults to 0.
- **`stddev`** : a python scalar or a scalar tensor. Standard deviation of the randomvalues to generate. Defaults to 0.05.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`dtype`** : The data type. Only floating point types are supported.


#### 返回：
截断的普通实例。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/initializers.py#L92-L94)

```
 __init__(
    mean=0.0,
    stddev=0.05,
    seed=None,
    dtype=tf.dtypes.float32
)
 
```

不推荐使用的函数参数


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L365-L369)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L371-L377)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

