Loads a keras Model from a SavedModel created by export_saved_model(). (deprecated)
### Aliases:
- tf.compat.v1.keras.experimental.load_from_saved_model
- tf.compat.v2.keras.experimental.load_from_saved_model

```
 tf.keras.experimental.load_from_saved_model(
    saved_model_path,
    custom_objects=None
)
```
### Used in the tutorials:
- Transfer learning with TensorFlow Hub
This function reinstantiates model state by: 1) loading model topology from json (this will eventually come from metagraph). 2) loading model weights from checkpoint.
#### Example:

```
 import tensorflow as tf

# Create a tf.keras model.
model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(1, input_shape=[10]))
model.summary()

# Save the tf.keras model in the SavedModel format.
path = '/tmp/simple_keras_model'
tf.keras.experimental.export_saved_model(model, path)

# Load the saved keras model back.
new_model = tf.keras.experimental.load_from_saved_model(path)
new_model.summary()
```
#### Args:
- saved_model_path: a string specifying the path to an existing SavedModel.
- custom_objects: Optional dictionary mapping names (strings) to custom classes or functions to be considered during deserialization.
#### Returns:
a keras.Model instance.
