Public API for tf.saved_model namespace.

## Class 
[ `class Asset` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/Asset): Represents a file asset to hermetically include in a SavedModel.

[ `class SaveOptions` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/SaveOptions): Options for saving to SavedModel.

## 功能
[ `contains_saved_model(...)` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/contains_saved_model): Checks whether the provided export directory could contain a SavedModel.

[ `load(...)` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/load): Load a SavedModel from  `export_dir` .

[ `save(...)` ](https://tensorflow.google.cn/api_docs/python/tf/saved_model/save): Exports the Trackable object  `obj`  to [SavedModel format](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md).

## 其他成员
-  `ASSETS_DIRECTORY = 'assets'`  []()
-  `ASSETS_KEY = 'saved_model_assets'`  []()
-  `CLASSIFY_INPUTS = 'inputs'`  []()
-  `CLASSIFY_METHOD_NAME = 'tensorflow/serving/classify'`  []()
-  `CLASSIFY_OUTPUT_CLASSES = 'classes'`  []()
-  `CLASSIFY_OUTPUT_SCORES = 'scores'`  []()
-  `DEFAULT_SERVING_SIGNATURE_DEF_KEY = 'serving_default'`  []()
-  `GPU = 'gpu'`  []()
-  `PREDICT_INPUTS = 'inputs'`  []()
-  `PREDICT_METHOD_NAME = 'tensorflow/serving/predict'`  []()
-  `PREDICT_OUTPUTS = 'outputs'`  []()
-  `REGRESS_INPUTS = 'inputs'`  []()
-  `REGRESS_METHOD_NAME = 'tensorflow/serving/regress'`  []()
-  `REGRESS_OUTPUTS = 'outputs'`  []()
-  `SAVED_MODEL_FILENAME_PB = 'saved_model.pb'`  []()
-  `SAVED_MODEL_FILENAME_PBTXT = 'saved_model.pbtxt'`  []()
-  `SAVED_MODEL_SCHEMA_VERSION = 1`  []()
-  `SERVING = 'serve'`  []()
-  `TPU = 'tpu'`  []()
-  `TRAINING = 'train'`  []()
-  `VARIABLES_DIRECTORY = 'variables'`  []()
-  `VARIABLES_FILENAME = 'variables'`  []()
