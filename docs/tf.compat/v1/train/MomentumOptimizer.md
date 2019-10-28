## Class MomentumOptimizer
Optimizer that implements the Momentum algorithm.
Inherits From: `Optimizer`
Computes (if `use_nesterov = False`):

```
 accumulation = momentum * accumulation + gradient
variable -= learning_rate * accumulation
```
Note that in the dense version of this algorithm, `accumulation` is updated and applied regardless of a gradient's value, whereas the sparse version (when the gradient is an `IndexedSlices`, typically because of `tf.gather` or an embedding) only updates variable slices and corresponding `accumulation` terms when that part of the variable was used in the forward pass.
## __init__
View source

```
 __init__(
    learning_rate,
    momentum,
    use_locking=False,
    name='Momentum',
    use_nesterov=False
)
```
Construct a new Momentum optimizer.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate.
- `momentum`: A `Tensor` or a floating point value. The `momentum`.
- `use_locking`: If `True` use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Momentum".
- `use_nesterov`: If `True` use Nesterov Momentum. See Sutskever et al., 2013. This implementation always computes gradients at the value of the variable(s) passed to the optimizer. Using Nesterov Momentum makes the variable(s) track the values called theta_t + mu*v_t in the paper. This implementation is an approximation of the original formula, valid for high values of momentum. It will compute the "adjusted gradient" in NAG by assuming that the new gradient will be estimated by the current average gradient plus the product of momentum and the change in the average gradient.
#### Eager Compatibility
When eager execution is enabled, `learning_rate` and `momentum` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
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
