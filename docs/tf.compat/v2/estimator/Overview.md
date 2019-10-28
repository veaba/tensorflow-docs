Estimator: High level tools for working with models.
## Modules
`experimental` module: Public API for tf.estimator.`experimental` namespace.
`export` module: All public utility methods for `export`ing Estimator to SavedModel.
## Classes
`class BaselineClassifier`: A classifier that can establish a simple baseline.
`class BaselineEstimator`: An estimator that can establish a simple baseline.
`class BaselineRegressor`: A regressor that can establish a simple baseline.
`class BestExporter`: This class exports the serving graph and checkpoints of the best models.
`class BinaryClassHead`: Creates a `Head` for single label binary classification.
`class BoostedTreesClassifier`: A Classifier for Tensorflow Boosted Trees models.
`class BoostedTreesEstimator`: An Estimator for Tensorflow Boosted Trees models.
`class BoostedTreesRegressor`: A Regressor for Tensorflow Boosted Trees models.
`class CheckpointSaverHook`: Saves checkpoints every N steps or seconds.
`class CheckpointSaverListener`: Interface for listeners that take action before or after checkpoint save.
`class DNNClassifier`: A classifier for TensorFlow DNN models.
`class DNNEstimator`: An estimator for TensorFlow DNN models with user-specified head.
`class DNNLinearCombinedClassifier`: An estimator for TensorFlow Linear and DNN joined classification models.
`class DNNLinearCombinedEstimator`: An estimator for TensorFlow Linear and DNN joined models with custom head.
`class DNNLinearCombinedRegressor`: An estimator for TensorFlow Linear and DNN joined models for regression.
`class DNNRegressor`: A regressor for TensorFlow DNN models.
`class Estimator`: Estimator class to train and evaluate TensorFlow models.
`class EstimatorSpec`: Ops and objects returned from a `model_fn` and passed to an `Estimator`.
`class EvalSpec`: Configuration for the "eval" part for the `train_and_evaluate` call.
`class Exporter`: A class representing a type of model export.
`class FeedFnHook`: Runs `feed_fn` and sets the `feed_dict` accordingly.
`class FinalExporter`: This class exports the serving graph and checkpoints at the end.
`class FinalOpsHook`: A hook which evaluates `Tensors` at the end of a session.
`class GlobalStepWaiterHook`: Delays execution until global step reaches `wait_until_step`.
`class Head`: Interface for the head/top of a model.
`class LatestExporter`: This class regularly exports the serving graph and checkpoints.
`class LinearClassifier`: Linear classifier model.
`class LinearEstimator`: An estimator for TensorFlow linear models with user-specified head.
`class LinearRegressor`: An estimator for TensorFlow Linear regression problems.
`class LoggingTensorHook`: Prints the given tensors every N local steps, every N seconds, or at end.
`class LogisticRegressionHead`: Creates a `Head` for logistic regression.
`class ModeKeys`: Standard names for Estimator model modes.
`class MultiClassHead`: Creates a `Head` for multi class classification.
`class MultiHead`: Creates a `Head` for multi-objective learning.
`class MultiLabelHead`: Creates a `Head` for multi-label classification.
`class NanLossDuringTrainingError`: Unspecified run-time error.
`class NanTensorHook`: Monitors the loss tensor and stops training if loss is NaN.
`class PoissonRegressionHead`: Creates a `Head` for poisson regression using `tf.nn.log_poisson_loss`.
`class ProfilerHook`: Captures CPU/GPU profiling information every N steps or seconds.
`class RegressionHead`: Creates a `Head` for regression using the `mean_squared_error` loss.
`class RunConfig`: This class specifies the configurations for an `Estimator` run.
`class SecondOrStepTimer`: Timer that triggers at most once every N seconds or once every N steps.
