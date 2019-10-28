## Class AdadeltaOptimizer
Optimizer that implements the Adadelta algorithm.
Inherits From: `Optimizer`
See M. D. Zeiler (pdf)
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    rho=0.95,
    epsilon=1e-08,
    use_locking=False,
    name='Adadelta'
)
```
Construct a new Adadelta optimizer.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate. To match the exact form in the original paper use 1.0.
- `rho`: A `Tensor` or a floating point value. The decay rate.
- `epsilon`: A `Tensor` or a floating point value. A constant `epsilon` used to better conditioning the grad update.
- `use_locking`: If `True` use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Adadelta".
#### Eager Compatibility
When eager execution is enabled, `learning_rate`, `rho`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
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
