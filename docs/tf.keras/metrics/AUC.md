

## Class  `AUC` 
通过黎曼和计算近似AUC（曲线下面积）。

Inherits From: [ `Metric` ](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics/Metric)

**别名** : [ `tf.compat.v1.keras.metrics.AUC` ](/api_docs/python/tf/keras/metrics/AUC), [ `tf.compat.v2.keras.metrics.AUC` ](/api_docs/python/tf/keras/metrics/AUC), [ `tf.compat.v2.metrics.AUC` ](/api_docs/python/tf/keras/metrics/AUC), [ `tf.metrics.AUC` ](/api_docs/python/tf/keras/metrics/AUC)

### 在教程中使用：
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)
This metric creates four local variables,  `true_positives` ,  `true_negatives` , `false_positives`  and  `false_negatives`  that are used to compute the AUC.To discretize the AUC curve, a linearly spaced set of thresholds is used tocompute pairs of recall and precision values. The area under the ROC-curve istherefore computed using the height of the recall values by the false positiverate, while the area under the PR-curve is the computed using the height ofthe precision values by the recall.

This value is ultimately returned as  `auc` , an idempotent operation thatcomputes the area under a discretized curve of precision versus recall values(computed using the aforementioned variables). The  `num_thresholds`  variablecontrols the degree of discretization with larger numbers of thresholds moreclosely approximating the true AUC. The quality of the approximation may varydramatically depending on  `num_thresholds` . The  `thresholds`  parameter can beused to manually specify thresholds which split the predictions more evenly.

For best results,  `predictions`  should be distributed approximately uniformlyin the range [0, 1] and not peaked around 0 or 1. The quality of the AUCapproximation may be poor if this is not the case. Setting  `summation_method` to 'minoring' or 'majoring' can help quantify the error in the approximationby providing lower or upper bound estimate of the AUC.

If  `sample_weight`  is  `None` , weights default to 1.Use  `sample_weight`  of 0 to mask values.

#### 用法：


```
 m = tf.keras.metrics.AUC(num_thresholds=3)
m.update_state([0, 0, 1, 1], [0, 0.5, 0.3, 0.9])

# threshold values are [0 - 1e-7, 0.5, 1 + 1e-7]
# tp = [2, 1, 0], fp = [2, 0, 0], fn = [0, 1, 2], tn = [0, 2, 2]
# recall = [1, 0.5, 0], fp_rate = [1, 0, 0]
# auc = ((((1+0.5)/2)*(1-0))+ (((0.5+0)/2)*(0-0))) = 0.75

print('Final result: ', m.result().numpy())  # Final result: 0.75
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss='mse', metrics=[tf.keras.metrics.AUC()])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1638-L1727)

```
 __init__(
    num_thresholds=200,
    curve='ROC',
    summation_method='interpolation',
    name=None,
    dtype=None,
    thresholds=None
)
 
```

Creates an  `AUC`  instance.

#### 参数：
- **`num_thresholds`** : (Optional) Defaults to 200. The number of thresholds touse when discretizing the roc curve. Values must be > 1.
- **`curve`** : (Optional) Specifies the name of the curve to be computed, 'ROC'[default] or 'PR' for the Precision-Recall-curve.
- **`summation_method`** : (Optional) Specifies the Riemann summation method used(https://en.wikipedia.org/wiki/Riemann_sum): 'interpolation' [default],applies mid-point summation scheme for  `ROC` . For PR-AUC, interpolates(true/false) positives but not the ratio that is precision (see Davis&amp; Goadrich 2006 for details); 'minoring' that applies left summationfor increasing intervals and right summation for decreasing intervals;'majoring' that does the opposite.
- **`name`** : (Optional) string name of the metric instance.
- **`dtype`** : (Optional) data type of the metric result.
- **`thresholds`** : (Optional) A list of floating point values to use as thethresholds for discretizing the curve. If set, the  `num_thresholds` parameter is ignored. Values should be in [0, 1]. Endpoint thresholdsequal to {-epsilon, 1+epsilon} for a small positive epsilon value willbe automatically included with these to correctly handle predictionsequal to exactly 0 or 1.


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


###  `interpolate_pr_auc` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1749-L1816)

```
 interpolate_pr_auc()
 
```

Interpolation formula inspired by section 4 of Davis &amp; Goadrich 2006.

https://www.biostat.wisc.edu/~page/rocpr.pdf

Note here we derive &amp; use a closed formula not present in the paperas follows:

Precision = TP / (TP + FP) = TP / P

Modeling all of TP (true positive), FP (false positive) and their sumP = TP + FP (predicted positive) as varying linearly within each interval[A, B] between successive thresholds, we get

Precision slope = dTP / dP                  = (TP_B - TP_A) / (P_B - P_A)                  = (TP - TP_A) / (P - P_A)  Precision = (TP_A + slope * (P - P_A)) / P

The area within the interval is (slope / total_pos_weight) times

int_A^B{Precision.dP} = int_A^B{(TP_A + slope * (P - P_A)) * dP / P}  int_A^B{Precision.dP} = int_A^B{slope * dP + intercept * dP / P}

where intercept = TP_A - slope * P_A = TP_B - slope * P_B, resulting in

int_A^B{Precision.dP} = TP_B - TP_A + intercept * log(P_B / P_A)

Bringing back the factor (slope / total_pos_weight) we'd put aside, we get

slope * [dTP + intercept *  log(P_B / P_A)] / total_pos_weight

where dTP == TP_B - TP_A.

Note that when P_A == 0 the above calculation simplifies into

int_A^B{Precision.dTP} = int_A^B{slope * dTP} = slope * (TP_B - TP_A)

which is really equivalent to imputing constant precision throughout thefirst bucket having >0 true positives.

#### 返回：
- **`pr_auc`** : an approximation of the area under the P-R curve.


###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1853-L1855)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1818-L1851)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L1729-L1747)

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
 
```

累积混淆矩阵统计。

#### 参数：
- **`y_true`** : The ground truth values.
- **`y_pred`** : The predicted values.
- **`sample_weight`** : Optional weighting of each example. Defaults to 1. Can be a `Tensor`  whose rank is either 0, or the same rank as  `y_true` , and mustbe broadcastable to  `y_true` .


#### 返回：
更新操作。

