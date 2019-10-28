## Class Ftrl
Optimizer that implements the FTRL algorithm.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Ftrl`
- Class `tf.compat.v2.keras.optimizers.Ftrl`
- Class `tf.compat.v2.optimizers.Ftrl`
- Class `tf.optimizers.Ftrl`
See Algorithm 1 of this paper. This version has support for both online L2 (the L2 penalty given in the paper above) and shrinkage-type L2 (which is the addition of an L2 penalty to the loss function).
#### Initialization:
Update (
Check the documentation for the l2_shrinkage_regularization_strength parameter for more details when shrinkage is enabled, where gradient is replaced with gradient_with_shrinkage.
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    learning_rate_power=-0.5,
    initial_accumulator_value=0.1,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    name='Ftrl',
    l2_shrinkage_regularization_strength=0.0,
    **kwargs
)
```
Construct a new FTRL optimizer.
#### Args:
- `learning_rate`: A float value or a constant float `Tensor`.
- `learning_rate_power`: A float value, must be less or equal to zero. Controls how the learning rate decreases during training. Use zero for a fixed learning rate.
- `initial_accumulator_value`: The starting value for accumulators. Only zero or positive values are allowed.
- `l1_regularization_strength`: A float value, must be greater than or equal to zero.
- `l2_regularization_strength`: A float value, must be greater than or equal to zero.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Ftrl".
- `l2_shrinkage_regularization_strength`: A float value, must be greater than or equal to zero. This differs from L2 above in that the L2 above is a stabilization penalty, whereas this L2 shrinkage is a magnitude penalty. The FTRL formulation can be written as: w_{t+1} = argminw(\hat{g}{1:t}w + L1||w||_1 + L2||w||_2^2), where \hat{g} = g + (2L2_shrinkagew), and g is the gradient of the loss function w.r.t. the weights w. Specifically, in the absence of L1 regularization, it is equivalent to the following update rule: w_{t+1} = w_t - lr_t / (1 + 2L2lr_t) * g_t - 2L2_shrinkagelr_t / (1 + 2L2lr_t) * w_t where lr_t is the learning rate at t. When input is sparse shrinkage will only happen on the active weights.\
#### Raises:
- `ValueError`: If one of the arguments is invalid.
References See paper
## Properties
### iterations
Variable. The number of training steps this Optimizer has run.
### weights
Returns variables of this Optimizer based on the order created.
## Methods
### add_slot
View source

```
 add_slot(
    var,
    slot_name,
    initializer='zeros'
)
```
Add a new slot `var`iable for `var`.
### add_weight
View source

```
 add_weight(
    name,
    shape,
    dtype=None,
    initializer='zeros',
    trainable=None,
    synchronization=tf.VariableSynchronization.AUTO,
    aggregation=tf.compat.v1.VariableAggregation.NONE
)
```
### apply_gradients
View source

```
 apply_gradients(
    grads_and_vars,
    name=None
)
```
Apply gradients to variables.
