## Class EarlyStopping
Stop training when a monitored quantity has stopped improving.
Inherits From: `Callback`
### Aliases:
- Class `tf.compat.v1.keras.callbacks.EarlyStopping`
- Class `tf.compat.v2.keras.callbacks.EarlyStopping`
### Used in the guide:
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``B``a``s``i``c`` ``r``e``g``r``e``s``s``i``o``n``:`` ``P``r``e``d``i``c``t`` ``f``u``e``l`` ``e``f``f``i``c``i``e``n``c``y``
- ``C``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``o``n`` ``i``m``b``a``l``a``n``c``e``d`` ``d``a``t``a``
#### Arguments:
- `monitor`: Quantity to be `monitor`ed.
- `min_delta`: Minimum change in the monitored quantity to qualify as an improvement, i.e. an absolute change of less than `min_delta`, will count as no improvement.
- `patience`: Number of epochs with no improvement after which training will be stopped.
- `verbose`: verbosity mode.
- `mode`: One of `{"auto", "min", "max"}`. In `min` `mode`, training will stop when the quantity monitored has stopped decreasing; in `max` `mode` it will stop when the quantity monitored has stopped increasing; in `auto` `mode`, the direction is `auto`matically inferred from the name of the monitored quantity.
- `baseline`: Baseline value for the monitored quantity. Training will stop if the model doesn't show improvement over the `baseline`.
- `restore_best_weights`: Whether to restore model weights from the epoch with the best value of the monitored quantity. If False, the model weights obtained at the last step of training are used.
#### Example:

```
 callback = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=3)
# This callback will stop the training when there is no improvement in
# the validation loss for three consecutive epochs.
model.fit(data, labels, epochs=100, callbacks=[callback],
    validation_data=(val_data, val_labels))
```
## __init__
View source

```
 __init__(
    monitor='val_loss',
    min_delta=0,
    patience=0,
    verbose=0,
    mode='auto',
    baseline=None,
    restore_best_weights=False
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### get_monitor_value
View source

```
 get_monitor_value(logs)
```
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
