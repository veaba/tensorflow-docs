[ `tf.distribute.ReduceOp` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) corresponding to the last loss reduction.

```
 tf.compat.v1.distribute.get_loss_reduction()
 
```

This is used to decide whether loss should be scaled in optimizer (used onlyfor estimator + v1 optimizer use case).

#### 返回：
[ `tf.distribute.ReduceOp` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) corresponding to the last loss reduction forestimator and v1 optimizer use case. [ `tf.distribute.ReduceOp.SUM` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM) otherwise.

