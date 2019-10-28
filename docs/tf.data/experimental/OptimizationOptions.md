## Class OptimizationOptions
Represents options for dataset optimizations.
### Aliases:
- Class `tf.compat.v1.data.experimental.OptimizationOptions`
- Class `tf.compat.v2.data.experimental.OptimizationOptions`
You can set the optimization options of a dataset through the `experimental_optimization` property of `tf.data.Options`; the property is an instance of `tf.data.experimental.OptimizationOptions`.

```
 options = tf.data.Options()
options.experimental_optimization.noop_elimination = True
options.experimental_optimization.map_vectorization.enabled = True
options.experimental_optimization.apply_default_optimizations = False
dataset = dataset.with_options(options)
```
## __init__
View source

```
 __init__()
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### apply_default_optimizations
Whether to apply default static optimizations. If False, only static optimizations that have been explicitly enabled will be applied.
### autotune
Whether to automatically tune performance knobs. If None, defaults to True.
### autotune_algorithm
When autotuning is enabled (through `autotune`), identifies the algorithm to use for the autotuning optimization.
### autotune_buffers
When autotuning is enabled (through `autotune`), determines whether to also `autotune` buffer sizes for datasets with parallelism. If None, defaults to False.
### autotune_cpu_budget
When autotuning is enabled (through `autotune`), determines the CPU budget to use. Values greater than the number of schedulable CPU cores are allowed but may result in CPU contention. If None, defaults to the number of schedulable CPU cores.
### filter_fusion
Whether to fuse filter transformations. If None, defaults to False.
### filter_with_random_uniform_fusion
Whether to fuse filter dataset that predicts random_uniform < rate into a sampling dataset. If None, defaults to False.
### hoist_random_uniform
