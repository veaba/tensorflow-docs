Creates hook to stop if the given metric is lower than the threshold.
### Aliases:
- `tf.compat.v1.estimator.experimental.stop_if_lower_hook`
- `tf.compat.v2.estimator.experimental.stop_if_lower_hook`

```
 tf.estimator.experimental.stop_if_lower_hook(
    estimator,
    metric_name,
    threshold,
    eval_dir=None,
    min_steps=0,
    run_every_secs=60,
    run_every_steps=None
)
```
#### Usage example:

```
 estimator = ...
# Hook to stop training if loss becomes lower than 100.
hook = early_stopping.stop_if_lower_hook(estimator, "loss", 100)
train_spec = tf.estimator.TrainSpec(..., hooks=[hook])
tf.estimator.train_and_evaluate(estimator, train_spec, ...)
```
Caveat: Current implementation supports early-stopping both training and evaluation in local mode. In distributed mode, training can be stopped but evaluation (where it's a separate job) will indefinitely wait for new model checkpoints to evaluate, so you will need other means to detect and stop it. Early-stopping evaluation in distributed mode requires changes in `train_and_evaluate` API and will be addressed in a future revision.
#### Args:
- `estimator`: A `tf.estimator.Estimator` instance.
- `metric_name`: `str`, metric to track. "loss", "accuracy", etc.
- `threshold`: Numeric `threshold` for the given metric.
#### Returns:
An early-stopping hook of type `SessionRunHook` that periodically checks if the given metric is lower than specified threshold and initiates early stopping if true.
