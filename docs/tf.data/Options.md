## Class Options
Represents options for tf.data.Dataset.
### Aliases:
- Class `tf.compat.v1.data.Options`
- Class `tf.compat.v2.data.Options`
### Used in the tutorials:
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
An `Options` object can be, for instance, used to control which static optimizations to apply or whether to use performance modeling to dynamically tune the parallelism of operations such as `tf.data.Dataset.map` or `tf.data.Dataset.interleave`.
## __init__
View source

```
 __init__()
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### experimental_deterministic
Whether the outputs need to be produced in deterministic order. If None, defaults to True.
### experimental_distribute
The distribution strategy options associated with the dataset. See `tf.data.experimental.DistributeOptions` for more details.
### experimental_optimization
The optimization options associated with the dataset. See `tf.data.experimental.OptimizationOptions` for more details.
### experimental_slack
Whether to introduce 'slack' in the last `prefetch` of the input pipeline, if it exists. This may reduce CPU contention with accelerator host-side activity at the start of a step. The slack frequency is determined by the number of devices attached to this input pipeline. If None, defaults to False.
### experimental_stats
The statistics options associated with the dataset. See `tf.data.experimental.StatsOptions` for more details.
### experimental_threading
The threading options associated with the dataset. See `tf.data.experimental.ThreadingOptions` for more details.
## Methods
### __eq__
View source

```
 __eq__(other)
```
Return self==value.
### __ne__
View source

```
 __ne__(other)
```
Return self!=value.
### merge
View source

```
 merge(options)
```
Merges itself with the given `tf.data.Options`.
The given `tf.data.Options` can be merged as long as there does not exist an attribute that is set to different values in `self` and `options`.
#### Args:
- `options`: a `tf.data.Options` to merge with
#### Raises:
- `ValueError`: if the given `tf.data.Options` cannot be merged
#### Returns:
