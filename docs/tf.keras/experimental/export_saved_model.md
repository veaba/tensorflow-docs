[tf.keras.Model](https://tensorflow.google.cn/api_docs/python/tf/keras/Model)Exports a  as a Tensorflow SavedModel. (deprecated)

### Aliases:
- tf.compat.v1.keras.experimental.export_saved_model
- tf.compat.v2.keras.experimental.export_saved_model

```
 tf.keras.experimental.export_saved_model(
    model,
    saved_model_path,
    custom_objects=None,
    as_text=False,
    input_signature=None,
    serving_only=False
)
```
### Used in the tutorials:
- Transfer learning with TensorFlow Hub
Note that at this time, subclassed models can only be saved using serving_only=True.
[tf.keras.experimental.load_from_saved_model](https://tensorflow.google.cn/api_docs/python/tf/keras/experimental/load_from_saved_model)The exported SavedModel is a standalone serialization of Tensorflow objects, and is supported by TF language APIs and the Tensorflow Serving system. To load the model, use the function .

The SavedModel contains:
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
- model: A tf.keras.Model to be saved. If the model is subclassed, the flag serving_only must be set to True.
- saved_model_path: a string specifying the path to the SavedModel directory.
- custom_objects: Optional dictionary mapping string names to custom classes or functions (e.g. custom loss functions).
- as_text: bool, False by default. Whether to write the SavedModel proto in text format. Currently unavailable in serving-only mode.
- input_signature: A possibly nested sequence of tf.TensorSpec objects, used to specify the expected model inputs. See tf.function for more details.
- serving_only: bool, False by default. When this is true, only the prediction graph is saved.
#### Raises:
- NotImplementedError: If the model is a subclassed model, and serving_only is False.
- ValueError: If the input signature cannot be inferred from the model.
- AssertionError: If the SavedModel directory already exists and isn't empty.
