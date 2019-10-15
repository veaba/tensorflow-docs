
All public utility methods for exporting Estimator to SavedModel.
### Aliases:
- Module `tf.compat.v2.estimator.export`

This file includes functions and constants from core (model_utils) and export.py
## Classes
[class ClassificationOutput](https://www.tensorflow.org/api_docs/python/tf/estimator/export/ClassificationOutput): Represents the output of a classification head.

[class ExportOutput](https://www.tensorflow.org/api_docs/python/tf/estimator/export/ExportOutput): Represents an output of a model that can be served.

[class PredictOutput](https://www.tensorflow.org/api_docs/python/tf/estimator/export/PredictOutput): Represents the output of a generic prediction head.

[class RegressionOutput](https://www.tensorflow.org/api_docs/python/tf/estimator/export/RegressionOutput): Represents the output of a regression head.

[class ServingInputReceiver](https://www.tensorflow.org/api_docs/python/tf/estimator/export/ServingInputReceiver): A return type for a serving_input_receiver_fn.

[class TensorServingInputReceiver](https://www.tensorflow.org/api_docs/python/tf/estimator/export/TensorServingInputReceiver): A return type for a serving_input_receiver_fn.

## Functions
[build_parsing_serving_input_receiver_fn(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/export/build_parsing_serving_input_receiver_fn): Build a serving_input_receiver_fn expecting fed tf.Examples.

[build_raw_serving_input_receiver_fn(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/export/build_raw_serving_input_receiver_fn): Build a serving_input_receiver_fn expecting feature Tensors.

