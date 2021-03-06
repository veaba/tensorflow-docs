

## Class  `StochasticGradientDescentParameters` 
tpu嵌入随机梯度下降的优化参数。

Pass this to  `tf.estimator.tpu.experimental.EmbeddingConfigSpec`  via the `optimization_parameters`  argument to set the optimizer and its parameters.See the documentation for  `tf.estimator.tpu.experimental.EmbeddingConfigSpec` for more details.

```
 estimator = tf.estimator.tpu.TPUEstimator(
    ...
    embedding_config_spec=tf.estimator.tpu.experimental.EmbeddingConfigSpec(
        ...
        optimization_parameters=(
            tf.tpu.experimental.StochasticGradientDescentParameters(0.1))))
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_embedding.py#L396-L406)

```
 __init__(
    learning_rate,
    clip_weight_min=None,
    clip_weight_max=None
)
 
```

随机梯度下降的优化参数。

#### 参数：
- **`learning_rate`** : a floating point value. The learning rate.
- **`clip_weight_min`** : the minimum value to clip by; None means -infinity.
- **`clip_weight_max`** : the maximum value to clip by; None means +infinity.
