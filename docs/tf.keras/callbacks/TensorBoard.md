

## Class  `TensorBoard` 
启用TensorBoard的可视化。

Inherits From: [ `Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback)

### 在指南中使用：
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


### 在教程中使用：
- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
- [Overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)
TensorBoard是TensorFlow提供的可视化工具。

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

#### 参数：
- **`log_dir`** : the path of the directory where to save the log files to beparsed by TensorBoard.
- **`histogram_freq`** : frequency (in epochs) at which to compute activation andweight histograms for the layers of the model. If set to 0, histogramswon't be computed. Validation data (or split) must be specified forhistogram visualizations.
- **`write_graph`** : whether to visualize the graph in TensorBoard. The log filecan become quite large when write_graph is set to True.
- **`write_images`** : whether to write model weights to visualize as image inTensorBoard.
- **`update_freq`** :  `'batch'`  or  `'epoch'`  or integer. When using  `'batch'` ,writes the losses and metrics to TensorBoard after each batch. The sameapplies for  `'epoch'` . If using an integer, let's say  `1000` , thecallback will write the metrics and losses to TensorBoard every 1000samples. Note that writing too frequently to TensorBoard can slow downyour training.
- **`profile_batch`** : Profile the batch to sample compute characteristics. Bydefault, it will profile the second batch. Set profile_batch=0 todisable profiling. Must run in TensorFlow eager mode.
- **`embeddings_freq`** : frequency (in epochs) at which embedding layers willbe visualized. If set to 0, embeddings won't be visualized.
- **`embeddings_metadata`** : a dictionary which maps layer name to a file name inwhich metadata for this embedding layer is saved. See the[details](https://tensorflow.google.cn/how_tos/embedding_viz/#metadata_optional)about metadata files format. In case if the same metadata file isused for all embedding layers, string can be passed.


#### 加薪：
- **`ValueError`** : If histogram_freq is set and no validation data is provided.


##  `__init__` 
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

Initialize self.  See help(type(self)) for accurate signature.

## 方法


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1585-L1606)

```
 on_batch_end(
    batch,
    logs=None
)
 
```

为每个培训批次的指标编写标量摘要。

Performs profiling if current batch is in profiler_batches.

#### 参数：
- **`batch`** : Integer, index of batch within the current epoch.
- **`logs`** : Dict. Metric results for this batch.


###  `on_epoch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L470-L480)

```
 on_epoch_begin(
    epoch,
    logs=None
)
 
```

在一个新纪元开始时被召唤。

Subclasses should override for any actions to run. This function should onlybe called during TRAIN mode.

#### 参数：
- **`epoch`** : integer, index of epoch.
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_epoch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1608-L1617)

```
 on_epoch_end(
    epoch,
    logs=None
)
 
```

在历元结束时运行度量和直方图摘要。

###  `on_predict_batch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L547-L556)

```
 on_predict_batch_begin(
    batch,
    logs=None
)
 
```

Called at the beginning of a batch in  `predict`  methods.

子类应该重写以运行任何操作。

#### 参数：
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

子类应该重写以运行任何操作。

#### 参数：
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Metric results for this batch.


###  `on_predict_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L608-L616)

```
 on_predict_begin(logs=None)
 
```

在预测开始时调用。

子类应该重写以运行任何操作。

#### 参数：
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_predict_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L618-L626)

```
 on_predict_end(logs=None)
 
```

在预测结束时调用。

子类应该重写以运行任何操作。

#### 参数：
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

子类应该重写以运行任何操作。

#### 参数：
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

子类应该重写以运行任何操作。

#### 参数：
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Metric results for this batch.


###  `on_test_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L588-L596)

```
 on_test_begin(logs=None)
 
```

在评估或验证开始时调用。

子类应该重写以运行任何操作。

#### 参数：
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_test_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L598-L606)

```
 on_test_end(logs=None)
 
```

在评估或验证结束时调用。

子类应该重写以运行任何操作。

#### 参数：
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

子类应该重写以运行任何操作。

#### 参数：
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

子类应该重写以运行任何操作。

#### 参数：
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Metric results for this batch.


###  `on_train_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1580-L1583)

```
 on_train_begin(logs=None)
 
```

在训练开始时打电话来。

子类应该重写以运行任何操作。

#### 参数：
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_train_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1619-L1622)

```
 on_train_end(logs=None)
 
```

训练结束时打电话来。

子类应该重写以运行任何操作。

#### 参数：
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `set_model` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1492-L1510)

```
 set_model(model)
 
```

设置keras模型并在指定时写入图形。

###  `set_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L458-L459)

```
 set_params(params)
 
```

