## Class LinearCosineDecay
A LearningRateSchedule that uses a linear cosine decay schedule.
Inherits From: `LearningRateSchedule`
### Aliases:
- Class `tf.compat.v1.keras.experimental.LinearCosineDecay`
- Class `tf.compat.v2.keras.experimental.LinearCosineDecay`
## __init__
View source

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
Applies linear cosine decay to the learning rate.
See [Bello et al., ICML2017] Neural Optimizer Search with RL. https://arxiv.org/abs/1709.07417
For the idea of warm starts here controlled by `num_periods`, see [Loshchilov & Hutter, ICLR2016] SGDR: Stochastic Gradient Descent with Warm Restarts. https://arxiv.org/abs/1608.03983
Note that linear cosine decay is more aggressive than cosine decay and larger initial learning rates can typically be used.
When training a model, it is often recommended to lower the learning rate as the training progresses. This schedule applies a linear cosine decay function to an optimizer `step`, given a provided initial learning rate. It requires a `step` value to compute the decayed learning rate. You can just pass a TensorFlow variable that you increment at each training `step`.
The schedule a 1-arg callable that produces a decayed learning rate when passed the current optimizer step. This can be useful for changing the learning rate value across different invocations of optimizer functions. It is computed as:

```
 def decayed_learning_rate(step):
  step = min(step, decay_steps)
  linear_decay = (decay_steps - step) / decay_steps
  cosine_decay = 0.5 * (
      1 + cos(pi * 2 * num_periods * step / decay_steps))
  decayed = (alpha + linear_decay) * cosine_decay + beta
  return initial_learning_rate * decayed
```
#### Example usage:

```
 decay_steps = 1000
lr_decayed_fn = (
  tf.keras.experimental.LinearCosineDecay(
    initial_learning_rate, decay_steps))
```
You can pass this schedule directly into a `tf.keras.optimizers.Optimizer` as the learning rate. The learning rate schedule is also serializable and deserializable using `tf.keras.optimizers.schedules.serialize` and `tf.keras.optimizers.schedules.deserialize`.
#### Args:
- `initial_learning_rate`: A scalar `float32` or `float64` Tensor or a Python number. The initial learning rate.
- `decay_steps`: A scalar `int32` or `int64` `Tensor` or a Python number. Number of steps to decay over.
- `num_periods`: Number of periods in the cosine part of the decay. See computation above.
- `alpha`: See computation above.
- `beta`: See computation above.
- `name`: String. Optional `name` of the operation. Defaults to 'LinearCosineDecay'.
#### Returns:
A 1-arg callable learning rate schedule that takes the current optimizer step and outputs the decayed learning rate, a scalar `Tensor` of the same type as `initial_learning_rate`.
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
