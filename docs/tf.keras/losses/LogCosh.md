

## Class  `LogCosh` 
计算预测误差的双曲余弦的对数。

**别名** : [ `tf.compat.v1.keras.losses.LogCosh` ](/api_docs/python/tf/keras/losses/LogCosh), [ `tf.compat.v2.keras.losses.LogCosh` ](/api_docs/python/tf/keras/losses/LogCosh), [ `tf.compat.v2.losses.LogCosh` ](/api_docs/python/tf/keras/losses/LogCosh), [ `tf.losses.LogCosh` ](/api_docs/python/tf/keras/losses/LogCosh)

 `logcosh = log((exp(x) + exp(-x))/2)` ,where x is the error  `y_pred - y_true` .

#### 用法：


```
 l = tf.keras.losses.LogCosh()
loss = l([0., 1., 1.], [1., 0., 1.])
print('Loss: ', loss.numpy())  # Loss: 0.289
 
```

Usage with the  `compile`  API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.LogCosh())
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L677-L678)

```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name='logcosh'
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

Logarithm of the hyperbolic cosine of the prediction error.

**别名** : [ `tf.compat.v1.keras.losses.logcosh` ](/api_docs/python/tf/keras/losses/logcosh), [ `tf.compat.v2.keras.losses.logcosh` ](/api_docs/python/tf/keras/losses/logcosh), [ `tf.compat.v2.losses.logcosh` ](/api_docs/python/tf/keras/losses/logcosh), [ `tf.losses.logcosh` ](/api_docs/python/tf/keras/losses/logcosh)

```
 tf.keras.losses.logcosh(
    y_true,
    y_pred
)
 
```

 `log(cosh(x))`  is approximately equal to  `(x ** 2) / 2`  for small  `x`  andto  `abs(x) - log(2)`  for large  `x` . This means that 'logcosh' works mostlylike the mean squared error, but will not be so strongly affected by theoccasional wildly incorrect prediction.

#### 参数：
- **`y_true`** : tensor of true targets.
- **`y_pred`** : tensor of predicted targets.


#### 返回：
每个样本有一个标量损失项的张量。

