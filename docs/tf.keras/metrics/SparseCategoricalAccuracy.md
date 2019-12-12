

## Class  `SparseCategoricalAccuracy` 
计算预测与整数标签匹配的频率。

**别名** : [ `tf.compat.v1.keras.metrics.SparseCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy), [ `tf.compat.v2.keras.metrics.SparseCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy), [ `tf.compat.v2.metrics.SparseCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy), [ `tf.metrics.SparseCategoricalAccuracy` ](/api_docs/python/tf/keras/metrics/SparseCategoricalAccuracy)

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


### 在教程中使用：
- [TensorFlow 2 quickstart for experts](https://tensorflow.google.cn/tutorials/quickstart/advanced)
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Load NumPy data](https://tensorflow.google.cn/tutorials/load_data/numpy)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
For example, if  `y_true`  is [[2], [1]] and  `y_pred`  is[[0.1, 0.9, 0.8], [0.05, 0.95, 0]] then the categorical accuracy is 1/2 or .5.If the weights were specified as [0.7, 0.3] then the categorical accuracywould be .3. You can provide logits of classes as  `y_pred` , since argmax oflogits and probabilities are same.

This metric creates two local variables,  `total`  and  `count`  that are used tocompute the frequency with which  `y_pred`  matches  `y_true` . This frequency isultimately returned as  `sparse categorical accuracy` : an idempotent operationthat simply divides  `total`  by  `count` .

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

#### 用法：


```
 m = tf.keras.metrics.SparseCategoricalAccuracy()
m.update_state([[2], [1]], [[0.1, 0.9, 0.8], [0.05, 0.95, 0]])
print('Final result: ', m.result().numpy())  # Final result: 0.5
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
    'sgd',
    loss='mse',
    metrics=[tf.keras.metrics.SparseCategoricalAccuracy()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L762-L764)

```
 __init__(
    name='sparse_categorical_accuracy',
    dtype=None
)
 
```

Creates a  `MeanMetricWrapper`  instance.

#### 参数：
- **`fn`** : The metric function to wrap, with signature `fn(y_true, y_pred, **kwargs)` .
- **`name`** : (Optional) string name of the metric instance.
- **`dtype`** : (Optional) data type of the metric result.
- **`**kwargs`** : The keyword arguments that are passed on to  `fn` .


##  `__new__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160)

```
 __new__(
    cls,
    *args,
    **kwargs
)
 
```

Create and return a new object.  See help(type) for accurate signature.

## 方法


###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L361-L371)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L558-L583)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积度量统计。

 `y_true`  and  `y_pred`  should have the same shape.

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can bea  `Tensor`  whose rank is either 0, or the same rank as  `y_true` ,and must be broadcastable to  `y_true` .


#### 返回：
更新操作。

