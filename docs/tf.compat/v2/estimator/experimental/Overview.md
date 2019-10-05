
Public API for tf.estimator.experimental namespace.
### Aliases:
- Module `tf.compat.v2.estimator.experimental`
## Classes
[class InMemoryEvaluatorHook](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/InMemoryEvaluatorHook): Hook to run evaluation in training without a checkpoint.

[class LinearSDCA](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/LinearSDCA): Stochastic Dual Coordinate Ascent helper for linear estimators.

[class RNNClassifier](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/RNNClassifier): A classifier for TensorFlow RNN models.

[class RNNEstimator](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/RNNEstimator): An Estimator for TensorFlow RNN models with user-specified head.

## Functions
[build_raw_supervised_input_receiver_fn(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/build_raw_supervised_input_receiver_fn): Build a supervised_input_receiver_fn for raw features and labels.

[call_logit_fn(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/call_logit_fn): Calls logit_fn (experimental).

[make_early_stopping_hook(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/make_early_stopping_hook): Creates early-stopping hook.

[make_stop_at_checkpoint_step_hook(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/make_stop_at_checkpoint_step_hook): Creates a proper StopAtCheckpointStepHook based on chief status.

[stop_if_higher_hook(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/stop_if_higher_hook): Creates hook to stop if the given metric is higher than the threshold.

[stop_if_lower_hook(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/stop_if_lower_hook): Creates hook to stop if the given metric is lower than the threshold.

[stop_if_no_decrease_hook(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/stop_if_no_decrease_hook): Creates hook to stop if metric does not decrease within given max steps.

[stop_if_no_increase_hook(...)](https://www.tensorflow.org/api_docs/python/tf/estimator/experimental/stop_if_no_increase_hook): Creates hook to stop if metric does not increase within given max steps.

