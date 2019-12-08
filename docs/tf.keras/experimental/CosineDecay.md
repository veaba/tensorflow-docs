

## Class  `CosineDecay` 
A LearningRateSchedule that uses a cosine decay schedule.

Inherits From: [ `LearningRateSchedule` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)



### Aliases:

- Class [ `tf.compat.v1.keras.experimental.CosineDecay` ](/api_docs/python/tf/keras/experimental/CosineDecay)

- Class [ `tf.compat.v2.keras.experimental.CosineDecay` ](/api_docs/python/tf/keras/experimental/CosineDecay)



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L518-L578)



```
 __init__(
    initial_learning_rate,
    decay_steps,
    alpha=0.0,
    name=None
)
 
```

Applies cosine decay to the learning rate.

See [Loshchilov &amp; Hutter, ICLR2016], SGDR: Stochastic Gradient Descent
with Warm Restarts. https://arxiv.org/abs/1608.03983

When training a model, it is often recommended to lower the learning rate as
the training progresses. This schedule applies a cosine decay function
to an optimizer step, given a provided initial learning rate.
It requires a  `step`  value to compute the decayed learning rate. You can
just pass a TensorFlow variable that you increment at each training step.

The schedule a 1-arg callable that produces a decayed learning
rate when passed the current optimizer step. This can be useful for changing
the learning rate value across different invocations of optimizer functions.
It is computed as:



```
 def decayed_learning_rate(step):
  step = min(step, decay_steps)
  cosine_decay = 0.5 * (1 + cos(pi * step / decay_steps))
  decayed = (1 - alpha) * cosine_decay + alpha
  return initial_learning_rate * decayed
 
```



#### Example usage:


```
 decay_steps = 1000
lr_decayed_fn = tf.keras.experimental.CosineDecay(
    initial_learning_rate, decay_steps)
 
```

You can pass this schedule directly into a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)
as the learning rate. The learning rate schedule is also serializable and
deserializable using [ `tf.keras.optimizers.schedules.serialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/serialize) and
[ `tf.keras.optimizers.schedules.deserialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/deserialize).



#### Args:

- **`initial_learning_rate`** : A scalar  `float32`  or  `float64`  Tensor or a
Python number. The initial learning rate.

- **`decay_steps`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number.
Number of steps to decay over.

- **`alpha`** : A scalar  `float32`  or  `float64`  Tensor or a Python number.
Minimum learning rate value as a fraction of initial_learning_rate.

- **`name`** : String. Optional name of the operation.  Defaults to 'CosineDecay'.



#### Returns:
A 1-arg callable learning rate schedule that takes the current optimizer
step and outputs the decayed learning rate, a scalar  `Tensor`  of the same
type as  `initial_learning_rate` .



## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L580-L594)



```
 __call__(step)
 
```

Call self as a function.



###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60)



```
 from_config(
    cls,
    config
)
 
```

Instantiates a  `LearningRateSchedule`  from its config.



#### Args:

- **`config`** : Output of  `get_config()` .



#### Returns:
A  `LearningRateSchedule`  instance.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L596-L602)



```
 get_config()
 
```

