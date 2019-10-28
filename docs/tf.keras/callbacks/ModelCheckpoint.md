## Class ModelCheckpoint
Save the model after every epoch.
Inherits From: `Callback`
### Aliases:
- Class `tf.compat.v1.keras.callbacks.ModelCheckpoint`
- Class `tf.compat.v2.keras.callbacks.ModelCheckpoint`
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``a`` ``m``o``d``e``l`` ``u``s``i``n``g`` ``a`` ``d``i``s``t``r``i``b``u``t``i``o``n`` ``s``t``r``a``t``e``g``y``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``m``o``d``e``l``s``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``e``x``t`` ``g``e``n``e``r``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
`filepath` can contain named formatting options, which will be filled the value of `epoch` and keys in `logs` (passed in `on_epoch_end`).
For example: if `filepath` is `weights.{epoch:02d}-{val_loss:.2f}.hdf5`, then the model checkpoints will be saved with the epoch number and the validation loss in the filename.
#### Arguments:
- `filepath`: string, path to save the model file.
- `monitor`: quantity to `monitor`.
- `verbose`: verbosity mode, 0 or 1.
- `save_best_only`: if `save_best_only`=True, the latest best model according to the quantity monitored will not be overwritten.
- `mode`: one of {`auto`, `min`, `max`}. If `save_best_only=True`, the decision to overwrite the current save file is made based on either the `max`imization or the `min`imization of the monitored quantity. For `val_acc`, this should be `max`, for `val_loss` this should be `min`, etc. In `auto` `mode`, the direction is `auto`matically inferred from the name of the monitored quantity.
## __init__
View source

```
 __init__(
    filepath,
    monitor='val_loss',
    verbose=0,
    save_best_only=False,
    save_weights_only=False,
    mode='auto',
    save_freq='epoch',
    **kwargs
)
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
