

## Class  `SecondOrStepTimer` 
每N秒或每N步最多触发一次的计时器。

**别名** : [ `tf.compat.v1.estimator.SecondOrStepTimer` ](/api_docs/python/tf/estimator/SecondOrStepTimer), [ `tf.compat.v1.train.SecondOrStepTimer` ](/api_docs/python/tf/estimator/SecondOrStepTimer), [ `tf.compat.v2.estimator.SecondOrStepTimer` ](/api_docs/python/tf/estimator/SecondOrStepTimer)

This symbol is also exported to v2 in tf.estimator namespace. Seehttps://github.com/tensorflow/estimator/blob/master/tensorflow_estimator/python/estimator/hooks/basic_session_run_hooks.py

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L98-L108)

```
 __init__(
    every_secs=None,
    every_steps=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `last_triggered_step` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L154-L155)

```
 last_triggered_step()
 
```

返回上次触发的时间步，如果从未触发，则返回“无”。

###  `reset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L110-L112)

```
 reset()
 
```

重置计时器。

###  `should_trigger_for_step` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L114-L139)

```
 should_trigger_for_step(step)
 
```

如果计时器应为指定步骤触发，则返回true。

#### 参数：
- **`step`** : Training step to trigger on.


#### 返回：
True if the difference between the current time and the time of the lasttrigger exceeds  `every_secs` , or if the difference between the currentstep and the last triggered step exceeds  `every_steps` . False otherwise.

###  `update_last_triggered_step` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L141-L152)

```
 update_last_triggered_step(step)
 
```

更新上次触发的时间和步骤号。

#### 参数：
- **`step`** : The current step.


#### 返回：
A pair  `(elapsed_time, elapsed_steps)` , where  `elapsed_time`  is the numberof seconds between the current trigger and the last one (a float), and `elapsed_steps`  is the number of steps between the current trigger andthe last one. Both values will be set to  `None`  on the first trigger.

