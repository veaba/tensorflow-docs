

## Class  `FixedLossScale` 
定值损失量表。

Inherits From: [ `LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale)

**别名** : [ `tf.compat.v1.train.experimental.FixedLossScale` ](/api_docs/python/tf/train/experimental/FixedLossScale), [ `tf.compat.v2.train.experimental.FixedLossScale` ](/api_docs/python/tf/train/experimental/FixedLossScale)

The loss scale is not updated for the lifetime of instances of this class.A given instance of this class always returns the same number when called.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L197-L221)

```
 __init__(loss_scale_value)
 
```

创建固定损耗刻度。

#### 参数：
- **`loss_scale_value`** : A Python float. Its ideal value varies depending onmodels to run. Choosing a too small loss_scale might affect modelquality; a too big loss_scale might cause inf or nan. There is no singleright loss_scale to apply. There is no harm choosing a relatively bignumber as long as no nan or inf is encountered in training.


#### 加薪：
- **`ValueError`** : If loss_scale_value is less than 1.


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L223-L224)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L233-L234)

```
 get_config()
 
```

返回此损失等级的配置。

###  `update` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L226-L228)

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
