

## Class  `glorot_normal` 
The Glorot normal initializer, also called Xavier normal initializer.

Inherits From: [ `VarianceScaling` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/VarianceScaling)

**别名** : [ `tf.compat.v1.glorot_normal_initializer` ](/api_docs/python/tf/compat/v1/keras/initializers/glorot_normal), [ `tf.compat.v1.initializers.glorot_normal` ](/api_docs/python/tf/compat/v1/keras/initializers/glorot_normal)

It draws samples from a truncated normal distribution centered on 0with standard deviation (after truncation) given by `stddev = sqrt(2 / (fan_in + fan_out))`  where  `fan_in`  is the numberof input units in the weight tensor and  `fan_out`  is the number ofoutput units in the weight tensor.

#### 参数：
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`dtype`** : Default data type, used if no  `dtype`  argument is provided whencalling the initializer. Only floating point types are supported.


#### 参考文献：
[Glorot et al., 2010](http://proceedings.mlr.press/v9/glorot10a.html)([pdf](http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf))

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1275-L1280)

```
 __init__(
    seed=None,
    dtype=tf.dtypes.float32
)
 
```

不推荐使用的函数参数


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L508-L533)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1282-L1283)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

