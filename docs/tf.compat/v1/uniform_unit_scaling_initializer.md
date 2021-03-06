

## Class  `uniform_unit_scaling_initializer` 
生成张量而不缩放方差的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)

When initializing a deep network, it is in principle advantageous to keepthe scale of the input variance constant, so it does not explode or diminishby reaching the final layer. If the input is  `x`  and the operation  `x * W` ,and we want to initialize  `W`  uniformly at random, we need to pick  `W`  from

```
 [-sqrt(3) / sqrt(dim), sqrt(3) / sqrt(dim)]
 
```

to keep the scale intact, where  `dim = W.shape[0]`  (the size of the input).A similar calculation for convolutional networks gives an analogous resultwith  `dim`  equal to the product of the first 3 dimensions.  Whennonlinearities are present, we need to multiply this by a constant  `factor` .See (Sussillo et al., 2014) for deeper motivation, experimentsand the calculation of constants. In section 2.3 there, the constants werenumerically computed: for a linear layer it's 1.0, relu: ~1.43, tanh: ~1.15.

#### 参数：
- **`factor`** : Float.  A multiplicative factor by which the values will be scaled.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`dtype`** : Default data type, used if no  `dtype`  argument is provided whencalling the initializer. Only floating point types are supported.


#### 参考文献：
[Sussillo et al., 2014](https://arxiv.org/abs/1412.6558)([pdf](http://arxiv.org/pdf/1412.6558.pdf))

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L414-L423)

```
 __init__(
    factor=1.0,
    seed=None,
    dtype=tf.dtypes.float32
)
 
```

DEPRECATED FUNCTION (deprecated arguments)


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor

**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use tf.initializers.variance_scaling instead with distribution=uniform to get equivalent behavior.


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L425-L442)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L444-L445)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

