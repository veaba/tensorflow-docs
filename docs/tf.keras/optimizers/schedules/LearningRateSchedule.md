## Class LearningRateSchedule
A serializable learning rate decay schedule.
### Aliases:
- Class `tf.compat.v1.keras.optimizers.schedules.LearningRateSchedule`
- Class `tf.compat.v2.keras.optimizers.schedules.LearningRateSchedule`
- Class `tf.compat.v2.optimizers.schedules.LearningRateSchedule`
- Class `tf.optimizers.schedules.LearningRateSchedule`
`LearningRateSchedule`s can be passed in as the learning rate of optimizers in `tf.keras.optimizers`. They can be serialized and deserialized using `tf.keras.optimizers`.schedules.serialize and `tf.keras.optimizers`.schedules.deserialize.
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
 @classmethod
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
