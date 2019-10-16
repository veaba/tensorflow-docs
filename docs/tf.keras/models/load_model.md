
Loads a model saved via save_model.
### Aliases:
- `tf.compat.v1.keras.models.load_model`
- `tf.compat.v2.keras.models.load_model`

```
 tf.keras.models.load_model(
    filepath,
    custom_objects=None,
    compile=True
)
```
### Used in the guide:
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``S``a``v``e`` ``a``n``d`` ``s``e``r``i``a``l``i``z``e`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``a`` ``m``o``d``e``l`` ``u``s``i``n``g`` ``a`` ``d``i``s``t``r``i``b``u``t``i``o``n`` ``s``t``r``a``t``e``g``y``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``m``o``d``e``l``s``
#### Arguments:
- `filepath`: One of the following:
String, path to the saved model
`h5py.File` object from which to load the model
- String, path to the saved model
- `h5py.File` object from which to load the model
- `custom_objects`: Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.
- `compile`: Boolean, whether to `compile` the model after loading.
#### Returns:

A Keras model instance. If an optimizer was found as part of the saved model, the model is already compiled. Otherwise, the model is uncompiled and a warning will be displayed. When compile is set to False, the compilation is omitted without any warning.
#### Raises:
- `ImportError`: if loading from an hdf5 file and h5py is not available.
- `IOError`: In case of an invalid savefile.
