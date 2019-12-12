Disables the mixed precision graph rewrite.

```
 tf.compat.v1.train.experimental.disable_mixed_precision_graph_rewrite() 
```

After this is called, the mixed precision graph rewrite will no longer run fornew Sessions, and so float32 operations will no longer be converted to float16in such Sessions. However, any existing Sessions will continue to have thegraph rewrite enabled if they were created after `enable_mixed_precision_graph_rewrite`  was called but before `disable_mixed_precision_graph_rewrite`  was called.

This does not undo the effects of loss scaling. Any optimizers wrapped with aLossScaleOptimizer will continue to do loss scaling, although this lossscaling will no longer be useful if the optimizer is used in new Sessions, asthe graph rewrite no longer converts the graph to use float16.

This function is useful for unit testing. A unit tests can test using themixed precision graph rewrite, then disable it so future unit tests continueusing float32. If this is done, unit tests should not share a single session,as  `enable_mixed_precision_graph_rewrite`  and `disable_mixed_precision_graph_rewrite`  have no effect on existing sessions.

