## Class SGD
Stochastic gradient descent and momentum optimizer.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.SGD`
- Class `tf.compat.v2.keras.optimizers.SGD`
- Class `tf.compat.v2.optimizers.SGD`
- Class `tf.optimizers.SGD`
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``U``s``e`` ``a`` ``G``P``U``
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
### Used in the tutorials:
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
#### Computes:

```
 theta(t+1) = theta(t) - learning_rate * gradient
gradient is evaluated at theta(t).
```
or Computes (if `nesterov = False`):

```
 v(t+1) = momentum * v(t) - learning_rate * gradient
theta(t+1) = theta(t) + v(t+1)
if `nesterov` is False, gradient is evaluated at theta(t).
if `nesterov` is True, gradient is evaluated at theta(t) + momentum * v(t),
  and the variables always store theta + m v instead of theta
```
Some of the args below are hyperparameters, where a hyperparameter is defined as a scalar Tensor, a regular Python value, or a callable (which will be evaluated when `apply_gradients` is called) returning a scalar Tensor or a Python value.
# References

```
 nesterov = True, See [Sutskever et al., 2013](
  http://jmlr.org/proceedings/papers/v28/sutskever13.pdf).
```
#### Eager Compatibility
When eager execution is enabled, learning_rate can be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
## __init__
View source

```
 __init__(
    learning_rate=0.01,
    momentum=0.0,
    nesterov=False,
    name='SGD',
    **kwargs
)
```
Construct a new Stochastic Gradient Descent or Momentum optimizer.
#### Arguments:
- `learning_rate`: float hyperparameter >= 0. Learning rate.
- `momentum`: float hyperparameter >= 0 that accelerates SGD in the relevant direction and dampens oscillations.
- `nesterov`: boolean. Whether to apply Nesterov momentum.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to 'SGD'.
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
