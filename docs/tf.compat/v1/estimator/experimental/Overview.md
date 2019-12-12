Public API for tf.estimator.experimental namespace.

## Classes
[ `class InMemoryEvaluatorHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/InMemoryEvaluatorHook): Hook to run evaluation in training without a checkpoint.

[ `class KMeans` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/experimental/KMeans): An Estimator for K-Means clustering.

[ `class LinearSDCA` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/LinearSDCA): Stochastic Dual Coordinate Ascent helper for linear estimators.

## Functions
[ `build_raw_supervised_input_receiver_fn(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/build_raw_supervised_input_receiver_fn): Build a supervised_input_receiver_fn for raw features and labels.

[ `call_logit_fn(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/call_logit_fn): Calls logit_fn (experimental).

[ `dnn_logit_fn_builder(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/experimental/dnn_logit_fn_builder): Function builder for a dnn logit_fn.

[ `linear_logit_fn_builder(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/experimental/linear_logit_fn_builder): Function builder for a linear logit_fn.

[ `make_early_stopping_hook(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/make_early_stopping_hook): Creates early-stopping hook.

[ `make_stop_at_checkpoint_step_hook(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/make_stop_at_checkpoint_step_hook): Creates a proper StopAtCheckpointStepHook based on chief status.

[ `stop_if_higher_hook(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/stop_if_higher_hook): Creates hook to stop if the given metric is higher than the threshold.

[ `stop_if_lower_hook(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/stop_if_lower_hook): Creates hook to stop if the given metric is lower than the threshold.

[ `stop_if_no_decrease_hook(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/stop_if_no_decrease_hook): Creates hook to stop if metric does not decrease within given max steps.

[ `stop_if_no_increase_hook(...)` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/experimental/stop_if_no_increase_hook): Creates hook to stop if metric does not increase within given max steps.

