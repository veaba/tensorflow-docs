对学习率应用余弦衰减。

```
 tf.compat.v1.train.cosine_decay(    learning_rate,    global_step,    decay_steps,    alpha=0.0,    name=None) 
```

See [Loshchilov &amp; Hutter, ICLR2016], SGDR: Stochastic Gradient Descentwith Warm Restarts. https://arxiv.org/abs/1608.03983

When training a model, it is often recommended to lower the learning rate asthe training progresses.  This function applies a cosine decay functionto a provided initial learning rate.  It requires a  `global_step`  value tocompute the decayed learning rate.  You can just pass a TensorFlow variablethat you increment at each training step.

The function returns the decayed learning rate.  It is computed as:

```
 global_step = min(global_step, decay_steps)
cosine_decay = 0.5 * (1 + cos(pi * global_step / decay_steps))
decayed = (1 - alpha) * cosine_decay + alpha
decayed_learning_rate = learning_rate * decayed
 
```

#### 示例用法：


```
 decay_steps = 1000
lr_decayed = cosine_decay(learning_rate, global_step, decay_steps)
 
```

#### 参数：
- **`learning_rate`** : A scalar  `float32`  or  `float64`  Tensor or a Python number.The initial learning rate.
- **`global_step`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number. Globalstep to use for the decay computation.
- **`decay_steps`** : A scalar  `int32`  or  `int64`   `Tensor`  or a Python number. Numberof steps to decay over.
- **`alpha`** : A scalar  `float32`  or  `float64`  Tensor or a Python number. Minimumlearning rate value as a fraction of learning_rate.
- **`name`** : String. Optional name of the operation.  Defaults to 'CosineDecay'.


#### 返回：
A scalar  `Tensor`  of the same type as  `learning_rate` .  The decayedlearning rate.

#### 加薪：
- **`ValueError`** : if  `global_step`  is not supplied.


#### 迫切的兼容性
When eager execution is enabled, this function returns a function which inturn returns the decayed learning rate Tensor. This can be useful for changingthe learning rate value across different invocations of optimizer functions.

