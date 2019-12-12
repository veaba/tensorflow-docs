

## Class  `Recall` 
计算与标签相关的预测的调用。

Inherits From: [ `Metric` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Metric)

**别名** : [ `tf.compat.v1.keras.metrics.Recall` ](/api_docs/python/tf/keras/metrics/Recall), [ `tf.compat.v2.keras.metrics.Recall` ](/api_docs/python/tf/keras/metrics/Recall), [ `tf.compat.v2.metrics.Recall` ](/api_docs/python/tf/keras/metrics/Recall), [ `tf.metrics.Recall` ](/api_docs/python/tf/keras/metrics/Recall)

### 在教程中使用：
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)
For example, if  `y_true`  is [0, 1, 1, 1] and  `y_pred`  is [1, 0, 1, 1]then the recall value is 2/(2+1) ie. 0.66. If the weights were specified as[0, 0, 1, 0] then the recall value would be 1.

This metric creates two local variables,  `true_positives`  and `false_negatives` , that are used to compute the recall. This value isultimately returned as  `recall` , an idempotent operation that simply divides `true_positives`  by the sum of  `true_positives`  and  `false_negatives` .

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

If  `top_k`  is set, recall will be computed as how often on average a classamong the labels of a batch entry is in the top-k predictions.

If  `class_id`  is specified, we calculate recall by considering only theentries in the batch for which  `class_id`  is in the label, and computing thefraction of them for which  `class_id`  is above the threshold and/or in thetop-k predictions.

#### 用法：


```
 m = tf.keras.metrics.Recall()
m.update_state([0, 1, 1, 1], [1, 0, 1, 1])
print('Final result: ', m.result().numpy())  # Final result: 0.66
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.Recall()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1270-L1308)

```
 __init__(
    thresholds=None,
    top_k=None,
    class_id=None,
    name=None,
    dtype=None
)
 
```

Creates a  `Recall`  instance.

#### 参数：
- **`thresholds`** : (Optional) A float value or a python list/tuple of floatthreshold values in [0, 1]. A threshold is compared with predictionvalues to determine the truth value of predictions (i.e., above thethreshold is  `true` , below is  `false` ). One metric value is generatedfor each threshold value. If neither thresholds nor top_k are set, thedefault is to calculate recall with  `thresholds=0.5` .
- **`top_k`** : (Optional) Unset by default. An int value specifying the top-kpredictions to consider when calculating recall.
- **`class_id`** : (Optional) Integer class ID for which we want binary metrics.This must be in the half-open interval  `[0, num_classes)` , where `num_classes`  is the last dimension of predictions.
- **`name`** : (Optional) string name of the metric instance.
- **`dtype`** : (Optional) data type of the metric result.


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1341-L1344)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1336-L1339)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1310-L1334)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积真阳性和假阴性统计数据。

#### 参数：
- **`y_true`** : The ground truth values, with the same dimensions as  `y_pred` .Will be cast to  `bool` .
- **`y_pred`** : The predicted values. Each element must be in the range  `[0, 1]` .
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and mustbe broadcastable to  `y_true` .


#### 返回：
更新操作。

