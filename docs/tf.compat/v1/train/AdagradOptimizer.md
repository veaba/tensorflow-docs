## Class AdagradOptimizer
Optimizer that implements the Adagrad algorithm.
Inherits From: `Optimizer`
See this paper or this intro.
## __init__
View source

```
 __init__(
    learning_rate,
    initial_accumulator_value=0.1,
    use_locking=False,
    name='Adagrad'
)
```
Construct a new Adagrad optimizer.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate.
- `initial_accumulator_value`: A floating point value. Starting value for the accumulators, must be positive.
- `use_locking`: If `True` use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Adagrad".
#### Raises:
- `ValueError`: If the `initial_accumulator_value` is invalid.
#### Eager Compatibility
When eager execution is enabled, `learning_rate` can be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
## Methods
### apply_gradients
View source

```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
```
Apply gradients to variables.
