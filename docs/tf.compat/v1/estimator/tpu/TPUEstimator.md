

## Class  `TPUEstimator` 
有TPU支持的估计器。

Inherits From: [ `Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/Estimator)

TPUEstimator also supports training on CPU and GPU. You don't need to definea separate [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator).

TPUEstimator handles many of the details of running on TPU devices, such asreplicating inputs and models for each core, and returning to hostperiodically to run hooks.

TPUEstimator transforms a global batch size in params to a per-shard batchsize when calling the  `input_fn`  and  `model_fn` . Users should specifyglobal batch size in constructor, and then get the batch size for each shardin  `input_fn`  and  `model_fn`  by  `params['batch_size']` .

- For training,  `model_fn`  gets per-core batch size;  `input_fn`  may getper-core or per-host batch size depending on  `per_host_input_for_training` in  `TPUConfig`  (See docstring for TPUConfig for details).


- For evaluation and prediction,  `model_fn`  gets per-core batch size and `input_fn`  get per-host batch size.


# Evaluation
 `model_fn`  should return  `TPUEstimatorSpec` , which expects the  `eval_metrics` for TPU evaluation. If eval_on_tpu is False, the evaluation will execute onCPU or GPU; in this case the following discussion on TPU evaluation does notapply.

 `TPUEstimatorSpec.eval_metrics`  is a tuple of  `metric_fn`  and  `tensors` , where `tensors`  could be a list of any nested structure of  `Tensor` s (See `TPUEstimatorSpec`  for details).   `metric_fn`  takes the  `tensors`  and returnsa dict from metric string name to the result of calling a metric function,namely a  `(metric_tensor, update_op)`  tuple.

One can set  `use_tpu`  to  `False`  for testing. All training, evaluation, andpredict will be executed on CPU.  `input_fn`  and  `model_fn`  will receive `train_batch_size`  or  `eval_batch_size`  unmodified as  `params['batch_size']` .

#### 当前限制：


1. TPU evaluation only works on a single host (one TPU worker) exceptBROADCAST mode.


2.  `input_fn`  for evaluation should **NOT**  raise an end-of-input exception( `OutOfRangeError`  or  `StopIteration` ). And all evaluation steps and allbatches should have the same size.


## 示例（mnist）：


```
 # The metric Fn which runs on CPU.
def metric_fn(labels, logits):
  predictions = tf.argmax(logits, 1)
  return {
    'accuracy': tf.compat.v1.metrics.precision(
        labels=labels, predictions=predictions),
  }

# Your model Fn which runs on TPU (eval_metrics is list in this example)
def model_fn(features, labels, mode, config, params):
  ...
  logits = ...

  if mode = tf.estimator.ModeKeys.EVAL:
    return tpu_estimator.TPUEstimatorSpec(
        mode=mode,
        loss=loss,
        eval_metrics=(metric_fn, [labels, logits]))

# or specify the eval_metrics tensors as dict.
def model_fn(features, labels, mode, config, params):
  ...
  final_layer_output = ...

  if mode = tf.estimator.ModeKeys.EVAL:
    return tpu_estimator.TPUEstimatorSpec(
        mode=mode,
        loss=loss,
        eval_metrics=(metric_fn, {
            'labels': labels,
            'logits': final_layer_output,
        }))
 
```

# Prediction
Prediction on TPU is an experimental feature to support large batch inference.It is not designed for latency-critical system. In addition, due to someusability issues, for prediction with small dataset, CPU  `.predict` , i.e.,creating a new  `TPUEstimator`  instance with  `use_tpu=False` , might be moreconvenient.


**Note:**  In contrast to TPU training/evaluation, the  `input_fn`  for prediction*should* raise an end-of-input exception ( `OutOfRangeError`  or `StopIteration` ), which serves as the stopping signal to  `TPUEstimator` . To beprecise, the ops created by  `input_fn`  produce one batch of the data.The  `predict()`  API processes one batch at a time. When reaching the end ofthe data source, an end-of-input exception should be raised by one of theseoperations. The user usually does not need to do this manually. As long as thedataset is not repeated forever, the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API will raise an end-of-inputexception automatically after the last batch has been produced.

**Note:**  Estimator.predict returns a Python generator. Please consume all thedata from the generator so that TPUEstimator can shutdown the TPU systemproperly for user.


#### 当前限制：


1. TPU prediction only works on a single host (one TPU worker).


2.  `input_fn`  must return a  `Dataset`  instance rather than  `features` . Infact, .train() and .evaluate() also support Dataset as return value.


## 示例（mnist）：


```
 height = 32
width = 32
total_examples = 100

def predict_input_fn(params):
  batch_size = params['batch_size']

  images = tf.random.uniform(
      [total_examples, height, width, 3], minval=-1, maxval=1)

  dataset = tf.data.Dataset.from_tensor_slices(images)
  dataset = dataset.map(lambda images: {'image': images})

  dataset = dataset.batch(batch_size)
  return dataset

def model_fn(features, labels, params, mode):
   # Generate predictions, called 'output', from features['image']

  if mode == tf.estimator.ModeKeys.PREDICT:
    return tf.contrib.tpu.TPUEstimatorSpec(
        mode=mode,
        predictions={
            'predictions': output,
            'is_padding': features['is_padding']
        })

tpu_est = TPUEstimator(
    model_fn=model_fn,
    ...,
    predict_batch_size=16)

# Fully consume the generator so that TPUEstimator can shutdown the TPU
# system.
for item in tpu_est.predict(input_fn=input_fn):
  # Filter out item if the `is_padding` is 1.
  # Process the 'predictions'
 
```

# Exporting
 `export_saved_model`  exports 2 metagraphs, one with [ `saved_model.SERVING` ](/api_docs/python/tf/saved_model#SERVING), andanother with [ `saved_model.SERVING` ](/api_docs/python/tf/saved_model#SERVING) and [ `saved_model.TPU` ](/api_docs/python/tf/saved_model#TPU) tags. At servingtime, these tags are used to select the appropriate metagraph to load.

Before running the graph on TPU, the TPU system needs to be initialized. IfTensorFlow Serving model-server is used, this is done automatically. If not,please use  `session.run(tpu.initialize_system())` .

api有两个版本：exportsavedmodelapiversion.v1和v2。

In V1, the exported CPU graph is  `model_fn`  as it is. The exported TPU graphwraps  `tpu.rewrite()`  and  `TPUPartitionedCallOp`  around  `model_fn`  so `model_fn`  is on TPU by default. To place ops on CPU, `tpu.outside_compilation(host_call, logits)`  can be used.

#### 示例：


```
 def model_fn(features, labels, mode, config, params):
  ...
  logits = ...
  export_outputs = {
    'logits': export_output_lib.PredictOutput(
      {'logits': logits})
  }

  def host_call(logits):
    class_ids = math_ops.argmax(logits)
    classes = string_ops.as_string(class_ids)
    export_outputs['classes'] =
      export_output_lib.ClassificationOutput(classes=classes)

  tpu.outside_compilation(host_call, logits)

  ...
 
```

In V2,  `export_saved_model()`  sets up  `params['use_tpu']`  flag to let the userknow if the code is exporting to TPU (or not). When  `params['use_tpu']`  is `True` , users need to call  `tpu.rewrite()` ,  `TPUPartitionedCallOp`  and/or `batch_function()` . Alternatively use  `inference_on_tpu()`  which is aconvenience wrapper of the three.

```
   def model_fn(features, labels, mode, config, params):
    ...
    # This could be some pre-processing on CPU like calls to input layer with
    # embedding columns.
    x2 = features['x'] * 2

    def computation(input_tensor):
      return layers.dense(
          input_tensor, 1, kernel_initializer=init_ops.zeros_initializer())

    inputs = [x2]
    if params['use_tpu']:
      predictions = array_ops.identity(
          tpu_estimator.inference_on_tpu(computation, inputs,
          num_batch_threads=1, max_batch_size=2, batch_timeout_micros=100),
          name='predictions')
    else:
      predictions = array_ops.identity(
          computation(*inputs), name='predictions')
    key = signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY
    export_outputs = {
        key: export_lib.PredictOutput({'prediction': predictions})
    }
    ...
 
```

TIP: V2 is recommended as it is more flexible (eg: batching, etc).

##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_estimator.py)

```
 __init__(
    model_fn=None,
    model_dir=None,
    config=None,
    params=None,
    use_tpu=True,
    train_batch_size=None,
    eval_batch_size=None,
    predict_batch_size=None,
    batch_axis=None,
    eval_on_tpu=True,
    export_to_tpu=True,
    export_to_cpu=True,
    warm_start_from=None,
    embedding_config_spec=None,
    export_saved_model_api_version=ExportSavedModelApiVersion.V1
)
 
```

Constructs an  `TPUEstimator`  instance.

#### 参数：
- **`model_fn`** : Model function as required by  `Estimator`  which returnsEstimatorSpec or TPUEstimatorSpec.  `training_hooks` , 'evaluation_hooks',and  `prediction_hooks`  must not capure any TPU Tensor inside themodel_fn.
- **`model_dir`** : Directory to save model parameters, graph and etc. This canalso be used to load checkpoints from the directory into a estimator tocontinue training a previously saved model. If  `None` , the model_dir in `config`  will be used if set. If both are set, they must be same. Ifboth are  `None` , a temporary directory will be used.
- **`config`** : An  `tpu_config.RunConfig`  configuration object. Cannot be  `None` .
- **`params`** : An optional  `dict`  of hyper parameters that will be passed into `input_fn`  and  `model_fn` .  Keys are names of parameters, values arebasic python types. There are reserved keys for  `TPUEstimator` ,including 'batch_size'.
- **`use_tpu`** : A bool indicating whether TPU support is enabled. Currently, -TPU training and evaluation respect this bit, but eval_on_tpu canoverride execution of eval. See below.
- **`train_batch_size`** : An int representing the global training batch size.TPUEstimator transforms this global batch size to a per-shard batchsize, as params['batch_size'], when calling  `input_fn`  and  `model_fn` .Cannot be  `None`  if  `use_tpu`  is  `True` . Must be divisible by totalnumber of replicas.
- **`eval_batch_size`** : An int representing evaluation batch size. Must bedivisible by total number of replicas.
- **`predict_batch_size`** : An int representing the prediction batch size. Must bedivisible by total number of replicas.
- **`batch_axis`** : A python tuple of int values describing how each tensorproduced by the Estimator  `input_fn`  should be split across the TPUcompute shards. For example, if your input_fn produced (images, labels)where the images tensor is in  `HWCN`  format, your shard dimensions wouldbe [3, 0], where 3 corresponds to the  `N`  dimension of your imagesTensor, and 0 corresponds to the dimension along which to split thelabels to match up with the corresponding images. If None is supplied,and per_host_input_for_training is True, batches will be sharded basedon the major dimension. If tpu_config.per_host_input_for_training isFalse or  `PER_HOST_V2` , batch_axis is ignored.
- **`eval_on_tpu`** : If False, evaluation runs on CPU or GPU. In this case, themodel_fn must return  `EstimatorSpec`  when called with  `mode`  as  `EVAL` .
- **`export_to_tpu`** : If True,  `export_saved_model()`  exports a metagraph forserving on TPU. Note that unsupported export modes such as EVAL will beignored. For those modes, only a CPU model will be exported.Currently, export_to_tpu only supports PREDICT.
- **`export_to_cpu`** : If True,  `export_saved_model()`  exports a metagraph forserving on CPU.
- **`warm_start_from`** : Optional string filepath to a checkpoint or SavedModel towarm-start from, or a [ `tf.estimator.WarmStartSettings` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/WarmStartSettings) object to fullyconfigure warm-starting.  If the string filepath is provided instead ofa  `WarmStartSettings` , then all variables are warm-started, and it isassumed that vocabularies and Tensor names are unchanged.
- **`embedding_config_spec`** : Optional EmbeddingConfigSpec instanceto support using TPU embedding.
- **`export_saved_model_api_version`** : ExportSavedModelApiVersion, V1 or V2.With V1,  `export_saved_model()`  adds rewrite() and TPUPartitionedCallOp()for user; while in v2, user is expected to add rewrite(),TPUPartitionedCallOp() etc in their model_fn.A helper function  `inference_on_tpu`  is provided for V2.brn_tpu_estimator.py includes examples for both versionsi.e. TPUEstimatorExportTest and TPUEstimatorExportV2Test.


#### 加薪：
- **`ValueError`** :  `params`  has reserved keys already.


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
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_estimator.py)

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
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_estimator.py)

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
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_estimator.py)

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
