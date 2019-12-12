

## Class  `Identity` 
Initializer that generates the identity matrix.

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

**Aliases** : [ `tf.compat.v2.initializers.Identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.compat.v2.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.compat.v2.keras.initializers.Identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.compat.v2.keras.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.initializers.Identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity), [ `tf.keras.initializers.identity` ](/api_docs/python/tf/keras/initializers/Identity)

Only use for 2D matrices.

#### Args:
- **`gain`** : Multiplicative factor to apply to the identity matrix.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L527-L528)

```
 __init__(gain=1.0)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L530-L551)

```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
 
```

Returns a tensor object initialized as specified by the initializer.

#### Args:
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. Only floating point types aresupported.


#### Raises:
- **`ValueError`** : If the dtype is not floating point


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)

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
- **`config`** : A Python dictionary.It will typically be the output of  `get_config` .


#### Returns:
An Initializer instance.

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L553-L554)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:
A JSON-serializable Python dict.

