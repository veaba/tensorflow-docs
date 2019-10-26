Public API for tf.saved_model namespace.
## Modules
[builder](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/builder) module: SavedModel .

[constants](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/constants) module: Constants for SavedModel save and restore operations.

[experimental](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/experimental) module: Public API for tf.saved_model. namespace.

[loader](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/loader) module: Loader functionality for SavedModel with hermetic, language-neutral exports.

[main_op](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/main_op) module: SavedModel main op.

[signature_constants](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/signature_constants) module: Signature constants for SavedModel save and restore operations.

[signature_def_utils](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/signature_def_utils) module: SignatureDef utility functions.

[tag_constants](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/tag_constants) module: Common tags used for graphs in SavedModel.

[utils](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/utils) module: SavedModel utility functions.

## Classes
[class Asset](https://tensorflow.google.cn/api_docs/python/tf/saved_model/Asset): Represents a file asset to hermetically include in a SavedModel.

[class Builder](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/Builder): Builds the SavedModel protocol buffer and saves variables and assets.

[class SaveOptions](https://tensorflow.google.cn/api_docs/python/tf/saved_model/SaveOptions): Options for saving to SavedModel.

## Functions
[build_signature_def(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/build_signature_def): Utility function to build a SignatureDef protocol buffer.

[build_tensor_info(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/build_tensor_info): Utility function to build TensorInfo proto from a Tensor. (deprecated)

[classification_signature_def(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/classification_signature_def): Creates classification signature from given examples and predictions.

[contains_saved_model(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/contains_saved_model): Checks whether the provided export directory could contain a SavedModel.

[get_tensor_from_tensor_info(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/get_tensor_from_tensor_info): Returns the Tensor or SparseTensor described by a TensorInfo proto. (deprecated)

[is_valid_signature(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/is_valid_signature): Determine whether a SignatureDef can be served by TensorFlow Serving.

[load(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/load): Loads the model from a SavedModel as specified by tags. (deprecated)

[load_v2(...)](https://tensorflow.google.cn/api_docs/python/tf/saved_model/load): Load a SavedModel from export_dir.

[main_op_with_restore(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/main_op_with_restore): Returns a main op to init variables, tables and restore the graph. (deprecated)

[maybe_saved_model_directory(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/contains_saved_model): Checks whether the provided export directory could contain a SavedModel.

[predict_signature_def(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/predict_signature_def): Creates prediction signature from given inputs and outputs.

[regression_signature_def(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/regression_signature_def): Creates regression signature from given examples and predictions.

[save(...)](https://tensorflow.google.cn/api_docs/python/tf/saved_model/save): Exports the Trackable object obj to SavedModel format.

[simple_save(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/simple_save): Convenience function to build a SavedModel suitable for serving. (deprecated)

## Other Members
- ASSETS_DIRECTORY = 'assets'
- ASSETS_KEY = 'saved_model_assets'
- CLASSIFY_INPUTS = 'inputs'
- CLASSIFY_METHOD_NAME = 'tensorflow/serving/classify'
- CLASSIFY_OUTPUT_CLASSES = 'classes'
- CLASSIFY_OUTPUT_SCORES = 'scores'
- DEFAULT_SERVING_SIGNATURE_DEF_KEY = 'serving_default'
- GPU = 'gpu'
- LEGACY_INIT_OP_KEY = 'legacy_init_op'
- MAIN_OP_KEY = 'saved_model_main_op'
- PREDICT_INPUTS = 'inputs'
- PREDICT_METHOD_NAME = 'tensorflow/serving/predict'
- PREDICT_OUTPUTS = 'outputs'
- REGRESS_INPUTS = 'inputs'
- REGRESS_METHOD_NAME = 'tensorflow/serving/regress'
- REGRESS_OUTPUTS = 'outputs'
- SAVED_MODEL_FILENAME_PB = 'saved_model.pb'
- SAVED_MODEL_FILENAME_PBTXT = 'saved_model.pbtxt'
- SAVED_MODEL_SCHEMA_VERSION = 1
- SERVING = 'serve'
- TPU = 'tpu'
- TRAINING = 'train'
- VARIABLES_DIRECTORY = 'variables'
- VARIABLES_FILENAME = 'variables'
