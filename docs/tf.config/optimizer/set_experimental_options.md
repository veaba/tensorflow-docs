Set experimental optimizer options.
### Aliases:
- `tf.compat.v1.config.optimizer.set_experimental_options`
- `tf.compat.v2.config.optimizer.set_experimental_options`

```
 tf.config.optimizer.set_experimental_options(options)
```
Note that optimizations are only applied in graph mode, (within tf.function). In addition, as these are experimental options, the list is subject to change.
#### Args:
- `options`: Dictionary of experimental optimizer `options` to configure. Valid keys:
layout_optimizer: Optimize tensor layouts e.g. This will try to use NCHW layout on GPU which is faster.
constant_folding: Fold constants Statically infer the value of tensors when possible, and materialize the result using constants.
shape_optimization: Simplify computations made on shapes.
remapping: Remap subgraphs onto more efficient implementations.
arithmetic_optimization: Simplify arithmetic ops with common sub-expression elimination and arithmetic simplification.
dependency_optimization: Control dependency optimizations. Remove redundant control dependencies, which may enable other optimization. This optimizer is also essential for pruning Identity and NoOp nodes.
loop_optimization: Loop optimizations.
function_optimization: Function optimizations and inlining.
debug_stripper: Strips debug-related nodes from the graph.
disable_model_pruning: Disable removal of unnecessary ops from the graph
scoped_allocator_optimization: Try to allocate some independent Op outputs contiguously in order to merge or eliminate downstream Ops.
pin_to_host_optimization: Force small ops onto the CPU.
implementation_selector: Enable the swap of kernel implementations based on the device placement.
auto_mixed_precision: Change certain float32 ops to float16 on Volta GPUs and above. Without the use of loss scaling, this can cause numerical underflow (see `keras.mixed_precision.experimental.LossScaleOptimizer`).
disable_meta_optimizer: Disable the entire meta optimizer.
min_graph_nodes: The minimum number of nodes in a graph to optimizer. For smaller graphs, optimization is skipped.
- ``l``a``y``o``u``t``_``o``p``t``i``m``i``z``e``r``:`` ``O``p``t``i``m``i``z``e`` ``t``e``n``s``o``r`` ``l``a``y``o``u``t``s`` ``e``.``g``.`` ``T``h``i``s`` ``w``i``l``l`` ``t``r``y`` ``t``o`` ``u``s``e`` ``N``C``H``W`` ``l``a``y``o``u``t`` ``o``n`` ``G``P``U`` ``w``h``i``c``h`` ``i``s`` ``f``a``s``t``e``r``.``
- ``c``o``n``s``t``a``n``t``_``f``o``l``d``i``n``g``:`` ``F``o``l``d`` ``c``o``n``s``t``a``n``t``s`` ``S``t``a``t``i``c``a``l``l``y`` ``i``n``f``e``r`` ``t``h``e`` ``v``a``l``u``e`` ``o``f`` ``t``e``n``s``o``r``s`` ``w``h``e``n`` ``p``o``s``s``i``b``l``e``,`` ``a``n``d`` ``m``a``t``e``r``i``a``l``i``z``e`` ``t``h``e`` ``r``e``s``u``l``t`` ``u``s``i``n``g`` ``c``o``n``s``t``a``n``t``s``.``
- ``s``h``a``p``e``_``o``p``t``i``m``i``z``a``t``i``o``n``:`` ``S``i``m``p``l``i``f``y`` ``c``o``m``p``u``t``a``t``i``o``n``s`` ``m``a``d``e`` ``o``n`` ``s``h``a``p``e``s``.``
- ``r``e``m``a``p``p``i``n``g``:`` ``R``e``m``a``p`` ``s``u``b``g``r``a``p``h``s`` ``o``n``t``o`` ``m``o``r``e`` ``e``f``f``i``c``i``e``n``t`` ``i``m``p``l``e``m``e``n``t``a``t``i``o``n``s``.``
- ``a``r``i``t``h``m``e``t``i``c``_``o``p``t``i``m``i``z``a``t``i``o``n``:`` ``S``i``m``p``l``i``f``y`` ``a``r``i``t``h``m``e``t``i``c`` ``o``p``s`` ``w``i``t``h`` ``c``o``m``m``o``n`` ``s``u``b``-``e``x``p``r``e``s``s``i``o``n`` ``e``l``i``m``i``n``a``t``i``o``n`` ``a``n``d`` ``a``r``i``t``h``m``e``t``i``c`` ``s``i``m``p``l``i``f``i``c``a``t``i``o``n``.``
- ``d``e``p``e``n``d``e``n``c``y``_``o``p``t``i``m``i``z``a``t``i``o``n``:`` ``C``o``n``t``r``o``l`` ``d``e``p``e``n``d``e``n``c``y`` ``o``p``t``i``m``i``z``a``t``i``o``n``s``.`` ``R``e``m``o``v``e`` ``r``e``d``u``n``d``a``n``t`` ``c``o``n``t``r``o``l`` ``d``e``p``e``n``d``e``n``c``i``e``s``,`` ``w``h``i``c``h`` ``m``a``y`` ``e``n``a``b``l``e`` ``o``t``h``e``r`` ``o``p``t``i``m``i``z``a``t``i``o``n``.`` ``T``h``i``s`` ``o``p``t``i``m``i``z``e``r`` ``i``s`` ``a``l``s``o`` ``e``s``s``e``n``t``i``a``l`` ``f``o``r`` ``p``r``u``n``i``n``g`` ``I``d``e``n``t``i``t``y`` ``a``n``d`` ``N``o``O``p`` ``n``o``d``e``s``.``
- ``l``o``o``p``_``o``p``t``i``m``i``z``a``t``i``o``n``:`` ``L``o``o``p`` ``o``p``t``i``m``i``z``a``t``i``o``n``s``.``
- ``f``u``n``c``t``i``o``n``_``o``p``t``i``m``i``z``a``t``i``o``n``:`` ``F``u``n``c``t``i``o``n`` ``o``p``t``i``m``i``z``a``t``i``o``n``s`` ``a``n``d`` ``i``n``l``i``n``i``n``g``.``
- ``d``e``b``u``g``_``s``t``r``i``p``p``e``r``:`` ``S``t``r``i``p``s`` ``d``e``b``u``g``-``r``e``l``a``t``e``d`` ``n``o``d``e``s`` ``f``r``o``m`` ``t``h``e`` ``g``r``a``p``h``.``
- ``d``i``s``a``b``l``e``_``m``o``d``e``l``_``p``r``u``n``i``n``g``:`` ``D``i``s``a``b``l``e`` ``r``e``m``o``v``a``l`` ``o``f`` ``u``n``n``e``c``e``s``s``a``r``y`` ``o``p``s`` ``f``r``o``m`` ``t``h``e`` ``g``r``a``p``h``
- ``s``c``o``p``e``d``_``a``l``l``o``c``a``t``o``r``_``o``p``t``i``m``i``z``a``t``i``o``n``:`` ``T``r``y`` ``t``o`` ``a``l``l``o``c``a``t``e`` ``s``o``m``e`` ``i``n``d``e``p``e``n``d``e``n``t`` ``O``p`` ``o``u``t``p``u``t``s`` ``c``o``n``t``i``g``u``o``u``s``l``y`` ``i``n`` ``o``r``d``e``r`` ``t``o`` ``m``e``r``g``e`` ``o``r`` ``e``l``i``m``i``n``a``t``e`` ``d``o``w``n``s``t``r``e``a``m`` ``O``p``s``.``
- ``p``i``n``_``t``o``_``h``o``s``t``_``o``p``t``i``m``i``z``a``t``i``o``n``:`` ``F``o``r``c``e`` ``s``m``a``l``l`` ``o``p``s`` ``o``n``t``o`` ``t``h``e`` ``C``P``U``.``
- ``i``m``p``l``e``m``e``n``t``a``t``i``o``n``_``s``e``l``e``c``t``o``r``:`` ``E``n``a``b``l``e`` ``t``h``e`` ``s``w``a``p`` ``o``f`` ``k``e``r``n``e``l`` ``i``m``p``l``e``m``e``n``t``a``t``i``o``n``s`` ``b``a``s``e``d`` ``o``n`` ``t``h``e`` ``d``e``v``i``c``e`` ``p``l``a``c``e``m``e``n``t``.``
- auto_mixed_precision: Change certain float32 ops to float16 on Volta GPUs and above. Without the use of loss scaling, this can cause numerical underflow (see `keras.mixed_precision.experimental.LossScaleOptimizer`).
- ``d``i``s``a``b``l``e``_``m``e``t``a``_``o``p``t``i``m``i``z``e``r``:`` ``D``i``s``a``b``l``e`` ``t``h``e`` ``e``n``t``i``r``e`` ``m``e``t``a`` ``o``p``t``i``m``i``z``e``r``.``
- ``m``i``n``_``g``r``a``p``h``_``n``o``d``e``s``:`` ``T``h``e`` ``m``i``n``i``m``u``m`` ``n``u``m``b``e``r`` ``o``f`` ``n``o``d``e``s`` ``i``n`` ``a`` ``g``r``a``p``h`` ``t``o`` ``o``p``t``i``m``i``z``e``r``.`` ``F``o``r`` ``s``m``a``l``l``e``r`` ``g``r``a``p``h``s``,`` ``o``p``t``i``m``i``z``a``t``i``o``n`` ``i``s`` ``s``k``i``p``p``e``d``.``
