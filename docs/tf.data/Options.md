[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/Options) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2192-L2296)  
---|---  
  
## Class `Options`

Represents options for tf.data.Dataset.

### Aliases:

  * Class [`tf.compat.v1.data.Options`](/api_docs/python/tf/data/Options)
  * Class [`tf.compat.v2.data.Options`](/api_docs/python/tf/data/Options)

### Used in the tutorials:

  * [Multi-worker training with Keras](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_keras)

An `Options` object can be, for instance, used to control which static
optimizations to apply or whether to use performance modeling to dynamically
tune the parallelism of operations such as
[`tf.data.Dataset.map`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#map)
or
[`tf.data.Dataset.interleave`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#interleave).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)

    
    
    __init__()
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `experimental_deterministic`

Whether the outputs need to be produced in deterministic order. If None,
defaults to True.

### `experimental_distribute`

The distribution strategy options associated with the dataset. See
[`tf.data.experimental.DistributeOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/DistributeOptions)
for more details.

### `experimental_optimization`

The optimization options associated with the dataset. See
[`tf.data.experimental.OptimizationOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/OptimizationOptions)
for more details.

### `experimental_slack`

Whether to introduce 'slack' in the last `prefetch` of the input pipeline, if
it exists. This may reduce CPU contention with accelerator host-side activity
at the start of a step. The slack frequency is determined by the number of
devices attached to this input pipeline. If None, defaults to False.

### `experimental_stats`

The statistics options associated with the dataset. See
[`tf.data.experimental.StatsOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/StatsOptions)
for more details.

### `experimental_threading`

The threading options associated with the dataset. See
[`tf.data.experimental.ThreadingOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/ThreadingOptions)
for more details.

## Methods

### `__eq__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)

    
    
    __eq__(other)
    

Return self==value.

### `__ne__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)

    
    
    __ne__(other)
    

Return self!=value.

### `merge`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2280-L2296)

    
    
    merge(options)
    

Merges itself with the given
[`tf.data.Options`](https://tensorflow.google.cn/api_docs/python/tf/data/Options).

The given
[`tf.data.Options`](https://tensorflow.google.cn/api_docs/python/tf/data/Options)
can be merged as long as there does not exist an attribute that is set to
different values in `self` and `options`.

#### Args:

  * **`options`** : a [`tf.data.Options`](https://tensorflow.google.cn/api_docs/python/tf/data/Options) to merge with

#### Raises:

  * **`ValueError`** : if the given [`tf.data.Options`](https://tensorflow.google.cn/api_docs/python/tf/data/Options) cannot be merged

#### Returns:

New
[`tf.data.Options()`](https://tensorflow.google.cn/api_docs/python/tf/data/Options)
object which is the result of merging self with the input
[`tf.data.Options`](https://tensorflow.google.cn/api_docs/python/tf/data/Options).

