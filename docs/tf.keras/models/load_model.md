Loads a model saved via  `save_model` .

**Aliases** : [ `tf.compat.v1.keras.models.load_model` ](/api_docs/python/tf/keras/models/load_model), [ `tf.compat.v2.keras.models.load_model` ](/api_docs/python/tf/keras/models/load_model)

```
 tf.keras.models.load_model(
    filepath,
    custom_objects=None,
    compile=True
)
 
```

### Used in the guide:
- [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


### Used in the tutorials:
- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
- [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)
- [Save and load models](https://tensorflow.google.cn/tutorials/keras/save_and_load)
- [Transfer learning with TensorFlow Hub](https://tensorflow.google.cn/tutorials/images/transfer_learning_with_hub)


#### Arguments:
- **`filepath`** : One of the following:
- **`custom_objects`** : Optional dictionary mapping names(strings) to custom classes or functions to beconsidered during deserialization.
- **`compile`** : Boolean, whether to compile the modelafter loading.
    - String, path to the saved model
    -  `h5py.File`  object from which to load the model


#### Returns:
A Keras model instance. If an optimizer was foundas part of the saved model, the model is alreadycompiled. Otherwise, the model is uncompiled anda warning will be displayed. When  `compile`  is setto False, the compilation is omitted without anywarning.

#### Raises:
- **`ImportError`** : if loading from an hdf5 file and h5py is not available.
- **`IOError`** : In case of an invalid savefile.
