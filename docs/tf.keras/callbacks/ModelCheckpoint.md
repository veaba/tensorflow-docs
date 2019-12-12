

## Class  `ModelCheckpoint` 
Save the model after every epoch.

Inherits From: [ `Callback` ](https://tensorflow.google.cn/api_docs/python/tf/keras/callbacks/Callback)

**Aliases** : [ `tf.compat.v1.keras.callbacks.ModelCheckpoint` ](/api_docs/python/tf/keras/callbacks/ModelCheckpoint), [ `tf.compat.v2.keras.callbacks.ModelCheckpoint` ](/api_docs/python/tf/keras/callbacks/ModelCheckpoint)

### Used in the guide:
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### Used in the tutorials:
- [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)
- [Save and load models](https://tensorflow.google.cn/tutorials/keras/save_and_load)
- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
- [Multi-worker training with Keras](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_keras)
- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)
 `filepath`  can contain named formatting options,which will be filled the value of  `epoch`  andkeys in  `logs`  (passed in  `on_epoch_end` ).

For example: if  `filepath`  is  `weights.{epoch:02d}-{val_loss:.2f}.hdf5` ,then the model checkpoints will be saved with the epoch number andthe validation loss in the filename.

#### Arguments:
- **`filepath`** : string, path to save the model file.
- **`monitor`** : quantity to monitor.
- **`verbose`** : verbosity mode, 0 or 1.
- **`save_best_only`** : if  `save_best_only=True` , the latest best model accordingto the quantity monitored will not be overwritten.
- **`mode`** : one of {auto, min, max}. If  `save_best_only=True` , the decision tooverwrite the current save file is made based on either the maximizationor the minimization of the monitored quantity. For  `val_acc` , thisshould be  `max` , for  `val_loss`  this should be  `min` , etc. In  `auto` mode, the direction is automatically inferred from the name of themonitored quantity.
- **`save_weights_only`** : if True, then only the model's weights will be saved( `model.save_weights(filepath)` ), else the full model is saved( `model.save(filepath)` ).
- **`save_freq`** :  `'epoch'`  or integer. When using  `'epoch'` , the callback savesthe model after each epoch. When using integer, the callback saves themodel at end of a batch at which this many samples have been seen sincelast saving. Note that if the saving isn't aligned to epochs, themonitored metric may potentially be less reliable (it could reflect aslittle as 1 batch, since the metrics get reset every epoch). Defaults to `'epoch'` 
- **`**kwargs`** : Additional arguments for backwards compatibility. Possible keyis  `period` .


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L829-L892)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L946-L952)

```
 on_batch_end(
    batch,
    logs=None
)
 
```

A backwards compatibility alias for  `on_train_batch_end` .

###  `on_epoch_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L954-L955)

```
 on_epoch_begin(
    epoch,
    logs=None
)
 
```

Called at the start of an epoch.

Subclasses should override for any actions to run. This function should onlybe called during TRAIN mode.

#### Arguments:
- **`epoch`** : integer, index of epoch.
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_epoch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L957-L970)

```
 on_epoch_end(
    epoch,
    logs=None
)
 
```

Called at the end of an epoch.

Subclasses should override for any actions to run. This function should onlybe called during TRAIN mode.

#### Arguments:
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

Subclasses should override for any actions to run.

#### Arguments:
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
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_predict_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L618-L626)

```
 on_predict_end(logs=None)
 
```

Called at the end of prediction.

Subclasses should override for any actions to run.

#### Arguments:
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

Subclasses should override for any actions to run.

#### Arguments:
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
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_test_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L598-L606)

```
 on_test_end(logs=None)
 
```

Called at the end of evaluation or validation.

Subclasses should override for any actions to run.

#### Arguments:
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

Subclasses should override for any actions to run.

#### Arguments:
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

Subclasses should override for any actions to run.

#### Arguments:
- **`batch`** : integer, index of batch within the current epoch.
- **`logs`** : dict. Metric results for this batch.


###  `on_train_begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L902-L933)

```
 on_train_begin(logs=None)
 
```

Called at the beginning of training.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `on_train_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L935-L944)

```
 on_train_end(logs=None)
 
```

Called at the end of training.

Subclasses should override for any actions to run.

#### Arguments:
- **`logs`** : dict. Currently no data is passed to this argument for this methodbut that may change in the future.


###  `set_model` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L894-L900)

```
 set_model(model)
 
```

###  `set_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/callbacks.py#L458-L459)

```
 set_params(params)
 
```

