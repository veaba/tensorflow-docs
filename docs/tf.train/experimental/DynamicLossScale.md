

## Class  `DynamicLossScale` 
Loss scale that dynamically adjusts itself.

Inherits From: [ `LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale)



### Aliases:

- Class [ `tf.compat.v1.train.experimental.DynamicLossScale` ](/api_docs/python/tf/train/experimental/DynamicLossScale)

- Class [ `tf.compat.v2.train.experimental.DynamicLossScale` ](/api_docs/python/tf/train/experimental/DynamicLossScale)

Dynamic loss scaling works by adjusting the loss scale as training progresses.
The goal is to keep the loss scale as high as possible without overflowing the
gradients. As long as the gradients do not overflow, raising the loss scale
never hurts.

The algorithm starts by setting the loss scale to an initial value. Every N
steps that the gradients are finite, the loss scale is increased by some
factor. However, if a NaN or Inf gradient is found, the gradients for that
step are not applied, and the loss scale is decreased by the factor. This
process tends to keep the loss scale as high as possible without gradients
overflowing.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L286-L316)



```
 __init__(
    initial_loss_scale=(2 ** 15),
    increment_period=2000,
    multiplier=2.0
)
 
```

Creates the dynamic loss scale.



#### Args:

- **`initial_loss_scale`** : A Python float.  The loss scale to use at the
beginning. It's better to start this at a very high number, because a
loss scale that is too high gets lowered far more quickly than a loss
scale that is too low gets raised. The default is 2 ** 15, which is
approximately half the maximum float16 value.

- **`increment_period`** : Increases loss scale every  `increment_period` 
consecutive steps that finite gradients are encountered. If a nonfinite
gradient is encountered, the count is reset back to zero.

- **`multiplier`** : The multiplier to use when increasing or decreasing the loss
scale.



## Properties


###  `increment_period` 


###  `initial_loss_scale` 


###  `multiplier` 


## Methods


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

Creates the LossScale from its config.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L393-L398)



```
 get_config()
 
```

Returns the config of this loss scale.



###  `update` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale.py#L333-L380)



```
 update(grads)
 
```

Updates loss scale based on if gradients are finite in current step.

