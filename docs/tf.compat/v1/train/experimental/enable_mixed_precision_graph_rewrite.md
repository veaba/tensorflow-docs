
Enable mixed precision via a graph rewrite.

```
 tf.compat.v1.train.experimental.enable_mixed_precision_graph_rewrite(
    opt,
    loss_scale='dynamic'
)
```

Mixed precision is the use of both float16 and float32 when training a model, and is used to make the model run faster. This function will use mixed precision to speed up the execution time of your model when run on a GPU. It does this by changing the dtype of certain operations in the graph from float32 to float16.

This function additionally wraps an Optimizer with a LossScaleOptimizer, which is required to prevent underflow in the float16 tensors during the backwards pass. An optimizer must be passed to this function, which will then be wrapped to use loss scaling.
[tf.gradients](https://www.tensorflow.org/api_docs/python/tf/gradients)When this function is used, gradients should only be computed and applied with the returned optimizer, either by calling opt.minimize() or opt.compute_gradients() followed by opt.apply_gradients(). Gradients should not be computed with  or tf.GradientTape. This is because the returned optimizer will apply loss scaling, and /tf.GradientTape will not. If you do directly use  or tf.GradientTape, your model may train to a worse quality.


Currently, mixed precision is only enabled on Volta GPUs and above. TPU support is coming soon. CPUs are not supported, as CPUs do not run float16 operations faster than float32 operations.
#### Args:
- `opt`: An instance of a `tf.keras.optimizers.Optimizer` or a `tf.train.Optimizer`.
- `loss_scale`: Either an int/float, the string "dynamic", or an instance of a `tf.train.experimental.LossScale`. The loss scale to use. It is recommended to keep this as its default value of "dynamic".
#### Returns:

A version of opt that will use loss scaling to prevent underflow.
