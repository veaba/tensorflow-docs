## Class PiecewiseConstantDecay
A LearningRateSchedule that uses a piecewise constant decay schedule.
Inherits From: `LearningRateSchedule`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.schedules.PiecewiseConstantDecay`
- Class `tf.compat.v2.keras.optimizers.schedules.PiecewiseConstantDecay`
- Class `tf.compat.v2.optimizers.schedules.PiecewiseConstantDecay`
- Class `tf.optimizers.schedules.PiecewiseConstantDecay`
## __init__
View source

```
 __init__(
    boundaries,
    values,
    name=None
)
```
Piecewise constant from boundaries and interval values.
The function returns a 1-arg callable to compute the piecewise constant when passed the current optimizer step. This can be useful for changing the learning rate value across different invocations of optimizer functions.
Example: use a learning rate that's 1.0 for the first 100001 steps, 0.5 for the next 10000 steps, and 0.1 for any additional steps.

```
 step = tf.Variable(0, trainable=False)
boundaries = [100000, 110000]
values = [1.0, 0.5, 0.1]
learning_rate_fn = keras.optimizers.schedules.PiecewiseConstantDecay(
    boundaries, values)

# Later, whenever we perform an optimization step, we pass in the step.
learning_rate = learning_rate_fn(step)
```
You can pass this schedule directly into a `tf.keras.optimizers.Optimizer` as the learning rate. The learning rate schedule is also serializable and deserializable using `tf.keras.optimizers.schedules.serialize` and `tf.keras.optimizers.schedules.deserialize`.
#### Args:
- `boundaries`: A list of `Tensor`s or `int`s or `float`s with strictly increasing entries, and with all elements having the same type as the optimizer step.
- `values`: A list of `Tensor`s or `float`s or `int`s that specifies the `values` for the `int`ervals defined by `boundaries`. It should have one more element than `boundaries`, and all elements should have the same type.
- `name`: A string. Optional `name` of the operation. Defaults to 'PiecewiseConstant'.
#### Returns:
A 1-arg callable learning rate schedule that takes the current optimizer step and outputs the decayed learning rate, a scalar `Tensor` of the same type as the boundary tensors.
The output of the 1-arg function that takes the `step` is `values[0]` when `step` <= boundaries[0], `values[1]` when `step` > boundaries[0] and `step` <= boundaries[1], ..., and values[-1] when `step` > boundaries[-1].
#### Raises:
- `ValueError`: if the number of elements in the lists do not match.
## Methods
### __call__
View source

```
 __call__(step)
```
Call self as a function.
### from_config
View source

```
 from_config(
    cls,
    config
)
```
Instantiates a `LearningRateSchedule` from its config.
#### Args:
#### Returns:
A `LearningRateSchedule` instance.
### get_config
View source

```
 get_config()
```
