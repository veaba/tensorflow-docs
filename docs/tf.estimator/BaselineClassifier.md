

## Class  `BaselineClassifier` 
A classifier that can establish a simple baseline.

Inherits From: [ `Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator)

This classifier ignores feature values and will learn to predict the averagevalue of each label. For single-label problems, this will predict theprobability distribution of the classes as seen in the labels. For multi-labelproblems, this will predict the fraction of examples that are positive foreach class.

#### Example:


```
 
# Build BaselineClassifier
classifier = BaselineClassifier(n_classes=3)

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
classifier.train(input_fn=input_fn_train)

# Evaluate cross entropy between the test and train labels.
loss = classifier.evaluate(input_fn=input_fn_eval)["loss"]

# predict outputs the probability distribution of the classes as seen in
# training.
predictions = classifier.predict(new_samples)

 
```

Input of  `train`  and  `evaluate`  should have following features,  otherwise there will be a  `KeyError` :

- if  `weight_column`  is not  `None` , a feature with `key=weight_column`  whose value is a  `Tensor` .


#### Eager Compatibility
Estimators can be used while eager execution is enabled. Note that  `input_fn` and all hooks are executed inside a graph context, so they have to be writtento be compatible with graph mode. Note that  `input_fn`  code using [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data)generally works in both graph and eager modes.

##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/canned/baseline.py)

```
 __init__(
    model_dir=None,
    n_classes=2,
    weight_column=None,
    label_vocabulary=None,
    optimizer='Ftrl',
    config=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE
)
 
```

Initializes a BaselineClassifier instance.

#### Args:
- **`model_dir`** : Directory to save model parameters, graph and etc. This canalso be used to load checkpoints from the directory into a estimator tocontinue training a previously saved model.
- **`n_classes`** : number of label classes. Default is binary classification.It must be greater than 1. Note: Class labels are integers representingthe class index (i.e. values from 0 to n_classes-1). For arbitrarylabel values (e.g. string labels), convert to class indices first.
- **`weight_column`** : A string or a  `_NumericColumn`  created by[ `tf.feature_column.numeric_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/numeric_column) defining feature column representingweights. It will be multiplied by the loss of the example.
- **`label_vocabulary`** : Optional list of strings with size  `[n_classes]` defining the label vocabulary. Only supported for  `n_classes`  > 2.
- **`optimizer`** : String,  `tf.Optimizer`  object, or callable that creates theoptimizer to use for training. If not specified, will use `FtrlOptimizer`  with a default learning rate of 0.3.
- **`config`** :  `RunConfig`  object to configure the runtime settings.
- **`loss_reduction`** : One of [ `tf.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) except  `NONE` . Describes howto reduce training loss over batch. Defaults to  `SUM_OVER_BATCH_SIZE` .


#### Returns:
A  `BaselineClassifier`  estimator.

#### Raises:
- **`ValueError`** : If  `n_classes`  < 2.


## Properties


###  `config` 


###  `export_savedmodel` 


###  `model_dir` 


###  `model_fn` 
Returns the  `model_fn`  which is bound to  `self.params` .

#### Returns:
The  `model_fn`  with following signature:   `def model_fn(features, labels, mode, config)` 

###  `params` 


## Methods


###  `eval_dir` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 eval_dir(name=None)
 
```

Shows the directory name where evaluation metrics are dumped.

#### Args:
- **`name`** : Name of the evaluation if user needs to run multiple evaluations ondifferent data sets, such as on training data vs test data. Metrics fordifferent evaluations are saved in separate folders, and appearseparately in tensorboard.


#### Returns:
A string which is the path of directory contains evaluation metrics.

###  `evaluate` 
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

Evaluates the model given evaluation data  `input_fn` .

For each step, calls  `input_fn` , which returns one batch of data.Evaluates until:

-  `steps`  batches are processed, or
-  `input_fn`  raises an end-of-input exception ([ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError)or `StopIteration` ).


#### Args:
- **`input_fn`** : A function that constructs the input data for evaluation. See[Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. Thefunction should construct and return one of the following:  * A[ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object: Outputs of  `Dataset`  object must be a tuple `(features, labels)`  with same constraints as below. * A tuple `(features, labels)` : Where  `features`  is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) or a dictionaryof string feature name to  `Tensor`  and  `labels`  is a  `Tensor`  or adictionary of string label name to  `Tensor` . Both  `features`  and `labels`  are consumed by  `model_fn` . They should satisfy the expectationof  `model_fn`  from inputs.
- **`steps`** : Number of steps for which to evaluate model. If  `None` , evaluatesuntil  `input_fn`  raises an end-of-input exception.
- **`hooks`** : List of  `tf.train.SessionRunHook`  subclass instances. Used forcallbacks inside the evaluation call.
- **`checkpoint_path`** : Path of a specific checkpoint to evaluate. If  `None` , thelatest checkpoint in  `model_dir`  is used.  If there are no checkpointsin  `model_dir` , evaluation is run with newly initialized  `Variables` instead of ones restored from checkpoint.
- **`name`** : Name of the evaluation if user needs to run multiple evaluations ondifferent data sets, such as on training data vs test data. Metrics fordifferent evaluations are saved in separate folders, and appearseparately in tensorboard.


#### Returns:
A dict containing the evaluation metrics specified in  `model_fn`  keyed byname, as well as an entry  `global_step`  which contains the value of theglobal step for which this evaluation was performed. For cannedestimators, the dict contains the  `loss`  (mean loss per mini-batch) andthe  `average_loss`  (mean loss per sample). Canned classifiers also returnthe  `accuracy` . Canned regressors also return the  `label/mean`  and the `prediction/mean` .

#### Raises:
- **`ValueError`** : If  `steps <= 0` .


###  `experimental_export_all_saved_models` 
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

Exports a  `SavedModel`  with  `tf.MetaGraphDefs`  for each requested mode.

For each mode passed in via the  `input_receiver_fn_map` ,this method builds a new graph by calling the  `input_receiver_fn`  to obtainfeature and label  `Tensor` s. Next, this method calls the  `Estimator` 's `model_fn`  in the passed mode to generate the model graph based onthose features and labels, and restores the given checkpoint(or, lacking that, the most recent checkpoint) into the graph.Only one of the modes is used for saving variables to the  `SavedModel` (order of preference: [ `tf.estimator.ModeKeys.TRAIN` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys#TRAIN),[ `tf.estimator.ModeKeys.EVAL` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys#EVAL), then[ `tf.estimator.ModeKeys.PREDICT` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys#PREDICT)), such that up to three `tf.MetaGraphDefs`  are saved with a single set of variables in a single `SavedModel`  directory.

For the variables and  `tf.MetaGraphDefs` , a timestamped export directorybelow `export_dir_base` , and writes a  `SavedModel`  into it containingthe  `tf.MetaGraphDef`  for the given mode and its associated signatures.

For prediction, the exported  `MetaGraphDef`  will provide one  `SignatureDef` for each element of the  `export_outputs`  dict returned from the  `model_fn` ,named using the same keys.  One of these keys is always `tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY` ,indicating whichsignature will be served when a serving request does not specify one.For each signature, the outputs are provided by the corresponding[ `tf.estimator.export.ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)s, and the inputs are always the inputreceivers provided bythe  `serving_input_receiver_fn` .

For training and evaluation, the  `train_op`  is stored in an extracollection,and loss, metrics, and predictions are included in a  `SignatureDef`  for themode in question.

Extra assets may be written into the  `SavedModel`  via the  `assets_extra` argument.  This should be a dict, where each key gives a destination path(including the filename) relative to the assets.extra directory.  Thecorresponding value gives the full path of the source file to be copied.For example, the simple case of copying a single file without renaming itis specified as  `{'my_asset_file.txt': '/path/to/my_asset_file.txt'}` .

#### Args:
- **`export_dir_base`** : A string containing a directory in which to createtimestamped subdirectories containing exported  `SavedModel` s.
- **`input_receiver_fn_map`** : dict of [ `tf.estimator.ModeKeys` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys) to `input_receiver_fn`  mappings, where the  `input_receiver_fn`  is afunction that takes no arguments and returns the appropriate subclass of `InputReceiver` .
- **`assets_extra`** : A dict specifying how to populate the assets.extra directorywithin the exported  `SavedModel` , or  `None`  if no extra assets areneeded.
- **`as_text`** : whether to write the  `SavedModel`  proto in text format.
- **`checkpoint_path`** : The checkpoint path to export.  If  `None`  (the default),the most recent checkpoint found within the model directory is chosen.


#### Returns:
The string path to the exported directory.

#### Raises:
- **`ValueError`** : if any  `input_receiver_fn`  is  `None` , no  `export_outputs` are provided, or no checkpoint can be found.


###  `export_saved_model` 
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

Exports inference graph as a  `SavedModel`  into the given dir.

For a detailed guide, see[Using SavedModel with Estimators](https://tensorflow.org/guide/saved_model#using_savedmodel_with_estimators).

This method builds a new graph by first calling the `serving_input_receiver_fn`  to obtain feature  `Tensor` s, and then callingthis  `Estimator` 's  `model_fn`  to generate the model graph based on thosefeatures. It restores the given checkpoint (or, lacking that, the mostrecent checkpoint) into this graph in a fresh session.  Finally it createsa timestamped export directory below the given  `export_dir_base` , and writesa  `SavedModel`  into it containing a single  `tf.MetaGraphDef`  saved from thissession.

The exported  `MetaGraphDef`  will provide one  `SignatureDef`  for eachelement of the  `export_outputs`  dict returned from the  `model_fn` , namedusingthe same keys.  One of these keys is always `tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY` ,indicating whichsignature will be served when a serving request does not specify one.For each signature, the outputs are provided by the corresponding[ `tf.estimator.export.ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)s, and the inputs are always the inputreceivers provided bythe  `serving_input_receiver_fn` .

Extra assets may be written into the  `SavedModel`  via the  `assets_extra` argument.  This should be a dict, where each key gives a destination path(including the filename) relative to the assets.extra directory.  Thecorresponding value gives the full path of the source file to be copied.For example, the simple case of copying a single file without renaming itis specified as  `{'my_asset_file.txt': '/path/to/my_asset_file.txt'}` .

The experimental_mode parameter can be used to export a singletrain/eval/predict graph as a  `SavedModel` .See  `experimental_export_all_saved_models`  for full docs.

#### Args:
- **`export_dir_base`** : A string containing a directory in which to createtimestamped subdirectories containing exported  `SavedModel` s.
- **`serving_input_receiver_fn`** : A function that takes no argument and returns a[ `tf.estimator.export.ServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ServingInputReceiver) or[ `tf.estimator.export.TensorServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/TensorServingInputReceiver).
- **`assets_extra`** : A dict specifying how to populate the assets.extra directorywithin the exported  `SavedModel` , or  `None`  if no extra assets areneeded.
- **`as_text`** : whether to write the  `SavedModel`  proto in text format.
- **`checkpoint_path`** : The checkpoint path to export.  If  `None`  (the default),the most recent checkpoint found within the model directory is chosen.
- **`experimental_mode`** : [ `tf.estimator.ModeKeys` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys) value indicating with modewill be exported. Note that this feature is experimental.


#### Returns:
The string path to the exported directory.

#### Raises:
- **`ValueError`** : if no  `serving_input_receiver_fn`  is provided, no `export_outputs`  are provided, or no checkpoint can be found.


###  `get_variable_names` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 get_variable_names()
 
```

Returns list of all variable names in this model.

#### Returns:
List of names.

#### Raises:
- **`ValueError`** : If the  `Estimator`  has not produced a checkpoint yet.


###  `get_variable_value` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 get_variable_value(name)
 
```

Returns value of the variable given by name.

#### Args:
- **`name`** : string or a list of string, name of the tensor.


#### Returns:
Numpy array - value of the tensor.

#### Raises:
- **`ValueError`** : If the  `Estimator`  has not produced a checkpoint yet.


###  `latest_checkpoint` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 latest_checkpoint()
 
```

Finds the filename of the latest saved checkpoint file in  `model_dir` .

#### Returns:
The full path to the latest checkpoint or  `None`  if no checkpoint wasfound.

###  `predict` 
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

Please note that interleaving two predict outputs does not work. See:[issue/20506](https://github.com/tensorflow/tensorflow/issues/20506#issuecomment-422208517)

#### Args:
- **`input_fn`** : A function that constructs the features. Prediction continuesuntil  `input_fn`  raises an end-of-input exception([ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) or  `StopIteration` ).See [Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. The function should construct and return one ofthe following:


- **`predict_keys`** : list of  `str` , name of the keys to predict. It is used ifthe [ `tf.estimator.EstimatorSpec.predictions` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/EstimatorSpec#predictions) is a  `dict` . If `predict_keys`  is used then rest of the predictions will be filteredfrom the dictionary. If  `None` , returns all.


- **`hooks`** : List of  `tf.train.SessionRunHook`  subclass instances. Used forcallbacks inside the prediction call.


- **`checkpoint_path`** : Path of a specific checkpoint to predict. If  `None` , thelatest checkpoint in  `model_dir`  is used.  If there are no checkpointsin  `model_dir` , prediction is run with newly initialized  `Variables` instead of ones restored from checkpoint.


- **`yield_single_examples`** : If  `False` , yields the whole batch as returned bythe  `model_fn`  instead of decomposing the batch into individualelements. This is useful if  `model_fn`  returns some tensors whose firstdimension is not equal to the batch size.


    - A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object: Outputs of  `Dataset`  object must havesame constraints as below.
    - features: A [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) or a dictionary of string feature name to `Tensor` . features are consumed by  `model_fn` . They should satisfythe expectation of  `model_fn`  from inputs.
    - A tuple, in which case the first item is extracted as features.


#### Yields:
Evaluated values of  `predictions`  tensors.

#### Raises:
- **`ValueError`** : If batch length of predictions is not the same and `yield_single_examples`  is  `True` .
- **`ValueError`** : If there is a conflict between  `predict_keys`  and `predictions` . For example if  `predict_keys`  is not  `None`  but[ `tf.estimator.EstimatorSpec.predictions` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/EstimatorSpec#predictions) is not a  `dict` .


###  `train` 
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

Trains a model given training data  `input_fn` .

#### Args:
- **`input_fn`** : A function that provides input data for training as minibatches.See [Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. The function should construct and return one ofthe following:
- **`hooks`** : List of  `tf.train.SessionRunHook`  subclass instances. Used forcallbacks inside the training loop.
- **`steps`** : Number of steps for which to train the model. If  `None` , trainforever or train until  `input_fn`  generates the  `tf.errors.OutOfRange` error or  `StopIteration`  exception.  `steps`  works incrementally. If youcall two times  `train(steps=10)`  then training occurs in total 20 steps.If  `OutOfRange`  or  `StopIteration`  occurs in the middle, training stopsbefore 20 steps. If you don't want to have incremental behavior pleaseset  `max_steps`  instead. If set,  `max_steps`  must be  `None` .
- **`max_steps`** : Number of total steps for which to train model. If  `None` ,train forever or train until  `input_fn`  generates the `tf.errors.OutOfRange`  error or  `StopIteration`  exception. If set, `steps`  must be  `None` . If  `OutOfRange`  or  `StopIteration`  occurs in themiddle, training stops before  `max_steps`  steps. Two calls to `train(steps=100)`  means 200 training iterations. On the other hand, twocalls to  `train(max_steps=100)`  means that the second call will not doany iteration since first call did all 100 steps.
- **`saving_listeners`** : list of  `CheckpointSaverListener`  objects. Used forcallbacks that run immediately before or after checkpoint savings.
    - A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object: Outputs of  `Dataset`  object must bea tuple  `(features, labels)`  with same constraints as below.
    - A tuple  `(features, labels)` : Where  `features`  is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) ora dictionary of string feature name to  `Tensor`  and  `labels`  is a `Tensor`  or a dictionary of string label name to  `Tensor` . Both `features`  and  `labels`  are consumed by  `model_fn` . They shouldsatisfy the expectation of  `model_fn`  from inputs.


#### Returns:
 `self` , for chaining.

#### Raises:
- **`ValueError`** : If both  `steps`  and  `max_steps`  are not  `None` .
- **`ValueError`** : If either  `steps`  or  `max_steps <= 0` .
