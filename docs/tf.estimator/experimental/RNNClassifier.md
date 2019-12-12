

## Class  `RNNClassifier` 
Tensorflow rnn模型的分类器。

Inherits From: [ `RNNEstimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/RNNEstimator)

Trains a recurrent neural network model to classify instances into one ofmultiple classes.

#### 示例：


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

Input of  `train`  and  `evaluate`  should have following features,otherwise there will be a  `KeyError` :

- if  `weight_column`  is not  `None` , a feature with `key=weight_column`  whose value is a  `Tensor` .
- for each  `column`  in  `sequence_feature_columns` :
- for each  `column`  in  `context_feature_columns` :
    - a feature with  `key=column.name`  whose  `value`  is a  `SparseTensor` .
    - if  `column`  is a  `CategoricalColumn` , a feature with  `key=column.name` whose  `value`  is a  `SparseTensor` .
    - if  `column`  is a  `WeightedCategoricalColumn` , two features: the firstwith  `key`  the id column name, the second with  `key`  the weight columnname. Both features'  `value`  must be a  `SparseTensor` .
    - if  `column`  is a  `DenseColumn` , a feature with  `key=column.name` whose  `value`  is a  `Tensor` .
利用软最大交叉熵计算损耗。

#### 迫切的兼容性
估计器与紧急执行不兼容。

##  `__init__` 
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

Initializes a  `RNNClassifier`  instance.

#### 参数：
- **`sequence_feature_columns`** : An iterable containing the  `FeatureColumn` sthat represent sequential input. All items in the set should either besequence columns (e.g.  `sequence_numeric_column` ) or constructed fromone (e.g.  `embedding_column`  with  `sequence_categorical_column_*`  asinput).
- **`context_feature_columns`** : An iterable containing the  `FeatureColumn` sfor contextual input. The data represented by these columns will bereplicated and given to the RNN at each timestep. These columns must beinstances of classes derived from  `DenseColumn`  such as `numeric_column` , not the sequential variants.
- **`units`** : Iterable of integer number of hidden units per RNN layer. Ifset,  `cell_type`  must also be specified and  `rnn_cell_fn`  must be `None` .
- **`cell_type`** : A class producing a RNN cell or a string specifying the celltype. Supported strings are:  `'simple_rnn'` ,  `'lstm'` , and  `'gru'` . Ifset,  `units`  must also be specified and  `rnn_cell_fn`  must be  `None` .
- **`rnn_cell_fn`** : A function that returns a RNN cell instance that will be usedto construct the RNN. If set,  `units`  and  `cell_type`  cannot be set.This is for advanced users who need additional customization beyond `units`  and  `cell_type` . Note that [ `tf.keras.layers.StackedRNNCells` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/StackedRNNCells) isneeded for stacked RNNs.
- **`return_sequences`** : A boolean indicating whether to return the last outputin the output sequence, or the full sequence. Note that if True, `weight_column`  must be None or a string.
- **`model_dir`** : Directory to save model parameters, graph and etc. This canalso be used to load checkpoints from the directory into a estimator tocontinue training a previously saved model.
- **`n_classes`** : Number of label classes. Defaults to 2, namely binaryclassification. Must be > 1.
- **`weight_column`** : A string or a  `NumericColumn`  created by[ `tf.feature_column.numeric_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/numeric_column) defining feature column representingweights. It is used to down weight or boost examples during training. Itwill be multiplied by the loss of the example. If it is a string, it isused as a key to fetch weight tensor from the  `features` . If it is a `NumericColumn` , raw tensor is fetched by key  `weight_column.key` , thenweight_column.normalizer_fn is applied on it to get weight tensor.
- **`label_vocabulary`** : A list of strings represents possible label values. Ifgiven, labels must be string type and have any value in `label_vocabulary` . If it is not given, that means labels arealready encoded as integer or float within [0, 1] for  `n_classes=2`  andencoded as integer values in {0, 1,..., n_classes-1} for  `n_classes` >2 .Also there will be errors if vocabulary is not provided and labels arestring.
- **`optimizer`** : An instance of  `tf.Optimizer`  or string specifying optimizertype. Defaults to Adagrad optimizer.
- **`loss_reduction`** : One of [ `tf.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) except  `NONE` . Describes howto reduce training loss over batch. Defaults to  `SUM_OVER_BATCH_SIZE` .
- **`sequence_mask`** : A string with the name of the sequence mask tensor. If `sequence_mask`  is in the features dictionary, the provided tensor isused, otherwise the sequence mask is computed from the length ofsequential features. The sequence mask is used in evaluation andtraining mode to aggregate loss and metrics computation while excludingpadding steps. It is also added to the predictions dictionary inprediction mode to indicate which steps are padding.
- **`config`** :  `RunConfig`  object to configure the runtime settings.
Note that a RNN cell has:  - a  `call`  method.  - a  `state_size`  attribute.  - a  `output_size`  attribute.  - a  `get_initial_state`  method.See the documentation on [ `tf.keras.layers.RNN` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/RNN) for more details.

#### 加薪：
- **`ValueError`** : If  `units` ,  `cell_type` , and  `rnn_cell_fn`  are notcompatible.


## 属性


###  `config` 


###  `model_dir` 


###  `model_fn` 
Returns the  `model_fn`  which is bound to  `self.params` .

#### 返回：
The  `model_fn`  with following signature:   `def model_fn(features, labels, mode, config)` 

###  `params` 


## 方法


###  `eval_dir` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 eval_dir(name=None)
 
```

显示转储评估指标的目录名。

#### 参数：
- **`name`** : Name of the evaluation if user needs to run multiple evaluations ondifferent data sets, such as on training data vs test data. Metrics fordifferent evaluations are saved in separate folders, and appearseparately in tensorboard.


#### 返回：
作为目录路径的字符串包含评估度量。

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


#### 参数：
- **`input_fn`** : A function that constructs the input data for evaluation. See[Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. Thefunction should construct and return one of the following:  * A[ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object: Outputs of  `Dataset`  object must be a tuple `(features, labels)`  with same constraints as below. * A tuple `(features, labels)` : Where  `features`  is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) or a dictionaryof string feature name to  `Tensor`  and  `labels`  is a  `Tensor`  or adictionary of string label name to  `Tensor` . Both  `features`  and `labels`  are consumed by  `model_fn` . They should satisfy the expectationof  `model_fn`  from inputs.
- **`steps`** : Number of steps for which to evaluate model. If  `None` , evaluatesuntil  `input_fn`  raises an end-of-input exception.
- **`hooks`** : List of  `tf.train.SessionRunHook`  subclass instances. Used forcallbacks inside the evaluation call.
- **`checkpoint_path`** : Path of a specific checkpoint to evaluate. If  `None` , thelatest checkpoint in  `model_dir`  is used.  If there are no checkpointsin  `model_dir` , evaluation is run with newly initialized  `Variables` instead of ones restored from checkpoint.
- **`name`** : Name of the evaluation if user needs to run multiple evaluations ondifferent data sets, such as on training data vs test data. Metrics fordifferent evaluations are saved in separate folders, and appearseparately in tensorboard.


#### 返回：
A dict containing the evaluation metrics specified in  `model_fn`  keyed byname, as well as an entry  `global_step`  which contains the value of theglobal step for which this evaluation was performed. For cannedestimators, the dict contains the  `loss`  (mean loss per mini-batch) andthe  `average_loss`  (mean loss per sample). Canned classifiers also returnthe  `accuracy` . Canned regressors also return the  `label/mean`  and the `prediction/mean` .

#### 加薪：
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

#### 参数：
- **`export_dir_base`** : A string containing a directory in which to createtimestamped subdirectories containing exported  `SavedModel` s.
- **`input_receiver_fn_map`** : dict of [ `tf.estimator.ModeKeys` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys) to `input_receiver_fn`  mappings, where the  `input_receiver_fn`  is afunction that takes no arguments and returns the appropriate subclass of `InputReceiver` .
- **`assets_extra`** : A dict specifying how to populate the assets.extra directorywithin the exported  `SavedModel` , or  `None`  if no extra assets areneeded.
- **`as_text`** : whether to write the  `SavedModel`  proto in text format.
- **`checkpoint_path`** : The checkpoint path to export.  If  `None`  (the default),the most recent checkpoint found within the model directory is chosen.


#### 返回：
导出目录的字符串路径。

#### 加薪：
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

#### 参数：
- **`export_dir_base`** : A string containing a directory in which to createtimestamped subdirectories containing exported  `SavedModel` s.
- **`serving_input_receiver_fn`** : A function that takes no argument and returns a[ `tf.estimator.export.ServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ServingInputReceiver) or[ `tf.estimator.export.TensorServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/TensorServingInputReceiver).
- **`assets_extra`** : A dict specifying how to populate the assets.extra directorywithin the exported  `SavedModel` , or  `None`  if no extra assets areneeded.
- **`as_text`** : whether to write the  `SavedModel`  proto in text format.
- **`checkpoint_path`** : The checkpoint path to export.  If  `None`  (the default),the most recent checkpoint found within the model directory is chosen.
- **`experimental_mode`** : [ `tf.estimator.ModeKeys` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys) value indicating with modewill be exported. Note that this feature is experimental.


#### 返回：
导出目录的字符串路径。

#### 加薪：
- **`ValueError`** : if no  `serving_input_receiver_fn`  is provided, no `export_outputs`  are provided, or no checkpoint can be found.


###  `export_savedmodel` 
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

Exports inference graph as a  `SavedModel`  into the given dir. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:This function has been renamed, use  `export_saved_model`  instead.
For a detailed guide, see[Using SavedModel with Estimators](https://tensorflow.org/guide/saved_model#using_savedmodel_with_estimators).

This method builds a new graph by first calling the `serving_input_receiver_fn`  to obtain feature  `Tensor` s, and then callingthis  `Estimator` 's  `model_fn`  to generate the model graph based on thosefeatures. It restores the given checkpoint (or, lacking that, the mostrecent checkpoint) into this graph in a fresh session.  Finally it createsa timestamped export directory below the given  `export_dir_base` , and writesa  `SavedModel`  into it containing a single  `tf.MetaGraphDef`  saved from thissession.

The exported  `MetaGraphDef`  will provide one  `SignatureDef`  for eachelement of the  `export_outputs`  dict returned from the  `model_fn` , namedusingthe same keys.  One of these keys is always `tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY` ,indicating whichsignature will be served when a serving request does not specify one.For each signature, the outputs are provided by the corresponding[ `tf.estimator.export.ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)s, and the inputs are always the inputreceivers provided bythe  `serving_input_receiver_fn` .

Extra assets may be written into the  `SavedModel`  via the  `assets_extra` argument.  This should be a dict, where each key gives a destination path(including the filename) relative to the assets.extra directory.  Thecorresponding value gives the full path of the source file to be copied.For example, the simple case of copying a single file without renaming itis specified as  `{'my_asset_file.txt': '/path/to/my_asset_file.txt'}` .

#### 参数：
- **`export_dir_base`** : A string containing a directory in which to createtimestamped subdirectories containing exported  `SavedModel` s.
- **`serving_input_receiver_fn`** : A function that takes no argument and returns a[ `tf.estimator.export.ServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ServingInputReceiver) or[ `tf.estimator.export.TensorServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/TensorServingInputReceiver).
- **`assets_extra`** : A dict specifying how to populate the assets.extra directorywithin the exported  `SavedModel` , or  `None`  if no extra assets areneeded.
- **`as_text`** : whether to write the  `SavedModel`  proto in text format.
- **`checkpoint_path`** : The checkpoint path to export.  If  `None`  (the default),the most recent checkpoint found within the model directory is chosen.
- **`strip_default_attrs`** : Boolean. If  `True` , default-valued attributes will beremoved from the  `NodeDef` s. For a detailed guide, see [StrippingDefault-Valued Attributes](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md#stripping-default-valued-attributes).


#### 返回：
导出目录的字符串路径。

#### 加薪：
- **`ValueError`** : if no  `serving_input_receiver_fn`  is provided, no `export_outputs`  are provided, or no checkpoint can be found.


###  `get_variable_names` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 get_variable_names()
 
```

返回此模型中所有变量名的列表。

#### 返回：
名单。

#### 加薪：
- **`ValueError`** : If the  `Estimator`  has not produced a checkpoint yet.


###  `get_variable_value` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 get_variable_value(name)
 
```

返回按名称给定的变量的值。

#### 参数：
- **`name`** : string or a list of string, name of the tensor.


#### 返回：
Numpy array - value of the tensor.

#### 加薪：
- **`ValueError`** : If the  `Estimator`  has not produced a checkpoint yet.


###  `latest_checkpoint` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 latest_checkpoint()
 
```

Finds the filename of the latest saved checkpoint file in  `model_dir` .

#### 返回：
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

生成给定特征的预测。

Please note that interleaving two predict outputs does not work. See:[issue/20506](https://github.com/tensorflow/tensorflow/issues/20506#issuecomment-422208517)

#### 参数：
- **`input_fn`** : A function that constructs the features. Prediction continuesuntil  `input_fn`  raises an end-of-input exception([ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) or  `StopIteration` ).See [Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. The function should construct and return one ofthe following:


- **`predict_keys`** : list of  `str` , name of the keys to predict. It is used ifthe [ `tf.estimator.EstimatorSpec.predictions` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/EstimatorSpec#predictions) is a  `dict` . If `predict_keys`  is used then rest of the predictions will be filteredfrom the dictionary. If  `None` , returns all.


- **`hooks`** : List of  `tf.train.SessionRunHook`  subclass instances. Used forcallbacks inside the prediction call.


- **`checkpoint_path`** : Path of a specific checkpoint to predict. If  `None` , thelatest checkpoint in  `model_dir`  is used.  If there are no checkpointsin  `model_dir` , prediction is run with newly initialized  `Variables` instead of ones restored from checkpoint.


- **`yield_single_examples`** : If  `False` , yields the whole batch as returned bythe  `model_fn`  instead of decomposing the batch into individualelements. This is useful if  `model_fn`  returns some tensors whose firstdimension is not equal to the batch size.


    - A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object: Outputs of  `Dataset`  object must havesame constraints as below.
    - features: A [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) or a dictionary of string feature name to `Tensor` . features are consumed by  `model_fn` . They should satisfythe expectation of  `model_fn`  from inputs.
    - A tuple, in which case the first item is extracted as features.


#### 收益率：
Evaluated values of  `predictions`  tensors.

#### 加薪：
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

#### 参数：
- **`input_fn`** : A function that provides input data for training as minibatches.See [Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. The function should construct and return one ofthe following:
- **`hooks`** : List of  `tf.train.SessionRunHook`  subclass instances. Used forcallbacks inside the training loop.
- **`steps`** : Number of steps for which to train the model. If  `None` , trainforever or train until  `input_fn`  generates the  `tf.errors.OutOfRange` error or  `StopIteration`  exception.  `steps`  works incrementally. If youcall two times  `train(steps=10)`  then training occurs in total 20 steps.If  `OutOfRange`  or  `StopIteration`  occurs in the middle, training stopsbefore 20 steps. If you don't want to have incremental behavior pleaseset  `max_steps`  instead. If set,  `max_steps`  must be  `None` .
- **`max_steps`** : Number of total steps for which to train model. If  `None` ,train forever or train until  `input_fn`  generates the `tf.errors.OutOfRange`  error or  `StopIteration`  exception. If set, `steps`  must be  `None` . If  `OutOfRange`  or  `StopIteration`  occurs in themiddle, training stops before  `max_steps`  steps. Two calls to `train(steps=100)`  means 200 training iterations. On the other hand, twocalls to  `train(max_steps=100)`  means that the second call will not doany iteration since first call did all 100 steps.
- **`saving_listeners`** : list of  `CheckpointSaverListener`  objects. Used forcallbacks that run immediately before or after checkpoint savings.
    - A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object: Outputs of  `Dataset`  object must bea tuple  `(features, labels)`  with same constraints as below.
    - A tuple  `(features, labels)` : Where  `features`  is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) ora dictionary of string feature name to  `Tensor`  and  `labels`  is a `Tensor`  or a dictionary of string label name to  `Tensor` . Both `features`  and  `labels`  are consumed by  `model_fn` . They shouldsatisfy the expectation of  `model_fn`  from inputs.


#### 返回：
 `self` , for chaining.

#### 加薪：
- **`ValueError`** : If both  `steps`  and  `max_steps`  are not  `None` .
- **`ValueError`** : If either  `steps`  or  `max_steps <= 0` .
