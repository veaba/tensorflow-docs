Estimator: High level tools for working with models.

## Modules
[ `experimental` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental) module: Public API for tf.estimator.experimental namespace.

[ `export` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export) module: All public utility methods for exporting Estimator to SavedModel.

## Classes
[ `class BaselineClassifier` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BaselineClassifier): A classifier that can establish a simple baseline.

[ `class BaselineEstimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BaselineEstimator): An estimator that can establish a simple baseline.

[ `class BaselineRegressor` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BaselineRegressor): A regressor that can establish a simple baseline.

[ `class BestExporter` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BestExporter): This class exports the serving graph and checkpoints of the best models.

[ `class BinaryClassHead` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BinaryClassHead): Creates a  `Head`  for single label binary classification.

[ `class BoostedTreesClassifier` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BoostedTreesClassifier): A Classifier for Tensorflow Boosted Trees models.

[ `class BoostedTreesEstimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BoostedTreesEstimator): An Estimator for Tensorflow Boosted Trees models.

[ `class BoostedTreesRegressor` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/BoostedTreesRegressor): A Regressor for Tensorflow Boosted Trees models.

[ `class CheckpointSaverHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/CheckpointSaverHook): Saves checkpoints every N steps or seconds.

[ `class CheckpointSaverListener` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/CheckpointSaverListener): Interface for listeners that take action before or after checkpoint save.

[ `class DNNClassifier` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/DNNClassifier): A classifier for TensorFlow DNN models.

[ `class DNNEstimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/DNNEstimator): An estimator for TensorFlow DNN models with user-specified head.

[ `class DNNLinearCombinedClassifier` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/DNNLinearCombinedClassifier): An estimator for TensorFlow Linear and DNN joined classification models.

[ `class DNNLinearCombinedEstimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/DNNLinearCombinedEstimator): An estimator for TensorFlow Linear and DNN joined models with custom head.

[ `class DNNLinearCombinedRegressor` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/DNNLinearCombinedRegressor): An estimator for TensorFlow Linear and DNN joined models for regression.

[ `class DNNRegressor` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/DNNRegressor): A regressor for TensorFlow DNN models.

[ `class Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator): Estimator class to train and evaluate TensorFlow models.

[ `class EstimatorSpec` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/EstimatorSpec): Ops and objects returned from a  `model_fn`  and passed to an  `Estimator` .

[ `class EvalSpec` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/EvalSpec): Configuration for the "eval" part for the  `train_and_evaluate`  call.

[ `class Exporter` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Exporter): A class representing a type of model export.

[ `class FeedFnHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/FeedFnHook): Runs  `feed_fn`  and sets the  `feed_dict`  accordingly.

[ `class FinalExporter` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/FinalExporter): This class exports the serving graph and checkpoints at the end.

[ `class FinalOpsHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/FinalOpsHook): A hook which evaluates  `Tensors`  at the end of a session.

[ `class GlobalStepWaiterHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/GlobalStepWaiterHook): Delays execution until global step reaches  `wait_until_step` .

[ `class Head` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Head): Interface for the head/top of a model.

[ `class LatestExporter` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/LatestExporter): This class regularly exports the serving graph and checkpoints.

[ `class LinearClassifier` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/LinearClassifier): Linear classifier model.

[ `class LinearEstimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/LinearEstimator): An estimator for TensorFlow linear models with user-specified head.

[ `class LinearRegressor` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/LinearRegressor): An estimator for TensorFlow Linear regression problems.

[ `class LoggingTensorHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/LoggingTensorHook): Prints the given tensors every N local steps, every N seconds, or at end.

[ `class LogisticRegressionHead` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/LogisticRegressionHead): Creates a  `Head`  for logistic regression.

[ `class ModeKeys` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ModeKeys): Standard names for Estimator model modes.

[ `class MultiClassHead` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/MultiClassHead): Creates a  `Head`  for multi class classification.

[ `class MultiHead` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/MultiHead): Creates a  `Head`  for multi-objective learning.

[ `class MultiLabelHead` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/MultiLabelHead): Creates a  `Head`  for multi-label classification.

[ `class NanLossDuringTrainingError` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/NanLossDuringTrainingError): Unspecified run-time error.

[ `class NanTensorHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/NanTensorHook): Monitors the loss tensor and stops training if loss is NaN.

[ `class PoissonRegressionHead` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/PoissonRegressionHead): Creates a  `Head`  for poisson regression using [ `tf.nn.log_poisson_loss` ](https://tensorflow.google.cn/api_docs/python/tf/nn/log_poisson_loss).

[ `class ProfilerHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ProfilerHook): Captures CPU/GPU profiling information every N steps or seconds.

[ `class RegressionHead` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/RegressionHead): Creates a  `Head`  for regression using the  `mean_squared_error`  loss.

[ `class RunConfig` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/RunConfig): This class specifies the configurations for an  `Estimator`  run.

[ `class SecondOrStepTimer` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SecondOrStepTimer): Timer that triggers at most once every N seconds or once every N steps.

[ `class SessionRunArgs` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunArgs): Represents arguments to be added to a  `Session.run()`  call.

[ `class SessionRunContext` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunContext): Provides information about the  `session.run()`  call being made.

[ `class SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook): Hook to extend calls to MonitoredSession.run().

[ `class SessionRunValues` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunValues): Contains the results of  `Session.run()` .

[ `class StepCounterHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/StepCounterHook): Hook that counts steps per second.

[ `class StopAtStepHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/StopAtStepHook): Hook that requests stop at a specified step.

[ `class SummarySaverHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SummarySaverHook): Saves summaries every N steps.

[ `class TrainSpec` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/TrainSpec): Configuration for the "train" part for the  `train_and_evaluate`  call.

[ `class VocabInfo` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/VocabInfo): Vocabulary information for warm-starting.

[ `class WarmStartSettings` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/WarmStartSettings): Settings for warm-starting in  `tf.estimator.Estimators` .

## Functions
[ `add_metrics(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/add_metrics): Creates a new [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) which has given metrics.

[ `classifier_parse_example_spec(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/classifier_parse_example_spec): Generates parsing spec for tf.parse_example to be used with classifiers.

[ `regressor_parse_example_spec(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/regressor_parse_example_spec): Generates parsing spec for tf.parse_example to be used with regressors.

[ `train_and_evaluate(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/train_and_evaluate): Train and evaluate the  `estimator` .

