

## Class  `TensorBoard` 
Enable visualizations for TensorBoard.

Inherits From: [ `Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback)

TensorBoard is a visualization tool provided with TensorFlow.

This callback logs events for TensorBoard, including:

- Metrics summary plots
- Training graph visualization
- Activation histograms
- Sampled profiling
If you have installed TensorFlow with pip, you should be ableto launch TensorBoard from the command line:

```
 tensorboard --logdir=path_to_your_logs
 
```

You can find more information about TensorBoard[here](https://tensorflow.google.cn/get_started/summaries_and_tensorboard).

#### Arguments:
- **`log_dir`** : the path of the directory where to save the log files to beparsed by TensorBoard.
- **`histogram_freq`** : frequency (in epochs) at which to compute activation andweight histograms for the layers of the model. If set to 0, histogramswon't be computed. Validation data (or split) must be specified forhistogram visualizations.
- **`write_graph`** : whether to visualize the graph in TensorBoard. The log filecan become quite large when write_graph is set to True.
- **`write_grads`** : whether to visualize gradient histograms in TensorBoard. `histogram_freq`  must be greater than 0.
- **`batch_size`** : size of batch of inputs to feed to the network for histogramscomputation.
- **`write_images`** : whether to write model weights to visualize as image inTensorBoard.
- **`embeddings_freq`** : frequency (in epochs) at which selected embedding layerswill be saved. If set to 0, embeddings won't be computed. Data to bevisualized in TensorBoard's Embedding tab must be passed as `embeddings_data` .
- **`embeddings_layer_names`** : a list of names of layers to keep eye on. If Noneor empty list all the embedding layer will be watched.
- **`embeddings_metadata`** : a dictionary which maps layer name to a file name inwhich metadata for this embedding layer is saved. See the[details](https://tensorflow.google.cn/how_tos/embedding_viz/#metadata_optional)  about metadata files format. In case if the same metadata file is  used for all embedding layers, string can be passed.
- **`embeddings_data`** : data to be embedded at layers specified in `embeddings_layer_names` . Numpy array (if the model has a single input)or list of Numpy arrays (if the model has multiple inputs). Learn [moreabout  embeddings](https://tensorflow.google.cn/programmers_guide/embedding)
- **`update_freq`** :  `'batch'`  or  `'epoch'`  or integer. When using  `'batch'` ,writes the losses and metrics to TensorBoard after each batch. The sameapplies for  `'epoch'` . If using an integer, let's say  `1000` , thecallback will write the metrics and losses to TensorBoard every 1000samples. Note that writing too frequently to TensorBoard can slow downyour training.
- **`profile_batch`** : Profile the batch to sample compute characteristics. Bydefault, it will profile the second batch. Set profile_batch=0 todisable profiling.


#### Raises:
- **`ValueError`** : If histogram_freq is set and no validation data is provided.


#### Eager Compatibility
Using the  `TensorBoard`  callback will work when eager execution is enabled,with the restriction that outputting histogram summaries of weights andgradients is not supported. Consequently,  `histogram_freq`  will be ignored.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks_v1.py#L117-L163)

```
 __init__(
    log_dir='./logs',
    histogram_freq=0,
    batch_size=32,
    write_graph=True,
    write_grads=False,
    write_images=False,
    embeddings_freq=0,
    embeddings_layer_names=None,
    embeddings_metadata=None,
    embeddings_data=None,
    update_freq='epoch',
    profile_batch=2
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Methods


###  `on_batch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L464-L465)

```
 on_batch_begin(
    batch,
    logs=None
)
 
```

A backwards compatibility alias for  `on_train_batch_begin` .

###  `on_batch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks_v1.py#L345-L367)

```
 on_batch_end(
    batch,
    logs=None
)
 
```

Writes scalar summaries for metrics on every training batch.

Performs profiling if current batch is in profiler_batches.

###  `on_epoch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks_v1.py#L374-L386)

```
 on_epoch_begin(
    epoch,
    logs=None
)
 
```

Add histogram op to Model eval_function callbacks, reset batch count.

###  `on_epoch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks_v1.py#L389-L451)

```
 on_epoch_end(
    epoch,
    logs=None
)
 
```

Checks if summary ops should run next epoch, logs scalar summaries.

###  `on_predict_batch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L547-L556)

```
 on_predict_batch_begin(
    batch,
    logs=None
)
 
```

Called at the beginning of a batch in  `predict`  methods.

Subclasses should override for any actions to run.

#### Arguments:
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Has keys  `batch`  and  `size`  representing the current batchnumber and the size of the batch.


###  `on_predict_batch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L558-L566)

```
 on_predict_batch_end(
    batch,
    logs=None
)
 
```

Called at the end of a batch in  `predict`  methods.

Subclasses should override for any actions to run.

#### Arguments:
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Metric results for this batch.


###  `on_predict_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L608-L616)

```
 on_predict_begin(logs=None)
 
```

Called at the beginning of prediction.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_predict_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L618-L626)

```
 on_predict_end(logs=None)
 
```

Called at the end of prediction.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_test_batch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L520-L532)

```
 on_test_batch_begin(
    batch,
    logs=None
)
 
```

Called at the beginning of a batch in  `evaluate`  methods.

Also called at the beginning of a validation batch in the  `fit` methods, if validation data is provided.

Subclasses should override for any actions to run.

#### Arguments:
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Has keys  `batch`  and  `size`  representing the current batchnumber and the size of the batch.


###  `on_test_batch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L534-L545)

```
 on_test_batch_end(
    batch,
    logs=None
)
 
```

Called at the end of a batch in  `evaluate`  methods.

Also called at the end of a validation batch in the  `fit` methods, if validation data is provided.

Subclasses should override for any actions to run.

#### Arguments:
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Metric results for this batch.


###  `on_test_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L588-L596)

```
 on_test_begin(logs=None)
 
```

Called at the beginning of evaluation or validation.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_test_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L598-L606)

```
 on_test_end(logs=None)
 
```

Called at the end of evaluation or validation.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_train_batch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L495-L506)

```
 on_train_batch_begin(
    batch,
    logs=None
)
 
```

Called at the beginning of a training batch in  `fit`  methods.

Subclasses should override for any actions to run.

#### Arguments:
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Has keys  `batch`  and  `size`  representing the current batchnumber and the size of the batch.


###  `on_train_batch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L508-L518)

```
 on_train_batch_end(
    batch,
    logs=None
)
 
```

Called at the end of a training batch in  `fit`  methods.

Subclasses should override for any actions to run.

#### Arguments:
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Metric results for this batch.


###  `on_train_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks_v1.py#L369-L372)

```
 on_train_begin(logs=None)
 
```

Called at the beginning of training.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_train_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks_v1.py#L453-L457)

```
 on_train_end(logs=None)
 
```

Called at the end of training.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `set_model` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks_v1.py#L232-L310)

```
 set_model(model)
 
```

Sets Keras model and creates summary ops.

###  `set_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L458-L459)

```
 set_params(params)
 
```

