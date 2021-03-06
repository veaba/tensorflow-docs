

## Class  `BinaryCrossentropy` 
Computes the cross-entropy loss between true labels and predicted labels.

**别名** : [ `tf.compat.v1.keras.losses.BinaryCrossentropy` ](/api_docs/python/tf/keras/losses/BinaryCrossentropy), [ `tf.compat.v2.keras.losses.BinaryCrossentropy` ](/api_docs/python/tf/keras/losses/BinaryCrossentropy), [ `tf.compat.v2.losses.BinaryCrossentropy` ](/api_docs/python/tf/keras/losses/BinaryCrossentropy), [ `tf.losses.BinaryCrossentropy` ](/api_docs/python/tf/keras/losses/BinaryCrossentropy)

### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)
Use this cross-entropy loss when there are only two label classes (assumed tobe 0 and 1). For each example, there should be a single floating-point valueper prediction.

In the snippet below, each of the four examples has only a singlefloating-pointing value, and both  `y_pred`  and  `y_true`  have the shape `[batch_size]` .

#### 用法：


```
 bce = tf.keras.losses.BinaryCrossentropy()
loss = bce([0., 0., 1., 1.], [1., 1., 1., 0.])
print('Loss: ', loss.numpy())  # Loss: 11.522857
 
```

Usage with the [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras) API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.BinaryCrossentropy())
 
```

#### 参数：
- **`from_logits`** : Whether to interpret  `y_pred`  as a tensor of[logit](https://en.wikipedia.org/wiki/Logit) values. By default, we assumethat  `y_pred`  contains probabilities (i.e., values in [0, 1]).注意：Using from_logits=True may be more numerically stable.
- **`label_smoothing`** : Float in [0, 1]. When 0, no smoothing occurs. When > 0, wecompute the loss between the predicted labels and a smoothed version ofthe true labels, where the smoothing squeezes the labels towards 0.5.Larger values of  `label_smoothing`  correspond to heavier smoothing.
- **`reduction`** : (Optional) Type of [ `tf.keras.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) to apply to loss.Default value is  `AUTO` .  `AUTO`  indicates that the reduction option willbe determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE` .When used with [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in trainingloops such as [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)  `compile`  and  `fit` , using  `AUTO`  or `SUM_OVER_BATCH_SIZE`  will raise an error. Please seehttps://www.tensorflow.org/alpha/tutorials/distribute/training_loopsfor more details on this.
- **`name`** : (Optional) Name for the op.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L395-L406)

```
 __init__(
    from_logits=False,
    label_smoothing=0,
    reduction=losses_utils.ReductionV2.AUTO,
    name='binary_crossentropy'
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

