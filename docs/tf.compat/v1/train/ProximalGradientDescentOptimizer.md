## Class ProximalGradientDescentOptimizer
Optimizer that implements the proximal gradient descent algorithm.
Inherits From: `Optimizer`
See this paper.
## __init__
View source

```
 __init__(
    learning_rate,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    use_locking=False,
    name='ProximalGradientDescent'
)
```
Construct a new proximal gradient descent optimizer.
#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate to use.
- `l1_regularization_strength`: A float value, must be greater than or equal to zero.
- `l2_regularization_strength`: A float value, must be greater than or equal to zero.
- `use_locking`: If True use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "GradientDescent".
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
