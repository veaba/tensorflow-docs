Applies noisy linear cosine decay to the learning rate.

```
 tf.compat.v1.train.noisy_linear_cosine_decay(    learning_rate,    global_step,    decay_steps,    initial_variance=1.0,    variance_decay=0.55,    num_periods=0.5,    alpha=0.0,    beta=0.001,    name=None) 
```

See [Bello et al., ICML2017] Neural Optimizer Search with RL.https://arxiv.org/abs/1709.07417

For the idea of warm starts here controlled by  `num_periods` ,see [Loshchilov &amp; Hutter, ICLR2016] SGDR: Stochastic Gradient Descentwith Warm Restarts. https://arxiv.org/abs/1608.03983

Note that linear cosine decay is more aggressive than cosine decay andlarger initial learning rates can typically be used.

When training a model, it is often recommended to lower the learning rate asthe training progresses.  This function applies a noisy linearcosine decay function to a provided initial learning rate.It requires a  `global_step`  value to compute the decayed learning rate.You can just pass a TensorFlow variable that you increment at eachtraining step.

The function returns the decayed learning rate.  It is computed as:

```
 global_step = min(global_step, decay_steps)
linear_decay = (decay_steps - global_step) / decay_steps)
cosine_decay = 0.5 * (
    1 + cos(pi * 2 * num_periods * global_step / decay_steps))
decayed = (alpha + linear_decay + eps_t) * cosine_decay + beta
decayed_learning_rate = learning_rate * decayed
 
```

where eps_t is 0-centered gaussian noise with varianceinitial_variance / (1 + global_step) ** variance_decay

#### Example usage:


```
 decay_steps = 1000
lr_decayed = noisy_linear_cosine_decay(
  learning_rate, global_step, decay_steps)
 
```

#### Args:
- **`learning_rate`** : A scalar  `float32`  or  `float64`  Tensor or a Python number.The initial learning rate.
- **`global_step`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number. Globalstep to use for the decay computation.
- **`decay_steps`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number. Numberof steps to decay over.
- **`initial_variance`** : initial variance for the noise. See computation above.
- **`variance_decay`** : decay for the noise's variance. See computation above.
- **`num_periods`** : Number of periods in the cosine part of the decay. Seecomputation above.
- **`alpha`** : See computation above.
- **`beta`** : See computation above.
- **`name`** : String.  Optional name of the operation.  Defaults to'NoisyLinearCosineDecay'.


#### Returns:
A scalar  `Tensor`  of the same type as  `learning_rate` .  The decayedlearning rate.

#### Raises:
- **`ValueError`** : if  `global_step`  is not supplied.


#### Eager Compatibility
When eager execution is enabled, this function returns a function which inturn returns the decayed learning rate Tensor. This can be useful for changingthe learning rate value across different invocations of optimizer functions.

