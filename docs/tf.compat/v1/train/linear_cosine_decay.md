将线性余弦衰减应用于学习速率。

```
 tf.compat.v1.train.linear_cosine_decay(    learning_rate,    global_step,    decay_steps,    num_periods=0.5,    alpha=0.0,    beta=0.001,    name=None) 
```

See [Bello et al., ICML2017] Neural Optimizer Search with RL.https://arxiv.org/abs/1709.07417

For the idea of warm starts here controlled by  `num_periods` ,see [Loshchilov &amp; Hutter, ICLR2016] SGDR: Stochastic Gradient Descentwith Warm Restarts. https://arxiv.org/abs/1608.03983

Note that linear cosine decay is more aggressive than cosine decay andlarger initial learning rates can typically be used.

When training a model, it is often recommended to lower the learning rate asthe training progresses.  This function applies a linear cosine decay functionto a provided initial learning rate.  It requires a  `global_step`  value tocompute the decayed learning rate.  You can just pass a TensorFlow variablethat you increment at each training step.

The function returns the decayed learning rate.  It is computed as:

```
 global_step = min(global_step, decay_steps)
linear_decay = (decay_steps - global_step) / decay_steps)
cosine_decay = 0.5 * (
    1 + cos(pi * 2 * num_periods * global_step / decay_steps))
decayed = (alpha + linear_decay) * cosine_decay + beta
decayed_learning_rate = learning_rate * decayed
 
```

#### 示例用法：


```
 decay_steps = 1000
lr_decayed = linear_cosine_decay(learning_rate, global_step, decay_steps)
 
```

#### 参数：
- **`learning_rate`** : A scalar  `float32`  or  `float64`  Tensor or a Python number.The initial learning rate.
- **`global_step`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number. Globalstep to use for the decay computation.
- **`decay_steps`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number. Numberof steps to decay over.
- **`num_periods`** : Number of periods in the cosine part of the decay. Seecomputation above.
- **`alpha`** : See computation above.
- **`beta`** : See computation above.
- **`name`** : String.  Optional name of the operation.  Defaults to'LinearCosineDecay'.


#### 返回：
A scalar  `Tensor`  of the same type as  `learning_rate` .  The decayedlearning rate.

#### 加薪：
- **`ValueError`** : if  `global_step`  is not supplied.


#### 迫切的兼容性
When eager execution is enabled, this function returns a function which inturn returns the decayed learning rate Tensor. This can be useful for changingthe learning rate value across different invocations of optimizer functions.

