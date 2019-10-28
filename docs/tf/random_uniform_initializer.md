## Class random_uniform_initializer
Initializer that generates tensors with a uniform distribution.
Inherits From: `Initializer`
### Aliases:
- Class `tf.compat.v2.initializers.RandomUniform`
- Class `tf.compat.v2.keras.initializers.RandomUniform`
- Class `tf.compat.v2.random_uniform_initializer`
- Class `tf.initializers.RandomUniform`
- Class `tf.keras.initializers.RandomUniform`
#### Args:
- `minval`: A python scalar or a scalar tensor. Lower bound of the range of random values to generate.
- `maxval`: A python scalar or a scalar tensor. Upper bound of the range of random values to generate. Defaults to 1 for float types.
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
## __init__
View source

```
 __init__(
    minval=-0.05,
    maxval=0.05,
    seed=None
)
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
- `dtype`: Optional `dtype` of the tensor. Only floating point and integer types are supported.
#### Raises:
- `ValueError`: If the dtype is not numeric.
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
