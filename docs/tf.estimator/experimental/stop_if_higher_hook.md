[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/experimental/stop_if_higher_hook)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/early_stopping.py)  
---|---  
  
Creates hook to stop if the given metric is higher than the threshold.

### Aliases:

  * [`tf.compat.v1.estimator.experimental.stop_if_higher_hook`](/api_docs/python/tf/estimator/experimental/stop_if_higher_hook)
  * [`tf.compat.v2.estimator.experimental.stop_if_higher_hook`](/api_docs/python/tf/estimator/experimental/stop_if_higher_hook)

    
    
    tf.estimator.experimental.stop_if_higher_hook(
        estimator,
        metric_name,
        threshold,
        eval_dir=None,
        min_steps=0,
        run_every_secs=60,
        run_every_steps=None
    )
    

#### Usage example:

    
    
    estimator = ...
    # Hook to stop training if accuracy becomes higher than 0.9.
    hook = early_stopping.stop_if_higher_hook(estimator, "accuracy", 0.9)
    train_spec = tf.estimator.TrainSpec(..., hooks=[hook])
    tf.estimator.train_and_evaluate(estimator, train_spec, ...)
    

Caveat: Current implementation supports early-stopping both training and
evaluation in local mode. In distributed mode, training can be stopped but
evaluation (where it's a separate job) will indefinitely wait for new model
checkpoints to evaluate, so you will need other means to detect and stop it.
Early-stopping evaluation in distributed mode requires changes in
`train_and_evaluate` API and will be addressed in a future revision.

#### Args:

  * **`estimator`** : A [`tf.estimator.Estimator`](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) instance.
  * **`metric_name`** : `str`, metric to track. "loss", "accuracy", etc.
  * **`threshold`** : Numeric threshold for the given metric.
  * **`eval_dir`** : If set, directory containing summary files with eval metrics. By default, `estimator.eval_dir()` will be used.
  * **`min_steps`** : `int`, stop is never requested if global step is less than this value. Defaults to 0.
  * **`run_every_secs`** : If specified, calls `should_stop_fn` at an interval of `run_every_secs` seconds. Defaults to 60 seconds. Either this or `run_every_steps` must be set.
  * **`run_every_steps`** : If specified, calls `should_stop_fn` every `run_every_steps` steps. Either this or `run_every_secs` must be set.

#### Returns:

An early-stopping hook of type `SessionRunHook` that periodically checks if
the given metric is higher than specified threshold and initiates early
stopping if true.

