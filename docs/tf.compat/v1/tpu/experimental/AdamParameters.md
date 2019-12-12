

## Class  `AdamParameters` 
带tpu嵌入的adam优化参数。

Pass this to  `tf.estimator.tpu.experimental.EmbeddingConfigSpec`  via the `optimization_parameters`  argument to set the optimizer and its parameters.See the documentation for  `tf.estimator.tpu.experimental.EmbeddingConfigSpec` for more details.

```
 estimator = tf.estimator.tpu.TPUEstimator(
    ...
    embedding_config_spec=tf.estimator.tpu.experimental.EmbeddingConfigSpec(
        ...
        optimization_parameters=tf.tpu.experimental.AdamParameters(0.1),
        ...))
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_embedding.py#L326-L373)

```
 __init__(
    learning_rate,
    beta1=0.9,
    beta2=0.999,
    epsilon=1e-08,
    lazy_adam=True,
    sum_inside_sqrt=True,
    use_gradient_accumulation=True,
    clip_weight_min=None,
    clip_weight_max=None
)
 
```

ADAM的优化参数。

#### 参数：
- **`learning_rate`** : a floating point value. The learning rate.
- **`beta1`** : A float value.The exponential decay rate for the 1st moment estimates.
- **`beta2`** : A float value.The exponential decay rate for the 2nd moment estimates.
- **`epsilon`** : A small constant for numerical stability.
- **`lazy_adam`** : Use lazy Adam instead of Adam. Lazy Adam trains faster.Please see  `optimization_parameters.proto`  for details.
- **`sum_inside_sqrt`** : This improves training speed. Please see `optimization_parameters.proto`  for details.
- **`use_gradient_accumulation`** : setting this to  `False`  makes embeddinggradients calculation less accurate but faster. Please see `optimization_parameters.proto`  for details.for details.
- **`clip_weight_min`** : the minimum value to clip by; None means -infinity.
- **`clip_weight_max`** : the maximum value to clip by; None means +infinity.
