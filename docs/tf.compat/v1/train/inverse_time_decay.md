对初始学习率应用逆时间衰减。

```
 tf.compat.v1.train.inverse_time_decay(
    learning_rate,
    global_step,
    decay_steps,
    decay_rate,
    staircase=False,
    name=None
)
 
```

When training a model, it is often recommended to lower the learning rate asthe training progresses.  This function applies an inverse decay functionto a provided initial learning rate.  It requires an  `global_step`  value tocompute the decayed learning rate.  You can just pass a TensorFlow variablethat you increment at each training step.

The function returns the decayed learning rate.  It is computed as:

```
 decayed_learning_rate = learning_rate / (1 + decay_rate * global_step /
decay_step)
 
```

or, if  `staircase`  is  `True` , as:

```
 decayed_learning_rate = learning_rate / (1 + decay_rate * floor(global_step /
decay_step))
 
```

Example: decay 1/t with a rate of 0.5:

```
 ...
global_step = tf.Variable(0, trainable=False)
learning_rate = 0.1
decay_steps = 1.0
decay_rate = 0.5
learning_rate = tf.compat.v1.train.inverse_time_decay(learning_rate,
global_step,
decay_steps, decay_rate)

# Passing global_step to minimize() will increment it at each step.
learning_step = (
    tf.compat.v1.train.GradientDescentOptimizer(learning_rate)
    .minimize(...my loss..., global_step=global_step)
)
 
```

#### 参数：
- **`learning_rate`** : A scalar  `float32`  or  `float64`   `Tensor`  or a Python number.The initial learning rate.
- **`global_step`** : A Python number. Global step to use for the decay computation.Must not be negative.
- **`decay_steps`** : How often to apply decay.
- **`decay_rate`** : A Python number.  The decay rate.
- **`staircase`** : Whether to apply decay in a discrete staircase, as opposed tocontinuous, fashion.
- **`name`** : String.  Optional name of the operation.  Defaults to'InverseTimeDecay'.


#### 返回：
A scalar  `Tensor`  of the same type as  `learning_rate` .  The decayedlearning rate.

#### 加薪：
- **`ValueError`** : if  `global_step`  is not supplied.


#### 迫切的兼容性
When eager execution is enabled, this function returns a function which inturn returns the decayed learning rate Tensor. This can be useful for changingthe learning rate value across different invocations of optimizer functions.

