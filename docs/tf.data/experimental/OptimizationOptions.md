## Class OptimizationOptions
Represents options for dataset optimizations.
### Aliases:
- Class tf.compat.v1.data.experimental.OptimizationOptions
- Class tf.compat.v2.data.experimental.OptimizationOptions
[tf.data.Options](https://tensorflow.google.cn/api_docs/python/tf/data/Options)You can set the optimization options of a dataset through the experimental_optimization property of ; the property is an instance of tf.data.experimental.OptimizationOptions.


```
 options = tf.data.Options()
options.experimental_optimization.noop_elimination = True
options.experimental_optimization.map_vectorization.enabled = True
options.experimental_optimization.apply_default_optimizations = False
dataset = dataset.with_options(options)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)


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
When autotuning is enabled (through autotune), identifies the algorithm to use for the autotuning optimization.
### autotune_buffers
When autotuning is enabled (through autotune), determines whether to also autotune buffer sizes for datasets with parallelism. If None, defaults to False.
### autotune_cpu_budget
When autotuning is enabled (through autotune), determines the CPU budget to use. Values greater than the number of schedulable CPU cores are allowed but may result in CPU contention. If None, defaults to the number of schedulable CPU cores.
### filter_fusion
Whether to fuse filter transformations. If None, defaults to False.
### filter_with_random_uniform_fusion
Whether to fuse filter dataset that predicts random_uniform < rate into a sampling dataset. If None, defaults to False.
### hoist_random_uniform
Whether to hoist tf.random_uniform() ops out of map transformations. If None, defaults to False.
### map_and_batch_fusion
Whether to fuse map and batch transformations. If None, defaults to True.
### map_and_filter_fusion
Whether to fuse map and filter transformations. If None, defaults to False.
### map_fusion
Whether to fuse map transformations. If None, defaults to False.
### map_parallelization
Whether to parallelize stateless map transformations. If None, defaults to False.
### map_vectorization
[tf.data.experimental.MapVectorizationOptions](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/MapVectorizationOptions)The map vectorization options associated with the dataset. See  for more details.

### noop_elimination
Whether to eliminate no-op transformations. If None, defaults to True.
### parallel_batch
Whether to parallelize copying of batch elements. If None, defaults to False.
### shuffle_and_repeat_fusion
Whether to fuse shuffle and repeat transformations. If None, defaults to True.
## Methods
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)


```
 __eq__(other)
```
Return self==value.
### __ne__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)


```
 __ne__(other)
```
Return self!=value.
