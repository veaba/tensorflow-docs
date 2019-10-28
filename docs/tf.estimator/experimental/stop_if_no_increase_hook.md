Creates hook to stop if metric does not increase within given max steps.
### Aliases:
- `tf.compat.v1.estimator.experimental.stop_if_no_increase_hook`
- `tf.compat.v2.estimator.experimental.stop_if_no_increase_hook`

```
 tf.estimator.experimental.stop_if_no_increase_hook(
    estimator,
    metric_name,
    max_steps_without_increase,
    eval_dir=None,
    min_steps=0,
    run_every_secs=60,
    run_every_steps=None
)
```
#### Usage example:

```
 estimator = ...
# Hook to stop training if accuracy does not increase in over 100000 steps.
hook = early_stopping.stop_if_no_increase_hook(estimator, "accuracy", 100000)
train_spec = tf.estimator.TrainSpec(..., hooks=[hook])
tf.estimator.train_and_evaluate(estimator, train_spec, ...)
```
Caveat: Current implementation supports early-stopping both training and evaluation in local mode. In distributed mode, training can be stopped but evaluation (where it's a separate job) will indefinitely wait for new model checkpoints to evaluate, so you will need other means to detect and stop it. Early-stopping evaluation in distributed mode requires changes in `train_and_evaluate` API and will be addressed in a future revision.
#### Args:
- `estimator`: A `tf.estimator.Estimator` instance.
- `metric_name`: `str`, metric to track. "loss", "accuracy", etc.
- `max_steps_without_increase`: `int`, maximum number of training steps with no increase in the given metric.
#### Returns:
An early-stopping hook of type `SessionRunHook` that periodically checks if the given metric shows no increase over given maximum number of training steps, and initiates early stopping if true.
