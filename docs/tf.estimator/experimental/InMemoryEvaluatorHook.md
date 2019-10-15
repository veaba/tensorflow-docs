## Class InMemoryEvaluatorHook

Hook to run evaluation in training without a checkpoint.
[SessionRunHook](https://www.tensorflow.org/api_docs/python/tf/estimator/SessionRunHook)Inherits From: 

### Aliases:
- Class `tf.compat.v1.estimator.experimental.InMemoryEvaluatorHook`
- Class `tf.compat.v2.estimator.experimental.InMemoryEvaluatorHook`
#### Example:

```
 def train_input_fn():
  ...
  return train_dataset

def eval_input_fn():
  ...
  return eval_dataset

estimator = tf.estimator.DNNClassifier(...)

evaluator = tf.estimator.experimental.InMemoryEvaluatorHook(
    estimator, eval_input_fn)
estimator.train(train_input_fn, hooks=[evaluator])
```

Current limitations of this approach are:
- ``I``t`` ``d``o``e``s``n``'``t`` ``s``u``p``p``o``r``t`` ``m``u``l``t``i``-``n``o``d``e`` ``d``i``s``t``r``i``b``u``t``e``d`` ``m``o``d``e``.``
- ``I``t`` ``d``o``e``s``n``'``t`` ``s``u``p``p``o``r``t`` ``s``a``v``e``a``b``l``e`` ``o``b``j``e``c``t``s`` ``o``t``h``e``r`` ``t``h``a``n`` ``v``a``r``i``a``b``l``e``s`` ``(``s``u``c``h`` ``a``s`` ``b``o``o``s``t``e``d`` ``t``r``e``e`` ``s``u``p``p``o``r``t``)``
- ``I``t`` ``d``o``e``s``n``'``t`` ``s``u``p``p``o``r``t`` ``c``u``s``t``o``m`` ``s``a``v``e``r`` ``l``o``g``i``c`` ``(``s``u``c``h`` ``a``s`` ``E``x``p``o``n``e``n``t``i``a``l``M``o``v``i``n``g``A``v``e``r``a``g``e`` ``s``u``p``p``o``r``t``)``
## __init__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)


```
 __init__(
    estimator,
    input_fn,
    steps=None,
    hooks=None,
    name=None,
    every_n_iter=100
)
```

Initializes a InMemoryEvaluatorHook.
#### Args:
- `estimator`: A `tf.estimator.Estimator` instance to call evaluate.
- `input_fn`: Equivalent to the `input_fn` arg to `estimator`.evaluate. A function that constructs the input data for evaluation. See Creating input functions for more information. The function should construct and return one of the following:
A 'tf.data.`Dataset`' object: Outputs of `Dataset` object must be a tuple (`features`, `labels`) with same constraints as below.
A tuple (`features`, `labels`): Where `features` is a `Tensor` or a dictionary of string feature name to `Tensor` and `labels` is a `Tensor` or a dictionary of string label name to `Tensor`. Both `features` and `labels` are consumed by `model_fn`. They should satisfy the expectation of `model_fn` from inputs.
- A 'tf.data.`Dataset`' object: Outputs of `Dataset` object must be a tuple (`features`, `labels`) with same constraints as below.
- A tuple (`features`, `labels`): Where `features` is a `Tensor` or a dictionary of string feature name to `Tensor` and `labels` is a `Tensor` or a dictionary of string label name to `Tensor`. Both `features` and `labels` are consumed by `model_fn`. They should satisfy the expectation of `model_fn` from inputs.
- `steps`: Equivalent to the `steps` arg to `estimator`.evaluate. Number of `steps` for which to evaluate model. If `None`, evaluates until `input_fn` raises an end-of-input exception.
- `hooks`: Equivalent to the `hooks` arg to `estimator`.evaluate. List of `SessionRunHook` subclass instances. Used for callbacks inside the evaluation call.
- `name`: Equivalent to the `name` arg to `estimator`.evaluate. Name of the evaluation if user needs to run multiple evaluations on different data sets, such as on training data vs test data. Metrics for different evaluations are saved in separate folders, and appear separately in tensorboard.
- `every_n_iter`: `int`, runs the evaluator once every N training iteration.
#### Raises:
- `ValueError`: if `every_n_iter` is non-positive or it's not a single machine training
## Methods
### after_create_session
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)


```
 after_create_session(
    session,
    coord
)
```

Does first run which shows the eval metrics before training.
### after_run
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)


```
 after_run(
    run_context,
    run_values
)
```

Runs evaluator.
### before_run
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L129-L150)


```
 before_run(run_context)
```

Called before each call to run().

You can return from this call a SessionRunArgs object indicating ops or tensors to add to the upcoming run() call. These ops/tensors will be run together with the ops/tensors originally passed to the original run() call. The run args you return can also contain feeds to be added to the run() call.

The run_context argument is a SessionRunContext that provides information about the upcoming run() call: the originally requested op/tensors, the TensorFlow Session.

At this point graph is finalized and you can not add ops.
#### Args:
- `run_context`: A `SessionRunContext` object.
#### Returns:

None or a SessionRunArgs object.
### begin
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)


```
 begin()
```

Build eval graph and restoring op.
### end
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)


```
 end(session)
```

Runs evaluator for final model.
