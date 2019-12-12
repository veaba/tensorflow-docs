

## Class  `LearningRateSchedule` 
可串行化的学习速率衰减表。

**别名** : [ `tf.compat.v1.keras.optimizers.schedules.LearningRateSchedule` ](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule), [ `tf.compat.v2.keras.optimizers.schedules.LearningRateSchedule` ](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule), [ `tf.compat.v2.optimizers.schedules.LearningRateSchedule` ](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule), [ `tf.optimizers.schedules.LearningRateSchedule` ](/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)

 `LearningRateSchedule` s can be passed in as the learning rate of optimizers in[ `tf.keras.optimizers` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers). They can be serialized and deserialized using[ `tf.keras.optimizers.schedules.serialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/serialize) and[ `tf.keras.optimizers.schedules.deserialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/deserialize).

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L42-L44)

```
 __call__(step)
 
```

作为函数调用self。

###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60)

```
 @classmethod
from_config(
    cls,
    config
)
 
```

Instantiates a  `LearningRateSchedule`  from its config.

#### 参数：
- **`config`** : Output of  `get_config()` .


#### 返回：
A  `LearningRateSchedule`  instance.

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L46-L48)

```
 get_config()
 
```

