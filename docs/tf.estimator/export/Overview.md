用于将估计器导出到savedModel的所有公用程序方法。

This file includes functions and constants from core (model_utils) and export.py

## Class 
[ `class ClassificationOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ClassificationOutput): Represents the output of a classification head.

[ `class ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput): Represents an output of a model that can be served.

[ `class PredictOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/PredictOutput): Represents the output of a generic prediction head.

[ `class RegressionOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/RegressionOutput): Represents the output of a regression head.

[ `class ServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ServingInputReceiver): A return type for a serving_input_receiver_fn.

[ `class TensorServingInputReceiver` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/TensorServingInputReceiver): A return type for a serving_input_receiver_fn.

## 功能
[ `build_parsing_serving_input_receiver_fn(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/build_parsing_serving_input_receiver_fn): Build a serving_input_receiver_fn expecting fed tf.Examples.

[ `build_raw_serving_input_receiver_fn(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/build_raw_serving_input_receiver_fn): Build a serving_input_receiver_fn expecting feature Tensors.

