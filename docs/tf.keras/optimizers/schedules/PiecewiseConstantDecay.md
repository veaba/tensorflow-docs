

## Class  `PiecewiseConstantDecay` 
使用分段常数衰减时间表的LearningRateSchedule。

Inherits From: [ `LearningRateSchedule` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule)

**别名** : [ `tf.compat.v1.keras.optimizers.schedules.PiecewiseConstantDecay` ](/api_docs/python/tf/keras/optimizers/schedules/PiecewiseConstantDecay), [ `tf.compat.v2.keras.optimizers.schedules.PiecewiseConstantDecay` ](/api_docs/python/tf/keras/optimizers/schedules/PiecewiseConstantDecay), [ `tf.compat.v2.optimizers.schedules.PiecewiseConstantDecay` ](/api_docs/python/tf/keras/optimizers/schedules/PiecewiseConstantDecay), [ `tf.optimizers.schedules.PiecewiseConstantDecay` ](/api_docs/python/tf/keras/optimizers/schedules/PiecewiseConstantDecay)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L171-L233)

```
 __init__(
    boundaries,
    values,
    name=None
)
 
```

从边界值和区间值中分段常数。

The function returns a 1-arg callable to compute the piecewise constantwhen passed the current optimizer step. This can be useful for changing thelearning rate value across different invocations of optimizer functions.

Example: use a learning rate that's 1.0 for the first 100001 steps, 0.5  for the next 10000 steps, and 0.1 for any additional steps.

```
 step = tf.Variable(0, trainable=False)
boundaries = [100000, 110000]
values = [1.0, 0.5, 0.1]
learning_rate_fn = keras.optimizers.schedules.PiecewiseConstantDecay(
    boundaries, values)

# Later, whenever we perform an optimization step, we pass in the step.
learning_rate = learning_rate_fn(step)
 
```

You can pass this schedule directly into a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)as the learning rate. The learning rate schedule is also serializable anddeserializable using [ `tf.keras.optimizers.schedules.serialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/serialize) and[ `tf.keras.optimizers.schedules.deserialize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/schedules/deserialize).

#### 参数：
- **`boundaries`** : A list of  `Tensor` s or  `int` s or  `float` s with strictlyincreasing entries, and with all elements having the same type as theoptimizer step.
- **`values`** : A list of  `Tensor` s or  `float` s or  `int` s that specifies thevalues for the intervals defined by  `boundaries` . It should have onemore element than  `boundaries` , and all elements should have the sametype.
- **`name`** : A string. Optional name of the operation. Defaults to'PiecewiseConstant'.


#### 返回：
A 1-arg callable learning rate schedule that takes the current optimizerstep and outputs the decayed learning rate, a scalar  `Tensor`  of the sametype as the boundary tensors.

The output of the 1-arg function that takes the  `step` is  `values[0]`  when  `step <= boundaries[0]` , `values[1]`  when  `step > boundaries[0]`  and  `step <= boundaries[1]` , ...,and values[-1] when  `step > boundaries[-1]` .

#### 加薪：
- **`ValueError`** : if the number of elements in the lists do not match.


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L235-L256)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L258-L263)

```
 get_config()
 
```

