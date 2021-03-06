

## Class  `LossScale` 
损失等级基类。

**别名** : [ `tf.compat.v1.train.experimental.LossScale` ](/api_docs/python/tf/train/experimental/LossScale), [ `tf.compat.v2.train.experimental.LossScale` ](/api_docs/python/tf/train/experimental/LossScale)

Loss scaling is a process that multiplies the loss by a multiplier called theloss scale, and divides each gradient by the same multiplier. The pseudocodefor this process is:

```
 loss = ...
loss *= loss_scale
grads = gradients(loss, vars)
grads /= loss_scale
 
```

Mathematically, loss scaling has no effect, but can help avoid numericalunderflow in intermediate gradients when float16 tensors are used for mixedprecision training. By multiplying the loss, each intermediate gradient willhave the same multiplier applied.

Instances of this class represent a loss scale. Calling instances of thisclass returns the loss scale as a scalar float32 tensor, while method `update()`  updates the loss scale depending on the values of the gradients.Optimizers use instances of this class to scale loss and gradients.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L65-L67)

```
 __init__()
 
```

初始化损失等级。

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L69-L72)

```
 __call__()
 
```

Returns the current loss scale as a scalar  `float32`  tensor.

###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L179-L182)

```
 @classmethod
from_config(
    cls,
    config
)
 
```

从其配置创建losscale。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L174-L177)

```
 get_config()
 
```

返回此损失等级的配置。

###  `update` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L74-L109)

```
 update(grads)
 
```

更新损失等级的值。

The loss scale will be potentially updated, based on the value of  `grads` .The tensor returned by calling this class is only updated when this functionis evaluated.

In eager mode, this directly updates the loss scale, so that calling `__call__`  will return the newly updated loss scale. In graph mode,this returns an op that, when evaluated, updates the loss scale.

This function also returns a  `should_apply_gradients`  bool. If False,gradients should not be applied to the variables that step, as nonfinitegradients were found, and the loss scale has been be updated to reduce thechance of finding nonfinite gradients in the next step. Some loss scaleclasses will always return True, as they cannot adjust themselves inresponse to nonfinite gradients.

When a DistributionStrategy is used, this function may only be called in across-replica context.

#### 参数：
- **`grads`** : A nested structure of unscaled gradients, each which is thegradient of the loss with respect to a weight. The gradients should havealready been divided by the loss scale being before passed to thisfunction. 'None' gradients are accepted, and are ignored.


#### 返回：
- **`update_op`** : In eager mode, None. In graph mode, an op to update the lossscale.
- **`should_apply_gradients`** : Either a bool or a scalar boolean tensor. IfFalse, the caller should skip applying  `grads`  to the variables thisstep.
