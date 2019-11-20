[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/experimental/CosineDecayRestarts)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L606-L726)  
  
  
## Class `CosineDecayRestarts`

A LearningRateSchedule that uses a cosine decay schedule with restarts.

Inherits From:
[`LearningRateSchedule`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)

### Aliases:

  * Class [`tf.compat.v1.keras.experimental.CosineDecayRestarts`](/api_docs/python/tf/keras/experimental/CosineDecayRestarts)
  * Class [`tf.compat.v2.keras.experimental.CosineDecayRestarts`](/api_docs/python/tf/keras/experimental/CosineDecayRestarts)

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L609-L675)

    
    
    __init__(
        initial_learning_rate,
        first_decay_steps,
        t_mul=2.0,
        m_mul=1.0,
        alpha=0.0,
        name=None
    )
    

Applies cosine decay with restarts to the learning rate.

See [Loshchilov & Hutter, ICLR2016], SGDR: Stochastic Gradient Descent with
Warm Restarts. https://arxiv.org/abs/1608.03983

When training a model, it is often recommended to lower the learning rate as
the training progresses. This schedule applies a cosine decay function with
restarts to an optimizer step, given a provided initial learning rate. It
requires a `step` value to compute the decayed learning rate. You can just
pass a TensorFlow variable that you increment at each training step.

The schedule a 1-arg callable that produces a decayed learning rate when
passed the current optimizer step. This can be useful for changing the
learning rate value across different invocations of optimizer functions.

The learning rate multiplier first decays from 1 to `alpha` for
`first_decay_steps` steps. Then, a warm restart is performed. Each new warm
restart runs for `t_mul` times more steps and with `m_mul` times smaller
initial learning rate.

#### Example usage:

    
    
    first_decay_steps = 1000
    lr_decayed_fn = (
      tf.keras.experimental.CosineDecayRestarts(
          initial_learning_rate,
          first_decay_steps))
    

You can pass this schedule directly into a
[`tf.keras.optimizers.Optimizer`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)
as the learning rate. The learning rate schedule is also serializable and
deserializable using
[`tf.keras.optimizers.schedules.serialize`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/serialize)
and
[`tf.keras.optimizers.schedules.deserialize`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/deserialize).

#### Args:

  * **`initial_learning_rate`** : A scalar `float32` or `float64` Tensor or a Python number. The initial learning rate.
  * **`first_decay_steps`** : A scalar `int32` or `int64` `Tensor` or a Python number. Number of steps to decay over.
  * **`t_mul`** : A scalar `float32` or `float64` `Tensor` or a Python number. Used to derive the number of iterations in the i-th period
  * **`m_mul`** : A scalar `float32` or `float64` `Tensor` or a Python number. Used to derive the initial learning rate of the i-th period:
  * **`alpha`** : A scalar `float32` or `float64` Tensor or a Python number. Minimum learning rate value as a fraction of the initial_learning_rate.
  * **`name`** : String. Optional name of the operation. Defaults to 'SGDRDecay'.

#### Returns:

A 1-arg callable learning rate schedule that takes the current optimizer step
and outputs the decayed learning rate, a scalar `Tensor` of the same type as
`initial_learning_rate`.

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L677-L716)

    
    
    __call__(step)
    

Call self as a function.

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60)

    
    
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L718-L726)

    
    
    get_config()
    

