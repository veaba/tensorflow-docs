## Class glorot_normal

The Glorot normal initializer, also called Xavier normal initializer.
[VarianceScaling](https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/initializers/VarianceScaling)Inherits From: 

### Aliases:
- Class `tf.compat.v1.glorot_normal_initializer`
- Class `tf.compat.v1.initializers.glorot_normal`

It draws samples from a truncated normal distribution centered on 0 with standard deviation (after truncation) given by stddev = sqrt(2 / (fan_in + fan_out)) where fan_in is the number of input units in the weight tensor and fan_out is the number of output units in the weight tensor.
#### Args:
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
- `dtype`: Default data type, used if no `dtype` argument is provided when calling the initializer. Only floating point types are supported.
#### References:
[Glorot et al., 2010](http://proceedings.mlr.press/v9/glorot10a.html) (pdf)

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1275-L1280)


```
 __init__(
    seed=None,
    dtype=tf.dtypes.float32
)
```

DEPRECATED FUNCTION ARGUMENTS
## Methods
### __call__
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
- `shape`: Shape of the tensor.
- `dtype`: Optional `dtype` of the tensor. If not provided use the initializer `dtype`.
- `partition_info`: Optional information about the possible partitioning of a tensor.
### from_config
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
- `config`: A Python dictionary. It will typically be the output of `get_config`.
#### Returns:

An Initializer instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1282-L1283)


```
 get_config()
```

Returns the configuration of the initializer as a JSON-serializable dict.
#### Returns:

A JSON-serializable Python dict.
