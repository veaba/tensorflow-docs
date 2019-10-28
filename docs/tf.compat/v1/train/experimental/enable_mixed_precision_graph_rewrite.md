Enable mixed precision via a graph rewrite.

```
 tf.compat.v1.train.experimental.enable_mixed_precision_graph_rewrite(
    opt,
    loss_scale='dynamic'
)
```
Mixed precision is the use of both float16 and float32 when training a model, and is used to make the model run faster. This function will use mixed precision to speed up the execution time of your model when run on a GPU. It does this by changing the dtype of certain operations in the graph from float32 to float16.
This function additionally wraps an Optimizer with a LossScaleOptimizer, which is required to prevent underflow in the float16 tensors during the backwards pass. An optimizer must be passed to this function, which will then be wrapped to use loss scaling.
