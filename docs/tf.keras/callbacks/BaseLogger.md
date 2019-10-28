## Class BaseLogger
Callback that accumulates epoch averages of metrics.
Inherits From: `Callback`
### Aliases:
- Class `tf.compat.v1.keras.callbacks.BaseLogger`
- Class `tf.compat.v2.keras.callbacks.BaseLogger`
This callback is automatically applied to every Keras model.
#### Arguments:
- `stateful_metrics`: Iterable of string names of metrics that should not be averaged over an epoch. Metrics in this list will be logged as-is in `on_epoch_end`. All others will be averaged in `on_epoch_end`.
## __init__
View source

```
 __init__(stateful_metrics=None)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### on_batch_begin
View source

```
 on_batch_begin(
    batch,
    logs=None
)
```
A backwards compatibility alias for `on_train_batch_begin`.
### on_batch_end
View source

```
 on_batch_end(
    batch,
    logs=None
)
```
A backwards compatibility alias for `on_train_batch_end`.
### on_epoch_begin
View source

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
View source

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
- `logs`: dict, metric results for this training epoch, and for the validation epoch if validation is performed. Validation result keys are prefixed with `val_`.
### on_predict_batch_begin
View source

```
 on_predict_batch_begin(
    batch,
    logs=None
)
```
Called at the beginning of a batch in `predict` methods.
Subclasses should override for any actions to run.
#### Arguments:
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Has keys `batch` and `size` representing the current `batch` number and the `size` of the `batch`.
### on_predict_batch_end
View source

```
 on_predict_batch_end(
    batch,
    logs=None
)
```
Called at the end of a batch in `predict` methods.
Subclasses should override for any actions to run.
#### Arguments:
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Metric results for this batch.
### on_predict_begin
View source

```
 on_predict_begin(logs=None)
```
Called at the beginning of prediction.
Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_predict_end
View source

```
 on_predict_end(logs=None)
```
Called at the end of prediction.
Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_test_batch_begin
View source

```
 on_test_batch_begin(
    batch,
    logs=None
)
```
Called at the beginning of a batch in `evaluate` methods.
Also called at the beginning of a validation batch in the `fit` methods, if validation data is provided.
Subclasses should override for any actions to run.
#### Arguments:
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Has keys `batch` and `size` representing the current `batch` number and the `size` of the `batch`.
### on_test_batch_end
View source

```
 on_test_batch_end(
    batch,
    logs=None
)
```
Called at the end of a batch in `evaluate` methods.
Also called at the end of a validation batch in the `fit` methods, if validation data is provided.
Subclasses should override for any actions to run.
#### Arguments:
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Metric results for this batch.
### on_test_begin
View source

```
 on_test_begin(logs=None)
```
Called at the beginning of evaluation or validation.
Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_test_end
View source

```
 on_test_end(logs=None)
```
Called at the end of evaluation or validation.
Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_train_batch_begin
View source

```
 on_train_batch_begin(
    batch,
    logs=None
)
```
Called at the beginning of a training batch in `fit` methods.
Subclasses should override for any actions to run.
#### Arguments:
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Has keys `batch` and `size` representing the current `batch` number and the `size` of the `batch`.
### on_train_batch_end
View source

```
 on_train_batch_end(
    batch,
    logs=None
)
```
Called at the end of a training batch in `fit` methods.
Subclasses should override for any actions to run.
#### Arguments:
- `batch`: integer, index of `batch` within the current epoch.
- `logs`: dict. Metric results for this batch.
### on_train_begin
View source

```
 on_train_begin(logs=None)
```
Called at the beginning of training.
Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### on_train_end
View source

```
 on_train_end(logs=None)
```
Called at the end of training.
Subclasses should override for any actions to run.
#### Arguments:
- `logs`: dict. Currently no data is passed to this argument for this method but that may change in the future.
### set_model
View source

```
 set_model(model)
```
### set_params
View source

```
 set_params(params)
```
