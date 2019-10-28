Constructs an `Estimator` instance from given keras model.
### Aliases:
- `tf.compat.v2.keras.estimator.model_to_estimator`

```
 tf.keras.estimator.model_to_estimator(
    keras_model=None,
    keras_model_path=None,
    custom_objects=None,
    model_dir=None,
    config=None,
    checkpoint_format='checkpoint'
)
```
### Used in the guide:
- ``E``s``t``i``m``a``t``o``r``s``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
### Used in the tutorials:
- ``C``r``e``a``t``e`` ``a``n`` ``E``s``t``i``m``a``t``o``r`` ``f``r``o``m`` ``a`` ``K``e``r``a``s`` ``m``o``d``e``l``
For usage example, please see: Creating estimators from Keras Models.
#### Args:
- `keras_model`: A compiled Keras model object. This argument is mutually exclusive with `keras_model`_path.
#### Returns:
An Estimator from given keras model.
#### Raises:
- `ValueError`: if neither keras_model nor keras_model_path was given.
- `ValueError`: if both keras_model and keras_model_path was given.
- `ValueError`: if the keras_model_path is a GCS URI.
- `ValueError`: if keras_model has not been compiled.
- `ValueError`: if an invalid checkpoint_format was given.
