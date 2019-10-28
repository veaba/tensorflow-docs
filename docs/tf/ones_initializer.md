## Class ones_initializer
Initializer that generates tensors initialized to 1.
Inherits From: `Initializer`
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
- `dtype`: Optional `dtype` of the tensor. Only numeric or boolean `dtype`s are supported.
#### Raises:
- `ValuesError`: If the dtype is not numeric or boolean.
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
