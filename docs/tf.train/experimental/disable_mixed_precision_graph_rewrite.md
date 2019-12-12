禁用混合精度图形重写。

```
 tf.train.experimental.disable_mixed_precision_graph_rewrite() 
```

After this is called, the mixed precision graph rewrite will no longer run fortf.functions, and so float32 operations will no longer be converted tofloat16.

This does not undo the effects of loss scaling. Any optimizers wrapped with aLossScaleOptimizer will continue to do loss scaling, although this lossscaling will no longer be useful, as the graph rewrite no longer convertstf.functions to use float16.

This function is useful for unit testing. A unit test can test using the mixedprecision graph rewrite, then disable it so future unit tests continue usingfloat32.

