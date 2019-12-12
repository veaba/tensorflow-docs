Enable mixed precision in [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s via a graph rewrite.

```
 tf.train.experimental.enable_mixed_precision_graph_rewrite(
    opt,
    loss_scale='dynamic'
)
 
```

Mixed precision is the use of both float16 and float32 when training a model,and is used to make the model run faster. This function will use mixedprecision to speed up the execution time of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s when run on a GPU.It does this by changing the dtype of certain operations in the function'sgraph from float32 to float16.

This function additionally wraps an Optimizer with a LossScaleOptimizer, whichis required to prevent underflow in the float16 tensors during the backwardspass. An optimizer must be passed to this function, which will then be wrappedto use loss scaling.

When this function is used, gradients should only be computed and applied withthe returned optimizer through  `opt.minimize()` , and not with a[ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape). This is because the returned optimizer will apply lossscaling, and [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) will not. If you do use a [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape),your model may train to a worse quality.

Currently, mixed precision is only enabled on Volta GPUs and above. TPUsupport is coming soon. CPUs are not supported, as CPUs do not run float16operations faster than float32 operations.

WARNING: This rewrite silently affects the entire model and can haveunintended consequences. One example: If a NaN occurs during dynamic lossscaling, the data for the batch is silently dropped while theLossScaleOptimizer attempts to find the appropriate scaling value on the nextbatch.

#### Args:
- **`opt`** : An instance of a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer).
- **`loss_scale`** : Either an int/float, the string "dynamic", or an instance of a[ `tf.train.experimental.LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale). The loss scale to use. It isrecommended to keep this as its default value of "dynamic".


#### Returns:
A version of  `opt`  that will use loss scaling to prevent underflow.

