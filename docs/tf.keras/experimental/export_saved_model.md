Exports a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) as a Tensorflow SavedModel. (deprecated)

**Aliases** : [ `tf.compat.v1.keras.experimental.export_saved_model` ](/api_docs/python/tf/keras/experimental/export_saved_model), [ `tf.compat.v2.keras.experimental.export_saved_model` ](/api_docs/python/tf/keras/experimental/export_saved_model)

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


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Please use  `model.save(...,)`  or  `tf.keras.models.save_model(...,)` .
Note that at this time, subclassed models can only be saved using `serving_only=True` .

The exported  `SavedModel`  is a standalone serialization of Tensorflow objects,and is supported by TF language APIs and the Tensorflow Serving system.To load the model, use the function[ `tf.keras.experimental.load_from_saved_model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/experimental/load_from_saved_model).

The  `SavedModel`  contains:

1. a checkpoint containing the model weights.
2. a  `SavedModel`  proto containing the Tensorflow backend graph. Separategraphs are saved for prediction (serving), train, and evaluation. Ifthe model has not been compiled, then only the graph computing predictionswill be exported.
3. the model's json config. If the model is subclassed, this will only beincluded if the model's  `get_config()`  method is overwritten.


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
- **`model`** : A [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) to be saved. If the model is subclassed, the flag `serving_only`  must be set to True.
- **`saved_model_path`** : a string specifying the path to the SavedModel directory.
- **`custom_objects`** : Optional dictionary mapping string names to custom classesor functions (e.g. custom loss functions).
- **`as_text`** : bool,  `False`  by default. Whether to write the  `SavedModel`  protoin text format. Currently unavailable in serving-only mode.
- **`input_signature`** : A possibly nested sequence of [ `tf.TensorSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TensorSpec) objects, usedto specify the expected model inputs. See [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) for more details.
- **`serving_only`** : bool,  `False`  by default. When this is true, only theprediction graph is saved.


#### Raises:
- **`NotImplementedError`** : If the model is a subclassed model, and serving_only isFalse.
- **`ValueError`** : If the input signature cannot be inferred from the model.
- **`AssertionError`** : If the SavedModel directory already exists and isn't empty.
