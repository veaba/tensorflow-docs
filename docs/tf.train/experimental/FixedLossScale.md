

## Class  `FixedLossScale` 
Loss scale with a fixed value.

Inherits From: [ `LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale)



### Aliases:

- Class [ `tf.compat.v1.train.experimental.FixedLossScale` ](/api_docs/python/tf/train/experimental/FixedLossScale)

- Class [ `tf.compat.v2.train.experimental.FixedLossScale` ](/api_docs/python/tf/train/experimental/FixedLossScale)

The loss scale is not updated for the lifetime of instances of this class.
A given instance of this class always returns the same number when called.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L197-L221)



```
 __init__(loss_scale_value)
 
```

Creates the fixed loss scale.



#### Args:

- **`loss_scale_value`** : A Python float. Its ideal value varies depending on
models to run. Choosing a too small loss_scale might affect model
quality; a too big loss_scale might cause inf or nan. There is no single
right loss_scale to apply. There is no harm choosing a relatively big
number as long as no nan or inf is encountered in training.



#### Raises:

- **`ValueError`** : If loss_scale_value is less than 1.



## Methods


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

Creates the LossScale from its config.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L233-L234)



```
 get_config()
 
```

Returns the config of this loss scale.



###  `update` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L226-L228)



```
 update(grads)
 
```

Updates the value of the loss scale.

The loss scale will be potentially updated, based on the value of  `grads` .
The tensor returned by calling this class is only updated when this function
is evaluated.

In eager mode, this directly updates the loss scale, so that calling
 `__call__`  will return the newly updated loss scale. In graph mode,
this returns an op that, when evaluated, updates the loss scale.

This function also returns a  `should_apply_gradients`  bool. If False,
gradients should not be applied to the variables that step, as nonfinite
gradients were found, and the loss scale has been be updated to reduce the
chance of finding nonfinite gradients in the next step. Some loss scale
classes will always return True, as they cannot adjust themselves in
response to nonfinite gradients.

When a DistributionStrategy is used, this function may only be called in a
cross-replica context.



#### Args:

- **`grads`** : A nested structure of unscaled gradients, each which is the
gradient of the loss with respect to a weight. The gradients should have
already been divided by the loss scale being before passed to this
function. 'None' gradients are accepted, and are ignored.



#### Returns:

- **`update_op`** : In eager mode, None. In graph mode, an op to update the loss
scale.

- **`should_apply_gradients`** : Either a bool or a scalar boolean tensor. If
False, the caller should skip applying  `grads`  to the variables this
step.

