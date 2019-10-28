## Class Orthogonal
Initializer that generates an orthogonal matrix.
Inherits From: `Initializer`
### Aliases:
- Class `tf.compat.v2.initializers.Orthogonal`
- Class `tf.compat.v2.initializers.orthogonal`
- Class `tf.compat.v2.keras.initializers.Orthogonal`
- Class `tf.compat.v2.keras.initializers.orthogonal`
- Class `tf.initializers.Orthogonal`
- Class `tf.initializers.orthogonal`
- Class `tf.keras.initializers.orthogonal`
If the shape of the tensor to initialize is two-dimensional, it is initialized with an orthogonal matrix obtained from the QR decomposition of a matrix of random numbers drawn from a normal distribution. If the matrix has fewer rows than columns then the output will have orthogonal rows. Otherwise, the output will have orthogonal columns.
If the shape of the te`n`sor to i`n`itialize is more tha`n` two-dime`n`sio`n`al, a matrix of shape (shape[0] * ... * shape[`n` - 2], shape[`n` - 1]) is i`n`itialized, where `n` is the le`n`gth of the shape vector. The matrix is subseque`n`tly reshaped to give a te`n`sor of the desired shape.
#### Args:
- `gain`: multiplicative factor to apply to the orthogonal matrix
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
#### References:
Saxe et al., 2014 (pdf)
## __init__
View source

```
 __init__(
    gain=1.0,
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
- `ValueError`: If the dtype is not floating point or the input shape is not valid.
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
