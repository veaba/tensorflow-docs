## Class RNNCellResidualWrapper
RNNCell wrapper that ensures cell inputs are added to the outputs.
### Aliases:
- Class `tf.compat.v2.nn.RNNCellResidualWrapper`
## __init__
View source

```
 __init__(
    *args,
    **kwargs
)
```
Constructs a `ResidualWrapper` for `cell`.
#### Args:
- `cell`: An instance of `RNNCell`.
- `residual_fn`: (Optional) The function to map raw cell inputs and raw cell outputs to the actual cell outputs of the residual network. Defaults to calling nest.map_structure on (lambda i, o: i + o), inputs and outputs.
## Properties
### output_size
### state_size
## Methods
### get_initial_state
View source

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
```
### zero_state
View source

```
 zero_state(
    batch_size,
    dtype
)
```
