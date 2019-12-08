

## Class  `Initializer` 
Initializer base class: all initializers inherit from this class.



## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L58-L68)



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
 @classmethod
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L70-L76)



```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.



#### Returns:
A JSON-serializable Python dict.

