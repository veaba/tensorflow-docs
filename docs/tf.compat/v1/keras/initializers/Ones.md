

## Class  `Ones` 
Initializer that generates tensors initialized to 1.

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)

**Aliases** : [ `tf.compat.v1.initializers.ones` ](/api_docs/python/tf/compat/v1/keras/initializers/Ones), [ `tf.compat.v1.keras.initializers.ones` ](/api_docs/python/tf/compat/v1/keras/initializers/Ones), [ `tf.compat.v1.ones_initializer` ](/api_docs/python/tf/compat/v1/keras/initializers/Ones)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L125-L129)

```
 __init__(dtype=tf.dtypes.float32)
 
```

DEPRECATED FUNCTION ARGUMENTS


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor


## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L131-L134)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L136-L137)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:
A JSON-serializable Python dict.

