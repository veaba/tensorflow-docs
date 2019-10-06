## Class RNNClassifier

A classifier for TensorFlow RNN models.
[RNNEstimator](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/RNNEstimator)Inherits From: 

### Aliases:
- Class `tf.compat.v2.estimator.experimental.RNNClassifier`

Trains a recurrent neural network model to classify instances into one of multiple classes.
#### Example:

```
 token_sequence = sequence_categorical_column_with_hash_bucket(...)
token_emb = embedding_column(categorical_column=token_sequence, ...)

estimator = RNNClassifier(
    sequence_feature_columns=[token_emb],
    units=[32, 16], cell_type='lstm')

# Input builders
def input_fn_train: # returns x, y
  pass
estimator.train(input_fn=input_fn_train, steps=100)

def input_fn_eval: # returns x, y
  pass
metrics = estimator.evaluate(input_fn=input_fn_eval, steps=10)
def input_fn_predict: # returns x, None
  pass
predictions = estimator.predict(input_fn=input_fn_predict)
```

Input of train and evaluate should have following features, otherwise there will be a KeyError:
- if `weight_column` is not `None`, a feature with `key=weight_column` whose value is a `Tensor`.
- for each `column` in `sequence_feature_columns`:
a feature with `key=column.name` whose `value` is a `SparseTensor`.
- a feature with `key=column.name` whose `value` is a `SparseTensor`.
- for each `column` in `context_feature_columns`:
if `column` is a `CategoricalColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
if `column` is a `WeightedCategoricalColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
if `column` is a `DenseColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.
- if `column` is a `CategoricalColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
- if `column` is a `WeightedCategoricalColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
- if `column` is a `DenseColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.

Loss is calculated by using softmax cross entropy.
#### Eager Compatibility

Estimators are not compatible with eager execution.
## __init__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/canned/rnn.py)


```
 __init__(
    sequence_feature_columns,
    context_feature_columns=None,
    units=None,
    cell_type=USE_DEFAULT,
    rnn_cell_fn=None,
    return_sequences=False,
    model_dir=None,
    n_classes=2,
    weight_column=None,
    label_vocabulary=None,
    optimizer='Adagrad',
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,
    sequence_mask='sequence_mask',
    config=None
)
```

Initializes a RNNClassifier instance.
#### Args:
- `sequence_feature_columns`: An iterable containing the `FeatureColumn`s that represent sequential input. All items in the set should either be sequence columns (e.g. `sequence_numeric_column`) or constructed from one (e.g. `embedding_column` with `sequence_categorical_column_`* as input).
- `context_feature_columns`: An iterable containing the `FeatureColumn`s for contextual input. The data represented by these columns will be replicated and given to the RNN at each timestep. These columns must be instances of classes derived from `DenseColumn` such as `numeric_column`, not the sequential variants.
- `units`: Iterable of integer number of hidden `units` per RNN layer. If set, `cell_type` must also be specified and `rnn_cell_fn` must be `None`.
- `cell_type`: A class producing a RNN cell or a string specifying the cell type. Supported strings are: `'simple_rnn'`, `'lstm'`, and `'gru'`. If set, `units` must also be specified and `rnn_cell_fn` must be `None`.
- `rnn_cell_fn`: A function that returns a RNN cell instance that will be used to construct the RNN. If set, `units` and `cell_type` cannot be set. This is for advanced users who need additional customization beyond `units` and `cell_type`. Note that `tf.keras.layers.StackedRNNCells` is needed for stacked RNNs.
- `return_sequences`: A boolean indicating whether to return the last output in the output sequence, or the full sequence. Note that if True, `weight_column` must be `None` or a string.
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `n_classes`: Number of label classes. Defaults to 2, namely binary classification. Must be > 1.
- `weight_column`: A string or a `NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example. If it is a string, it is used as a key to fetch weight tensor from the `features`. If it is a `NumericColumn`, raw tensor is fetched by key `weight_column`.key, then `weight_column`.normalizer_fn is applied on it to get weight tensor.
- `label_vocabulary`: A list of strings represents possible label values. If given, labels must be string type and have any value in `label_vocabulary`. If it is not given, that means labels are already encoded as integer or float within [0, 1] for `n_classes`=2 and encoded as integer values in {0, 1,..., `n_classes`-1} for `n_classes`>2 . Also there will be errors if vocabulary is not provided and labels are string.
- `optimizer`: An instance of `tf.Optimizer` or string specifying `optimizer` type. Defaults to Adagrad `optimizer`.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Describes how to reduce training loss over batch. Defaults to `SUM_OVER_BATCH_SIZE`.
- `sequence_mask`: A string with the name of the sequence mask tensor. If `sequence_mask` is in the `features` dictionary, the provided tensor is used, otherwise the sequence mask is computed from the length of sequential `features`. The sequence mask is used in evaluation and training mode to aggregate loss and metrics computation while excluding padding steps. It is also added to the predictions dictionary in prediction mode to indicate which steps are padding.
- `config`: `RunConfig` object to `config`ure the runtime settings.
[tf.keras.layers.RNN](https://www.tensorflow.org/api_docs/python/tf/keras/layers/RNN)Note that a RNN cell has: - a call method. - a state_size attribute. - a output_size attribute. - a get_initial_state method. See the documentation on  for more details.

#### Raises:
- `ValueError`: If `units`, `cell_type`, and `rnn_cell_fn` are not compatible.
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
