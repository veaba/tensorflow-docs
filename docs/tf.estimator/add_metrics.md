[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/add_metrics) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/extenders.py)  
---|---  
  
Creates a new
[`tf.estimator.Estimator`](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator)
which has given metrics.

### Aliases:

  * [`tf.compat.v1.estimator.add_metrics`](/api_docs/python/tf/estimator/add_metrics)
  * [`tf.compat.v2.estimator.add_metrics`](/api_docs/python/tf/estimator/add_metrics)

    
    
    tf.estimator.add_metrics(
        estimator,
        metric_fn
    )
    

#### Example:

    
    
      def my_auc(labels, predictions):
        auc_metric = tf.keras.metrics.AUC(name="my_auc")
        auc_metric.update_state(y_true=labels, y_pred=predictions['logistic'])
        return {'auc': auc_metric}
    
      estimator = tf.estimator.DNNClassifier(...)
      estimator = tf.estimator.add_metrics(estimator, my_auc)
      estimator.train(...)
      estimator.evaluate(...)
    

Example usage of custom metric which uses features:

    
    
      def my_auc(labels, predictions, features):
        auc_metric = tf.keras.metrics.AUC(name="my_auc")
        auc_metric.update_state(y_true=labels, y_pred=predictions['logistic'],
                                sample_weight=features['weight'])
        return {'auc': auc_metric}
    
      estimator = tf.estimator.DNNClassifier(...)
      estimator = tf.estimator.add_metrics(estimator, my_auc)
      estimator.train(...)
      estimator.evaluate(...)
    

#### Args:

  * **`estimator`** : A [`tf.estimator.Estimator`](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) object.
  * **`metric_fn`** : A function which should obey the following signature: 
    * Args: can only have following four arguments in any order:
    * predictions: Predictions `Tensor` or dict of `Tensor` created by given `estimator`.
    * features: Input `dict` of `Tensor` objects created by `input_fn` which is given to `estimator.evaluate` as an argument.
    * labels: Labels `Tensor` or dict of `Tensor` created by `input_fn` which is given to `estimator.evaluate` as an argument.
    * config: config attribute of the `estimator`.
    * Returns: Dict of metric results keyed by name. Final metrics are a union of this and `estimator's` existing metrics. If there is a name conflict between this and `estimator`s existing metrics, this will override the existing one. The values of the dict are the results of calling a metric function, namely a `(metric_tensor, update_op)` tuple.

#### Returns:

A new
[`tf.estimator.Estimator`](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator)
which has a union of original metrics with given ones.

