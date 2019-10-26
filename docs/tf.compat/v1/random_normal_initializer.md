## Class random_normal_initializer
Initializer that generates tensors with a normal distribution.
[Initializer](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)Inherits From: 

### Aliases:
- Class tf.compat.v1.initializers.random_normal
#### Args:
- mean: a python scalar or a scalar tensor. Mean of the random values to generate.
- stddev: a python scalar or a scalar tensor. Standard deviation of the random values to generate.
- seed: A Python integer. Used to create random seeds. See tf.compat.v1.set_random_seed for behavior.
- dtype: Default data type, used if no dtype argument is provided when calling the initializer. Only floating point types are supported.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L310-L317)


```
 __init__(
    mean=0.0,
    stddev=1.0,
    seed=None,
    dtype=tf.dtypes.float32
)
```
DEPRECATED FUNCTION ARGUMENTS
## Methods
### __call__
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
- shape: Shape of the tensor.
- dtype: Optional dtype of the tensor. If not provided use the initializer dtype.
- partition_info: Optional information about the possible partitioning of a tensor.
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
- config: A Python dictionary. It will typically be the output of get_config.
#### Returns:
An Initializer instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L325-L331)


```
 get_config()
```
Returns the configuration of the initializer as a JSON-serializable dict.
#### Returns:
A JSON-serializable Python dict.
