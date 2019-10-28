Initializer that generates the identity matrix.
Inherits From: `Initializer`
### Aliases:
- Class `tf.compat.v1.initializers.identity`
- Class `tf.compat.v1.keras.initializers.identity`
Only use for 2D matrices.
#### Args:
- `gain`: Multiplicative factor to apply to the identity matrix.
- `dtype`: Default data type, used if no `dtype` argument is provided when calling the initializer. Only floating point types are supported.
## __init__
View source

```
 __init__(
    gain=1.0,
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
