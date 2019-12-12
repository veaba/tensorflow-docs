设置实验优化器选项。

**别名** : [ `tf.compat.v1.config.optimizer.set_experimental_options` ](/api_docs/python/tf/config/optimizer/set_experimental_options), [ `tf.compat.v2.config.optimizer.set_experimental_options` ](/api_docs/python/tf/config/optimizer/set_experimental_options)

```
 tf.config.optimizer.set_experimental_options(options)
 
```

Note that optimizations are only applied in graph mode, (within tf.function).In addition, as these are experimental options, the list is subject to change.

#### 参数：
- **`options`** : Dictionary of experimental optimizer options to configure.Valid keys:
    - layout_optimizer: Optimize tensor layoutse.g. This will try to use NCHW layout on GPU which is faster.
    - constant_folding: Fold constantsStatically infer the value of tensors when possible, and materialize theresult using constants.
    - shape_optimization: Simplify computations made on shapes.
    - remapping: Remap subgraphs onto more efficient implementations.
    - arithmetic_optimization: Simplify arithmetic ops with commonsub-expression elimination and arithmetic simplification.
    - dependency_optimization: Control dependency optimizations. Removeredundant control dependencies, which may enable other optimization.This optimizer is also essential for pruning Identity and NoOp nodes.
    - loop_optimization: Loop optimizations.
    - function_optimization: Function optimizations and inlining.
    - debug_stripper: Strips debug-related nodes from the graph.
    - disable_model_pruning: Disable removal of unnecessary ops from the graph
    - scoped_allocator_optimization: Try to allocate some independent Opoutputs contiguously in order to merge or eliminate downstream Ops.
    - pin_to_host_optimization: Force small ops onto the CPU.
    - implementation_selector: Enable the swap of kernel implementations basedon the device placement.
    - auto_mixed_precision: Change certain float32 ops to float16 on VoltaGPUs and above. Without the use of loss scaling, this can causenumerical underflow (see[ `keras.mixed_precision.experimental.LossScaleOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer)).
    - disable_meta_optimizer: Disable the entire meta optimizer.
    - min_graph_nodes: The minimum number of nodes in a graph to optimizer.For smaller graphs, optimization is skipped.
