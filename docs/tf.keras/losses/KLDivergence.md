

## Class  `KLDivergence` 
Computes Kullback-Leibler divergence loss between  `y_true`  and  `y_pred` .

**别名** : [ `tf.compat.v1.keras.losses.KLDivergence` ](/api_docs/python/tf/keras/losses/KLDivergence), [ `tf.compat.v2.keras.losses.KLDivergence` ](/api_docs/python/tf/keras/losses/KLDivergence), [ `tf.compat.v2.losses.KLDivergence` ](/api_docs/python/tf/keras/losses/KLDivergence), [ `tf.losses.KLDivergence` ](/api_docs/python/tf/keras/losses/KLDivergence)

 `loss = y_true * log(y_true / y_pred)` 

See: https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence

#### 用法：


```
 k = tf.keras.losses.KLDivergence()
loss = k([.4, .9, .2], [.5, .8, .12])
print('Loss: ', loss.numpy())  # Loss: 0.11891246
 
```

Usage with the  `compile`  API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.KLDivergence())
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L705-L709)

```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name='kullback_leibler_divergence'
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

