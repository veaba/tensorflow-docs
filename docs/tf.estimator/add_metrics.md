Creates a new `tf.estimator.Estimator` which has given metrics.
### Aliases:
- `tf.compat.v1.estimator.add_metrics`
- `tf.compat.v2.estimator.add_metrics`

```
 tf.estimator.add_metrics(
    estimator,
    metric_fn
)
```
#### Example:

```
   def my_auc(labels, predictions):
    auc_metric = tf.keras.metrics.AUC(name="my_auc")
    auc_metric.update_state(y_true=labels, y_pred=predictions['logistic'])
    return {'auc': auc_metric}

  estimator = tf.estimator.DNNClassifier(...)
  estimator = tf.estimator.add_metrics(estimator, my_auc)
  estimator.train(...)
  estimator.evaluate(...)
```
Example usage of custom metric which uses features:

```
   def my_auc(labels, predictions, features):
    auc_metric = tf.keras.metrics.AUC(name="my_auc")
    auc_metric.update_state(y_true=labels, y_pred=predictions['logistic'],
                            sample_weight=features['weight'])
    return {'auc': auc_metric}

  estimator = tf.estimator.DNNClassifier(...)
  estimator = tf.estimator.add_metrics(estimator, my_auc)
  estimator.train(...)
  estimator.evaluate(...)
```
#### Args:
- `estimator`: A `tf.estimator.Estimator` object.
- `metric_fn`: A function which should obey the following signature:
Args: can only have following four arguments in any order:
pre`dict`ions: Pre`dict`ions `Tensor` or `dict` of `Tensor` created by given `estimator`.
features: Input `dict` of `Tensor` objects created by `input_fn` which is given to `estimator`.evaluate as an argument.
labels: Labels `Tensor` or `dict` of `Tensor` created by `input_fn` which is given to `estimator`.evaluate as an argument.
config: config attribute of the `estimator`.
Returns: Dict of metric results keyed by name. Final metrics are a union of this and `estimator`'s existing metrics. If there is a name conflict between this and `estimator`s existing metrics, this will override the existing one. The values of the `dict` are the results of calling a metric function, namely a `metric_tensor, update_op)` tuple.
- ``A``r``g``s``:`` ``c``a``n`` ``o``n``l``y`` ``h``a``v``e`` ``f``o``l``l``o``w``i``n``g`` ``f``o``u``r`` ``a``r``g``u``m``e``n``t``s`` ``i``n`` ``a``n``y`` ``o``r``d``e``r``:``
- predictions: Predictions `Tensor` or dict of `Tensor` created by given `estimator`.
- features: Input `dict` of `Tensor` objects created by `input_fn` which is given to `estimator.evaluate` as an argument.
- labels: Labels `Tensor` or dict of `Tensor` created by `input_fn` which is given to `estimator.evaluate` as an argument.
- config: config attribute of the `estimator`.
- Returns: Dict of metric results keyed by name. Final metrics are a union of this and `estimator's` existing metrics. If there is a name conflict between this and `estimator`s existing metrics, this will override the existing one. The values of the dict are the results of calling a metric function, namely a `metric_tensor, update_op)` tuple.
#### Returns:
A new `tf.estimator.Estimator` which has a union of original metrics with given ones.
