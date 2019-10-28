## Class ProximalAdagradOptimizer
Optimizer that implements the Proximal Adagrad algorithm.
Inherits From: `Optimizer`
See this paper.
## __init__
View source

```
 __init__(
    learning_rate,
    initial_accumulator_value=0.1,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    use_locking=False,
    name='ProximalAdagrad'
)
```
Construct a new ProximalAdagrad optimizer.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate.
- `initial_accumulator_value`: A floating point value. Starting value for the accumulators, must be positive.
- `l1_regularization_strength`: A float value, must be greater than or equal to zero.
- `l2_regularization_strength`: A float value, must be greater than or equal to zero.
- `use_locking`: If `True` use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Adagrad".
#### Raises:
- `ValueError`: If the `initial_accumulator_value` is invalid.
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
