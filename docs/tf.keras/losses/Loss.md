

## Class  `Loss` 
Loss base class.

**Aliases** : [ `tf.compat.v1.keras.losses.Loss` ](/api_docs/python/tf/keras/losses/Loss), [ `tf.compat.v2.keras.losses.Loss` ](/api_docs/python/tf/keras/losses/Loss), [ `tf.compat.v2.losses.Loss` ](/api_docs/python/tf/keras/losses/Loss), [ `tf.losses.Loss` ](/api_docs/python/tf/keras/losses/Loss)

To be implemented by subclasses:

-  `call()` : Contains the logic for loss calculation using  `y_true` ,  `y_pred` .
Example subclass implementation:

```
 class MeanSquaredError(Loss):
  def call(self, y_true, y_pred):
    y_pred = ops.convert_to_tensor(y_pred)
    y_true = math_ops.cast(y_true, y_pred.dtype)
    return K.mean(math_ops.square(y_pred - y_true), axis=-1)
 
```

When used with [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in training loopssuch as [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)  `compile`  and  `fit` , please use 'SUM' or 'NONE' reductiontypes, and reduce losses explicitly in your training loop. Using 'AUTO' or'SUM_OVER_BATCH_SIZE' will raise an error.

Please seehttps://www.tensorflow.org/alpha/tutorials/distribute/training_loops for moredetails on this.

You can implement 'SUM_OVER_BATCH_SIZE' using global batch size like:

```
 with strategy.scope():
  loss_obj = tf.keras.losses.CategoricalCrossentropy(
      reduction=tf.keras.losses.Reduction.NONE)
  ....
  loss = (tf.reduce_sum(loss_obj(labels, predictions)) *
          (1. / global_batch_size))
 
```

#### Args:
- **`reduction`** : (Optional) Type of [ `tf.keras.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) to apply to loss.Default value is  `AUTO` .  `AUTO`  indicates that the reduction option willbe determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE` .When used with [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in trainingloops such as [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)  `compile`  and  `fit` , using  `AUTO`  or `SUM_OVER_BATCH_SIZE`  will raise an error. Please seehttps://www.tensorflow.org/alpha/tutorials/distribute/training_loopsfor more details on this.
- **`name`** : Optional name for the op.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L91-L94)

```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L96-L128)

```
 __call__(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

Invokes the  `Loss`  instance.

#### Args:
- **`y_true`** : Ground truth values. shape =  `[batch_size, d0, .. dN]` 
- **`y_pred`** : The predicted values. shape =  `[batch_size, d0, .. dN]` 
- **`sample_weight`** : Optional  `sample_weight`  acts as acoefficient for the loss. If a scalar is provided, then the loss issimply scaled by the given value. If  `sample_weight`  is a tensor of size `[batch_size]` , then the total loss for each sample of the batch isrescaled by the corresponding element in the  `sample_weight`  vector. Ifthe shape of  `sample_weight`  is  `[batch_size, d0, .. dN-1]`  (or can bebroadcasted to this shape), then each loss element of  `y_pred`  is scaledby the corresponding value of  `sample_weight` . (Note on `dN-1` : all lossfunctions reduce by 1 dimension, usually axis=-1.)


#### Returns:
Weighted loss float  `Tensor` . If  `reduction`  is  `NONE` , this has  shape  `[batch_size, d0, .. dN-1]` ; otherwise, it is scalar. (Note  `dN-1`   because all loss functions reduce by 1 dimension, usually axis=-1.)

#### Raises:
- **`ValueError`** : If the shape of  `sample_weight`  is invalid.


###  `call` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L145-L154)

```
 call(
    y_true,
    y_pred
)
 
```

Invokes the  `Loss`  instance.

#### Args:
- **`y_true`** : Ground truth values, with the same shape as 'y_pred'.
- **`y_pred`** : The predicted values.


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140)

```
 @classmethod
from_config(
    cls,
    config
)
 
```

Instantiates a  `Loss`  from its config (output of  `get_config()` ).

#### Args:
- **`config`** : Output of  `get_config()` .


#### Returns:
A  `Loss`  instance.

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L142-L143)

```
 get_config()
 
```

