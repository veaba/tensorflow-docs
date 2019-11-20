[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L33-L60)  
---|---  
  
## Class `LearningRateSchedule`

A serializable learning rate decay schedule.

### Aliases:

  * Class [`tf.compat.v1.keras.optimizers.schedules.LearningRateSchedule`](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)
  * Class [`tf.compat.v2.keras.optimizers.schedules.LearningRateSchedule`](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)
  * Class [`tf.compat.v2.optimizers.schedules.LearningRateSchedule`](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)
  * Class [`tf.optimizers.schedules.LearningRateSchedule`](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)

`LearningRateSchedule`s can be passed in as the learning rate of optimizers in
[`tf.keras.optimizers`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers).
They can be serialized and deserialized using
[`tf.keras.optimizers.schedules.serialize`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/serialize)
and
[`tf.keras.optimizers.schedules.deserialize`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/deserialize).

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L42-L44)

    
    
    __call__(step)
    

Call self as a function.

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60)

    
    
    @classmethod
    from_config(
        cls,
        config
    )
    

Instantiates a `LearningRateSchedule` from its config.

#### Args:

  * **`config`** : Output of `get_config()`.

#### Returns:

A `LearningRateSchedule` instance.

### `get_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L46-L48)

    
    
    get_config()
    

