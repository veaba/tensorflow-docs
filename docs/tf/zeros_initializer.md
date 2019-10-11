## Class zeros_initializer

Initializer that generates tensors initialized to 0.
[Initializer](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)Inherits From: 

### Aliases:
- Class `tf.compat.v2.initializers.Zeros`
- Class `tf.compat.v2.initializers.zeros`
- Class `tf.compat.v2.keras.initializers.Zeros`
- Class `tf.compat.v2.keras.initializers.zeros`
- Class `tf.compat.v2.zeros_initializer`
- Class `tf.initializers.Zeros`
- Class `tf.initializers.zeros`
- Class `tf.keras.initializers.Zeros`
- Class `tf.keras.initializers.zeros`
### Used in the guide:
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L96-L98)


```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
```

Returns a tensor object initialized as specified by the initializer.
#### Args:
- `shape`: Shape of the tensor.
- `dtype`: Optional `dtype` of the tensor. If not provided will return tensor of `tf.float32`.
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
