Creates early-stopping hook.



### Aliases:

- [ `tf.compat.v1.estimator.experimental.make_early_stopping_hook` ](/api_docs/python/tf/estimator/experimental/make_early_stopping_hook)

- [ `tf.compat.v2.estimator.experimental.make_early_stopping_hook` ](/api_docs/python/tf/estimator/experimental/make_early_stopping_hook)



```
 tf.estimator.experimental.make_early_stopping_hook(
    estimator,
    should_stop_fn,
    run_every_secs=60,
    run_every_steps=None
)
 
```

Returns a  `SessionRunHook`  that stops training when  `should_stop_fn`  returns
 `True` .



#### Usage example:


```
 estimator = ...
hook = early_stopping.make_early_stopping_hook(
    estimator, should_stop_fn=make_stop_fn(...))
train_spec = tf.estimator.TrainSpec(..., hooks=[hook])
tf.estimator.train_and_evaluate(estimator, train_spec, ...)
 
```

Caveat: Current implementation supports early-stopping both training and
evaluation in local mode. In distributed mode, training can be stopped but
evaluation (where it's a separate job) will indefinitely wait for new model
checkpoints to evaluate, so you will need other means to detect and stop it.
Early-stopping evaluation in distributed mode requires changes in
 `train_and_evaluate`  API and will be addressed in a future revision.



#### Args:

- **`estimator`** : A [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) instance.

- **`should_stop_fn`** :  `callable` , function that takes no arguments and returns a
 `bool` . If the function returns  `True` , stopping will be initiated by the
chief.

- **`run_every_secs`** : If specified, calls  `should_stop_fn`  at an interval of
 `run_every_secs`  seconds. Defaults to 60 seconds. Either this or
 `run_every_steps`  must be set.

- **`run_every_steps`** : If specified, calls  `should_stop_fn`  every
 `run_every_steps`  steps. Either this or  `run_every_secs`  must be set.



#### Returns:
A  `SessionRunHook`  that periodically executes  `should_stop_fn`  and initiates
early stopping if the function returns  `True` .



#### Raises:

- **`TypeError`** : If  `estimator`  is not of type [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator).

- **`ValueError`** : If both  `run_every_secs`  and  `run_every_steps`  are set.

