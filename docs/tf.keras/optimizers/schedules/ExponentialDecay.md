## Class ExponentialDecay

A LearningRateSchedule that uses an exponential decay schedule.
[LearningRateSchedule](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.optimizers.schedules.ExponentialDecay`
- Class `tf.compat.v2.keras.optimizers.schedules.ExponentialDecay`
- Class `tf.compat.v2.optimizers.schedules.ExponentialDecay`
- Class `tf.optimizers.schedules.ExponentialDecay`
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L67-L140)


```
 __init__(
    initial_learning_rate,
    decay_steps,
    decay_rate,
    staircase=False,
    name=None
)
```

Applies exponential decay to the learning rate.

When training a model, it is often recommended to lower the learning rate as the training progresses. This schedule applies an exponential decay function to an optimizer step, given a provided initial learning rate.

The schedule a 1-arg callable that produces a decayed learning rate when passed the current optimizer step. This can be useful for changing the learning rate value across different invocations of optimizer functions. It is computed as:

```
 def decayed_learning_rate(step):
  return initial_learning_rate * decay_rate ^ (step / decay_steps)
```

If the argument staircase is True, then step / decay_steps is an integer division and the decayed learning rate follows a staircase function.
[tf.keras.optimizers.Optimizer](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer)You can pass this schedule directly into a  as the learning rate. Example: When fitting a Keras model, decay every 100000 steps with a base of 0.96:


```
 initial_learning_rate = 0.1
lr_schedule = tf.keras.optimizers.schedules.ExponentialDecay(
    initial_learning_rate,
    decay_steps=100000,
    decay_rate=0.96,
    staircase=True)

model.compile(optimizer=tf.keras.optimizers.SGD(learning_rate=lr_schedule),
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(data, labels, epochs=5)
```
[tf.keras.optimizers.schedules.serialize](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/schedules/serialize)The learning rate schedule is also serializable and deserializable using  and tf.keras.optimizers.schedules.deserialize.

#### Args:
- `initial_learning_rate`: A scalar `float32` or `float64` `Tensor` or a Python number. The initial learning rate.
- `decay_steps`: A scalar `int32` or `int64` `Tensor` or a Python number. Must be positive. See the decay computation above.
- `decay_rate`: A scalar `float32` or `float64` `Tensor` or a Python number. The decay rate.
- `staircase`: Boolean. If `True` decay the learning rate at discrete intervals
- `name`: String. Optional `name` of the operation. Defaults to 'ExponentialDecay'.
#### Returns:

A 1-arg callable learning rate schedule that takes the current optimizer step and outputs the decayed learning rate, a scalar Tensor of the same type as initial_learning_rate.
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L142-L155)


```
 __call__(step)
```

Call self as a function.
### from_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60)


```
 from_config(
    cls,
    config
)
```

Instantiates a LearningRateSchedule from its config.
#### Args:
- `config`: Output of `get_config`().
#### Returns:

A LearningRateSchedule instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L157-L164)


```
 get_config()
```