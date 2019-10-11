## Class ones_initializer

Initializer that generates tensors initialized to 1.
[Initializer](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)Inherits From: 

### Aliases:
- Class `tf.compat.v2.initializers.Ones`
- Class `tf.compat.v2.initializers.ones`
- Class `tf.compat.v2.keras.initializers.Ones`
- Class `tf.compat.v2.keras.initializers.ones`
- Class `tf.compat.v2.ones_initializer`
- Class `tf.initializers.Ones`
- Class `tf.initializers.ones`
- Class `tf.keras.initializers.Ones`
- Class `tf.keras.initializers.ones`
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L105-L119)


```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
```

Returns a tensor object initialized as specified by the initializer.
#### Args:
- `shape`: Shape of the tensor.
- `dtype`: Optional `dtype` of the tensor. Only numeric or boolean `dtype`s are supported.
#### Raises:
- `ValuesError`: If the dtype is not numeric or boolean.
### from_config
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
- `config`: A Python dictionary. It will typically be the output of `get_config`.
#### Returns:

An Initializer instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L61-L67)


```
 get_config()
```

Returns the configuration of the initializer as a JSON-serializable dict.
#### Returns:

A JSON-serializable Python dict.
