

## Class  `InverseTimeDecay` 
使用反时间衰减计划的LearningRateSchedule。

Inherits From: [ `LearningRateSchedule` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)

**别名** : [ `tf.compat.v1.keras.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay), [ `tf.compat.v2.keras.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay), [ `tf.compat.v2.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay), [ `tf.optimizers.schedules.InverseTimeDecay` ](/api_docs/python/tf/keras/optimizers/schedules/InverseTimeDecay)

### 在教程中使用：
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

对初始学习率应用逆时间衰减。

When training a model, it is often recommended to lower the learning rate asthe training progresses. This schedule applies the inverse decay functionto an optimizer step, given a provided initial learning rate.It requires a  `step`  value to compute the decayed learning rate. You canjust pass a TensorFlow variable that you increment at each training step.

The schedule a 1-arg callable that produces a decayed learningrate when passed the current optimizer step. This can be useful for changingthe learning rate value across different invocations of optimizer functions.It is computed as:

```
 def decayed_learning_rate(step):
  return initial_learning_rate / (1 + decay_rate * step / decay_step)
 
```

or, if  `staircase`  is  `True` , as:

```
 def decayed_learning_rate(step):
  return initial_learning_rate / (1 + decay_rate * floor(step / decay_step))
 
```

You can pass this schedule directly into a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)as the learning rate.Example: Fit a Keras model when decaying 1/t with a rate of 0.5:

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

#### 参数：
- **`initial_learning_rate`** : A scalar  `float32`  or  `float64`   `Tensor`  or aPython number.  The initial learning rate.
- **`decay_steps`** : How often to apply decay.
- **`decay_rate`** : A Python number.  The decay rate.
- **`staircase`** : Whether to apply decay in a discrete staircase, as opposed tocontinuous, fashion.
- **`name`** : String.  Optional name of the operation.  Defaults to'InverseTimeDecay'.


#### 返回：
A 1-arg callable learning rate schedule that takes the current optimizerstep and outputs the decayed learning rate, a scalar  `Tensor`  of the sametype as  `initial_learning_rate` .

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L488-L502)

```
 __call__(step)
 
```

作为函数调用self。

###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60)

```
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L504-L511)

```
 get_config()
 
```

