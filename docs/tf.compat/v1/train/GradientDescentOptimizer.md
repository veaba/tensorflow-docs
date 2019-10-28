## Class GradientDescentOptimizer
Optimizer that implements the gradient descent algorithm.
Inherits From: `Optimizer`
### Used in the tutorials:
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``
## __init__
View source

```
 __init__(
    learning_rate,
    use_locking=False,
    name='GradientDescent'
)
```
Construct a new gradient descent optimizer.
#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate to use.
- `use_locking`: If True use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "GradientDescent".
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
