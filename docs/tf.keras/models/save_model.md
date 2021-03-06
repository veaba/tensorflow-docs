将模型保存为TensorFlow SavedModel或HDF5文件。

**别名** : [ `tf.compat.v1.keras.models.save_model` ](/api_docs/python/tf/keras/models/save_model), [ `tf.compat.v2.keras.models.save_model` ](/api_docs/python/tf/keras/models/save_model)

```
 tf.keras.models.save_model(
    model,
    filepath,
    overwrite=True,
    include_optimizer=True,
    save_format=None,
    signatures=None,
    options=None
)
 
```

The saved model contains:    - the model's configuration (topology)    - the model's weights    - the model's optimizer's state (if any)

Thus the saved model can be reinstantiated inthe exact same state, without any of the codeused for model definition or training.

*SavedModel serialization* (not yet added)

The SavedModel serialization path uses [ `tf.saved_model.save` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/save) to save the modeland all trackable objects attached to the model (e.g. layers and variables). `@tf.function` -decorated methods are also saved. Additional trackable objectsand functions are added to the SavedModel to allow the model to beloaded back as a Keras Model object.

#### 参数：
- **`model`** : Keras model instance to be saved.
- **`filepath`** : One of the following:
- **`overwrite`** : Whether we should overwrite any existing model at the targetlocation, or instead ask the user with a manual prompt.
- **`include_optimizer`** : If True, save optimizer's state together.
- **`save_format`** : Either 'tf' or 'h5', indicating whether to save the modelto Tensorflow SavedModel or HDF5. Defaults to 'tf' in TF 2.X, and 'h5'in TF 1.X.
- **`signatures`** : Signatures to save with the SavedModel. Applicable to the 'tf'format only. Please see the  `signatures`  argument in[ `tf.saved_model.save` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/save) for details.
- **`options`** : Optional [ `tf.saved_model.SaveOptions` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/SaveOptions) object that specifiesoptions for saving to SavedModel.
    - String, path where to save the model
    -  `h5py.File`  object where to save the model


#### 加薪：
- **`ImportError`** : If save format is hdf5, and h5py is not available.
