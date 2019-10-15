## Class Options

Represents options for tf.data.Dataset.
### Aliases:
- Class `tf.compat.v1.data.Options`
- Class `tf.compat.v2.data.Options`
### Used in the tutorials:
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
[tf.data.Dataset.map](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#map)An Options object can be, for instance, used to control which static optimizations to apply or whether to use performance modeling to dynamically tune the parallelism of operations such as  or tf.data.Dataset.interleave.

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)


```
 __init__()
```

Initialize self. See help(type(self)) for accurate signature.
## Properties
### experimental_deterministic

Whether the outputs need to be produced in deterministic order. If None, defaults to True.
### experimental_distribute
[tf.data.experimental.DistributeOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/DistributeOptions)The distribution strategy options associated with the dataset. See  for more details.

### experimental_optimization
[tf.data.experimental.OptimizationOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/OptimizationOptions)The optimization options associated with the dataset. See  for more details.

### experimental_slack

Whether to introduce 'slack' in the last prefetch of the input pipeline, if it exists. This may reduce CPU contention with accelerator host-side activity at the start of a step. The slack frequency is determined by the number of devices attached to this input pipeline. If None, defaults to False.
### experimental_stats
[tf.data.experimental.StatsOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/StatsOptions)The statistics options associated with the dataset. See  for more details.

### experimental_threading
[tf.data.experimental.ThreadingOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/ThreadingOptions)The threading options associated with the dataset. See  for more details.

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
### merge
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2280-L2296)


```
 merge(options)
```
[tf.data.Options](https://www.tensorflow.org/api_docs/python/tf/data/Options)Merges itself with the given .

[tf.data.Options](https://www.tensorflow.org/api_docs/python/tf/data/Options)The given  can be merged as long as there does not exist an attribute that is set to different values in self and options.

#### Args:
- `options`: a `tf.data.Options` to merge with
#### Raises:
- `ValueError`: if the given `tf.data.Options` cannot be merged
#### Returns:
[tf.data.Options()](https://www.tensorflow.org/api_docs/python/tf/data/Options)New  object which is the result of merging self with the input tf.data.Options.

