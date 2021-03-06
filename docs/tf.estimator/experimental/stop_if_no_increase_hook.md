如果度量在给定的最大步数内没有增加，则创建要停止的挂钩。

**别名** : [ `tf.compat.v1.estimator.experimental.stop_if_no_increase_hook` ](/api_docs/python/tf/estimator/experimental/stop_if_no_increase_hook), [ `tf.compat.v2.estimator.experimental.stop_if_no_increase_hook` ](/api_docs/python/tf/estimator/experimental/stop_if_no_increase_hook)

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

#### 用法示例：


```
 estimator = ...
# Hook to stop training if accuracy does not increase in over 100000 steps.
hook = early_stopping.stop_if_no_increase_hook(estimator, "accuracy", 100000)
train_spec = tf.estimator.TrainSpec(..., hooks=[hook])
tf.estimator.train_and_evaluate(estimator, train_spec, ...)
 
```

Caveat: Current implementation supports early-stopping both training andevaluation in local mode. In distributed mode, training can be stopped butevaluation (where it's a separate job) will indefinitely wait for new modelcheckpoints to evaluate, so you will need other means to detect and stop it.Early-stopping evaluation in distributed mode requires changes in `train_and_evaluate`  API and will be addressed in a future revision.

#### 参数：
- **`estimator`** : A [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) instance.
- **`metric_name`** :  `str` , metric to track. "loss", "accuracy", etc.
- **`max_steps_without_increase`** :  `int` , maximum number of training steps with noincrease in the given metric.
- **`eval_dir`** : If set, directory containing summary files with eval metrics. Bydefault,  `estimator.eval_dir()`  will be used.
- **`min_steps`** :  `int` , stop is never requested if global step is less than thisvalue. Defaults to 0.
- **`run_every_secs`** : If specified, calls  `should_stop_fn`  at an interval of `run_every_secs`  seconds. Defaults to 60 seconds. Either this or `run_every_steps`  must be set.
- **`run_every_steps`** : If specified, calls  `should_stop_fn`  every `run_every_steps`  steps. Either this or  `run_every_secs`  must be set.


#### 返回：
An early-stopping hook of type  `SessionRunHook`  that periodically checksif the given metric shows no increase over given maximum number oftraining steps, and initiates early stopping if true.

