

## Class  `InverseTimeDecay` 
A LearningRateSchedule that uses an inverse time decay schedule.

Inherits From: [ `LearningRateSchedule` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)



### Aliases:

- Class [ `tf.compat.v1.keras.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay)

- Class [ `tf.compat.v2.keras.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay)

- Class [ `tf.compat.v2.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay)

- Class [ `tf.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay)



### Used in the tutorials:

- [Overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L413-L486)



```
 __init__(
    initial_learning_rate,
    decay_steps,
    decay_rate,
    staircase=False,
    name=None
)
 
```

Applies inverse time decay to the initial learning rate.

When training a model, it is often recommended to lower the learning rate as
the training progresses. This schedule applies the inverse decay function
to an optimizer step, given a provided initial learning rate.
It requires a  `step`  value to compute the decayed learning rate. You can
just pass a TensorFlow variable that you increment at each training step.

The schedule a 1-arg callable that produces a decayed learning
rate when passed the current optimizer step. This can be useful for changing
the learning rate value across different invocations of optimizer functions.
It is computed as:



```
 def decayed_learning_rate(step):
  return initial_learning_rate / (1 + decay_rate * step / decay_step)
 
```

or, if  `staircase`  is  `True` , as:



```
 def decayed_learning_rate(step):
  return initial_learning_rate / (1 + decay_rate * floor(step / decay_step))
 
```

You can pass this schedule directly into a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)
as the learning rate.
Example: Fit a Keras model when decaying 1/t with a rate of 0.5:



```
 ...
initial_learning_rate = 0.1
decay_steps = 1.0
decay_rate = 0.5
learning_rate_fn = keras.optimizers.schedules.InverseTimeDecay(
  initial_learning_rate, decay_steps, decay_rate)

model.compile(optimizer=tf.keras.optimizers.SGD(
                  learning_rate=learning_rate_fn),
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(data, labels, epochs=5)
 
```



#### Args:

- **`initial_learning_rate`** : A scalar  `float32`  or  `float64`   `Tensor`  or a
Python number.  The initial learning rate.

- **`decay_steps`** : How often to apply decay.

- **`decay_rate`** : A Python number.  The decay rate.

- **`staircase`** : Whether to apply decay in a discrete staircase, as opposed to
continuous, fashion.

- **`name`** : String.  Optional name of the operation.  Defaults to
'InverseTimeDecay'.



#### Returns:
A 1-arg callable learning rate schedule that takes the current optimizer
step and outputs the decayed learning rate, a scalar  `Tensor`  of the same
type as  `initial_learning_rate` .



## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L488-L502)



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L504-L511)



```
 get_config()
 
```

