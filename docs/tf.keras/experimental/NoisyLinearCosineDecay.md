

## Class  `NoisyLinearCosineDecay` 
A LearningRateSchedule that uses a noisy linear cosine decay schedule.

Inherits From: [ `LearningRateSchedule` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)

**Aliases** : [ `tf.compat.v1.keras.experimental.NoisyLinearCosineDecay` ](/api_docs/python/tf/keras/experimental/NoisyLinearCosineDecay), [ `tf.compat.v2.keras.experimental.NoisyLinearCosineDecay` ](/api_docs/python/tf/keras/experimental/NoisyLinearCosineDecay)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L849-L934)

```
 __init__(
    initial_learning_rate,
    decay_steps,
    initial_variance=1.0,
    variance_decay=0.55,
    num_periods=0.5,
    alpha=0.0,
    beta=0.001,
    name=None
)
 
```

Applies noisy linear cosine decay to the learning rate.

See [Bello et al., ICML2017] Neural Optimizer Search with RL.https://arxiv.org/abs/1709.07417

For the idea of warm starts here controlled by  `num_periods` ,see [Loshchilov &amp; Hutter, ICLR2016] SGDR: Stochastic Gradient Descentwith Warm Restarts. https://arxiv.org/abs/1608.03983

Note that linear cosine decay is more aggressive than cosine decay andlarger initial learning rates can typically be used.

When training a model, it is often recommended to lower the learning rate asthe training progresses. This schedule applies a noisy linear cosine decayfunction to an optimizer step, given a provided initial learning rate.It requires a  `step`  value to compute the decayed learning rate. You canjust pass a TensorFlow variable that you increment at each training step.

The schedule a 1-arg callable that produces a decayed learningrate when passed the current optimizer step. This can be useful for changingthe learning rate value across different invocations of optimizer functions.It is computed as:

```
 def decayed_learning_rate(step):
  step = min(step, decay_steps)
  linear_decay = (decay_steps - step) / decay_steps)
  cosine_decay = 0.5 * (
      1 + cos(pi * 2 * num_periods * step / decay_steps))
  decayed = (alpha + linear_decay + eps_t) * cosine_decay + beta
  return initial_learning_rate * decayed
 
```

where eps_t is 0-centered gaussian noise with varianceinitial_variance / (1 + global_step) ** variance_decay

#### Example usage:


```
 decay_steps = 1000
lr_decayed_fn = (
  tf.keras.experimental.NoisyLinearCosineDecay(
    initial_learning_rate, decay_steps))
 
```

You can pass this schedule directly into a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)as the learning rate. The learning rate schedule is also serializable anddeserializable using [ `tf.keras.optimizers.schedules.serialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/serialize) and[ `tf.keras.optimizers.schedules.deserialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/deserialize).

#### Args:
- **`initial_learning_rate`** : A scalar  `float32`  or  `float64`  Tensor or a Pythonnumber. The initial learning rate.
- **`decay_steps`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number.Number of steps to decay over.
- **`initial_variance`** : initial variance for the noise. See computation above.
- **`variance_decay`** : decay for the noise's variance. See computation above.
- **`num_periods`** : Number of periods in the cosine part of the decay.See computation above.
- **`alpha`** : See computation above.
- **`beta`** : See computation above.
- **`name`** : String.  Optional name of the operation.  Defaults to'NoisyLinearCosineDecay'.


#### Returns:
A 1-arg callable learning rate schedule that takes the current optimizerstep and outputs the decayed learning rate, a scalar  `Tensor`  of the sametype as  `initial_learning_rate` .

## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L936-L966)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L968-L978)

```
 get_config()
 
```

