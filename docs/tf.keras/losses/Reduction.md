

## Class  `Reduction` 
减少损失的类型。

**别名** : [ `tf.compat.v2.keras.losses.Reduction` ](/api_docs/python/tf/keras/losses/Reduction), [ `tf.compat.v2.losses.Reduction` ](/api_docs/python/tf/keras/losses/Reduction), [ `tf.losses.Reduction` ](/api_docs/python/tf/keras/losses/Reduction)

包含以下值：

-  `AUTO` : Indicates that the reduction option will be determined by the usagecontext. For almost all cases this defaults to  `SUM_OVER_BATCH_SIZE` . Whenused with [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in training loops suchas [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)  `compile`  and  `fit` , we expect reduction value to be `SUM`  or  `NONE` . Using  `AUTO`  in that case will raise an error.
-  `NONE` : Weighted losses with one dimension reduced (axis=-1, or axisspecified by loss function). When this reduction type used with built-inKeras training loops like  `fit` / `evaluate` , the unreduced vector loss ispassed to the optimizer but the reported loss will be a scalar value.
-  `SUM` : Scalar sum of weighted losses.
-  `SUM_OVER_BATCH_SIZE` : Scalar  `SUM`  divided by number of elements in losses.This reduction type is not supported when used with[ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) outside of built-in training loops like [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras) `compile` / `fit` .

You can implement 'SUM_OVER_BATCH_SIZE' using global batch size like:


```
 with strategy.scope():
  loss_obj = tf.keras.losses.CategoricalCrossentropy(
      reduction=tf.keras.losses.Reduction.NONE)
  ....
  loss = tf.reduce_sum(loss_object(labels, predictions)) *
      (1. / global_batch_size)
 
```

Please see   https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for   more details on this.

## 方法


###  `all` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/loss_reduction.py#L61-L63)

```
 @classmethod
all(cls)
 
```

###  `validate` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/loss_reduction.py#L65-L68)

```
 @classmethod
validate(
    cls,
    key
)
 
```

## Class 成员
-  `AUTO = 'auto'`  
-  `NONE = 'none'`  
-  `SUM = 'sum'`  
-  `SUM_OVER_BATCH_SIZE = 'sum_over_batch_size'`  
