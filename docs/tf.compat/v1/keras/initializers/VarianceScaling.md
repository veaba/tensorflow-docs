

## Class  `VarianceScaling` 
初始值设定项能够调整其比例以适应权重张量的形状。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)

**别名** : [ `tf.compat.v1.initializers.variance_scaling` ](/api_docs/python/tf/compat/v1/keras/initializers/VarianceScaling), [ `tf.compat.v1.variance_scaling_initializer` ](/api_docs/python/tf/compat/v1/keras/initializers/VarianceScaling)

With  `distribution="truncated_normal" or "untruncated_normal"` ,samples are drawn from a truncated/untruncated normaldistribution with a mean of zero and a standard deviation (after truncation,if used)  `stddev = sqrt(scale / n)` where n is:  - number of input units in the weight tensor, if mode = "fan_in"  - number of output units, if mode = "fan_out"  - average of the numbers of input and output units, if mode = "fan_avg"

With  `distribution="uniform"` , samples are drawn from a uniform distributionwithin [-limit, limit], with  `limit = sqrt(3 * scale / n)` .

#### 参数：
- **`scale`** : Scaling factor (positive float).
- **`mode`** : One of "fan_in", "fan_out", "fan_avg".
- **`distribution`** : Random distribution to use. One of "normal", "uniform".
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`dtype`** : Default data type, used if no  `dtype`  argument is provided whencalling the initializer. Only floating point types are supported.


#### 加薪：
- **`ValueError`** : In case of an invalid value for the "scale", mode" or"distribution" arguments.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L480-L506)

```
 __init__(
    scale=1.0,
    mode='fan_in',
    distribution='truncated_normal',
    seed=None,
    dtype=tf.dtypes.float32
)
 
```

DEPRECATED FUNCTION ARGUMENT VALUES (deprecated arguments)


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor

**Warning:**  SOME ARGUMENT VALUES ARE DEPRECATED:  `(distribution='normal')` . They will be removed in a future version.Instructions for updating: `normal`  is a deprecated alias for  `truncated_normal` 


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L535-L542)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

