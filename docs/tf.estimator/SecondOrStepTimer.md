[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L91-L155)  
---  
  
## Class `SecondOrStepTimer`

Timer that triggers at most once every N seconds or once every N steps.

### Aliases:

  * Class [`tf.compat.v1.estimator.SecondOrStepTimer`](/api_docs/python/tf/estimator/SecondOrStepTimer)
  * Class [`tf.compat.v1.train.SecondOrStepTimer`](/api_docs/python/tf/estimator/SecondOrStepTimer)
  * Class [`tf.compat.v2.estimator.SecondOrStepTimer`](/api_docs/python/tf/estimator/SecondOrStepTimer)

This symbol is also exported to v2 in tf.estimator namespace. See
https://github.com/tensorflow/estimator/blob/master/tensorflow_estimator/python/estimator/hooks/basic_session_run_hooks.py

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L98-L108)

    
    
    __init__(
        every_secs=None,
        every_steps=None
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `last_triggered_step`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L154-L155)

    
    
    last_triggered_step()
    

Returns the last triggered time step or None if never triggered.

### `reset`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L110-L112)

    
    
    reset()
    

Resets the timer.

### `should_trigger_for_step`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L114-L139)

    
    
    should_trigger_for_step(step)
    

Return true if the timer should trigger for the specified step.

#### Args:

  * **`step`** : Training step to trigger on.

#### Returns:

True if the difference between the current time and the time of the last
trigger exceeds `every_secs`, or if the difference between the current step
and the last triggered step exceeds `every_steps`. False otherwise.

### `update_last_triggered_step`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L141-L152)

    
    
    update_last_triggered_step(step)
    

Update the last triggered time and step number.

#### Args:

  * **`step`** : The current step.

#### Returns:

A pair `(elapsed_time, elapsed_steps)`, where `elapsed_time` is the number of
seconds between the current trigger and the last one (a float), and
`elapsed_steps` is the number of steps between the current trigger and the
last one. Both values will be set to `None` on the first trigger.

