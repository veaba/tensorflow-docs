

## Class  `LinearCosineDecay` 
A LearningRateSchedule that uses a linear cosine decay schedule.

Inherits From: [ `LearningRateSchedule` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)

**别名** : [ `tf.compat.v1.keras.experimental.LinearCosineDecay` ](/api_docs/python/tf/keras/experimental/LinearCosineDecay), [ `tf.compat.v2.keras.experimental.LinearCosineDecay` ](/api_docs/python/tf/keras/experimental/LinearCosineDecay)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L733-L810)

```
 __init__(
    initial_learning_rate,
    decay_steps,
    num_periods=0.5,
    alpha=0.0,
    beta=0.001,
    name=None
)
 
```

将线性余弦衰减应用于学习速率。

See [Bello et al., ICML2017] Neural Optimizer Search with RL.https://arxiv.org/abs/1709.07417

For the idea of warm starts here controlled by  `num_periods` ,see [Loshchilov &amp; Hutter, ICLR2016] SGDR: Stochastic Gradient Descentwith Warm Restarts. https://arxiv.org/abs/1608.03983

Note that linear cosine decay is more aggressive than cosine decay andlarger initial learning rates can typically be used.

When training a model, it is often recommended to lower the learning rate asthe training progresses. This schedule applies a linear cosine decayfunction to an optimizer step, given a provided initial learning rate.It requires a  `step`  value to compute the decayed learning rate. You canjust pass a TensorFlow variable that you increment at each training step.

The schedule a 1-arg callable that produces a decayed learningrate when passed the current optimizer step. This can be useful for changingthe learning rate value across different invocations of optimizer functions.It is computed as:

```
 def decayed_learning_rate(step):
  step = min(step, decay_steps)
  linear_decay = (decay_steps - step) / decay_steps
  cosine_decay = 0.5 * (
      1 + cos(pi * 2 * num_periods * step / decay_steps))
  decayed = (alpha + linear_decay) * cosine_decay + beta
  return initial_learning_rate * decayed
 
```

#### 示例用法：


```
 decay_steps = 1000
lr_decayed_fn = (
  tf.keras.experimental.LinearCosineDecay(
    initial_learning_rate, decay_steps))
 
```

You can pass this schedule directly into a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)as the learning rate. The learning rate schedule is also serializable anddeserializable using [ `tf.keras.optimizers.schedules.serialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/serialize) and[ `tf.keras.optimizers.schedules.deserialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/deserialize).

#### 参数：
- **`initial_learning_rate`** : A scalar  `float32`  or  `float64`  Tensor or a Pythonnumber. The initial learning rate.
- **`decay_steps`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number.Number of steps to decay over.
- **`num_periods`** : Number of periods in the cosine part of the decay.See computation above.
- **`alpha`** : See computation above.
- **`beta`** : See computation above.
- **`name`** : String.  Optional name of the operation.  Defaults to'LinearCosineDecay'.


#### 返回：
A 1-arg callable learning rate schedule that takes the current optimizerstep and outputs the decayed learning rate, a scalar  `Tensor`  of the sametype as  `initial_learning_rate` .

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L812-L832)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L834-L842)

```
 get_config()
 
```

