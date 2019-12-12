Creates a new [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) which has given metrics.

**别名** : [ `tf.compat.v1.estimator.add_metrics` ](/api_docs/python/tf/estimator/add_metrics), [ `tf.compat.v2.estimator.add_metrics` ](/api_docs/python/tf/estimator/add_metrics)

```
 tf.estimator.add_metrics(
    estimator,
    metric_fn
)
 
```

#### 示例：


```
  )
    auc_metric.update_state(y_true=labels, y_pred=predictions['logistic'])
    return {'auc': auc_metric}

  estimator = tf.estimator.DNNClassifier(...)
  estimator = tf.estimator.add_metrics(estimator, my_auc)
  estimator.train(...)
  estimator.evaluate(...)
 
```

使用特性的自定义度量的示例用法：

```
  )
    auc_metric.update_state(y_true=labels, y_pred=predictions['logistic'],
                            sample_weight=features['weight'])
    return {'auc': auc_metric}

  estimator = tf.estimator.DNNClassifier(...)
  estimator = tf.estimator.add_metrics(estimator, my_auc)
  estimator.train(...)
  estimator.evaluate(...)
 
```

#### 参数：
- **`estimator`** : A [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) object.
- **`metric_fn`** : A function which should obey the following signature:
    - Args: can only have following four arguments in any order:
    - predictions: Predictions  `Tensor`  or dict of  `Tensor`  created by given `estimator` .
    - features: Input  `dict`  of  `Tensor`  objects created by  `input_fn`  whichis given to  `estimator.evaluate`  as an argument.
    - labels:  Labels  `Tensor`  or dict of  `Tensor`  created by  `input_fn` which is given to  `estimator.evaluate`  as an argument.
    - config: config attribute of the  `estimator` .
    - Returns:Dict of metric results keyed by name. Final metrics are a union of thisand  `estimator's`  existing metrics. If there is a name conflict betweenthis and  `estimator` s existing metrics, this will override the existingone. The values of the dict are the results of calling a metricfunction, namely a  `(metric_tensor, update_op)`  tuple.


#### 返回：
A new [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) which has a union of original metrics with  given ones.

