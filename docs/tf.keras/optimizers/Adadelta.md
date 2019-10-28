## Class Adadelta
Optimizer that implements the Adadelta algorithm.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Adadelta`
- Class `tf.compat.v2.keras.optimizers.Adadelta`
- Class `tf.compat.v2.optimizers.Adadelta`
- Class `tf.optimizers.Adadelta`
Adadelta optimization is a stochastic gradient descent method that is based on adaptive learning rate per dimension to address two drawbacks: 1) the continual decay of learning rates throughout training 2) the need for a manually selected global learning rate
Two accumulation steps are required: 1) the accumulation of gradients squared, 2) the accumulation of updates squared.
#### Initialization:
References See M. D. Zeiler (pdf)
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    rho=0.95,
    epsilon=1e-07,
    name='Adadelta',
    **kwargs
)
```
Construct a new Adadelta optimizer.
Adadelta is a more robust extension of Adagrad that adapts learning rates based on a moving window of gradient updates, instead of accumulating all past gradients. This way, Adadelta continues learning even when many updates have been done. Compared to Adagrad, in the original version of Adadelta you don't have to set an initial learning rate. In this version, initial learning rate can be set, as in most other Keras optimizers.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate. To match the exact form in the original paper use 1.0.
- `rho`: A `Tensor` or a floating point value. The decay rate.
- `epsilon`: A `Tensor` or a floating point value. A constant `epsilon` used to better conditioning the grad update.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Adadelta".
#### Eager Compatibility
When eager execution is enabled, `learning_rate`, `rho`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
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
