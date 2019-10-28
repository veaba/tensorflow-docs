## Class StochasticGradientDescentParameters
Optimization parameters for stochastic gradient descent for TPU embeddings.
Pass this to `tf.estimator.tpu.experimental.EmbeddingConfigSpec` via the `optimization_parameters` argument to set the optimizer and its parameters. See the documentation for `tf.estimator.tpu.experimental.EmbeddingConfigSpec` for more details.

```
 estimator = tf.estimator.tpu.TPUEstimator(
    ...
    embedding_config_spec=tf.estimator.tpu.experimental.EmbeddingConfigSpec(
        ...
        optimization_parameters=(
            tf.tpu.experimental.StochasticGradientDescentParameters(0.1))))
```
## __init__
View source

```
 __init__(
    learning_rate,
    clip_weight_min=None,
    clip_weight_max=None
)
```
Optimization parameters for stochastic gradient descent.
#### Args:
- `learning_rate`: a floating point value. The learning rate.
- `clip_weight_min`: the minimum value to clip by; None means -infinity.
- `clip_weight_max`: the maximum value to clip by; None means +infinity.
