## Class Identity
Initializer that generates the identity matrix.
Inherits From: `Initializer`
### Aliases:
- Class `tf.compat.v2.initializers.Identity`
- Class `tf.compat.v2.initializers.identity`
- Class `tf.compat.v2.keras.initializers.Identity`
- Class `tf.compat.v2.keras.initializers.identity`
- Class `tf.initializers.Identity`
- Class `tf.initializers.identity`
- Class `tf.keras.initializers.identity`
Only use for 2D matrices.
#### Args:
- `gain`: Multiplicative factor to apply to the identity matrix.
## __init__
View source

```
 __init__(gain=1.0)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
View source

```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
```
Returns a tensor object initialized as specified by the initializer.
#### Args:
- `shape`: Shape of the tensor.
- `dtype`: Optional `dtype` of the tensor. Only floating point types are supported.
#### Raises:
- `ValueError`: If the dtype is not floating point
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
