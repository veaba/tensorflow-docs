

## Class  `MeanIoU` 
Computes the mean Intersection-Over-Union metric.

Inherits From: [ `Metric` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Metric)



### Aliases:

- Class [ `tf.compat.v1.keras.metrics.MeanIoU` ](/api_docs/python/tf/keras/metrics/MeanIoU)

- Class [ `tf.compat.v2.keras.metrics.MeanIoU` ](/api_docs/python/tf/keras/metrics/MeanIoU)

- Class [ `tf.compat.v2.metrics.MeanIoU` ](/api_docs/python/tf/keras/metrics/MeanIoU)

- Class [ `tf.metrics.MeanIoU` ](/api_docs/python/tf/keras/metrics/MeanIoU)

Mean Intersection-Over-Union is a common evaluation metric for semantic image
segmentation, which first computes the IOU for each semantic class and then
computes the average over classes. IOU is defined as follows:
  IOU = true_positive / (true_positive + false_positive + false_negative).
The predictions are accumulated in a confusion matrix, weighted by
 `sample_weight`  and the metric is then calculated from it.

If  `sample_weight`  is  `None` , weights default to 1.
Use  `sample_weight`  of 0 to mask values.



#### Usage:


```
 m = tf.keras.metrics.MeanIoU(num_classes=2)
m.update_state([0, 0, 1, 1], [0, 1, 0, 1])

  # cm = [[1, 1],
          [1, 1]]
  # sum_row = [2, 2], sum_col = [2, 2], true_positives = [1, 1]
  # iou = true_positives / (sum_row + sum_col - true_positives))
  # result = (1 / (2 + 2 - 1) + 1 / (2 + 2 - 1)) / 2 = 0.33
print('Final result: ', m.result().numpy())  # Final result: 0.33
 
```

Usage with tf.keras API:



```
 model = tf.keras.Model(inputs, outputs)
model.compile(
  'sgd',
  loss='mse',
  metrics=[tf.keras.metrics.MeanIoU(num_classes=2)])
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2291-L2310)



```
 __init__(
    num_classes,
    name=None,
    dtype=None
)
 
```

Creates a  `MeanIoU`  instance.



#### Args:

- **`num_classes`** : The possible number of labels the prediction task can have.
This value must be provided, since a confusion matrix of dimension =
[num_classes, num_classes] will be allocated.

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2372-L2373)



```
 reset_states()
 
```

Resets all of the metric state variables.

This function is called between epochs/steps,
when a metric is evaluated during training.



###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2348-L2370)



```
 result()
 
```

Compute the mean intersection-over-union via the confusion matrix.



###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L2312-L2346)



```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

Accumulates the confusion matrix statistics.



#### Args:

- **`y_true`** : The ground truth values.

- **`y_pred`** : The predicted values.

- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a
 `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and must
be broadcastable to  `y_true` .



#### Returns:
Update op.

