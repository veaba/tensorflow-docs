

## Class  `ReparameterizationType` 
此类的实例表示如何重新参数化采样。

Two static instances exist in the distributions library, signifyingone of two possible properties for samples from a distribution:

 `FULLY_REPARAMETERIZED` : Samples from the distribution are fully  reparameterized, and straight-through gradients are supported.

 `NOT_REPARAMETERIZED` : Samples from the distribution are not fully  reparameterized, and straight-through gradients are either partially  unsupported or are not supported at all. In this case, for purposes of  e.g. RL or variational inference, it is generally safest to wrap the  sample results in a  `stop_gradients`  call and use policy  gradients / surrogate loss instead.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L233-L242)

```
 __init__(rep_type)
 
```

不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed after 2019-01-01.Instructions for updating:The TensorFlow Distributions library has moved to TensorFlow Probability (https://github.com/tensorflow/probability). You should update all references to use [ `tfp.distributions` ](/probability/api_docs/python/tfp/distributions) instead of  `tf.distributions` .


## 方法


###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L247-L259)

```
 __eq__(other)
 
```

Determine if this  `ReparameterizationType`  is equal to another.

Since RepaparameterizationType instances are constant static globalinstances, equality checks if two instances' id() values are equal.

#### 参数：
- **`other`** : Object to compare against.


#### 返回：
 `self is other` .

