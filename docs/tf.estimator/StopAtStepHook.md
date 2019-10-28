## Class StopAtStepHook
Hook that requests stop at a specified step.
Inherits From: `SessionRunHook`
### Aliases:
- Class `tf.compat.v1.estimator.StopAtStepHook`
- Class `tf.compat.v1.train.StopAtStepHook`
- Class `tf.compat.v2.estimator.StopAtStepHook`
## __init__
View source

```
 __init__(
    num_steps=None,
    last_step=None
)
```
Initializes a `StopAtStepHook`.
This hook requests stop after either a number of steps have been executed or a last step has been reached. Only one of the two options can be specified.
