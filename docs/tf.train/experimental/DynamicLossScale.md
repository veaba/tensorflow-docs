

## Class  `DynamicLossScale` 
动态调整自身的损耗量表。

Inherits From: [ `LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale)

**别名** : [ `tf.compat.v1.train.experimental.DynamicLossScale` ](/api_docs/python/tf/train/experimental/DynamicLossScale), [ `tf.compat.v2.train.experimental.DynamicLossScale` ](/api_docs/python/tf/train/experimental/DynamicLossScale)

Dynamic loss scaling works by adjusting the loss scale as training progresses.The goal is to keep the loss scale as high as possible without overflowing thegradients. As long as the gradients do not overflow, raising the loss scalenever hurts.

The algorithm starts by setting the loss scale to an initial value. Every Nsteps that the gradients are finite, the loss scale is increased by somefactor. However, if a NaN or Inf gradient is found, the gradients for thatstep are not applied, and the loss scale is decreased by the factor. Thisprocess tends to keep the loss scale as high as possible without gradientsoverflowing.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L286-L316)

```
 __init__(
    initial_loss_scale=(2 ** 15),
    increment_period=2000,
    multiplier=2.0
)
 
```

创建动态损耗刻度。

#### 参数：
- **`initial_loss_scale`** : A Python float.  The loss scale to use at thebeginning. It's better to start this at a very high number, because aloss scale that is too high gets lowered far more quickly than a lossscale that is too low gets raised. The default is 2 ** 15, which isapproximately half the maximum float16 value.
- **`increment_period`** : Increases loss scale every  `increment_period` consecutive steps that finite gradients are encountered. If a nonfinitegradient is encountered, the count is reset back to zero.
- **`multiplier`** : The multiplier to use when increasing or decreasing the lossscale.


## 属性


###  `increment_period` 


###  `initial_loss_scale` 


###  `multiplier` 


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L330-L331)

```
 __call__()
 
```

Returns the current loss scale as a scalar  `float32`  tensor.

###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L179-L182)

```
 from_config(
    cls,
    config
)
 
```

从其配置创建losscale。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L393-L398)

```
 get_config()
 
```

返回此损失等级的配置。

###  `update` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L333-L380)

```
 update(grads)
 
```

根据当前步骤中的梯度是否有限来更新损失比例。

