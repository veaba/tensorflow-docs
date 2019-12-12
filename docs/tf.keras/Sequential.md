

## Class  `Sequential` 
线性层叠。

Inherits From: [ `Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model)

**别名** : [ `tf.compat.v1.keras.Sequential` ](/api_docs/python/tf/keras/Sequential), [ `tf.compat.v1.keras.models.Sequential` ](/api_docs/python/tf/keras/Sequential), [ `tf.compat.v2.keras.Sequential` ](/api_docs/python/tf/keras/Sequential), [ `tf.compat.v2.keras.models.Sequential` ](/api_docs/python/tf/keras/Sequential), [ `tf.keras.models.Sequential` ](/api_docs/python/tf/keras/Sequential)

### 在指南中使用：
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)
- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [Overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)
- [Time series forecasting](https://tensorflow.google.cn/tutorials/structured_data/time_series)
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)


#### 参数：
- **`layers`** : list of layers to add to the model.


#### 示例：


```
 # Optionally, the first layer can receive an `input_shape` argument:
model = Sequential()
model.add(Dense(32, input_shape=(500,)))
# Afterwards, we do automatic shape inference:
model.add(Dense(32))

# This is identical to the following:
model = Sequential()
model.add(Dense(32, input_dim=500))

# And to the following:
model = Sequential()
model.add(Dense(32, batch_input_shape=(None, 500)))

# Note that you can also omit the `input_shape` argument:
# In that case the model gets built the first time you call `fit` (or other
# training and evaluation methods).
model = Sequential()
model.add(Dense(32))
model.add(Dense(32))
model.compile(optimizer=optimizer, loss=loss)
# This builds the model for the first time:
model.fit(x, y, batch_size=32, epochs=10)

# Note that when using this delayed-build pattern (no input shape specified),
# the model doesn't have any weights until the first call
# to a training/evaluation method (since it isn't yet built):
model = Sequential()
model.add(Dense(32))
model.add(Dense(32))
model.weights返回[]

# Whereas if you specify the input shape, the model gets built continuously
# as you are adding layers:
model = Sequential()
model.add(Dense(32, input_shape=(500,)))
model.add(Dense(32))
model.weights返回长度为4的列表

# When using the delayed-build pattern (no input shape specified), you can
# choose to manually build your model by calling `build(batch_input_shape)`:
model = Sequential()
model.add(Dense(32))
model.add(Dense(32))
model.build((None, 500))
model.weights返回长度为4的列表
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/sequential.py#L99-L114)

```
 __init__(
    layers=None,
    name=None
)
 
```

## 属性


###  `layers` 


###  `metrics_names` 
返回所有输出的模型显示标签。

###  `run_eagerly` 
可设置属性，指示模型是否应立即运行。

Running eagerly means that your model will be run step by step,like Python code. Your model might run slower, but it should become easierfor you to debug it by stepping into individual layer calls.

By default, we will attempt to compile your model to a static graph todeliver the best execution performance.

#### 返回：
Boolean, whether the model should run eagerly.

###  `sample_weights` 


###  `state_updates` 
Returns the  `updates`  from all layers that are stateful.

This is useful for separating training updates andstate updates, e.g. when we need to update a layer's internal stateduring prediction.

#### 返回：
更新操作列表。

###  `stateful` 


## 方法


###  `add` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/sequential.py#L132-L216)

```
 add(layer)
 
```

在层堆栈的顶部添加层实例。

#### 参数：
- **`layer`** : layer instance.


#### 加薪：
- **`TypeError`** : If  `layer`  is not a layer instance.
- **`ValueError`** : In case the  `layer`  argument does notknow its input shape.
- **`ValueError`** : In case the  `layer`  argument hasmultiple output tensors, or is already connectedsomewhere else (forbidden in  `Sequential`  models).


###  `compile` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L183-L400)

```
 compile(
    optimizer='rmsprop',
    loss=None,
    metrics=None,
    loss_weights=None,
    sample_weight_mode=None,
    weighted_metrics=None,
    target_tensors=None,
    distribute=None,
    **kwargs
)
 
```

配置用于培训的模型。

#### 参数：
- **`optimizer`** : String (name of optimizer) or optimizer instance.See [ `tf.keras.optimizers` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers).
- **`loss`** : String (name of objective function), objective function or[ `tf.losses.Loss` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Loss) instance. See [ `tf.losses` ](https://tensorflow.google.cn/api_docs/python/tf/losses). If the model hasmultiple outputs, you can use a different loss on each output bypassing a dictionary or a list of losses. The loss value that willbe minimized by the model will then be the sum of all individuallosses.
- **`metrics`** : List of metrics to be evaluated by the model during trainingand testing. Typically you will use  `metrics=['accuracy']` .To specify different metrics for different outputs of amulti-output model, you could also pass a dictionary, such as `metrics={'output_a': 'accuracy', 'output_b': ['accuracy', 'mse']}` .You can also pass a list (len = len(outputs)) of lists of metricssuch as  `metrics=[['accuracy'], ['accuracy', 'mse']]`  or `metrics=['accuracy', ['accuracy', 'mse']]` .
- **`loss_weights`** : Optional list or dictionary specifying scalarcoefficients (Python floats) to weight the loss contributionsof different model outputs.The loss value that will be minimized by the modelwill then be the *weighted sum* of all individual losses,weighted by the  `loss_weights`  coefficients.If a list, it is expected to have a 1:1 mappingto the model's outputs. If a tensor, it is expected to mapoutput names (strings) to scalar coefficients.
- **`sample_weight_mode`** : If you need to do timestep-wisesample weighting (2D weights), set this to  `"temporal"` . `None`  defaults to sample-wise weights (1D).If the model has multiple outputs, you can use a different `sample_weight_mode`  on each output by passing adictionary or a list of modes.
- **`weighted_metrics`** : List of metrics to be evaluated and weightedby sample_weight or class_weight during training and testing.
- **`target_tensors`** : By default, Keras will create placeholders for themodel's target, which will be fed with the target data duringtraining. If instead you would like to use your owntarget tensors (in turn, Keras will not expect externalNumpy data for these targets at training time), youcan specify them via the  `target_tensors`  argument. It can bea single tensor (for a single-output model), a list of tensors,or a dict mapping output names to target tensors.
- **`distribute`** : NOT SUPPORTED IN TF 2.0, please create and compile themodel under distribution strategy scope instead of passing it tocompile.
- **`**kwargs`** : Any additional arguments.


#### 加薪：
- **`ValueError`** : In case of invalid arguments for `optimizer` ,  `loss` ,  `metrics`  or  `sample_weight_mode` .


###  `evaluate` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L730-L833)

```
 evaluate(
    x=None,
    y=None,
    batch_size=None,
    verbose=1,
    sample_weight=None,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False
)
 
```

Returns the loss value &amp; metrics values for the model in test mode.

计算是分批进行的。

#### 参数：
- **`x`** : Input data. It could be:
- **`y`** : Target data. Like the input data  `x` ,it could be either Numpy array(s) or TensorFlow tensor(s).It should be consistent with  `x`  (you cannot have Numpy inputs andtensor targets, or inversely).If  `x`  is a dataset, generator or[ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instance,  `y`  should not be specified (sincetargets will be obtained from the iterator/dataset).
- **`batch_size`** : Integer or  `None` .Number of samples per gradient update.If unspecified,  `batch_size`  will default to 32.Do not specify the  `batch_size`  is your data is in theform of symbolic tensors, dataset,generators, or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instances (since they generatebatches).
- **`verbose`** : 0 or 1. Verbosity mode.0 = silent, 1 = progress bar.
- **`sample_weight`** : Optional Numpy array of weights forthe test samples, used for weighting the loss function.You can either pass a flat (1D)Numpy array with the same length as the input samples(1:1 mapping between weights and samples),or in the case of temporal data,you can pass a 2D array with shape `(samples, sequence_length)` ,to apply a different weight to every timestep of every sample.In this case you should make sure to specify `sample_weight_mode="temporal"`  in  `compile()` . This argument is notsupported when  `x`  is a dataset, instead passsample weights as the third element of  `x` .
- **`steps`** : Integer or  `None` .Total number of steps (batches of samples)before declaring the evaluation round finished.Ignored with the default value of  `None` .If x is a [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset and  `steps`  isNone, 'evaluate' will run until the dataset is exhausted.This argument is not supported with array inputs.
- **`callbacks`** : List of [ `keras.callbacks.Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback) instances.List of callbacks to apply during evaluation.See [callbacks](/api_docs/python/tf/keras/callbacks).
- **`max_queue_size`** : Integer. Used for generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)input only. Maximum size for the generator queue.If unspecified,  `max_queue_size`  will default to 10.
- **`workers`** : Integer. Used for generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) inputonly. Maximum number of processes to spin up when usingprocess-based threading. If unspecified,  `workers`  will defaultto 1. If 0, will execute the generator on the main thread.
- **`use_multiprocessing`** : Boolean. Used for generator or[ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) input only. If  `True` , use process-basedthreading. If unspecified,  `use_multiprocessing`  will default to `False` . Note that because this implementation relies onmultiprocessing, you should not pass non-picklable arguments tothe generator as they can't be passed easily to children processes.
    - A Numpy array (or array-like), or a list of arrays(in case the model has multiple inputs).
    - A TensorFlow tensor, or a list of tensors(in case the model has multiple inputs).
    - A dict mapping input names to the corresponding array/tensors,if the model has named inputs.
    - A [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset.
    - A generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instance.


#### 返回：
Scalar test loss (if the model has a single output and no metrics)or list of scalars (if the model has multiple outputsand/or metrics). The attribute  `model.metrics_names`  will give youthe display labels for the scalar outputs.

#### 加薪：
- **`ValueError`** : in case of invalid arguments.


###  `evaluate_generator` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1299-L1364)

```
 evaluate_generator(
    generator,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    verbose=0
)
 
```

在数据生成器上计算模型。

The generator should return the same kind of dataas accepted by  `test_on_batch` .

#### 参数：
- **`generator`** : Generator yielding tuples (inputs, targets)or (inputs, targets, sample_weights)or an instance of [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)object in order to avoid duplicate datawhen using multiprocessing.
- **`steps`** : Total number of steps (batches of samples)to yield from  `generator`  before stopping.Optional for  `Sequence` : if unspecified, will usethe  `len(generator)`  as a number of steps.
- **`callbacks`** : List of [ `keras.callbacks.Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback) instances.List of callbacks to apply during evaluation.See [callbacks](/api_docs/python/tf/keras/callbacks).
- **`max_queue_size`** : maximum size for the generator queue
- **`workers`** : Integer. Maximum number of processes to spin upwhen using process-based threading.If unspecified,  `workers`  will default to 1. If 0, willexecute the generator on the main thread.
- **`use_multiprocessing`** : Boolean.If  `True` , use process-based threading.If unspecified,  `use_multiprocessing`  will default to  `False` .Note that because this implementation relies on multiprocessing,you should not pass non-picklable arguments to the generatoras they can't be passed easily to children processes.
- **`verbose`** : Verbosity mode, 0 or 1.


#### 返回：
Scalar test loss (if the model has a single output and no metrics)or list of scalars (if the model has multiple outputsand/or metrics). The attribute  `model.metrics_names`  will give youthe display labels for the scalar outputs.

#### 加薪：
- **`ValueError`** : in case of invalid arguments.


#### 加薪：
- **`ValueError`** : In case the generator yields data in an invalid format.


###  `fit` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L535-L728)

```
 fit(
    x=None,
    y=None,
    batch_size=None,
    epochs=1,
    verbose=1,
    callbacks=None,
    validation_split=0.0,
    validation_data=None,
    shuffle=True,
    class_weight=None,
    sample_weight=None,
    initial_epoch=0,
    steps_per_epoch=None,
    validation_steps=None,
    validation_freq=1,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    **kwargs
)
 
```

为固定数量的阶段（数据集上的迭代）训练模型。

#### 参数：
- **`x`** : Input data. It could be:
- **`y`** : Target data. Like the input data  `x` ,it could be either Numpy array(s) or TensorFlow tensor(s).It should be consistent with  `x`  (you cannot have Numpy inputs andtensor targets, or inversely). If  `x`  is a dataset, generator,or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instance,  `y`  shouldnot be specified (since targets will be obtained from  `x` ).
- **`batch_size`** : Integer or  `None` .Number of samples per gradient update.If unspecified,  `batch_size`  will default to 32.Do not specify the  `batch_size`  if your data is in theform of symbolic tensors, datasets,generators, or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instances (since they generatebatches).
- **`epochs`** : Integer. Number of epochs to train the model.An epoch is an iteration over the entire  `x`  and  `y` data provided.Note that in conjunction with  `initial_epoch` , `epochs`  is to be understood as "final epoch".The model is not trained for a number of iterationsgiven by  `epochs` , but merely until the epochof index  `epochs`  is reached.
- **`verbose`** : 0, 1, or 2. Verbosity mode.0 = silent, 1 = progress bar, 2 = one line per epoch.Note that the progress bar is not particularly useful whenlogged to a file, so verbose=2 is recommended when not runninginteractively (eg, in a production environment).
- **`callbacks`** : List of [ `keras.callbacks.Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback) instances.List of callbacks to apply during training.See [ `tf.keras.callbacks` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks).
- **`validation_split`** : Float between 0 and 1.Fraction of the training data to be used as validation data.The model will set apart this fraction of the training data,will not train on it, and will evaluatethe loss and any model metricson this data at the end of each epoch.The validation data is selected from the last samplesin the  `x`  and  `y`  data provided, before shuffling. This argument isnot supported when  `x`  is a dataset, generator or[ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instance.
- **`validation_data`** : Data on which to evaluatethe loss and any model metrics at the end of each epoch.The model will not be trained on this data. `validation_data`  will override  `validation_split` . `validation_data`  could be:
- **`shuffle`** : Boolean (whether to shuffle the training databefore each epoch) or str (for 'batch').'batch' is a special option for dealing with thelimitations of HDF5 data; it shuffles in batch-sized chunks.Has no effect when  `steps_per_epoch`  is not  `None` .
- **`class_weight`** : Optional dictionary mapping class indices (integers)to a weight (float) value, used for weighting the loss function(during training only).This can be useful to tell the model to"pay more attention" to samples froman under-represented class.
- **`sample_weight`** : Optional Numpy array of weights forthe training samples, used for weighting the loss function(during training only). You can either pass a flat (1D)Numpy array with the same length as the input samples(1:1 mapping between weights and samples),or in the case of temporal data,you can pass a 2D array with shape `(samples, sequence_length)` ,to apply a different weight to every timestep of every sample.In this case you should make sure to specify `sample_weight_mode="temporal"`  in  `compile()` . This argument is notsupported when  `x`  is a dataset, generator, or[ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instance, instead provide the sample_weightsas the third element of  `x` .
- **`initial_epoch`** : Integer.Epoch at which to start training(useful for resuming a previous training run).
- **`steps_per_epoch`** : Integer or  `None` .Total number of steps (batches of samples)before declaring one epoch finished and starting thenext epoch. When training with input tensors such asTensorFlow data tensors, the default  `None`  is equal tothe number of samples in your dataset divided bythe batch size, or 1 if that cannot be determined. If x is a[ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset, and 'steps_per_epoch'is None, the epoch will run until the input dataset is exhausted.This argument is not supported with array inputs.
- **`validation_steps`** : Only relevant if  `validation_data`  is provided andis a [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset. Total number of steps (batches ofsamples) to draw before stopping when performing validationat the end of every epoch. If validation_data is a [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) datasetand 'validation_steps' is None, validationwill run until the  `validation_data`  dataset is exhausted.
- **`validation_freq`** : Only relevant if validation data is provided. Integeror  `collections_abc.Container`  instance (e.g. list, tuple, etc.).If an integer, specifies how many training epochs to run before anew validation run is performed, e.g.  `validation_freq=2`  runsvalidation every 2 epochs. If a Container, specifies the epochs onwhich to run validation, e.g.  `validation_freq=[1, 2, 10]`  runsvalidation at the end of the 1st, 2nd, and 10th epochs.
- **`max_queue_size`** : Integer. Used for generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)input only. Maximum size for the generator queue.If unspecified,  `max_queue_size`  will default to 10.
- **`workers`** : Integer. Used for generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) inputonly. Maximum number of processes to spin upwhen using process-based threading. If unspecified,  `workers` will default to 1. If 0, will execute the generator on the mainthread.
- **`use_multiprocessing`** : Boolean. Used for generator or[ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) input only. If  `True` , use process-basedthreading. If unspecified,  `use_multiprocessing`  will default to `False` . Note that because this implementation relies onmultiprocessing, you should not pass non-picklable arguments tothe generator as they can't be passed easily to children processes.
- **`**kwargs`** : Used for backwards compatibility.
    - A Numpy array (or array-like), or a list of arrays(in case the model has multiple inputs).
    - A TensorFlow tensor, or a list of tensors(in case the model has multiple inputs).
    - A dict mapping input names to the corresponding array/tensors,if the model has named inputs.
    - A [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset. Should return a tupleof either  `(inputs, targets)`  or `(inputs, targets, sample_weights)` .
    - A generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) returning  `(inputs, targets)` or  `(inputs, targets, sample weights)` .
    - tuple  `(x_val, y_val)`  of Numpy arrays or tensors
    - tuple  `(x_val, y_val, val_sample_weights)`  of Numpy arrays
    - datasetFor the first two cases,  `batch_size`  must be provided.For the last case,  `validation_steps`  must be provided.


#### 返回：
A  `History`  object. Its  `History.history`  attribute isa record of training loss values and metrics valuesat successive epochs, as well as validation loss valuesand validation metrics values (if applicable).

#### 加薪：
- **`RuntimeError`** : If the model was never compiled.
- **`ValueError`** : In case of mismatch between the provided input dataand what the model expects.


###  `fit_generator` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1163-L1297)

```
 fit_generator(
    generator,
    steps_per_epoch=None,
    epochs=1,
    verbose=1,
    callbacks=None,
    validation_data=None,
    validation_steps=None,
    validation_freq=1,
    class_weight=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    shuffle=True,
    initial_epoch=0
)
 
```

Fits the model on data yielded batch-by-batch by a Python generator.

The generator is run in parallel to the model, for efficiency.For instance, this allows you to do real-time data augmentationon images on CPU in parallel to training your model on GPU.

The use of [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) guarantees the orderingand guarantees the single use of every input per epoch whenusing  `use_multiprocessing=True` .

#### 参数：
- **`generator`** : A generator or an instance of  `Sequence` ([ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence))object in order to avoid duplicate datawhen using multiprocessing.The output of the generator must be either
- **`steps_per_epoch`** : Total number of steps (batches of samples)to yield from  `generator`  before declaring one epochfinished and starting the next epoch. It should typicallybe equal to the number of samples of your datasetdivided by the batch size.Optional for  `Sequence` : if unspecified, will usethe  `len(generator)`  as a number of steps.
- **`epochs`** : Integer, total number of iterations on the data.
- **`verbose`** : Verbosity mode, 0, 1, or 2.
- **`callbacks`** : List of callbacks to be called during training.
- **`validation_data`** : This can be either
- **`validation_steps`** : Only relevant if  `validation_data` is a generator. Total number of steps (batches of samples)to yield from  `generator`  before stopping.Optional for  `Sequence` : if unspecified, will usethe  `len(validation_data)`  as a number of steps.
- **`validation_freq`** : Only relevant if validation data is provided. Integeror  `collections_abc.Container`  instance (e.g. list, tuple, etc.).If an integer, specifies how many training epochs to run before anew validation run is performed, e.g.  `validation_freq=2`  runsvalidation every 2 epochs. If a Container, specifies the epochs onwhich to run validation, e.g.  `validation_freq=[1, 2, 10]`  runsvalidation at the end of the 1st, 2nd, and 10th epochs.
- **`class_weight`** : Dictionary mapping class indices to a weightfor the class.
- **`max_queue_size`** : Integer. Maximum size for the generator queue.If unspecified,  `max_queue_size`  will default to 10.
- **`workers`** : Integer. Maximum number of processes to spin upwhen using process-based threading.If unspecified,  `workers`  will default to 1. If 0, willexecute the generator on the main thread.
- **`use_multiprocessing`** : Boolean.If  `True` , use process-based threading.If unspecified,  `use_multiprocessing`  will default to  `False` .Note that because this implementation relies on multiprocessing,you should not pass non-picklable arguments to the generatoras they can't be passed easily to children processes.
- **`shuffle`** : Boolean. Whether to shuffle the order of the batches atthe beginning of each epoch. Only used with instancesof  `Sequence`  ([ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)).Has no effect when  `steps_per_epoch`  is not  `None` .
- **`initial_epoch`** : Epoch at which to start training(useful for resuming a previous training run)
    - a tuple  `(inputs, targets)` 
    - a tuple  `(inputs, targets, sample_weights)` .This tuple (a single output of the generator) makes a single batch.Therefore, all arrays in this tuple must have the same length (equalto the size of this batch). Different batches may have differentsizes.For example, the last batch of the epoch is commonly smaller thantheothers, if the size of the dataset is not divisible by the batchsize.The generator is expected to loop over its dataindefinitely. An epoch finishes when  `steps_per_epoch` batches have been seen by the model.
    - a generator for the validation data
    - a tuple (inputs, targets)
    - a tuple (inputs, targets, sample_weights).


#### 返回：
A  `History`  object.

#### 示例：


```
     def generate_arrays_from_file(path):
        while 1:
            f = open(path)
            for line in f:
                # create numpy arrays of input data
                # and labels, from each line in the file
                x1, x2, y = process_line(line)
                yield ({'input_1': x1, 'input_2': x2}, {'output': y})
            f.close()

    model.fit_generator(generate_arrays_from_file('/my_file.txt'),
                        steps_per_epoch=10000, epochs=10)
 
```

Raises:    ValueError: In case the generator yields data in an invalid format.

###  `get_layer` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L508-L539)

```
 get_layer(
    name=None,
    index=None
)
 
```

根据层的名称（唯一）或索引检索层。

If  `name`  and  `index`  are both provided,  `index`  will take precedence.Indices are based on order of horizontal graph traversal (bottom-up).

#### 参数：
- **`name`** : String, name of layer.
- **`index`** : Integer, index of layer.


#### 返回：
层实例。

#### 加薪：
- **`ValueError`** : In case of invalid layer name or index.


###  `load_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L174-L181)

```
 load_weights(
    filepath,
    by_name=False
)
 
```

Loads all layer weights, either from a TensorFlow or an HDF5 file.

###  `pop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/sequential.py#L218-L238)

```
 pop()
 
```

删除模型中的最后一层。

#### 加薪：
- **`TypeError`** : if there are no layers in the model.


###  `predict` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L835-L909)

```
 predict(
    x,
    batch_size=None,
    verbose=0,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False
)
 
```

为输入样本生成输出预测。

计算是分批进行的。

#### 参数：
- **`x`** : Input samples. It could be:
- **`batch_size`** : Integer or  `None` .Number of samples per gradient update.If unspecified,  `batch_size`  will default to 32.Do not specify the  `batch_size`  is your data is in theform of symbolic tensors, dataset,generators, or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instances (since they generatebatches).
- **`verbose`** : Verbosity mode, 0 or 1.
- **`steps`** : Total number of steps (batches of samples)before declaring the prediction round finished.Ignored with the default value of  `None` . If x is a [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data)dataset and  `steps`  is None,  `predict`  willrun until the input dataset is exhausted.
- **`callbacks`** : List of [ `keras.callbacks.Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback) instances.List of callbacks to apply during prediction.See [callbacks](/api_docs/python/tf/keras/callbacks).
- **`max_queue_size`** : Integer. Used for generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)input only. Maximum size for the generator queue.If unspecified,  `max_queue_size`  will default to 10.
- **`workers`** : Integer. Used for generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) inputonly. Maximum number of processes to spin up when usingprocess-based threading. If unspecified,  `workers`  will defaultto 1. If 0, will execute the generator on the main thread.
- **`use_multiprocessing`** : Boolean. Used for generator or[ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) input only. If  `True` , use process-basedthreading. If unspecified,  `use_multiprocessing`  will default to `False` . Note that because this implementation relies onmultiprocessing, you should not pass non-picklable arguments tothe generator as they can't be passed easily to children processes.
    - A Numpy array (or array-like), or a list of arrays(in case the model has multiple inputs).
    - A TensorFlow tensor, or a list of tensors(in case the model has multiple inputs).
    - A [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset.
    - A generator or [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) instance.


#### 返回：
预测的numpy数组。

#### 加薪：
- **`ValueError`** : In case of mismatch between the providedinput data and the model's expectations,or in case a stateful model receives a number of samplesthat is not a multiple of the batch size.


###  `predict_classes` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/sequential.py#L313-L331)

```
 predict_classes(
    x,
    batch_size=32,
    verbose=0
)
 
```

为输入样本生成类预测。

输入的样本逐批处理。

#### 参数：
- **`x`** : input data, as a Numpy array or list of Numpy arrays(if the model has multiple inputs).
- **`batch_size`** : integer.
- **`verbose`** : verbosity mode, 0 or 1.


#### 返回：
类预测的numpy数组。

###  `predict_generator` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1366-L1421)

```
 predict_generator(
    generator,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False,
    verbose=0
)
 
```

从数据生成器生成输入样本的预测。

The generator should return the same kind of data as accepted by `predict_on_batch` .

#### 参数：
- **`generator`** : Generator yielding batches of input samplesor an instance of [ `keras.utils.Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence) object in order toavoid duplicate data when using multiprocessing.
- **`steps`** : Total number of steps (batches of samples)to yield from  `generator`  before stopping.Optional for  `Sequence` : if unspecified, will usethe  `len(generator)`  as a number of steps.
- **`callbacks`** : List of [ `keras.callbacks.Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback) instances.List of callbacks to apply during prediction.See [callbacks](/api_docs/python/tf/keras/callbacks).
- **`max_queue_size`** : Maximum size for the generator queue.
- **`workers`** : Integer. Maximum number of processes to spin upwhen using process-based threading.If unspecified,  `workers`  will default to 1. If 0, willexecute the generator on the main thread.
- **`use_multiprocessing`** : Boolean.If  `True` , use process-based threading.If unspecified,  `use_multiprocessing`  will default to  `False` .Note that because this implementation relies on multiprocessing,you should not pass non-picklable arguments to the generatoras they can't be passed easily to children processes.
- **`verbose`** : verbosity mode, 0 or 1.


#### 返回：
预测的numpy数组。

#### 加薪：
- **`ValueError`** : In case the generator yields data in an invalid format.


###  `predict_on_batch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1115-L1161)

```
 predict_on_batch(x)
 
```

返回一批样本的预测。

#### 参数：
- **`x`** : Input data. It could be:
    - A Numpy array (or array-like), or a list of arrays(in case the model has multiple inputs).
    - A TensorFlow tensor, or a list of tensors(in case the model has multiple inputs).
    - A [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset.


#### 返回：
预测的numpy数组。

#### 加薪：
- **`ValueError`** : In case of mismatch between given number of inputs andexpectations of the model.


###  `predict_proba` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/sequential.py#L291-L311)

```
 predict_proba(
    x,
    batch_size=32,
    verbose=0
)
 
```

为输入样本生成类概率预测。

输入的样本逐批处理。

#### 参数：
- **`x`** : input data, as a Numpy array or list of Numpy arrays(if the model has multiple inputs).
- **`batch_size`** : integer.
- **`verbose`** : verbosity mode, 0 or 1.


#### 返回：
一系列的概率预测。

###  `reset_metrics` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L911-L919)

```
 reset_metrics()
 
```

重置度量的状态。

###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L446-L449)

```
 reset_states()
 
```

###  `save` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L923-L975)

```
 save(
    filepath,
    overwrite=True,
    include_optimizer=True,
    save_format=None,
    signatures=None,
    options=None
)
 
```

将模型保存到tensorflow savedmodel或单个hdf5文件。

#### 保存文件包括：
- The model architecture, allowing to re-instantiate the model.
- The model weights.
- The state of the optimizer, allowing to resume trainingexactly where you left off.
This allows you to save the entirety of the state of a modelin a single file.

Saved models can be reinstantiated via [ `keras.models.load_model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/models/load_model).The model returned by  `load_model` is a compiled model ready to be used (unless the saved modelwas never compiled in the first place).

#### 参数：
filepath: String, path to SavedModel or H5 file to save the model.overwrite: Whether to silently overwrite any existing file at the    target location, or provide the user with a manual prompt.include_optimizer: If True, save optimizer's state together.save_format: Either 'tf' or 'h5', indicating whether to save the model  to Tensorflow SavedModel or HDF5. The default is currently 'h5', but  will switch to 'tf' in TensorFlow 2.0. The 'tf' option is currently  disabled (use [ `tf.keras.experimental.export_saved_model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/experimental/export_saved_model) instead).

- **`signatures`** : Signatures to save with the SavedModel. Applicable to the 'tf'format only. Please see the  `signatures`  argument in[ `tf.saved_model.save` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/save) for details.
- **`options`** : Optional [ `tf.saved_model.SaveOptions` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/SaveOptions) object that specifiesoptions for saving to SavedModel.


#### 示例：


```
 from keras.models import load_model

model.save('my_model.h5')  # creates a HDF5 file 'my_model.h5'
del model删除现有模型

# returns a compiled model
# identical to the previous one
model = load_model('my_model.h5')
 
```

###  `save_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L977-L1096)

```
 save_weights(
    filepath,
    overwrite=True,
    save_format=None
)
 
```

保存所有层权重。

Either saves in HDF5 or in TensorFlow format based on the  `save_format` argument.

When saving in HDF5 format, the weight file has:  -  `layer_names`  (attribute), a list of strings      (ordered names of model layers).  - For every layer, a  `group`  named  `layer.name`       - For every such layer group, a group attribute  `weight_names` ,          a list of strings          (ordered names of weights tensor of the layer).      - For every weight in the layer, a dataset          storing the weight value, named after the weight tensor.

When saving in TensorFlow format, all objects referenced by the network aresaved in the same format as [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint), including any  `Layer` instances or  `Optimizer`  instances assigned to object attributes. Fornetworks constructed from inputs and outputs using  `tf.keras.Model(inputs,outputs)` ,  `Layer`  instances used by the network are tracked/savedautomatically. For user-defined classes which inherit from [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model), `Layer`  instances must be assigned to object attributes, typically in theconstructor. See the documentation of [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) and[ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) for details.

While the formats are the same, do not mix  `save_weights`  and[ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint). Checkpoints saved by [ `Model.save_weights` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#save_weights) should beloaded using [ `Model.load_weights` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#load_weights). Checkpoints saved using[ `tf.train.Checkpoint.save` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save) should be restored using the corresponding[ `tf.train.Checkpoint.restore` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#restore). Prefer [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) over `save_weights`  for training checkpoints.

The TensorFlow format matches objects and variables by starting at a rootobject,  `self`  for  `save_weights` , and greedily matching attributenames. For [ `Model.save` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#save) this is the  `Model` , and for [ `Checkpoint.save` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save) thisis the  `Checkpoint`  even if the  `Checkpoint`  has a model attached. Thismeans saving a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) using  `save_weights`  and loading into a[ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) with a  `Model`  attached (or vice versa) will not matchthe  `Model` 's variables. See the [guide to trainingcheckpoints](https://tensorflow.google.cn/alpha/guide/checkpoints) for detailson the TensorFlow format.

#### 参数：
- **`filepath`** : String, path to the file to save the weights to. When savingin TensorFlow format, this is the prefix used for checkpoint files(multiple files are generated). Note that the '.h5' suffix causesweights to be saved in HDF5 format.
- **`overwrite`** : Whether to silently overwrite any existing file at thetarget location, or provide the user with a manual prompt.
- **`save_format`** : Either 'tf' or 'h5'. A  `filepath`  ending in '.h5' or'.keras' will default to HDF5 if  `save_format`  is  `None` . Otherwise `None`  defaults to 'tf'.


#### 加薪：
- **`ImportError`** : If h5py is not available when attempting to save in HDF5format.
- **`ValueError`** : For invalid/unknown format arguments.


###  `summary` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L1238-L1265)

```
 summary(
    line_length=None,
    positions=None,
    print_fn=None
)
 
```

打印网络的字符串摘要。

#### 参数：
- **`line_length`** : Total length of printed lines(e.g. set this to adapt the display to differentterminal window sizes).
- **`positions`** : Relative or absolute positions of log elementsin each line. If not provided,defaults to  `[.33, .55, .67, 1.]` .
- **`print_fn`** : Print function to use. Defaults to  `print` .It will be called on each line of the summary.You can set it to a custom functionin order to capture the string summary.


#### 加薪：
- **`ValueError`** : if  `summary()`  is called before the model is built.


###  `test_on_batch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L1027-L1113)

```
 test_on_batch(
    x,
    y=None,
    sample_weight=None,
    reset_metrics=True
)
 
```

在一批样品上测试模型。

#### 参数：
- **`x`** : Input data. It could be:
- **`y`** : Target data. Like the input data  `x` ,it could be either Numpy array(s) or TensorFlow tensor(s).It should be consistent with  `x`  (you cannot have Numpy inputs andtensor targets, or inversely). If  `x`  is a dataset  `y`  shouldnot be specified (since targets will be obtained from the iterator).
- **`sample_weight`** : Optional array of the same length as x, containingweights to apply to the model's loss for each sample.In the case of temporal data, you can pass a 2D arraywith shape (samples, sequence_length),to apply a different weight to every timestep of every sample.In this case you should make sure to specifysample_weight_mode="temporal" in compile(). This argument is notsupported when  `x`  is a dataset.
- **`reset_metrics`** : If  `True` , the metrics returned will be only for thisbatch. If  `False` , the metrics will be statefully accumulated acrossbatches.
    - A Numpy array (or array-like), or a list of arrays(in case the model has multiple inputs).
    - A TensorFlow tensor, or a list of tensors(in case the model has multiple inputs).
    - A dict mapping input names to the corresponding array/tensors,if the model has named inputs.
    - A [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset.


#### 返回：
Scalar test loss (if the model has a single output and no metrics)or list of scalars (if the model has multiple outputsand/or metrics). The attribute  `model.metrics_names`  will give youthe display labels for the scalar outputs.

#### 加薪：
- **`ValueError`** : In case of invalid user-provided arguments.


###  `to_json` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L1196-L1211)

```
 to_json(**kwargs)
 
```

返回包含网络配置的json字符串。

To load a network from a JSON save file, use[ `keras.models.model_from_json(json_string, custom_objects={})` ](https://tensorflow.google.cn/api_docs/python/tf/keras/models/model_from_json).

#### 参数：
- **`**kwargs`** : Additional keyword argumentsto be passed to  `json.dumps()` .


#### 返回：
一个json字符串。

###  `to_yaml` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/network.py#L1213-L1236)

```
 to_yaml(**kwargs)
 
```

返回包含网络配置的yaml字符串。

To load a network from a yaml save file, use[ `keras.models.model_from_yaml(yaml_string, custom_objects={})` ](https://tensorflow.google.cn/api_docs/python/tf/keras/models/model_from_yaml).

 `custom_objects`  should be a dictionary mappingthe names of custom losses / layers / etc to the correspondingfunctions / classes.

#### 参数：
- **`**kwargs`** : Additional keyword argumentsto be passed to  `yaml.dump()` .


#### 返回：
一根山药线。

#### 加薪：
- **`ImportError`** : if yaml module is not found.


###  `train_on_batch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/training.py#L921-L1025)

```
 train_on_batch(
    x,
    y=None,
    sample_weight=None,
    class_weight=None,
    reset_metrics=True
)
 
```

对一批数据运行单一渐变更新。

#### 参数：
- **`x`** : Input data. It could be:
- **`y`** : Target data. Like the input data  `x` , it could be either Numpyarray(s) or TensorFlow tensor(s). It should be consistent with  `x` (you cannot have Numpy inputs and tensor targets, or inversely). If `x`  is a dataset,  `y`  should not be specified(since targets will be obtained from the iterator).
- **`sample_weight`** : Optional array of the same length as x, containingweights to apply to the model's loss for each sample. In the case oftemporal data, you can pass a 2D array with shape (samples,sequence_length), to apply a different weight to every timestep ofevery sample. In this case you should make sure to specifysample_weight_mode="temporal" in compile(). This argument is notsupported when  `x`  is a dataset.
- **`class_weight`** : Optional dictionary mapping class indices (integers) to aweight (float) to apply to the model's loss for the samples from thisclass during training. This can be useful to tell the model to "paymore attention" to samples from an under-represented class.
- **`reset_metrics`** : If  `True` , the metrics returned will be only for thisbatch. If  `False` , the metrics will be statefully accumulated acrossbatches.
    - A Numpy array (or array-like), or a list of arrays(in case the model has multiple inputs).
    - A TensorFlow tensor, or a list of tensors(in case the model has multiple inputs).
    - A dict mapping input names to the corresponding array/tensors,if the model has named inputs.
    - A [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) dataset.


#### 返回：
Scalar training loss(if the model has a single output and no metrics)or list of scalars (if the model has multiple outputsand/or metrics). The attribute  `model.metrics_names`  will give youthe display labels for the scalar outputs.

#### 加薪：
- **`ValueError`** : In case of invalid user-provided arguments.
