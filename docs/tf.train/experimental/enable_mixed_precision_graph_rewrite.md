[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/train/experimental/enable_mixed_precision_graph_rewrite)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/mixed_precision.py#L78-L119)  
---|---  
  
Enable mixed precision in
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function)s via
a graph rewrite.

### Aliases:

  * [`tf.compat.v2.train.experimental.enable_mixed_precision_graph_rewrite`](/api_docs/python/tf/train/experimental/enable_mixed_precision_graph_rewrite)

    
    
    tf.train.experimental.enable_mixed_precision_graph_rewrite(
        opt,
        loss_scale='dynamic'
    )
    

Mixed precision is the use of both float16 and float32 when training a model,
and is used to make the model run faster. This function will use mixed
precision to speed up the execution time of
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function)s
when run on a GPU. It does this by changing the dtype of certain operations in
the function's graph from float32 to float16.

This function additionally wraps an Optimizer with a LossScaleOptimizer, which
is required to prevent underflow in the float16 tensors during the backwards
pass. An optimizer must be passed to this function, which will then be wrapped
to use loss scaling.

When this function is used, gradients should only be computed and applied with
the returned optimizer through `opt.minimize()`, and not with a
[`tf.GradientTape`](https://tensorflow.google.cn/api_docs/python/tf/GradientTape).
This is because the returned optimizer will apply loss scaling, and
[`tf.GradientTape`](https://tensorflow.google.cn/api_docs/python/tf/GradientTape)
will not. If you do use a
[`tf.GradientTape`](https://tensorflow.google.cn/api_docs/python/tf/GradientTape),
your model may train to a worse quality.

Currently, mixed precision is only enabled on Volta GPUs and above. TPU
support is coming soon. CPUs are not supported, as CPUs do not run float16
operations faster than float32 operations.

WARNING: This rewrite silently affects the entire model and can have
unintended consequences. One example: If a NaN occurs during dynamic loss
scaling, the data for the batch is silently dropped while the
LossScaleOptimizer attempts to find the appropriate scaling value on the next
batch.

#### Args:

  * **`opt`** : An instance of a [`tf.keras.optimizers.Optimizer`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer).
  * **`loss_scale`** : Either an int/float, the string "dynamic", or an instance of a [`tf.train.experimental.LossScale`](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale). The loss scale to use. It is recommended to keep this as its default value of "dynamic".

#### Returns:

A version of `opt` that will use loss scaling to prevent underflow.

