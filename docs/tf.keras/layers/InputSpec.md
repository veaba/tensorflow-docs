## Class InputSpec
Specifies the ndim, dtype and shape of every input to a layer.
### Aliases:
- Class `tf.compat.v1.keras.layers.InputSpec`
- Class `tf.compat.v1.layers.InputSpec`
- Class `tf.compat.v2.keras.layers.InputSpec`
Every layer should expose (if appropriate) an `input_spec` attribute: a list of instances of InputSpec (one per input tensor).
A None entry in a shape is compatible with any dimension, a None shape is compatible with any shape.
#### Arguments:
- `dtype`: Expected DataType of the input.
- `shape`: Shape tuple, expected `shape` of the input (may include None for unchecked axes).
- `ndim`: Integer, expected rank of the input.
- `max_ndim`: Integer, maximum rank of the input.
- `min_ndim`: Integer, minimum rank of the input.
- `axes`: Dictionary mapping integer `axes` to a specific dimension value.
## __init__
View source

```
 __init__(
    dtype=None,
    shape=None,
    ndim=None,
    max_ndim=None,
    min_ndim=None,
    axes=None
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### from_config
View source

```
 @classmethod
from_config(
    cls,
    config
)
```
### get_config
View source

```
 get_config()
```
