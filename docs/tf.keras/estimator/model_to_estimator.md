
Constructs an Estimator instance from given keras model.
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
[Creating estimators from Keras Models](https://tensorflow.org/guide/estimators#model_to_estimator)For usage example, please see: .

#### Args:
- `keras_model`: A compiled Keras model object. This argument is mutually exclusive with `keras_model`_path.
- `keras_model`_path: Path to a compiled Keras model `save`d on disk, in HDF5 format, which can be generated with the `save`() method of a Keras model. This argument is mutually exclusive with `keras_model`.
- `custom_objects`: Dictionary for custom objects.
- `model_dir`: Directory to `save` `Estimator` model parameters, graph, summary files for TensorBoard, etc.
- `config`: `RunConfig` to `config` `Estimator`.
- `checkpoint_format`: Sets the format of the `checkpoint` `save`d by the estimator when training. May be `save`r or `checkpoint`, depending on whether to `save` `checkpoint`s from `tf.compat.v1.train.Saver` or `tf.train.Checkpoint`. The default is `checkpoint`. `Estimator`s use name-based `tf.train.Saver` `checkpoint`s, while Keras models use object-based `checkpoint`s from `tf.train.Checkpoint`. Currently, saving object-based `checkpoint`s from `model_to_estimator` is only supported by Functional and Sequential models.
#### Returns:

An Estimator from given keras model.
#### Raises:
- `ValueError`: if neither keras_model nor keras_model_path was given.
- `ValueError`: if both keras_model and keras_model_path was given.
- `ValueError`: if the keras_model_path is a GCS URI.
- `ValueError`: if keras_model has not been compiled.
- `ValueError`: if an invalid checkpoint_format was given.
