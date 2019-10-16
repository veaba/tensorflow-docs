## Class AdagradParameters

Optimization parameters for Adagrad with TPU embeddings.

Pass this to tf.estimator.tpu.experimental.EmbeddingConfigSpec via the optimization_parameters argument to set the optimizer and its parameters. See the documentation for tf.estimator.tpu.experimental.EmbeddingConfigSpec for more details.

```
 estimator = tf.estimator.tpu.TPUEstimator(
    ...
    embedding_spec=tf.estimator.tpu.experimental.EmbeddingConfigSpec(
        ...
        optimization_parameters=tf.tpu.experimental.AdagradParameters(0.1),
        ...))
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_embedding.py#L280-L303)


```
 __init__(
    learning_rate,
    initial_accumulator=0.1,
    use_gradient_accumulation=True,
    clip_weight_min=None,
    clip_weight_max=None
)
```

Optimization parameters for Adagrad.
#### Args:
- `learning_rate`: used for updating embedding table.
- `initial_accumulator`: initial accumulator for Adagrad.
- `use_gradient_accumulation`: setting this to `False` makes embedding gradients calculation less accurate but faster. Please see `optimization_parameters.proto` for details. for details.
- `clip_weight_min`: the minimum value to clip by; None means -infinity.
- `clip_weight_max`: the maximum value to clip by; None means +infinity.
