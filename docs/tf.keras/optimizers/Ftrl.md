

## Class  `Ftrl` 
实现ftrl算法的优化器。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)

**别名** : [ `tf.compat.v1.keras.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl), [ `tf.compat.v2.keras.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl), [ `tf.compat.v2.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl), [ `tf.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl)

See Algorithm 1 of this [paper](https://www.eecs.tufts.edu/%7Edsculley/papers/ad-click-prediction.pdf).This version has support for both online L2 (the L2 penalty given in the paperabove) and shrinkage-type L2 (which is the addition of an L2 penalty to theloss function).

#### 初始化：

t=0

n0=0

σ0=0

z0=0
Update (

