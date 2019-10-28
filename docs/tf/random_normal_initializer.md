## Class random_normal_initializer
Initializer that generates tensors with a normal distribution.
Inherits From: `Initializer`
### Aliases:
- Class `tf.compat.v2.initializers.RandomNormal`
- Class `tf.compat.v2.keras.initializers.RandomNormal`
- Class `tf.compat.v2.random_normal_initializer`
- Class `tf.initializers.RandomNormal`
- Class `tf.keras.initializers.RandomNormal`
### Used in the guide:
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``P``i``x``2``P``i``x``
#### Args:
- `mean`: a python scalar or a scalar tensor. Mean of the random values to generate.
- `stddev`: a python scalar or a scalar tensor. Standard deviation of the random values to generate.
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
## __init__
View source

```
 __init__(
    mean=0.0,
    stddev=0.05,
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
