## Class LearningRateSchedule

A serializable learning rate decay schedule.
### Aliases:
- Class `tf.compat.v1.keras.optimizers.schedules.LearningRateSchedule`
- Class `tf.compat.v2.keras.optimizers.schedules.LearningRateSchedule`
- Class `tf.compat.v2.optimizers.schedules.LearningRateSchedule`
- Class `tf.optimizers.schedules.LearningRateSchedule`
[tf.keras.optimizers](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers)LearningRateSchedules can be passed in as the learning rate of optimizers in . They can be serialized and deserialized using .schedules.serialize and .schedules.deserialize.

## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L42-L44)


```
 __call__(step)
```

Call self as a function.
### from_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60)


```
 @classmethod
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L46-L48)


```
 get_config()
```
