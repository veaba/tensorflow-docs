## Class EvalSpec

Configuration for the "eval" part for the train_and_evaluate call.
### Aliases:
- Class `tf.compat.v1.estimator.EvalSpec`
- Class `tf.compat.v2.estimator.EvalSpec`
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
### Used in the tutorials:
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``

EvalSpec combines details of evaluation of the trained model as well as its export. Evaluation consists of computing metrics to judge the performance of the trained model. Export writes out the trained model on to external storage.
## __new__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/training.py)


```
 @staticmethod
__new__(
    cls,
    input_fn,
    steps=100,
    name=None,
    hooks=None,
    exporters=None,
    start_delay_secs=120,
    throttle_secs=600
)
```

Creates a validated EvalSpec instance.
#### Args:
- `input_fn`: A function that constructs the input data for evaluation. See Premade Estimators for more information. The function should construct and return one of the following:
A 'tf.data.`Dataset`' object: Outputs of `Dataset` object must be a tuple (features, labels) with same constraints as below.
A tuple (features, labels): Where features is a `Tensor` or a dictionary of string feature name to `Tensor` and labels is a `Tensor` or a dictionary of string label name to `Tensor`.
- A 'tf.data.`Dataset`' object: Outputs of `Dataset` object must be a tuple (features, labels) with same constraints as below.
- A tuple (features, labels): Where features is a `Tensor` or a dictionary of string feature name to `Tensor` and labels is a `Tensor` or a dictionary of string label name to `Tensor`.
- `steps`: Int. Positive number of `steps` for which to evaluate model. If `None`, evaluates until `input_fn` raises an end-of-input exception. See `Estimator.evaluate` for details.
- `name`: String. Name of the evaluation if user needs to run multiple evaluations on different data sets. Metrics for different evaluations are saved in separate folders, and appear separately in tensorboard.
- `hooks`: Iterable of `tf.train.SessionRunHook` objects to run during evaluation.
- `exporters`: Iterable of `Exporter`s, or a single one, or `None`. `exporters` will be invoked after each evaluation.
- `start_delay_secs`: Int. Start evaluating after waiting for this many seconds.
- `throttle_secs`: Int. Do not re-evaluate unless the last evaluation was started at least this many seconds ago. Of course, evaluation does not occur if no new checkpoints are available, hence, this is the minimum.
#### Returns:

A validated EvalSpec object.
#### Raises:
- `ValueError`: If any of the input arguments is invalid.
- `TypeError`: If any of the arguments is not of the expected type.
## Properties
### input_fn
### steps
### name
### hooks
### exporters
### start_delay_secs
### throttle_secs
