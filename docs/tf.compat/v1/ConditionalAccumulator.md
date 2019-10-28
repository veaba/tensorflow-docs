## Class ConditionalAccumulator
A conditional accumulator for aggregating gradients.
Inherits From: `ConditionalAccumulatorBase`
Up-to-date gradients (i.e., time step at which gradient was computed is equal to the accumulator's time step) are added to the accumulator.
Extraction of the average gradient is blocked until the required number of gradients has been accumulated.
## __init__
View source

```
 __init__(
    dtype,
    shape=None,
    shared_name=None,
    name='conditional_accumulator',
    reduction_type='MEAN'
)
```
Creates a new ConditionalAccumulator.
#### Args:
- `dtype`: Datatype of the accumulated gradients.
- `shape`: Shape of the accumulated gradients.
- `shared_name`: Optional. If non-empty, this accumulator will be shared under the given name across multiple sessions.
- `name`: Optional `name` for the accumulator.
- `reduction_type`: Reduction type to use when taking the gradient.
## Properties
### accumulator_ref
The underlying accumulator reference.
### dtype
The datatype of the gradients accumulated by this accumulator.
### name
The name of the underlying accumulator.
## Methods
### apply_grad
View source

```
 apply_grad(
    grad,
    local_step=0,
    name=None
)
```
Attempts to apply a gradient to the accumulator.
The attempt is silently dropped if the gradient is stale, i.e., local_step is less than the accumulator's global time step.
#### Args:
- `grad`: The `grad`ient tensor to be applied.
- `local_step`: Time step at which the gradient was computed.
- `name`: Optional `name` for the operation.
#### Returns:
The operation that (conditionally) applies a gradient to the accumulator.
#### Raises:
- `ValueError`: If grad is of the wrong shape
### num_accumulated
View source

```
 num_accumulated(name=None)
```
Number of gradients that have currently been aggregated in accumulator.
#### Args:
- `name`: Optional `name` for the operation.
#### Returns:
Number of accumulated gradients currently in accumulator.
### set_global_step
View source

```
 set_global_step(
    new_global_step,
    name=None
)
```
Sets the global time step of the accumulator.
The operation logs a warning if we attempt to set to a time step that is lower than the accumulator's own time step.
#### Args:
- `new_global_step`: Value of new time step. Can be a variable or a constant
- `name`: Optional `name` for the operation.
#### Returns:
Operation that sets the accumulator's time step.
### take_grad
View source

```
 take_grad(
    num_required,
    name=None
)
```
Attempts to extract the average gradient from the accumulator.
The operation blocks until sufficient number of gradients have been successfully applied to the accumulator.
Once successful, the following actions are also triggered:
- ``C``o``u``n``t``e``r`` ``o``f`` ``a``c``c``u``m``u``l``a``t``e``d`` ``g``r``a``d``i``e``n``t``s`` ``i``s`` ``r``e``s``e``t`` ``t``o`` ``0``.``
- ``A``g``g``r``e``g``a``t``e``d`` ``g``r``a``d``i``e``n``t`` ``i``s`` ``r``e``s``e``t`` ``t``o`` ``0`` ``t``e``n``s``o``r``.``
- ``A``c``c``u``m``u``l``a``t``o``r``'``s`` ``i``n``t``e``r``n``a``l`` ``t``i``m``e`` ``s``t``e``p`` ``i``s`` ``i``n``c``r``e``m``e``n``t``e``d`` ``b``y`` ``1``.``
#### Args:
- `num_required`: Number of gradients that needs to have been aggregated
- `name`: Optional `name` for the operation
#### Returns:
A tensor holding the value of the average gradient.
#### Raises:
- `InvalidArgumentError`: If num_required < 1
