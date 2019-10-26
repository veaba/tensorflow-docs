## Class TFLiteConverter
Converts a TensorFlow model into TensorFlow Lite model.
### Aliases:
- Class tf.compat.v2.lite.TFLiteConverter
#### Attributes:
- allow_custom_ops: Boolean indicating whether to allow custom operations. When false any unknown operation is an error. When true, custom ops are created for any op that is unknown. The developer will need to provide these to the TensorFlow Lite runtime with a custom resolver. (default False)
- target_spec: Experimental flag, subject to change. Specification of target device.
- optimizations: Experimental flag, subject to change. A list of optimizations to apply when converting the model. E.g. `[Optimize.DEFAULT]
- representative_dataset: A representative dataset that can be used to generate input and output samples for the model. The converter can use the dataset to evaluate different optimizations.
- experimental_enable_mlir_converter: Experimental flag, subject to change. Enables the MLIR converter instead of the TOCO converter.
#### Example usage:

```
 # Converting a SavedModel to a TensorFlow Lite model.
converter = lite.TFLiteConverter.from_saved_model(saved_model_dir)
tflite_model = converter.convert()

# Converting a tf.Keras model to a TensorFlow Lite model.
converter = lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

# Converting ConcreteFunctions to a TensorFlow Lite model.
converter = lite.TFLiteConverter.from_concrete_functions([func])
tflite_model = converter.convert()
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L298-L312)


```
 __init__(
    funcs,
    trackable_obj=None
)
```
Constructor for TFLiteConverter.
#### Args:
- funcs: List of TensorFlow ConcreteFunctions. The list should not contain duplicate elements.
- trackable_obj: tf.AutoTrackable object associated with funcs. A reference to this object needs to be maintained so that Variables do not get garbage collected since functions have a weak reference to Variables. This is only required when the tf.AutoTrackable object is not maintained by the user (e.g. from_saved_model).
## Methods
### convert
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L386-L452)


```
 convert()
```
Converts a TensorFlow GraphDef based on instance variables.
#### Returns:
The converted data in serialized format.
#### Raises:
- ValueError: Multiple concrete functions are specified. Input shape is not specified. Invalid quantization parameters.
### from_concrete_functions
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L314-L335)


```
 @classmethod
from_concrete_functions(
    cls,
    funcs
)
```
Creates a TFLiteConverter object from ConcreteFunctions.
#### Args:
- funcs: List of TensorFlow ConcreteFunctions. The list should not contain duplicate elements.
#### Returns:
TFLiteConverter object.
#### Raises:
Invalid input type.
### from_keras_model
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L372-L384)


```
 @classmethod
from_keras_model(
    cls,
    model
)
```
Creates a TFLiteConverter object from a Keras model.
#### Args:
- model: tf.Keras.Model
#### Returns:
TFLiteConverter object.
### from_saved_model
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L337-L370)


```
 @classmethod
from_saved_model(
    cls,
    saved_model_dir,
    signature_keys=None,
    tags=None
)
```
Creates a TFLiteConverter object from a SavedModel directory.
#### Args:
- saved_model_dir: SavedModel directory to convert.
- signature_keys: List of keys identifying SignatureDef containing inputs and outputs. Elements should not be duplicated. By default the signatures attribute of the MetaGraphdef is used. (default saved_model.signatures)
- tags: Set of tags identifying the MetaGraphDef within the SavedModel to analyze. All tags in the tag set must be present. (default set(SERVING))
#### Returns:
TFLiteConverter object.
#### Raises:
Invalid signature keys.
