

## Class  `RandomNormal` 
Initializer that generates tensors with a normal distribution.

Inherits From: [ `random_normal_initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/random_normal_initializer)

**Aliases** : [ `tf.compat.v1.keras.initializers.normal` ](/api_docs/python/tf/compat/v1/keras/initializers/RandomNormal), [ `tf.compat.v1.keras.initializers.random_normal` ](/api_docs/python/tf/compat/v1/keras/initializers/RandomNormal)

#### Args:
- **`mean`** : a python scalar or a scalar tensor. Mean of the random values togenerate. Defaults to 0.
- **`stddev`** : a python scalar or a scalar tensor. Standard deviation of the randomvalues to generate. Defaults to 0.05.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`dtype`** : The data type. Only floating point types are supported.


#### Returns:
RandomNormal instance.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/initializers.py#L141-L143)

```
 __init__(
    mean=0.0,
    stddev=0.05,
    seed=None,
    dtype=tf.dtypes.float32
)
 
```

DEPRECATED FUNCTION ARGUMENTS


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor


## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L319-L323)

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

Instantiates an initializer from a configuration dictionary.

#### Example:


```
 initializer = RandomUniform(-1, 1)
config = initializer.get_config()
initializer = RandomUniform.from_config(config)
 
```

#### Args:
- **`config`** : A Python dictionary. It will typically be the output of `get_config` .


#### Returns:
An Initializer instance.

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L325-L331)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:
A JSON-serializable Python dict.

