通过图形重写启用混合精度。

```
 tf.compat.v1.train.experimental.enable_mixed_precision_graph_rewrite(    opt,    loss_scale='dynamic') 
```

Mixed precision is the use of both float16 and float32 when training a model,and is used to make the model run faster. This function will use mixedprecision to speed up the execution time of your model when run on a GPU. Itdoes this by changing the dtype of certain operations in the graph fromfloat32 to float16.

This function additionally wraps an Optimizer with a LossScaleOptimizer, whichis required to prevent underflow in the float16 tensors during the backwardspass. An optimizer must be passed to this function, which will then be wrappedto use loss scaling.

When this function is used, gradients should only be computed and applied withthe returned optimizer, either by calling  `opt.minimize()`  or `opt.compute_gradients()`  followed by  `opt.apply_gradients()` . Gradientsshould not be computed with [ `tf.gradients` ](https://tensorflow.google.cn/api_docs/python/tf/gradients) or [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape). This isbecause the returned optimizer will apply loss scaling, and[ `tf.gradients` ](https://tensorflow.google.cn/api_docs/python/tf/gradients)/[ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) will not. If you do directly use[ `tf.gradients` ](https://tensorflow.google.cn/api_docs/python/tf/gradients) or [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape), your model may train to a worse quality.

Currently, mixed precision is only enabled on Volta GPUs and above. TPUsupport is coming soon. CPUs are not supported, as CPUs do not run float16operations faster than float32 operations.

#### 参数：
- **`opt`** : An instance of a [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer) or a `tf.train.Optimizer` .
- **`loss_scale`** : Either an int/float, the string "dynamic", or an instance of a[ `tf.train.experimental.LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale). The loss scale to use. It isrecommended to keep this as its default value of "dynamic".


#### 返回：
A version of  `opt`  that will use loss scaling to prevent underflow.

