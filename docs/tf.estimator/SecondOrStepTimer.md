## Class SecondOrStepTimer
Timer that triggers at most once every N seconds or once every N steps.
### Aliases:
- Class `tf.compat.v1.estimator.SecondOrStepTimer`
- Class `tf.compat.v1.train.SecondOrStepTimer`
- Class `tf.compat.v2.estimator.SecondOrStepTimer`
This symbol is also exported to v2 in tf.estimator namespace. See https://github.com/tensorflow/estimator/blob/master/tensorflow_estimator/python/estimator/hooks/basic_session_run_hooks.py
## __init__
View source

```
 __init__(
    every_secs=None,
    every_steps=None
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### last_triggered_step
View source

```
 last_triggered_step()
```
Returns the last triggered time step or None if never triggered.
### reset
View source

```
 reset()
```
Resets the timer.
### should_trigger_for_step
View source

```
 should_trigger_for_step(step)
```
Return true if the timer should trigger for the specified step.
#### Args:
- `step`: Training `step` to trigger on.
#### Returns:
True if the difference between the current time and the time of the last trigger exceeds `every_secs`, or if the difference between the current step and the last triggered step exceeds `every_steps`. False otherwise.
### update_last_triggered_step
View source

```
 update_last_triggered_step(step)
```
Update the last triggered time and step number.
#### Args:
- `step`: The current `step`.
#### Returns:
A pair `elapsed_time, elapsed_steps)`, where `elapsed_time` is the number of seconds between the current trigger and the last one (a float), and `elapsed_steps` is the number of steps between the current trigger and the last one. Both values will be set to `None` on the first trigger.
