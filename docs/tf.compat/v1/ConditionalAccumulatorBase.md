## Class ConditionalAccumulatorBase

A conditional accumulator for aggregating gradients.

Up-to-date gradients (i.e., time step at which gradient was computed is equal to the accumulator's time step) are added to the accumulator.

Extraction of the average gradient is blocked until the required number of gradients has been accumulated.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1173-L1191)


```
 __init__(
    dtype,
    shape,
    accumulator_ref
)
```

Creates a new ConditionalAccumulator.
#### Args:
- `dtype`: Datatype of the accumulated gradients.
- `shape`: Shape of the accumulated gradients.
- `accumulator_ref`: A handle to the conditional accumulator, created by sub- classes
## Properties
### accumulator_ref

The underlying accumulator reference.
### dtype

The datatype of the gradients accumulated by this accumulator.
### name

The name of the underlying accumulator.
## Methods
### num_accumulated
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1208-L1225)


```
 num_accumulated(name=None)
```

Number of gradients that have currently been aggregated in accumulator.
#### Args:
- `name`: Optional `name` for the operation.
#### Returns:

Number of accumulated gradients currently in accumulator.
### set_global_step
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1227-L1249)


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
