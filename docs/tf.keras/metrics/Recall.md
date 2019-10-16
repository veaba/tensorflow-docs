## Class Recall

Computes the recall of the predictions with respect to the labels.
[Metric](https://www.tensorflow.org/api_docs/python/tf/keras/metrics/Metric)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.metrics.Recall`
- Class `tf.compat.v2.keras.metrics.Recall`
- Class `tf.compat.v2.metrics.Recall`
- Class `tf.metrics.Recall`
### Used in the tutorials:
- ``C``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``o``n`` ``i``m``b``a``l``a``n``c``e``d`` ``d``a``t``a``

For example, if y_true is [0, 1, 1, 1] and y_pred is [1, 0, 1, 1] then the recall value is 2/(2+1) ie. 0.66. If the weights were specified as [0, 0, 1, 0] then the recall value would be 1.

This metric creates two local variables, true_positives and false_negatives, that are used to compute the recall. This value is ultimately returned as recall, an idempotent operation that simply divides true_positives by the sum of true_positives and false_negatives.

If sample_weight is None, weights default to 1. Use sample_weight of 0 to mask values.

If top_k is set, recall will be computed as how often on average a class among the labels of a batch entry is in the top-k predictions.

If class_id is specified, we calculate recall by considering only the entries in the batch for which class_id is in the label, and computing the fraction of them for which class_id is above the threshold and/or in the top-k predictions.
#### Usage:

```
 m = tf.keras.metrics.Recall()
m.update_state([0, 1, 1, 1], [1, 0, 1, 1])
print('Final result: ', m.result().numpy())  # Final result: 0.66
```

Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.Recall()])
```
## __init__
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

Creates a Recall instance.
#### Args:
- `thresholds`: (Optional) A float value or a python list/tuple of float threshold values in [0, 1]. A threshold is compared with prediction values to determine the truth value of predictions (i.e., above the threshold is `true`, below is `false`). One metric value is generated for each threshold value. If neither `thresholds` nor top_k are set, the default is to calculate recall with `thresholds`=0.5.
- `top_k`: (Optional) Unset by default. An int value specifying the top-k predictions to consider when calculating recall.
## __new__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160)


```
 __new__(
    cls,
    *args,
    **kwargs
)
```

Create and return a new object. See help(type) for accurate signature.
## Methods
### reset_states
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1341-L1344)


```
 reset_states()
```

Resets all of the metric state variables.

This function is called between epochs/steps, when a metric is evaluated during training.
### result
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1336-L1339)


```
 result()
```

Computes and returns the metric value tensor.

Result computation is an idempotent operation that simply calculates the metric value using the state variables.
### update_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1310-L1334)


```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
```

Accumulates true positive and false negative statistics.
#### Args:
- `y_true`: The ground truth values, with the same dimensions as `y_pred`. Will be cast to `bool`.
- `y_pred`:` `The` `predicted` `values.` `Each` `element` `must` `be` `in` `the` `range` `[`0``,`` ``1`].
- `sample_weight`:` `Optional` `weighting` `of` `each` `example.` `Defaults` `to` ``1`.` `Can` `be` `a` ``Tensor`` `whose` `rank` `is` `either` ``0``,`` `or` `the` `same` `rank` `as` ``y_true``,`` `and` `must` `be` `broadcastable` `to` ``y_true`.
#### Returns:

Update op.
