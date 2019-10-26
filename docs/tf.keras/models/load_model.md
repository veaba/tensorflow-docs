Loads a model saved via save_model.
### Aliases:
- tf.compat.v1.keras.models.load_model
- tf.compat.v2.keras.models.load_model

```
 tf.keras.models.load_model(
    filepath,
    custom_objects=None,
    compile=True
)
```
### Used in the guide:
- Save and serialize models with Keras
- The Keras functional API in TensorFlow
- Keras overview
### Used in the tutorials:
- Distributed training with Keras
- Save and load a model using a distribution strategy
- Save and load models
#### Arguments:
- filepath: One of the following:
String, path to the saved model
h5py.File object from which to load the model
- String, path to the saved model
- h5py.File object from which to load the model
- custom_objects: Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.
- compile: Boolean, whether to compile the model after loading.
#### Returns:
A Keras model instance. If an optimizer was found as part of the saved model, the model is already compiled. Otherwise, the model is uncompiled and a warning will be displayed. When compile is set to False, the compilation is omitted without any warning.
#### Raises:
- ImportError: if loading from an hdf5 file and h5py is not available.
- IOError: In case of an invalid savefile.
