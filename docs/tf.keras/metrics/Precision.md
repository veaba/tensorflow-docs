

## Class  `Precision` 
Computes the precision of the predictions with respect to the labels.

Inherits From: [ `Metric` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Metric)

**Aliases** : [ `tf.compat.v1.keras.metrics.Precision` ](/api_docs/python/tf/keras/metrics/Precision), [ `tf.compat.v2.keras.metrics.Precision` ](/api_docs/python/tf/keras/metrics/Precision), [ `tf.compat.v2.metrics.Precision` ](/api_docs/python/tf/keras/metrics/Precision), [ `tf.metrics.Precision` ](/api_docs/python/tf/keras/metrics/Precision)

### Used in the tutorials:
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)
For example, if  `y_true`  is [0, 1, 1, 1] and  `y_pred`  is [1, 0, 1, 1]then the precision value is 2/(2+1) ie. 0.66. If the weights were specified as[0, 0, 1, 0] then the precision value would be 1.

The metric creates two local variables,  `true_positives`  and  `false_positives` that are used to compute the precision. This value is ultimately returned as `precision` , an idempotent operation that simply divides  `true_positives` by the sum of  `true_positives`  and  `false_positives` .

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

If  `top_k`  is set, we'll calculate precision as how often on average a classamong the top-k classes with the highest predicted values of a batch entry iscorrect and can be found in the label for that entry.

If  `class_id`  is specified, we calculate precision by considering only theentries in the batch for which  `class_id`  is above the threshold and/or in thetop-k highest predictions, and computing the fraction of them for which `class_id`  is indeed a correct label.

#### Usage:


```
 m = tf.keras.metrics.Precision()
m.update_state([0, 1, 1, 1], [1, 0, 1, 1])
print('Final result: ', m.result().numpy())  # Final result: 0.66
 
```

Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.Precision()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1144-L1182)

```
 __init__(
    thresholds=None,
    top_k=None,
    class_id=None,
    name=None,
    dtype=None
)
 
```

Creates a  `Precision`  instance.

#### Args:
- **`thresholds`** : (Optional) A float value or a python list/tuple of floatthreshold values in [0, 1]. A threshold is compared with predictionvalues to determine the truth value of predictions (i.e., above thethreshold is  `true` , below is  `false` ). One metric value is generatedfor each threshold value. If neither thresholds nor top_k are set, thedefault is to calculate precision with  `thresholds=0.5` .
- **`top_k`** : (Optional) Unset by default. An int value specifying the top-kpredictions to consider when calculating precision.
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

## Methods


###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1215-L1218)

```
 reset_states()
 
```

Resets all of the metric state variables.

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1210-L1213)

```
 result()
 
```

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1184-L1208)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

Accumulates true positive and false positive statistics.

#### Args:
- **`y_true`** : The ground truth values, with the same dimensions as  `y_pred` .Will be cast to  `bool` .
- **`y_pred`** : The predicted values. Each element must be in the range  `[0, 1]` .
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and mustbe broadcastable to  `y_true` .


#### Returns:
Update op.

