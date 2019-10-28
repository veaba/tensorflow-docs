## Class AdagradDAOptimizer
Adagrad Dual Averaging algorithm for sparse linear models.
Inherits From: `Optimizer`
See this paper.
This optimizer takes care of regularization of unseen features in a mini batch by updating them when they are seen with a closed form update rule that is equivalent to having updated them on every mini-batch.
AdagradDA is typically used when there is a need for large sparsity in the trained model. This optimizer only guarantees sparsity for linear models. Be careful when using AdagradDA for deep networks as it will require careful initialization of the gradient accumulators for it to train.
## __init__
View source

```
 __init__(
    learning_rate,
    global_step,
    initial_gradient_squared_accumulator_value=0.1,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    use_locking=False,
    name='AdagradDA'
)
```
Construct a new AdagradDA optimizer.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate.
- `global_step`: A `Tensor` containing the current training step number.
- `initial_gradient_squared_accumulator_value`: A floating point value. Starting value for the accumulators, must be positive.
- `l1_regularization_strength`: A float value, must be greater than or equal to zero.
- `l2_regularization_strength`: A float value, must be greater than or equal to zero.
- `use_locking`: If `True` use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "AdagradDA".
#### Raises:
- `ValueError`: If the `initial_gradient_squared_accumulator_value` is invalid.
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
