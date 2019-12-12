

## Class  `Huber` 
Computes the Huber loss between  `y_true`  and  `y_pred` .

**别名** : [ `tf.compat.v1.keras.losses.Huber` ](/api_docs/python/tf/keras/losses/Huber), [ `tf.compat.v2.keras.losses.Huber` ](/api_docs/python/tf/keras/losses/Huber), [ `tf.compat.v2.losses.Huber` ](/api_docs/python/tf/keras/losses/Huber), [ `tf.losses.Huber` ](/api_docs/python/tf/keras/losses/Huber)

For each value x in  `error = y_true - y_pred` :

```
 loss = 0.5 * x^2                  if |x| <= d
loss = 0.5 * d^2 + d * (|x| - d)  if |x| > d
 
```

where d is  `delta` . See: https://en.wikipedia.org/wiki/Huber_loss

#### 用法：


```
 l = tf.keras.losses.Huber()
loss = l([0., 1., 1.], [1., 0., 1.])
print('Loss: ', loss.numpy())  # Loss: 0.333
 
```

Usage with the  `compile`  API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.Huber())
 
```

#### 参数：
- **`delta`** : A float, the point where the Huber loss function changes from aquadratic to linear.
- **`reduction`** : (Optional) Type of [ `tf.keras.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) to apply to loss.Default value is  `AUTO` .  `AUTO`  indicates that the reduction option willbe determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE` .When used with [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in trainingloops such as [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)  `compile`  and  `fit` , using  `AUTO`  or `SUM_OVER_BATCH_SIZE`  will raise an error. Please seehttps://www.tensorflow.org/alpha/tutorials/distribute/training_loopsfor more details on this.
- **`name`** : Optional name for the op.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L754-L759)

```
 __init__(
    delta=1.0,
    reduction=losses_utils.ReductionV2.AUTO,
    name='huber_loss'
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


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

#### 参数：
- **`y_true`** : Ground truth values. shape =  `[batch_size, d0, .. dN]` 
- **`y_pred`** : The predicted values. shape =  `[batch_size, d0, .. dN]` 
- **`sample_weight`** : Optional  `sample_weight`  acts as acoefficient for the loss. If a scalar is provided, then the loss issimply scaled by the given value. If  `sample_weight`  is a tensor of size `[batch_size]` , then the total loss for each sample of the batch isrescaled by the corresponding element in the  `sample_weight`  vector. Ifthe shape of  `sample_weight`  is  `[batch_size, d0, .. dN-1]`  (or can bebroadcasted to this shape), then each loss element of  `y_pred`  is scaledby the corresponding value of  `sample_weight` . (Note on `dN-1` : all lossfunctions reduce by 1 dimension, usually axis=-1.)


#### 返回：
Weighted loss float  `Tensor` . If  `reduction`  is  `NONE` , this has  shape  `[batch_size, d0, .. dN-1]` ; otherwise, it is scalar. (Note  `dN-1`   because all loss functions reduce by 1 dimension, usually axis=-1.)

#### 加薪：
- **`ValueError`** : If the shape of  `sample_weight`  is invalid.


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140)

```
 from_config(
    cls,
    config
)
 
```

Instantiates a  `Loss`  from its config (output of  `get_config()` ).

#### 参数：
- **`config`** : Output of  `get_config()` .


#### 返回：
A  `Loss`  instance.

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L223-L228)

```
 get_config()
 
```

