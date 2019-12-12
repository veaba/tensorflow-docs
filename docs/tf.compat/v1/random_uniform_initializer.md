

## Class  `random_uniform_initializer` 
Initializer that generates tensors with a uniform distribution.

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)

#### Args:
- **`minval`** : A python scalar or a scalar tensor. Lower bound of the range ofrandom values to generate.
- **`maxval`** : A python scalar or a scalar tensor. Upper bound of the range ofrandom values to generate.  Defaults to 1 for float types.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`dtype`** : Default data type, used if no  `dtype`  argument is provided whencalling the initializer.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L270-L277)

```
 __init__(
    minval=0,
    maxval=None,
    seed=None,
    dtype=tf.dtypes.float32
)
 
```

DEPRECATED FUNCTION ARGUMENTS


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor


## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L279-L283)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L285-L291)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:
A JSON-serializable Python dict.

