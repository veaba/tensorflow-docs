## Class LearningRateScheduler

Learning rate scheduler.
[Callback](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/Callback)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.callbacks.LearningRateScheduler`
- Class `tf.compat.v2.keras.callbacks.LearningRateScheduler`
### Used in the tutorials:
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `schedule`: a function that takes an epoch index as input (integer, indexed from 0) and returns a new learning rate as output (float).
- `verbose`: int. 0: quiet, 1: update messages.

```
 # This function keeps the learning rate at 0.001 for the first ten epochs
# and decreases it exponentially after that.
def scheduler(epoch):
  if epoch < 10:
    return 0.001
  else:
    return 0.001 * tf.math.exp(0.1 * (10 - epoch))

callback = tf.keras.callbacks.LearningRateScheduler(scheduler)
model.fit(data, labels, epochs=100, callbacks=[callback],
          validation_data=(val_data, val_labels))
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1335-L1338)


```
 __init__(
    schedule,
    verbose=0
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L467-L468)


```
 on_batch_end(
    batch,
    logs=None
)
```

A backwards compatibility alias for on_train_batch_end.
### on_epoch_begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1340-L1354)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1356-L1358)


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