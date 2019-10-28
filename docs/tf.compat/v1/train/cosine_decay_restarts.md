Applies cosine decay with restarts to the learning rate.

```
 tf.compat.v1.train.cosine_decay_restarts(
    learning_rate,
    global_step,
    first_decay_steps,
    t_mul=2.0,
    m_mul=1.0,
    alpha=0.0,
    name=None
)
```
See [Loshchilov & Hutter, ICLR2016], SGDR: Stochastic Gradient Descent with Warm Restarts. https://arxiv.org/abs/1608.03983
When training a model, it is often recommended to lower the learning rate as the training progresses. This function applies a cosine decay function with restarts to a provided initial learning rate. It requires a `global_step` value to compute the decayed learning rate. You can just pass a TensorFlow variable that you increment at each training step.
The function returns the decayed learning rate while taking into account possible warm restarts. The learning rate multiplier first decays from 1 to `alpha` for `first_decay_steps` steps. Then, a warm restart is performed. Each new warm restart runs for `t_mul` times more steps and with `m_mul` times smaller initial learning rate.
#### Example usage:

```
 first_decay_steps = 1000
lr_decayed = cosine_decay_restarts(learning_rate, global_step,
                                   first_decay_steps)
```
#### Args:
- `learning_rate`: A scalar `float32` or `float64` Tensor or a Python number. The initial learning rate.
- `global_step`: A scalar `int32` or `int64` `Tensor` or a Python number. Global step to use for the decay computation.
- `first_decay_steps`: A scalar `int32` or `int64` `Tensor` or a Python number. Number of steps to decay over.
- `t_mul`: A scalar `float32` or `float64` `Tensor` or a Python number. Used to derive the number of iterations in the i-th period
- `m_mul`: A scalar `float32` or `float64` `Tensor` or a Python number. Used to derive the initial learning rate of the i-th period:
- `alpha`: A scalar `float32` or `float64` Tensor or a Python number. Minimum learning rate value as a fraction of the learning_rate.
- `name`: String. Optional `name` of the operation. Defaults to 'SGDRDecay'.
#### Returns:
A scalar `Tensor` of the same type as `learning_rate`. The decayed learning rate.
#### Raises:
- `ValueError`: if `global_step` is not supplied.
#### Eager Compatibility
When eager execution is enabled, this function returns a function which in turn returns the decayed learning rate Tensor. This can be useful for changing the learning rate value across different invocations of optimizer functions.
