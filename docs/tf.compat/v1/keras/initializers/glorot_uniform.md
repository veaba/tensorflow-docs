

## Class  `glorot_uniform` 
The Glorot uniform initializer, also called Xavier uniform initializer.

Inherits From: [ `VarianceScaling` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/VarianceScaling)



### Aliases:

- Class [ `tf.compat.v1.glorot_uniform_initializer` ](/api_docs/python/tf/compat/v1/keras/initializers/glorot_uniform)

- Class [ `tf.compat.v1.initializers.glorot_uniform` ](/api_docs/python/tf/compat/v1/keras/initializers/glorot_uniform)

It draws samples from a uniform distribution within [-limit, limit]
where  `limit`  is  `sqrt(6 / (fan_in + fan_out))` 
where  `fan_in`  is the number of input units in the weight tensor
and  `fan_out`  is the number of output units in the weight tensor.



#### Args:

- **`seed`** : A Python integer. Used to create random seeds. See
[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.

- **`dtype`** : Default data type, used if no  `dtype`  argument is provided when
calling the initializer. Only floating point types are supported.



#### References:
[Glorot et al., 2010](http://proceedings.mlr.press/v9/glorot10a.html)
([pdf](http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf))



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1242-L1247)



```
 __init__(
    seed=None,
    dtype=tf.dtypes.float32
)
 
```

DEPRECATED FUNCTION ARGUMENTS


<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.
Instructions for updating:
Call initializer instance with the dtype argument instead of passing it to the constructor</aside>


## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L508-L533)



```
 __call__(
    shape,
    dtype=None,
    partition_info=None
)
 
```

Returns a tensor object initialized as specified by the initializer.



#### Args:

- **`shape`** : Shape of the tensor.

- **`dtype`** : Optional dtype of the tensor. If not provided use the initializer
dtype.

- **`partition_info`** : Optional information about the possible partitioning of a
tensor.



###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L78-L97)



```
 from_config(
    cls,
    config
)
 
```

Instantiates an initializer from a configuration dictionary.



#### Example:


```
 initializer = RandomUniform(-1, 1)
config = initializer.get_config()
initializer = RandomUniform.from_config(config)
 
```



#### Args:

- **`config`** : A Python dictionary. It will typically be the output of
 `get_config` .



#### Returns:
An Initializer instance.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1249-L1250)



```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.



#### Returns:
A JSON-serializable Python dict.

