## Class TerminateOnNaN

Callback that terminates training when a NaN loss is encountered.
[Callback](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/Callback)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.callbacks.TerminateOnNaN`
- Class `tf.compat.v2.keras.callbacks.TerminateOnNaN`
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L450-L456)


```
 __init__()
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L683-L689)


```
 on_batch_end(
    batch,
    logs=None
)
```

A backwards compatibility alias for on_train_batch_end.
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
- `epoch`: integer, index of `epoch`.
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_epoch_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L482-L493)


```
 on_epoch_end(
    epoch,
    logs=None
)
```

Called at the end of an epoch.

Subclasses should override for any actions to run. This function should only be called during TRAIN mode.
#### Arguments:
- `epoch`: integer, index of `epoch`.
- `logs`: dict, metric results for this training `epoch`, and for the validation `epoch` if validation is performed. Validation result keys are prefixed with `val_`.
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
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Has keys `batch` and `size` representing the current `batch` number and the `size` of the `batch`.
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
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Metric results for this `batch`.
### on_predict_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L608-L616)


```
 on_predict_begin(logs=None)
```

Called at the beginning of prediction.

Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_predict_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L618-L626)


```
 on_predict_end(logs=None)
```

Called at the end of prediction.

Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
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
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Has keys `batch` and `size` representing the current `batch` number and the `size` of the `batch`.
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
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Metric results for this `batch`.
### on_test_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L588-L596)


```
 on_test_begin(logs=None)
```

Called at the beginning of evaluation or validation.

Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_test_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L598-L606)


```
 on_test_end(logs=None)
```

Called at the end of evaluation or validation.

Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
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
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Has keys `batch` and `size` representing the current `batch` number and the `size` of the `batch`.
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
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Metric results for this `batch`.
### on_train_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L568-L576)


```
 on_train_begin(logs=None)
```

Called at the beginning of training.

Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_train_end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L578-L586)


```
 on_train_end(logs=None)
```

Called at the end of training.

Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### set_model
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L461-L462)


```
 set_model(model)
```
### set_params
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L458-L459)


```
 set_params(params)
```