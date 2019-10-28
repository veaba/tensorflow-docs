## Class Adagrad
Optimizer that implements the Adagrad algorithm.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Adagrad`
- Class `tf.compat.v2.keras.optimizers.Adagrad`
- Class `tf.compat.v2.optimizers.Adagrad`
- Class `tf.optimizers.Adagrad`
Adagrad is an optimizer with parameter-specific learning rates, which are adapted relative to how frequently a parameter gets updated during training. The more updates a parameter receives, the smaller the updates.
#### Initialization:
#### Update step:
#### References:
- ``P``a``p``e``r``.``
- ``I``n``t``r``o``d``u``c``t``i``o``n``.``
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    initial_accumulator_value=0.1,
    epsilon=1e-07,
    name='Adagrad',
    **kwargs
)
```
Construct a new Adagrad optimizer.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate.
- `initial_accumulator_value`: A floating point value. Starting value for the accumulators, must be positive.
- `epsilon`: A floating point value. Starting value for the accumulators, must be positive.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Adagrad".
#### Raises:
- `ValueError`: If the `initial_accumulator_value` or `epsilon` is invalid.
#### Eager Compatibility
When eager execution is enabled, `learning_rate` can be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
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
