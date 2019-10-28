## Class FtrlOptimizer
Optimizer that implements the FTRL algorithm.
Inherits From: `Optimizer`
See this paper. This version has support for both online L2 (the L2 penalty given in the paper above) and shrinkage-type L2 (which is the addition of an L2 penalty to the loss function).
## __init__
View source

```
 __init__(
    learning_rate,
    learning_rate_power=-0.5,
    initial_accumulator_value=0.1,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    use_locking=False,
    name='Ftrl',
    accum_name=None,
    linear_name=None,
    l2_shrinkage_regularization_strength=0.0
)
```
Construct a new FTRL optimizer.
#### Args:
- `learning_rate`: A float value or a constant float `Tensor`.
- `learning_rate_power`: A float value, must be less or equal to zero. Controls how the learning rate decreases during training. Use zero for a fixed learning rate. See section 3.1 in the paper.
- `initial_accumulator_value`: The starting value for accumulators. Only zero or positive values are allowed.
- `l1_regularization_strength`: A float value, must be greater than or equal to zero.
- `l2_regularization_strength`: A float value, must be greater than or equal to zero.
- `use_locking`: If `True` use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Ftrl".
- `accum_name`: The suffix for the variable that keeps the gradient squared accumulator. If not present, defaults to name.
- `linear_name`: The suffix for the variable that keeps the linear gradient accumulator. If not present, defaults to name + "_1".
- `l2_shrinkage_regularization_strength`: A float value, must be greater than or equal to zero. This differs from L2 above in that the L2 above is a stabilization penalty, whereas this L2 shrinkage is a magnitude penalty. The FTRL formulation can be written as: w_{t+1} = argminw(\hat{g}{1:t}w + L1||w||_1 + L2||w||_2^2), where \hat{g} = g + (2L2_shrinkagew), and g is the gradient of the loss function w.r.t. the weights w. Specifically, in the absence of L1 regularization, it is equivalent to the following update rule: w_{t+1} = w_t - lr_t / (1 + 2L2lr_t) * g_t - 2L2_shrinkagelr_t / (1 + 2L2lr_t) * w_t where lr_t is the learning rate at t. When input is sparse shrinkage will only happen on the active weights.
#### Raises:
- `ValueError`: If one of the arguments is invalid.
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
