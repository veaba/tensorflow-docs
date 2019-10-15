## Class VarianceScaling

Initializer capable of adapting its scale to the shape of weights tensors.
[Initializer](https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/initializers/Initializer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.initializers.variance_scaling`
- Class `tf.compat.v1.variance_scaling_initializer`

With distribution="truncated_normal" or "untruncated_normal", samples are drawn from a truncated/untruncated normal distribution with a mean of zero and a standard deviation (after truncation, if used) stddev = sqrt(scale / n) where n is: - number of input units in the weight tensor, if mode = "fan_in" - number of output units, if mode = "fan_out" - average of the numbers of input and output units, if mode = "fan_avg"

With distribution="uniform", samples are drawn from a uniform distribution within [-limit, limit], with limit = sqrt(3 * scale / n).
#### Args:
- `scale`: Scaling factor (positive float).
- `mode`: One of "fan_in", "fan_out", "fan_avg".
- `distribution`: Random `distribution` to use. One of "normal", "uniform".
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
- `dtype`: Default data type, used if no `dtype` argument is provided when calling the initializer. Only floating point types are supported.
#### Raises:
- `ValueError`: In case of an invalid value for the "scale", mode" or "distribution" arguments.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L480-L506)


```
 __init__(
    scale=1.0,
    mode='fan_in',
    distribution='truncated_normal',
    seed=None,
    dtype=tf.dtypes.float32
)
```

DEPRECATED FUNCTION ARGUMENT VALUES (deprecated arguments)
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L535-L542)


```
 get_config()
```

Returns the configuration of the initializer as a JSON-serializable dict.
#### Returns:

A JSON-serializable Python dict.
