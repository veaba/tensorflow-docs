

## Class  `RemoteMonitor` 
用于将事件流式处理到服务器的回调。

Inherits From: [ `Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback)

**别名** : [ `tf.compat.v1.keras.callbacks.RemoteMonitor` ](/api_docs/python/tf/keras/callbacks/RemoteMonitor), [ `tf.compat.v2.keras.callbacks.RemoteMonitor` ](/api_docs/python/tf/keras/callbacks/RemoteMonitor)

Requires the  `requests`  library.Events are sent to  `root + '/publish/epoch/end/'`  by default. Calls areHTTP POST, with a  `data`  argument which is aJSON-encoded dictionary of event data.If send_as_json is set to True, the content type of the request will beapplication/json. Otherwise the serialized JSON will be sent within a form.

#### 参数：
- **`root`** : String; root url of the target server.
- **`path`** : String; path relative to  `root`  to which the events will be sent.
- **`field`** : String; JSON field under which the data will be stored.The field is used only if the payload is sent within a form(i.e. send_as_json is set to False).
- **`headers`** : Dictionary; optional custom HTTP headers.
- **`send_as_json`** : Boolean; whether the request should besent as application/json.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1276-L1288)

```
 __init__(
    root='http://localhost:9000',
    path='/publish/epoch/end/',
    field='data',
    headers=None,
    send_as_json=False
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L467-L468)

```
 on_batch_end(
    batch,
    logs=None
)
 
```

A backwards compatibility alias for  `on_train_batch_end` .

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1290-L1307)

```
 on_epoch_end(
    epoch,
    logs=None
)
 
```

在一个时代结束时被召唤。

Subclasses should override for any actions to run. This function should onlybe called during TRAIN mode.

#### 参数：
- **`epoch`** : integer, index of epoch.
- **`logs`** : dict, metric results for this training epoch, and for thevalidation epoch if validation is performed. Validation result keysare prefixed with  `val_` .


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L568-L576)

```
 on_train_begin(logs=None)
 
```

在训练开始时打电话来。

子类应该重写以运行任何操作。

#### 参数：
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_train_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L578-L586)

```
 on_train_end(logs=None)
 
```

训练结束时打电话来。

子类应该重写以运行任何操作。

#### 参数：
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `set_model` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L461-L462)

```
 set_model(model)
 
```

###  `set_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L458-L459)

```
 set_params(params)
 
```

