## Class BaselineEstimator

An estimator that can establish a simple baseline.
[Estimator](https://www.tensorflow.org/api_docs/python/tf/compat/v1/estimator/Estimator)Inherits From: 


The estimator uses a user-specified head.

This estimator ignores feature values and will learn to predict the average value of each label. E.g. for single-label classification problems, this will predict the probability distribution of the classes as seen in the labels. For multi-label classification problems, it will predict the ratio of examples that contain each class.
#### Example:

```
 # Build baseline multi-label classifier.
estimator = BaselineEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3))

# Input builders
def input_fn_train:
  # Returns tf.data.Dataset of (x, y) tuple where y represents label's class
  # index.
  pass

def input_fn_eval:
  # Returns tf.data.Dataset of (x, y) tuple where y represents label's class
  # index.
  pass

# Fit model.
estimator.train(input_fn=input_fn_train)

# Evaluates cross entropy between the test and train labels.
loss = estimator.evaluate(input_fn=input_fn_eval)["loss"]

# For each class, predicts the ratio of training examples that contain the
# class.
predictions = estimator.predict(new_samples)
```

Input of train and evaluate should have following features, otherwise there will be a KeyError:
- if `weight_column` is specified in the `head` constructor (and not None) for the `head` passed to BaselineEstimator's constructor, a feature with `key=weight_column` whose value is a `Tensor`.
## __init__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/canned/baseline.py)


```
 __init__(
    head,
    model_dir=None,
    optimizer='Ftrl',
    config=None
)
```

Constructs an Estimator instance.
[estimators](https://tensorflow.org/guide/estimators)See  for more information.


To warm-start an Estimator:

```
 estimator = tf.estimator.DNNClassifier(
    feature_columns=[categorical_feature_a_emb, categorical_feature_b_emb],
    hidden_units=[1024, 512, 256],
    warm_start_from="/path/to/checkpoint/dir")
```
[tf.estimator.WarmStartSettings](https://www.tensorflow.org/api_docs/python/tf/estimator/WarmStartSettings)For more details on warm-start configuration, see .

#### Args:
- `model_fn`: Model function. Follows the signature:
Args:
`features`: This is the first item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same.
`labels`: This is the second item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same (for multi-head `mode`ls). If `mode` is `tf.estimator.ModeKeys.PREDICT`, `labels`=None will be passed. If the `model_fn`'s signature does not accept `mode`, the `model_fn` must still be able to handle `labels`=None.
`mode`: Optional. Specifies if this is `train`ing, evaluation or `predict`ion. See `tf.estimator.ModeKeys`.
`params`: Optional `dict` of hyperparameters. Will receive what is passed to Estimator in `params` parameter. This allows to `config`ure Estimators from hyper parameter tuning.
`config`: Optional `estimator.RunConfig` object. Will receive what is passed to Estimator as its `config` parameter, or a default value. Allows setting up things in your `model_fn` based on `config`uration such as `num_ps_replicas`, or `mode`l_dir.
Returns: `tf.estimator.EstimatorSpec`
- Args:
- `features`: This is the first item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same.
- `labels`: This is the second item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same (for multi-head `mode`ls). If `mode` is `tf.estimator.ModeKeys.PREDICT`, `labels`=None will be passed. If the `model_fn`'s signature does not accept `mode`, the `model_fn` must still be able to handle `labels`=None.
- `mode`: Optional. Specifies if this is `train`ing, evaluation or `predict`ion. See `tf.estimator.ModeKeys`.
- `params`: Optional `dict` of hyperparameters. Will receive what is passed to Estimator in `params` parameter. This allows to `config`ure Estimators from hyper parameter tuning.
- `config`: Optional `estimator.RunConfig` object. Will receive what is passed to Estimator as its `config` parameter, or a default value. Allows setting up things in your `model_fn` based on `config`uration such as `num_ps_replicas`, or `mode`l_dir.
- Returns: `tf.estimator.EstimatorSpec`
- `mode`l_dir: Directory to save `mode`l parameters, graph and etc. This can also be used to load checkpoints from the directory into an estimator to continue `train`ing a previously saved `mode`l. If `PathLike` object, the path will be resolved. If `None`, the `mode`l_dir in `config` will be used if set. If both are set, they must be same. If both are `None`, a temporary directory will be used.
- `config`: `estimator.RunConfig` `config`uration object.
- `params`: `dict` of hyper parameters that will be passed into `model_fn`. Keys are names of parameters, values are basic python types.
- `warm_start_from`: Optional string filepath to a checkpoint or SavedModel to warm-start from, or a `tf.estimator.WarmStartSettings` object to fully `config`ure warm-starting.
`         If None, only TRAINABLE variables are warm-started.

         If the string filepath is provided instead of a
         <a href="../../../../tf/estimator/WarmStartSettings"><code>tf.estimator.WarmStartSettings</code></a>, then all variables are
         warm-started, and it is assumed that vocabularies
         and <a href="../../../../tf/Tensor"><code>tf.Tensor</code></a> names are unchanged.`
#### Raises:
- `ValueError`: parameters of `model_fn` don't match `params`.
- `ValueError`: if this is called via a subclass and if that class overrides a member of `Estimator`.
## Properties
### config
### model_dir
### model_fn

Returns the model_fn which is bound to self.params.
#### Returns:

The model_fn with following signature: def model_fn(features, labels, mode, config)
### params
## Methods
### eval_dir
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 eval_dir(name=None)
```

Shows the directory name where evaluation metrics are dumped.
#### Args:
- `name`: Name of the evaluation if user needs to run multiple evaluations on different data sets, such as on training data vs test data. Metrics for different evaluations are saved in separate folders, and appear separately in tensorboard.
#### Returns:

A string which is the path of directory contains evaluation metrics.
### evaluate
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 evaluate(
    input_fn,
    steps=None,
    hooks=None,
    checkpoint_path=None,
    name=None
)
```

Evaluates the model given evaluation data input_fn.
[tf.errors.OutOfRangeError](https://www.tensorflow.org/api_docs/python/tf/errors/OutOfRangeError)For each step, calls input_fn, which returns one batch of data. Evaluates until: - steps batches are processed, or - input_fn raises an end-of-input exception ( or StopIteration).

#### Args:
- `input_fn`: A function that constructs the input data for evaluation. See Premade Estimators for more information. The function should construct and return one of the following: * A `tf.data.Dataset` object: Outputs of `Dataset` object must be a tuple (`features, labels`) with same constraints as below. * A tuple (`features, labels`): Where `features` is a `tf.Tensor` or a dictionary of string feature name to `Tensor` and `labels` is a `Tensor` or a dictionary of string label name to `Tensor`. Both `features` and `labels` are consumed by `model_fn`. They should satisfy the expectation of `model_fn` from inputs.
- `steps`: Number of `steps` for which to evaluate model. If `None`, evaluates until `input_fn` raises an end-of-input exception.
- `hooks`: List of `tf.train.SessionRunHook` subclass instances. Used for callbacks inside the evaluation call.
- `checkpoint_path`: Path of a specific checkpoint to evaluate. If `None`, the latest checkpoint in `model_dir` is used. If there are no checkpoints in `model_dir`, evaluation is run with newly initialized `Variables` instead of ones restored from checkpoint.
- `name`: Name of the evaluation if user needs to run multiple evaluations on different data sets, such as on training data vs test data. Metrics for different evaluations are saved in separate folders, and appear separately in tensorboard.
#### Returns:

A dict containing the evaluation metrics specified in model_fn keyed by name, as well as an entry global_step which contains the value of the global step for which this evaluation was performed. For canned estimators, the dict contains the loss (mean loss per mini-batch) and the average_loss (mean loss per sample). Canned classifiers also return the accuracy. Canned regressors also return the label/mean and the prediction/mean.
#### Raises:
- `ValueError`: If `steps <= 0`.
### experimental_export_all_saved_models
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 experimental_export_all_saved_models(
    export_dir_base,
    input_receiver_fn_map,
    assets_extra=None,
    as_text=False,
    checkpoint_path=None
)
```

Exports a SavedModel with tf.MetaGraphDefs for each requested mode.
[tf.estimator.ModeKeys.TRAIN](https://www.tensorflow.org/api_docs/python/tf/estimator/ModeKeys#TRAIN)For each mode passed in via the input_receiver_fn_map, this method builds a new graph by calling the input_receiver_fn to obtain feature and label Tensors. Next, this method calls the Estimator's model_fn in the passed mode to generate the model graph based on those features and labels, and restores the given checkpoint (or, lacking that, the most recent checkpoint) into the graph. Only one of the modes is used for saving variables to the SavedModel (order of preference: , tf.estimator.ModeKeys.EVAL, then tf.estimator.ModeKeys.PREDICT), such that up to three tf.MetaGraphDefs are saved with a single set of variables in a single SavedModel directory.


For the variables and tf.MetaGraphDefs, a timestamped export directory below export_dir_base, and writes a SavedModel into it containing the tf.MetaGraphDef for the given mode and its associated signatures.
[tf.estimator.export.ExportOutput](https://www.tensorflow.org/api_docs/python/tf/estimator/export/ExportOutput)For prediction, the exported MetaGraphDef will provide one SignatureDef for each element of the export_outputs dict returned from the model_fn, named using the same keys. One of these keys is always tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY, indicating which signature will be served when a serving request does not specify one. For each signature, the outputs are provided by the corresponding s, and the inputs are always the input receivers provided by the serving_input_receiver_fn.


For training and evaluation, the train_op is stored in an extra collection, and loss, metrics, and predictions are included in a SignatureDef for the mode in question.

Extra assets may be written into the SavedModel via the assets_extra argument. This should be a dict, where each key gives a destination path (including the filename) relative to the assets.extra directory. The corresponding value gives the full path of the source file to be copied. For example, the simple case of copying a single file without renaming it is specified as {'my_asset_file.txt': '/path/to/my_asset_file.txt'}.
#### Args:
- `export_dir_base`: A string containing a directory in which to create timestamped subdirectories containing exported `SavedModel`s.
- `input_receiver_fn_map`: dict of `tf.estimator.ModeKeys` to `input_receiver_fn` mappings, where the `input_receiver_fn` is a function that takes no arguments and returns the appropriate subclass of `InputReceiver`.
- `assets_extra`: A dict specifying how to populate the assets.extra directory within the exported `SavedModel`, or `None` if no extra assets are needed.
- `as_text`: whether to write the `SavedModel` proto in text format.
- `checkpoint_path`: The checkpoint path to export. If `None` (the default), the most recent checkpoint found within the model directory is chosen.
#### Returns:

The string path to the exported directory.
#### Raises:
- `ValueError`: if any `input_receiver_fn` is `None`, no `export_outputs` are provided, or no checkpoint can be found.
### export_saved_model
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 export_saved_model(
    export_dir_base,
    serving_input_receiver_fn,
    assets_extra=None,
    as_text=False,
    checkpoint_path=None,
    experimental_mode=ModeKeys.PREDICT
)
```

Exports inference graph as a SavedModel into the given dir.
[Using SavedModel with Estimators](https://tensorflow.org/guide/saved_model#using_savedmodel_with_estimators)For a detailed guide, see .


This method builds a new graph by first calling the serving_input_receiver_fn to obtain feature Tensors, and then calling this Estimator's model_fn to generate the model graph based on those features. It restores the given checkpoint (or, lacking that, the most recent checkpoint) into this graph in a fresh session. Finally it creates a timestamped export directory below the given export_dir_base, and writes a SavedModel into it containing a single tf.MetaGraphDef saved from this session.
[tf.estimator.export.ExportOutput](https://www.tensorflow.org/api_docs/python/tf/estimator/export/ExportOutput)The exported MetaGraphDef will provide one SignatureDef for each element of the export_outputs dict returned from the model_fn, named using the same keys. One of these keys is always tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY, indicating which signature will be served when a serving request does not specify one. For each signature, the outputs are provided by the corresponding s, and the inputs are always the input receivers provided by the serving_input_receiver_fn.


Extra assets may be written into the SavedModel via the assets_extra argument. This should be a dict, where each key gives a destination path (including the filename) relative to the assets.extra directory. The corresponding value gives the full path of the source file to be copied. For example, the simple case of copying a single file without renaming it is specified as {'my_asset_file.txt': '/path/to/my_asset_file.txt'}.

The experimental_mode parameter can be used to export a single train/eval/predict graph as a SavedModel. See experimental_export_all_saved_models for full docs.
#### Args:
- `export_dir_base`: A string containing a directory in which to create timestamped subdirectories containing exported `SavedModel`s.
- `serving_input_receiver_fn`: A function that takes no argument and returns a `tf.estimator.export.ServingInputReceiver` or `tf.estimator.export.TensorServingInputReceiver`.
- `assets_extra`: A dict specifying how to populate the assets.extra directory within the exported `SavedModel`, or `None` if no extra assets are needed.
- `as_text`: whether to write the `SavedModel` proto in text format.
- `checkpoint_path`: The checkpoint path to export. If `None` (the default), the most recent checkpoint found within the model directory is chosen.
- `experimental_mode`: `tf.estimator.ModeKeys` value indicating with mode will be exported. Note that this feature is experimental.
#### Returns:

The string path to the exported directory.
#### Raises:
- `ValueError`: if no `serving_input_receiver_fn` is provided, no `export_outputs` are provided, or no checkpoint can be found.
### export_savedmodel
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 export_savedmodel(
    export_dir_base,
    serving_input_receiver_fn,
    assets_extra=None,
    as_text=False,
    checkpoint_path=None,
    strip_default_attrs=False
)
```

Exports inference graph as a SavedModel into the given dir. (deprecated)
[Using SavedModel with Estimators](https://tensorflow.org/guide/saved_model#using_savedmodel_with_estimators)For a detailed guide, see .


This method builds a new graph by first calling the serving_input_receiver_fn to obtain feature Tensors, and then calling this Estimator's model_fn to generate the model graph based on those features. It restores the given checkpoint (or, lacking that, the most recent checkpoint) into this graph in a fresh session. Finally it creates a timestamped export directory below the given export_dir_base, and writes a SavedModel into it containing a single tf.MetaGraphDef saved from this session.
[tf.estimator.export.ExportOutput](https://www.tensorflow.org/api_docs/python/tf/estimator/export/ExportOutput)The exported MetaGraphDef will provide one SignatureDef for each element of the export_outputs dict returned from the model_fn, named using the same keys. One of these keys is always tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY, indicating which signature will be served when a serving request does not specify one. For each signature, the outputs are provided by the corresponding s, and the inputs are always the input receivers provided by the serving_input_receiver_fn.


Extra assets may be written into the SavedModel via the assets_extra argument. This should be a dict, where each key gives a destination path (including the filename) relative to the assets.extra directory. The corresponding value gives the full path of the source file to be copied. For example, the simple case of copying a single file without renaming it is specified as {'my_asset_file.txt': '/path/to/my_asset_file.txt'}.
#### Args:
- `export_dir_base`: A string containing a directory in which to create timestamped subdirectories containing exported `SavedModel`s.
- `serving_input_receiver_fn`: A function that takes no argument and returns a `tf.estimator.export.ServingInputReceiver` or `tf.estimator.export.TensorServingInputReceiver`.
- `assets_extra`: A dict specifying how to populate the assets.extra directory within the exported `SavedModel`, or `None` if no extra assets are needed.
- `as_text`: whether to write the `SavedModel` proto in text format.
- `checkpoint_path`: The checkpoint path to export. If `None` (the default), the most recent checkpoint found within the model directory is chosen.
- `strip_default_attrs`: Boolean. If `True`, default-valued attributes will be removed from the `NodeDef`s. For a detailed guide, see Stripping Default-Valued Attributes.
#### Returns:

The string path to the exported directory.
#### Raises:
- `ValueError`: if no `serving_input_receiver_fn` is provided, no `export_outputs` are provided, or no checkpoint can be found.
### get_variable_names
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 get_variable_names()
```

Returns list of all variable names in this model.
#### Returns:

List of names.
#### Raises:
- `ValueError`: If the `Estimator` has not produced a checkpoint yet.
### get_variable_value
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 get_variable_value(name)
```

Returns value of the variable given by name.
#### Args:
- `name`: string or a list of string, `name` of the tensor.
#### Returns:

Numpy array - value of the tensor.
#### Raises:
- `ValueError`: If the `Estimator` has not produced a checkpoint yet.
### latest_checkpoint
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 latest_checkpoint()
```

Finds the filename of the latest saved checkpoint file in model_dir.
#### Returns:

The full path to the latest checkpoint or None if no checkpoint was found.
### predict
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 predict(
    input_fn,
    predict_keys=None,
    hooks=None,
    checkpoint_path=None,
    yield_single_examples=True
)
```

Yields predictions for given features.
[issue/20506](https://github.com/tensorflow/tensorflow/issues/20506#issuecomment-422208517)Please note that interleaving two predict outputs does not work. See: 

#### Args:
- `input_fn`: A function that constructs the features. Prediction continues until `input_fn` raises an end-of-input exception (`tf.errors.OutOfRangeError` or `StopIteration`). See Premade Estimators for more information. The function should construct and return one of the following:
A `tf.data.Dataset` object: Outputs of `Dataset` object must have same constraints as below.
features: A `tf.Tensor` or a dictionary of string feature name to `Tensor`. features are consumed by `model_fn`. They should satisfy the expectation of `model_fn` from inputs.
A tuple, in which case the first item is extracted as features.
- A `tf.data.Dataset` object: Outputs of `Dataset` object must have same constraints as below.
- features: A `tf.Tensor` or a dictionary of string feature name to `Tensor`. features are consumed by `model_fn`. They should satisfy the expectation of `model_fn` from inputs.
- A tuple, in which case the first item is extracted as features.
- `predict_keys`: list of `str`, name of the keys to pre`dict`. It is used if the `tf.estimator.EstimatorSpec.predictions` is a `dict`. If `predict_keys` is used then rest of the pre`dict`ions will be filtered from the `dict`ionary. If `None`, returns all.
- `hooks`: List of `tf.train.SessionRunHook` subclass instances. Used for callbacks inside the pre`dict`ion call.
- `checkpoint_path`: Path of a specific checkpoint to pre`dict`. If `None`, the latest checkpoint in `model_dir` is used. If there are no checkpoints in `model_dir`, pre`dict`ion is run with newly initialized `Variables` instead of ones restored from checkpoint.
- `yield_single_examples`: If `False`, yields the whole batch as returned by the `model_fn` instead of decomposing the batch into individual elements. This is useful if `model_fn` returns some tensors whose first dimension is not equal to the batch size.
#### Yields:

Evaluated values of predictions tensors.
#### Raises:
- `ValueError`: If batch length of predictions is not the same and `yield_single_examples` is `True`.
- `ValueError`: If there is a conflict between `predict_keys` and `predictions`. For example if `predict_keys` is not `None` but `tf.estimator.EstimatorSpec.predictions` is not a `dict`.
### train
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)


```
 train(
    input_fn,
    hooks=None,
    steps=None,
    max_steps=None,
    saving_listeners=None
)
```

Trains a model given training data input_fn.
#### Args:
- `input_fn`: A function that provides input data for training as minibatches. See Premade Estimators for more information. The function should construct and return one of the following:
A `tf.data.Dataset` object: Outputs of `Dataset` object must be a tuple (`features, labels`) with same constraints as below.
A tuple (`features, labels`): Where `features` is a `tf.Tensor` or a dictionary of string feature name to `Tensor` and `labels` is a `Tensor` or a dictionary of string label name to `Tensor`. Both `features` and `labels` are consumed by `model_fn`. They should satisfy the expectation of `model_fn` from inputs.
- A `tf.data.Dataset` object: Outputs of `Dataset` object must be a tuple (`features, labels`) with same constraints as below.
- A tuple (`features, labels`): Where `features` is a `tf.Tensor` or a dictionary of string feature name to `Tensor` and `labels` is a `Tensor` or a dictionary of string label name to `Tensor`. Both `features` and `labels` are consumed by `model_fn`. They should satisfy the expectation of `model_fn` from inputs.
- `hooks`: List of `tf.train.SessionRunHook` subclass instances. Used for callbacks inside the training loop.
- `steps`: Number of `steps` for which to train the model. If `None`, train forever or train until `input_fn` generates the `tf.errors.OutOfRange` error or `StopIteration` exception. `steps` works incrementally. If you call two times train(`steps`=10) then training occurs in total 20 `steps`. If `OutOfRange` or `StopIteration` occurs in the middle, training stops before 20 `steps`. If you don't want to have incremental behavior please set `max_steps` instead. If set, `max_steps` must be `None`.
- `max_steps`: Number of total `steps` for which to train model. If `None`, train forever or train until `input_fn` generates the `tf.errors.OutOfRange` error or `StopIteration` exception. If set, `steps` must be `None`. If `OutOfRange` or `StopIteration` occurs in the middle, training stops before `max_steps` `steps`. Two calls to train(`steps`=100) means 200 training iterations. On the other hand, two calls to train(`max_steps`=100) means that the second call will not do any iteration since first call did all 100 `steps`.
- `saving_listeners`: list of `CheckpointSaverListener` objects. Used for callbacks that run immediately before or after checkpoint savings.
#### Returns:

self, for chaining.
#### Raises:
- `ValueError`: If both `steps` and `max_steps` are not `None`.
- `ValueError`: If either `steps` or `max_steps` <= 0.
