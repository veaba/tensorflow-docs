

## Class  `LambdaCallback` 
Callback for creating simple, custom callbacks on-the-fly.

Inherits From: [ `Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback)



### Aliases:

- Class [ `tf.compat.v1.keras.callbacks.LambdaCallback` ](/api_docs/python/tf/keras/callbacks/LambdaCallback)

- Class [ `tf.compat.v2.keras.callbacks.LambdaCallback` ](/api_docs/python/tf/keras/callbacks/LambdaCallback)

This callback is constructed with anonymous functions that will be called
at the appropriate time. Note that the callbacks expects positional
arguments, as:


-  `on_epoch_begin`  and  `on_epoch_end`  expect two positional arguments:
 `epoch` ,  `logs` 

-  `on_batch_begin`  and  `on_batch_end`  expect two positional arguments:
 `batch` ,  `logs` 

-  `on_train_begin`  and  `on_train_end`  expect one positional argument:
 `logs` 



#### Arguments:

- **`on_epoch_begin`** : called at the beginning of every epoch.

- **`on_epoch_end`** : called at the end of every epoch.

- **`on_batch_begin`** : called at the beginning of every batch.

- **`on_batch_end`** : called at the end of every batch.

- **`on_train_begin`** : called at the beginning of model training.

- **`on_train_end`** : called at the end of model training.



#### Example:


```
 # Print the batch number at the beginning of every batch.
batch_print_callback = LambdaCallback(
    on_batch_begin=lambda batch,logs: print(batch))

# Stream the epoch loss to a file in JSON format. The file content
# is not well-formed JSON but rather has a JSON object per line.
import json
json_log = open('loss_log.json', mode='wt', buffering=1)
json_logging_callback = LambdaCallback(
    on_epoch_end=lambda epoch, logs: json_log.write(
        json.dumps({'epoch': epoch, 'loss': logs['loss']}) + '\n'),
    on_train_end=lambda logs: json_log.close()
)

# Terminate some processes after having finished model training.
processes = ...
cleanup_callback = LambdaCallback(
    on_train_end=lambda logs: [
        p.terminate() for p in processes if p.is_alive()])

model.fit(...,
          callbacks=[batch_print_callback,
                     json_logging_callback,
                     cleanup_callback])
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1998-L2031)



```
 __init__(
    on_epoch_begin=None,
    on_epoch_end=None,
    on_batch_begin=None,
    on_batch_end=None,
    on_train_begin=None,
    on_train_end=None,
    **kwargs
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

Called at the start of an epoch.

Subclasses should override for any actions to run. This function should only
be called during TRAIN mode.



#### Arguments:

- **`epoch`** : integer, index of epoch.

- **`logs`** : dict. Currently no data is passed to this argument for this method
but that may change in the future.



###  `on_epoch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L482-L493)



```
 on_epoch_end(
    epoch,
    logs=None
)
 
```

Called at the end of an epoch.

Subclasses should override for any actions to run. This function should only
be called during TRAIN mode.



#### Arguments:

- **`epoch`** : integer, index of epoch.

- **`logs`** : dict, metric results for this training epoch, and for the
validation epoch if validation is performed. Validation result keys
are prefixed with  `val_` .



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

- **`logs`** : dict. Has keys  `batch`  and  `size`  representing the current batch
number and the size of the batch.



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

- **`logs`** : dict. Currently no data is passed to this argument for this method
but that may change in the future.



###  `on_predict_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L618-L626)



```
 on_predict_end(logs=None)
 
```

Called at the end of prediction.

Subclasses should override for any actions to run.



#### Arguments:

- **`logs`** : dict. Currently no data is passed to this argument for this method
but that may change in the future.



###  `on_test_batch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L520-L532)



```
 on_test_batch_begin(
    batch,
    logs=None
)
 
```

Called at the beginning of a batch in  `evaluate`  methods.

Also called at the beginning of a validation batch in the  `fit` 
methods, if validation data is provided.

Subclasses should override for any actions to run.



#### Arguments:

- **`batch`** : integer, index of batch within the current epoch.

- **`logs`** : dict. Has keys  `batch`  and  `size`  representing the current batch
number and the size of the batch.



###  `on_test_batch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L534-L545)



```
 on_test_batch_end(
    batch,
    logs=None
)
 
```

Called at the end of a batch in  `evaluate`  methods.

Also called at the end of a validation batch in the  `fit` 
methods, if validation data is provided.

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

- **`logs`** : dict. Currently no data is passed to this argument for this method
but that may change in the future.



###  `on_test_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L598-L606)



```
 on_test_end(logs=None)
 
```

Called at the end of evaluation or validation.

Subclasses should override for any actions to run.



#### Arguments:

- **`logs`** : dict. Currently no data is passed to this argument for this method
but that may change in the future.



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

- **`logs`** : dict. Has keys  `batch`  and  `size`  representing the current batch
number and the size of the batch.



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L568-L576)



```
 on_train_begin(logs=None)
 
```

Called at the beginning of training.

Subclasses should override for any actions to run.



#### Arguments:

- **`logs`** : dict. Currently no data is passed to this argument for this method
but that may change in the future.



###  `on_train_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L578-L586)



```
 on_train_end(logs=None)
 
```

Called at the end of training.

Subclasses should override for any actions to run.



#### Arguments:

- **`logs`** : dict. Currently no data is passed to this argument for this method
but that may change in the future.



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

