[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v2/saved_model)  
---  
  
Public API for tf.saved_model namespace.

## Classes

[`class
Asset`](https://tensorflow.google.cn/api_docs/python/tf/saved_model/Asset):
Represents a file asset to hermetically include in a SavedModel.

[`class
SaveOptions`](https://tensorflow.google.cn/api_docs/python/tf/saved_model/SaveOptions):
Options for saving to SavedModel.

## Functions

[`contains_saved_model(...)`](https://tensorflow.google.cn/api_docs/python/tf/saved_model/contains_saved_model):
Checks whether the provided export directory could contain a SavedModel.

[`load(...)`](https://tensorflow.google.cn/api_docs/python/tf/saved_model/load):
Load a SavedModel from `export_dir`.

[`save(...)`](https://tensorflow.google.cn/api_docs/python/tf/saved_model/save):
Exports the Trackable object `obj` to [SavedModel
format](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md).

## Other Members

  * `ASSETS_DIRECTORY = 'assets'`
  * `ASSETS_KEY = 'saved_model_assets'`
  * `CLASSIFY_INPUTS = 'inputs'`
  * `CLASSIFY_METHOD_NAME = 'tensorflow/serving/classify'`
  * `CLASSIFY_OUTPUT_CLASSES = 'classes'`
  * `CLASSIFY_OUTPUT_SCORES = 'scores'`
  * `DEFAULT_SERVING_SIGNATURE_DEF_KEY = 'serving_default'`
  * `GPU = 'gpu'`
  * `PREDICT_INPUTS = 'inputs'`
  * `PREDICT_METHOD_NAME = 'tensorflow/serving/predict'`
  * `PREDICT_OUTPUTS = 'outputs'`
  * `REGRESS_INPUTS = 'inputs'`
  * `REGRESS_METHOD_NAME = 'tensorflow/serving/regress'`
  * `REGRESS_OUTPUTS = 'outputs'`
  * `SAVED_MODEL_FILENAME_PB = 'saved_model.pb'`
  * `SAVED_MODEL_FILENAME_PBTXT = 'saved_model.pbtxt'`
  * `SAVED_MODEL_SCHEMA_VERSION = 1`
  * `SERVING = 'serve'`
  * `TPU = 'tpu'`
  * `TRAINING = 'train'`
  * `VARIABLES_DIRECTORY = 'variables'`
  * `VARIABLES_FILENAME = 'variables'`

