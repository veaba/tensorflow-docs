Initializer that generates tensors with a normal distribution.
Inherits From: `random_normal_initializer`
### Aliases:
- Class `tf.compat.v1.keras.initializers.normal`
- Class `tf.compat.v1.keras.initializers.random_normal`
#### Args:
- `mean`: a python scalar or a scalar tensor. Mean of the random values to generate. Defaults to 0.
- `stddev`: a python scalar or a scalar tensor. Standard deviation of the random values to generate. Defaults to 0.05.
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
- `dtype`: The data type. Only floating point types are supported.
#### Returns:
RandomNormal instance.
## __init__
View source

```
 __init__(
    mean=0.0,
    stddev=0.05,
    seed=None,
    dtype=tf.dtypes.float32
)
```
DEPRECATED FUNCTION ARGUMENTS
## Methods
### __call__
View source

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
View source

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
View source

```
 get_config()
```
Returns the configuration of the initializer as a JSON-serializable dict.
#### Returns:
A JSON-serializable Python dict.
