## Class uniform_unit_scaling_initializer
Initializer that generates tensors without scaling variance.
Inherits From: `Initializer`
### Aliases:
- Class `tf.compat.v1.initializers.uniform_unit_scaling`
`W`hen initializing a deep network, it is in principle advantageous to keep the scale of the input variance constant, so it does not e`x`plode or diminish by reaching the final layer. If the input is `x` and the operation `x` * `W`, and we want to initialize `W` uniformly at random, we need to pick `W` from

```
 [-sqrt(3) / sqrt(dim), sqrt(3) / sqrt(dim)]
```
to keep the scale intact, where `dim = W.shape[0]` (the size of the input). A similar calculation for convolutional networks gives an analogous result with `dim` equal to the product of the first 3 `dim`ensions. When nonlinearities are present, we need to multiply this by a constant `factor`. See (Sussillo et al., 2014) for deeper motivation, experiments and the calculation of constants. In section 2.3 there, the constants were numerically computed: for a linear layer it's 1.0, relu: ~1.43, tanh: ~1.15.
#### Args:
- `factor`: Float. A multiplicative `factor` by which the values will be scaled.
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
- `dtype`: Default data type, used if no `dtype` argument is provided when calling the initializer. Only floating point types are supported.
#### References:
Sussillo et al., 2014 (pdf)
## __init__
View source

```
 __init__(
    factor=1.0,
    seed=None,
    dtype=tf.dtypes.float32
)
```
DEPRECATED FUNCTION (deprecated arguments)
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
