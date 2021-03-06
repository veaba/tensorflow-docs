

## Class  `SparseCategoricalCrossentropy` 
计算标签和预测之间的交叉熵损失。

**别名** : [ `tf.compat.v1.keras.losses.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/losses/SparseCategoricalCrossentropy), [ `tf.compat.v2.keras.losses.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/losses/SparseCategoricalCrossentropy), [ `tf.compat.v2.losses.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/losses/SparseCategoricalCrossentropy), [ `tf.losses.SparseCategoricalCrossentropy` ](/api_docs/python/tf/keras/losses/SparseCategoricalCrossentropy)

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)


### 在教程中使用：
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)
- [Load NumPy data](https://tensorflow.google.cn/tutorials/load_data/numpy)
- [TensorFlow 2 quickstart for experts](https://tensorflow.google.cn/tutorials/quickstart/advanced)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
Use this crossentropy loss function when there are two or more label classes.We expect labels to be provided as integers. If you want to provide labelsusing  `one-hot`  representation, please use  `CategoricalCrossentropy`  loss.There should be  `# classes`  floating point values per feature for  `y_pred` and a single floating point value per feature for  `y_true` .

In the snippet below, there is a single floating point value per example for `y_true`  and  `# classes`  floating pointing values per example for  `y_pred` .The shape of  `y_true`  is  `[batch_size]`  and the shape of  `y_pred`  is `[batch_size, num_classes]` .

#### 用法：


```
 cce = tf.keras.losses.SparseCategoricalCrossentropy()
loss = cce(
  [0, 1, 2],
  [[.9, .05, .05], [.5, .89, .6], [.05, .01, .94]])
print('Loss: ', loss.numpy())  # Loss: 0.3239
 
```

Usage with the  `compile`  API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.SparseCategoricalCrossentropy())
 
```

#### 参数：
- **`from_logits`** : Whether  `y_pred`  is expected to be a logits tensor. By default,we assume that  `y_pred`  encodes a probability distribution.注意：Using from_logits=True may be more numerically stable.
- **`reduction`** : (Optional) Type of [ `tf.keras.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) to apply to loss.Default value is  `AUTO` .  `AUTO`  indicates that the reduction option willbe determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE` .When used with [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in trainingloops such as [ `tf.keras` ](https://tensorflow.google.cn/api_docs/python/tf/keras)  `compile`  and  `fit` , using  `AUTO`  or `SUM_OVER_BATCH_SIZE`  will raise an error. Please seehttps://www.tensorflow.org/alpha/tutorials/distribute/training_loopsfor more details on this.
- **`name`** : Optional name for the op.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L520-L528)

```
 __init__(
    from_logits=False,
    reduction=losses_utils.ReductionV2.AUTO,
    name='sparse_categorical_crossentropy'
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

