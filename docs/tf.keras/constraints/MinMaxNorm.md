## Class MinMaxNorm
MinMaxNorm weight constraint.
Inherits From: `Constraint`
### Aliases:
- Class `tf.compat.v1.keras.constraints.MinMaxNorm`
- Class `tf.compat.v1.keras.constraints.min_max_norm`
- Class `tf.compat.v2.keras.constraints.MinMaxNorm`
- Class `tf.compat.v2.keras.constraints.min_max_norm`
- Class `tf.keras.constraints.min_max_norm`
Constrains the weights incident to each hidden unit to have the norm between a lower bound and an upper bound.
#### Arguments:
- `min_value`: the minimum norm for the incoming weights.
- `max_value`: the maximum norm for the incoming weights.
- `rate`: `rate` for enforcing the constraint: weights will be rescaled to yield (1 - `rate`) * norm + `rate` * norm.clip(min_value, max_value). Effectively, this means that `rate`=1.0 stands for strict enforcement of the constraint, while `rate`<1.0 means that weights will be rescaled at each step to slowly move towards a value inside the desired interval.
- `axis`: integer, `axis` along which to calculate weight norms. For instance, in a `Dense` layer the weight matrix has shape `input_dim, output_dim)`, set `axis` to `0` to constrain each weight vector of length `input_dim,)`. In a `Conv2D` layer with `data_format="channels_last"`, the weight tensor has shape `rows, cols, input_depth, output_depth)`, set `axis` to `[0, 1, 2]` to constrain the weights of each filter tensor of size `rows, cols, input_depth)`.
## __init__
View source

```
 __init__(
    min_value=0.0,
    max_value=1.0,
    rate=1.0,
    axis=0
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
View source

```
 __call__(w)
```
Call self as a function.
### get_config
View source

```
 get_config()
```
