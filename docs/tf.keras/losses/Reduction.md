

## Class  `Reduction` 
Types of loss reduction.



### Aliases:

- Class [ `tf.compat.v2.keras.losses.Reduction` ](/api_docs/python/tf/keras/losses/Reduction)

- Class [ `tf.compat.v2.losses.Reduction` ](/api_docs/python/tf/keras/losses/Reduction)

- Class [ `tf.losses.Reduction` ](/api_docs/python/tf/keras/losses/Reduction)

Contains the following values:


-  `AUTO` : Indicates that the reduction option will be determined by the usage
context. For almost all cases this defaults to  `SUM_OVER_BATCH_SIZE` . When
used with [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in training loops such
as [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)  `compile`  and  `fit` , we expect reduction value to be
 `SUM`  or  `NONE` . Using  `AUTO`  in that case will raise an error.

-  `NONE` : Weighted losses with one dimension reduced (axis=-1, or axis
specified by loss function). When this reduction type used with built-in
Keras training loops like  `fit` / `evaluate` , the unreduced vector loss is
passed to the optimizer but the reported loss will be a scalar value.

-  `SUM` : Scalar sum of weighted losses.

-  `SUM_OVER_BATCH_SIZE` : Scalar  `SUM`  divided by number of elements in losses.
This reduction type is not supported when used with
[ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) outside of built-in training loops like [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)
 `compile` / `fit` .

You can implement 'SUM_OVER_BATCH_SIZE' using global batch size like:




>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `with strategy.scope():<br>&nbsp; loss_obj = tf.keras.losses.CategoricalCrossentropy(<br>&nbsp; &nbsp; &nbsp; reduction=tf.keras.losses.Reduction.NONE)<br>&nbsp; ....<br>&nbsp; loss = tf.reduce_sum(loss_object(labels, predictions)) *<br>&nbsp; &nbsp; &nbsp; (1. / global_batch_size)<br>` </pre></devsite-code>
Please see
   https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for
   more details on this.



## Methods


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



## Class Members

-  `AUTO = 'auto'`  []()

-  `NONE = 'none'`  []()

-  `SUM = 'sum'`  []()

-  `SUM_OVER_BATCH_SIZE = 'sum_over_batch_size'`  []()

