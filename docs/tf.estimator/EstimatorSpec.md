

## Class  `EstimatorSpec` 
Ops and objects returned from a  `model_fn`  and passed to an  `Estimator` .

**Aliases** : [ `tf.compat.v1.estimator.EstimatorSpec` ](/api_docs/python/tf/estimator/EstimatorSpec), [ `tf.compat.v2.estimator.EstimatorSpec` ](/api_docs/python/tf/estimator/EstimatorSpec)

### Used in the guide:
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)


### Used in the tutorials:
- [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)
 `EstimatorSpec`  fully defines the model to be run by an  `Estimator` .

##  `__new__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/model_fn.py)

```
 @staticmethod
__new__(
    cls,
    mode,
    predictions=None,
    loss=None,
    train_op=None,
    eval_metric_ops=None,
    export_outputs=None,
    training_chief_hooks=None,
    training_hooks=None,
    scaffold=None,
    evaluation_hooks=None,
    prediction_hooks=None
)
 
```

Creates a validated  `EstimatorSpec`  instance.

Depending on the value of  `mode` , different arguments are required. Namely

- For  `mode == ModeKeys.TRAIN` : required fields are  `loss`  and  `train_op` .
- For  `mode == ModeKeys.EVAL` : required field is  `loss` .
- For  `mode == ModeKeys.PREDICT` : required fields are  `predictions` .
model_fn can populate all arguments independent of mode. In this case, somearguments will be ignored by an  `Estimator` . E.g.  `train_op`  will beignored in eval and infer modes. Example:

```
 def my_model_fn(features, labels, mode):
  predictions = ...
  loss = ...
  train_op = ...
  return tf.estimator.EstimatorSpec(
      mode=mode,
      predictions=predictions,
      loss=loss,
      train_op=train_op)
 
```

Alternatively, model_fn can just populate the arguments appropriate to thegiven mode. Example:

```
 def my_model_fn(features, labels, mode):
  if (mode == tf.estimator.ModeKeys.TRAIN or
      mode == tf.estimator.ModeKeys.EVAL):
    loss = ...
  else:
    loss = None
  if mode == tf.estimator.ModeKeys.TRAIN:
    train_op = ...
  else:
    train_op = None
  if mode == tf.estimator.ModeKeys.PREDICT:
    predictions = ...
  else:
    predictions = None

  return tf.estimator.EstimatorSpec(
      mode=mode,
      predictions=predictions,
      loss=loss,
      train_op=train_op)
 
```

#### Args:
- **`mode`** : A  `ModeKeys` . Specifies if this is training, evaluation orprediction.
- **`predictions`** : Predictions  `Tensor`  or dict of  `Tensor` .
- **`loss`** : Training loss  `Tensor` . Must be either scalar, or with shape  `[1]` .
- **`train_op`** : Op for the training step.
- **`eval_metric_ops`** : Dict of metric results keyed by name.The values of the dict can be one of the following:(1) instance of  `Metric`  class.(2) Results of calling a metric function, namely a `(metric_tensor, update_op)`  tuple.  `metric_tensor`  should beevaluated without any impact on state (typically is a pure computationresults based on variables.). For example, it should not trigger the `update_op`  or requires any input fetching.
- **`export_outputs`** : Describes the output signatures to be exported to `SavedModel`  and used during serving.A dict  `{name: output}`  where:
- **`training_chief_hooks`** : Iterable of  `tf.train.SessionRunHook`  objects torun on the chief worker during training.
- **`training_hooks`** : Iterable of  `tf.train.SessionRunHook`  objects to runon all workers during training.
- **`scaffold`** : A  `tf.train.Scaffold`  object that can be used to setinitialization, saver, and more to be used in training.
- **`evaluation_hooks`** : Iterable of  `tf.train.SessionRunHook`  objects torun during evaluation.
- **`prediction_hooks`** : Iterable of  `tf.train.SessionRunHook`  objects torun during predictions.
    - name: An arbitrary name for this output.
    - output: an  `ExportOutput`  object such as  `ClassificationOutput` , `RegressionOutput` , or  `PredictOutput` .Single-headed models only need to specify one entry in this dictionary.Multi-headed models should specify one entry for each head, one ofwhich must be named using `tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY` .If no entry is provided, a default  `PredictOutput`  mapping to `predictions`  will be created.


#### Returns:
A validated  `EstimatorSpec`  object.

#### Raises:
- **`ValueError`** : If validation fails.
- **`TypeError`** : If any of the arguments is not the expected type.


## Properties


###  `mode` 


###  `predictions` 


###  `loss` 


###  `train_op` 


###  `eval_metric_ops` 


###  `export_outputs` 


###  `training_chief_hooks` 


###  `training_hooks` 


###  `scaffold` 


###  `evaluation_hooks` 


###  `prediction_hooks` 
