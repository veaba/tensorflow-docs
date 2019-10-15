## Class ReduceLROnPlateau

Reduce learning rate when a metric has stopped improving.
[Callback](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/Callback)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.callbacks.ReduceLROnPlateau`
- Class `tf.compat.v2.keras.callbacks.ReduceLROnPlateau`

Models often benefit from reducing the learning rate by a factor of 2-10 once learning stagnates. This callback monitors a quantity and if no improvement is seen for a 'patience' number of epochs, the learning rate is reduced.
#### Example:

```
 reduce_lr = ReduceLROnPlateau(monitor='val_loss', factor=0.2,
                              patience=5, min_lr=0.001)
model.fit(X_train, Y_train, callbacks=[reduce_lr])
```
#### Arguments:
- `monitor`: quantity to be `monitor`ed.
- `factor`: `factor` by which the learning rate will be reduced. new_lr = lr * `factor`
- `patience`: number of epochs with no improvement after which learning rate will be reduced.
- `verbose`: int. 0: quiet, 1: update messages.
- `mode`: one of {`auto`, `min`, `max`}. In `min` `mode`, lr will be reduced when the quantity `monitor`ed has stopped decreasing; in `max` `mode` it will be reduced when the quantity `monitor`ed has stopped increasing; in `auto` `mode`, the direction is `auto`matically inferred from the name of the `monitor`ed quantity.
- `min`_delta: threshold for measuring the new optimum, to only focus on significant changes.
- `cooldown`: number of epochs to wait before resu`min`g normal operation after lr has been reduced.
- `min`_lr: lower bound on the learning rate.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1765-L1795)


```
 __init__(
    monitor='val_loss',
    factor=0.1,
    patience=10,
    verbose=0,
    mode='auto',
    min_delta=0.0001,
    cooldown=0,
    min_lr=0,
    **kwargs
)
```

Initialize self. See help(type(self)) for accurate signature.
## Methods
### in_cooldown
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1848-L1849)


```
 in_cooldown()
```
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1817-L1846)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L1814-L1815)


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
