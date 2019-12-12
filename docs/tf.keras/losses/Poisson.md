

## Class  `Poisson` 
Computes the Poisson loss between  `y_true`  and  `y_pred` .

**别名** : [ `tf.compat.v1.keras.losses.Poisson` ](/api_docs/python/tf/keras/losses/Poisson), [ `tf.compat.v2.keras.losses.Poisson` ](/api_docs/python/tf/keras/losses/Poisson), [ `tf.compat.v2.losses.Poisson` ](/api_docs/python/tf/keras/losses/Poisson), [ `tf.losses.Poisson` ](/api_docs/python/tf/keras/losses/Poisson)

 `loss = y_pred - y_true * log(y_pred)` 

#### 用法：


```
 p = tf.keras.losses.Poisson()
loss = p([1., 9., 2.], [4., 8., 12.])
print('Loss: ', loss.numpy())  # Loss: -0.35702705
 
```

Usage with the  `compile`  API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.Poisson())
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L650-L651)

```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name='poisson'
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

Computes the Poisson loss between y_true and y_pred.

**别名** : [ `tf.compat.v1.keras.losses.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.compat.v1.keras.metrics.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.compat.v2.keras.losses.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.compat.v2.keras.metrics.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.compat.v2.losses.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.compat.v2.metrics.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.keras.metrics.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.losses.poisson` ](/api_docs/python/tf/keras/losses/poisson), [ `tf.metrics.poisson` ](/api_docs/python/tf/keras/losses/poisson)

```
 tf.keras.losses.poisson(
    y_true,
    y_pred
)
 
```

The Poisson loss is the mean of the elements of the  `Tensor`  `y_pred - y_true * log(y_pred)` .

#### 用法：


```
 loss = tf.keras.losses.poisson([1.4, 9.3, 2.2], [4.3, 8.2, 12.2])
print('Loss: ', loss.numpy())  # Loss: -0.8045559
 
```

#### 参数：
- **`y_true`** : Tensor of true targets.
- **`y_pred`** : Tensor of predicted targets.


#### 返回：
A  `Tensor`  with the mean Poisson loss.

#### 加薪：
- **`InvalidArgumentError`** : If  `y_true`  and  `y_pred`  have incompatible shapes.
