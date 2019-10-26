## Class TensorBoard
Enable visualizations for TensorBoard.
[Callback](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback)Inherits From: 

### Aliases:
- Class tf.compat.v2.keras.callbacks.TensorBoard
### Used in the guide:
- Keras overview
### Used in the tutorials:
- Distributed training with Keras
TensorBoard is a visualization tool provided with TensorFlow.
This callback logs events for TensorBoard, including: * Metrics summary plots * Training graph visualization * Activation histograms * Sampled profiling
If you have installed TensorFlow with pip, you should be able to launch TensorBoard from the command line:

```
 tensorboard --logdir=path_to_your_logs
```
[here](https://tensorflow.google.cn/get_started/summaries_and_tensorboard)You can find more information about TensorBoard .

#### Arguments:
- log_dir: the path of the directory where to save the log files to be parsed by TensorBoard.
- histogram_freq: frequency (in epochs) at which to compute activation and weight histograms for the layers of the model. If set to 0, histograms won't be computed. Validation data (or split) must be specified for histogram visualizations.
- write_graph: whether to visualize the graph in TensorBoard. The log file can become quite large when write_graph is set to True.
- write_images: whether to write model weights to visualize as image in TensorBoard.
- update_freq: 'batch' or 'epoch' or integer. When using 'batch', writes the losses and metrics to TensorBoard after each batch. The same applies for 'epoch'. If using an integer, let's say 1000, the callback will write the metrics and losses to TensorBoard every 1000 samples. Note that writing too frequently to TensorBoard can slow down your training.
- profile_batch: Profile the batch to sample compute characteristics. By default, it will profile the second batch. Set profile_batch=0 to disable profiling. Must run in TensorFlow eager mode.
- embeddings_freq: frequency (in epochs) at which embedding layers will be visualized. If set to 0, embeddings won't be visualized.
- embeddings_metadata: a dictionary which maps layer name to a file name in which metadata for this embedding layer is saved. See the details about metadata files format. In case if the same metadata file is used for all embedding layers, string can be passed.
#### Raises:
- ValueError: If histogram_freq is set and no validation data is provided.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1419-L1463)


```
 __init__(
    log_dir='logs',
    histogram_freq=0,
    write_graph=True,
    write_images=False,
    update_freq='epoch',
    profile_batch=2,
    embeddings_freq=0,
    embeddings_metadata=None,
    **kwargs
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### on_batch_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L464-L465)


```
 on_batch_begin(
    batch,
    logs=None
)
```
A backwards compatibility alias for on_train_batch_begin.
### on_batch_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1585-L1606)


```
 on_batch_end(
    batch,
    logs=None
)
```
Writes scalar summaries for metrics on every training batch.
Performs profiling if current batch is in profiler_batches.
#### Arguments:
- batch: Integer, index of batch within the current epoch.
- logs: Dict. Metric results for this batch.
### on_epoch_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L470-L480)


```
 on_epoch_begin(
    epoch,
    logs=None
)
```
Called at the start of an epoch.
Subclasses should override for any actions to run. This function should only be called during TRAIN mode.
#### Arguments:
- epoch: integer, index of epoch.
- logs: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_epoch_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1608-L1617)


```
 on_epoch_end(
    epoch,
    logs=None
)
```
Runs metrics and histogram summaries at epoch end.
### on_predict_batch_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L547-L556)


```
 on_predict_batch_begin(
    batch,
    logs=None
)
```
Called at the beginning of a batch in predict methods.
Subclasses should override for any actions to run.
#### Arguments:
- batch: integer, index of batch within the current epoch.
- logs: dict. Has keys batch and size representing the current batch number and the size of the batch.
### on_predict_batch_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L558-L566)


```
 on_predict_batch_end(
    batch,
    logs=None
)
```
Called at the end of a batch in predict methods.
Subclasses should override for any actions to run.
#### Arguments:
- batch: integer, index of batch within the current epoch.
- logs: dict. Metric results for this batch.
### on_predict_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L608-L616)


```
 on_predict_begin(logs=None)
```
Called at the beginning of prediction.
Subclasses should override for any actions to run.
#### Arguments:
- logs: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_predict_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L618-L626)


```
 on_predict_end(logs=None)
```
Called at the end of prediction.
Subclasses should override for any actions to run.
#### Arguments:
- logs: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_test_batch_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L520-L532)


```
 on_test_batch_begin(
    batch,
    logs=None
)
```
Called at the beginning of a batch in evaluate methods.
Also called at the beginning of a validation batch in the fit methods, if validation data is provided.
Subclasses should override for any actions to run.
#### Arguments:
- batch: integer, index of batch within the current epoch.
- logs: dict. Has keys batch and size representing the current batch number and the size of the batch.
### on_test_batch_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L534-L545)


```
 on_test_batch_end(
    batch,
    logs=None
)
```
Called at the end of a batch in evaluate methods.
Also called at the end of a validation batch in the fit methods, if validation data is provided.
Subclasses should override for any actions to run.
#### Arguments:
- batch: integer, index of batch within the current epoch.
- logs: dict. Metric results for this batch.
### on_test_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L588-L596)


```
 on_test_begin(logs=None)
```
Called at the beginning of evaluation or validation.
Subclasses should override for any actions to run.
#### Arguments:
- logs: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_test_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L598-L606)


```
 on_test_end(logs=None)
```
Called at the end of evaluation or validation.
Subclasses should override for any actions to run.
#### Arguments:
- logs: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_train_batch_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L495-L506)


```
 on_train_batch_begin(
    batch,
    logs=None
)
```
Called at the beginning of a training batch in fit methods.
Subclasses should override for any actions to run.
#### Arguments:
- batch: integer, index of batch within the current epoch.
- logs: dict. Has keys batch and size representing the current batch number and the size of the batch.
### on_train_batch_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L508-L518)


```
 on_train_batch_end(
    batch,
    logs=None
)
```
Called at the end of a training batch in fit methods.
Subclasses should override for any actions to run.
#### Arguments:
- batch: integer, index of batch within the current epoch.
- logs: dict. Metric results for this batch.
### on_train_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1580-L1583)


```
 on_train_begin(logs=None)
```
Called at the beginning of training.
Subclasses should override for any actions to run.
#### Arguments:
- logs: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_train_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1619-L1622)


```
 on_train_end(logs=None)
```
Called at the end of training.
Subclasses should override for any actions to run.
#### Arguments:
- logs: dict. Currently no data is passed to this argument for this method but that may change in the future.
### set_model
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1492-L1510)


```
 set_model(model)
```
Sets Keras model and writes graph if specified.
### set_params
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L458-L459)


```
 set_params(params)
```
