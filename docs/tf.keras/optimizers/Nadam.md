## Class Nadam
Optimizer that implements the NAdam algorithm.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Nadam`
- Class `tf.compat.v2.keras.optimizers.Nadam`
- Class `tf.compat.v2.optimizers.Nadam`
- Class `tf.optimizers.Nadam`
Much like Adam is essentially RMSprop with momentum, Nadam is Adam with Nesterov momentum.
#### Initialization:
#### Computes:
gradient is evaluated at theta(t) + momentum * v(t), and the variables always store theta + beta_1 * m / sqrt(v) instead of theta.
References See Dozat, T., 2015.
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    beta_1=0.9,
    beta_2=0.999,
    epsilon=1e-07,
    name='Nadam',
    **kwargs
)
```
Construct a new Nadam optimizer.
#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `beta_1`: A float value or a constant float tensor. The exponential decay rate for the 1st moment estimates.
- `beta_2`: A float value or a constant float tensor. The exponential decay rate for the exponentially weighted infinity norm.
- `epsilon`: A small constant for numerical stability.
- `name`: Optional `name` for the operations created when applying gradients. Defaults to "Adamax".
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
