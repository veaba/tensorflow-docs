## Class MultiWorkerMirroredStrategy

A distribution strategy for synchronous training on multiple workers.
[Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)Inherits From: 

### Aliases:
- Class `tf.compat.v2.distribute.experimental.MultiWorkerMirroredStrategy`
### Used in the guide:
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
[tf.distribute.MirroredStrategy](https://www.tensorflow.org/api_docs/python/tf/distribute/MirroredStrategy)This strategy implements synchronous distributed training across multiple workers, each with potentially multiple GPUs. Similar to , it creates copies of all variables in the model on each device across all workers.


It uses CollectiveOps's implementation of multi-worker all-reduce to to keep variables in sync. A collective op is a single op in the TensorFlow graph which can automatically choose an all-reduce algorithm in the TensorFlow runtime according to hardware, network topology and tensor sizes.

By default it uses all local GPUs or CPU for single-worker training.

When 'TF_CONFIG' environment variable is set, it parses cluster_spec, task_type and task_id from 'TF_CONFIG' and turns into a multi-worker strategy which mirrores models on GPUs of all machines in a cluster. In the current implementation, it uses all GPUs in a cluster and it assumes all workers have the same number of GPUs.

It supports both eager mode and graph mode. However, for eager mode, it has to set up the eager context in its constructor and therefore all ops in eager mode have to run after the strategy object is created.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/collective_all_reduce_strategy.py#L76-L90)


```
 __init__(communication=tf.distribute.experimental.CollectiveCommunication.AUTO)
```

Creates the strategy.
#### Args:
- `communication`: optional Enum of type `distribute.experimental.CollectiveCommunication`. This provides a way for the user to override the choice of collective op `communication`. Possible values include `AUTO`, `RING`, and `NCCL`.
## Properties
### extended
[tf.distribute.StrategyExtended](https://www.tensorflow.org/api_docs/python/tf/distribute/StrategyExtended) with additional methods.

### num_replicas_in_sync

Returns number of replicas over which gradients are aggregated.
## Methods
### experimental_distribute_dataset
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L610-L674)


```
 experimental_distribute_dataset(dataset)
```

Distributes a tf.data.Dataset instance provided via dataset.

The returned distributed dataset can be iterated over similar to how regular datasets can. NOTE: Currently, the user cannot add any more transformations to a distributed dataset.

The following is an example:

```
 strategy = tf.distribute.MirroredStrategy()

# Create a dataset
dataset = dataset_ops.Dataset.TFRecordDataset([
  "/a/1.tfr", "/a/2.tfr", "/a/3.tfr", "/a/4.tfr"])

# Distribute that dataset
dist_dataset = strategy.experimental_distribute_dataset(dataset)
# Iterate over the distributed dataset
for x in dist_dataset:
  # process dataset elements
  strategy.experimental_run_v2(train_step, args=(x,))
```

We will assume that the input dataset is batched by the global batch size. With this assumption, we will make a best effort to divide each batch across all the replicas (one or more workers).

In a multi-worker setting, we will first attempt to distribute the dataset by attempting to detect whether the dataset is being created out of ReaderDatasets (e.g. TFRecordDataset, TextLineDataset, etc.) and if so, attempting to shard the input files. Note that there has to be at least one input file per worker. If you have less than one input file per worker, we suggest that you should disable distributing your dataset using the method below.

If that attempt is unsuccessful (e.g. the dataset is created from a Dataset.range), we will shard the dataset evenly at the end by appending a .shard operation to the end of the processing pipeline. This will cause the entire preprocessing pipeline for all the data to be run on every worker, and each worker will do redundant work. We will print a warning if this method of sharding is selected. In this case, consider using experimental_distribute_datasets_from_function instead.
[tf.data.experimental.DistributeOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/DistributeOptions)You can disable dataset sharding across workers using the auto_shard option in .


Within each worker, we will also split the data among all the worker devices (if more than one a present), and this will happen even if multi-worker sharding is disabled using the method above.

If the above batch splitting and dataset sharding logic is undesirable, please use experimental_distribute_datasets_from_function instead, which does not do any automatic splitting or sharding.
#### Args:
- `dataset`: `tf.data.Dataset` that will be sharded across all replicas using the rules stated above.
#### Returns:
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)A "distributed Dataset", which acts like a  except it produces "per-replica" values.

### experimental_distribute_datasets_from_function
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L676-L724)


```
 experimental_distribute_datasets_from_function(dataset_fn)
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)Distributes  instances created by calls to dataset_fn.


dataset_fn will be called once for each worker in the strategy. Each replica on that worker will dequeue one batch of inputs from the local Dataset (i.e. if a worker has two replicas, two batches will be dequeued from the Dataset every step).

This method can be used for several purposes. For example, where experimental_distribute_dataset is unable to shard the input files, this method might be used to manually shard the dataset (avoiding the slow fallback behavior in experimental_distribute_dataset). In cases where the dataset is infinite, this sharding can be done by creating dataset replicas that differ only in their random seed. experimental_distribute_dataset may also sometimes fail to split the batch across replicas on a worker. In that case, this method can be used where that limitation does not exist.
[tf.distribute.InputContext](https://www.tensorflow.org/api_docs/python/tf/distribute/InputContext)The dataset_fn should take an  instance where information about batching and input replication can be accessed:


```
 def dataset_fn(input_context):
  batch_size = input_context.get_per_replica_batch_size(global_batch_size)
  d = tf.data.Dataset.from_tensors([[1.]]).repeat().batch(batch_size)
  return d.shard(
      input_context.num_input_pipelines, input_context.input_pipeline_id)

inputs = strategy.experimental_distribute_datasets_from_function(dataset_fn)

for batch in inputs:
  replica_results = strategy.experimental_run_v2(replica_fn, args=(batch,))
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)IMPORTANT: The  returned by dataset_fn should have a per-replica batch size, unlike experimental_distribute_dataset, which uses the global batch size. This may be computed using input_context.get_per_replica_batch_size.

#### Args:
- `dataset_fn`: A function taking a `tf.distribute.InputContext` instance and returning a `tf.data.Dataset`.
#### Returns:
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)A "distributed Dataset", which acts like a  except it produces "per-replica" values.

### experimental_local_results
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L878-L895)


```
 experimental_local_results(value)
```

Returns the list of all local per-replica values contained in value.
#### Args:
- `value`: A `value` returned by `experimental_run`(), `experimental_run`_v2(), `extended.call_for_each_replica`(), or a variable created in `scope`.
#### Returns:

A tuple of values contained in value. If value represents a single value, this returns (value,).
### experimental_make_numpy_dataset
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L575-L601)


```
 experimental_make_numpy_dataset(numpy_input)
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)Makes a  for input provided via a numpy array.


This avoids adding numpy_input as a large constant in the graph, and copies the data to the machine or machines that will be processing the input.

Note that you will likely need to use experimental_distribute_dataset with the returned dataset to further distribute it with the strategy.
#### Example:

```
 numpy_input = np.ones([10], dtype=np.float32)
dataset = strategy.experimental_make_numpy_dataset(numpy_input)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
```
#### Args:
- `numpy_input`: A nest of NumPy input arrays that will be converted into a dataset. Note that lists of Numpy arrays are stacked, as that is normal `tf.data.Dataset` behavior.
#### Returns:
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)A  representing numpy_input.

### experimental_run_v2
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L726-L760)


```
 experimental_run_v2(
    fn,
    args=(),
    kwargs=None
)
```

Run fn on each replica, with the given arguments.

Executes ops specified by fn on each replica. If args or kwargs have "per-replica" values, such as those produced by a "distributed Dataset", when fn is executed on a particular replica, it will be executed with the component of those "per-replica" values that correspond to that replica.
[tf.distribute.get_replica_context()](https://www.tensorflow.org/api_docs/python/tf/distribute/get_replica_context)fn may call  to access members such as all_reduce.


All arguments in args or kwargs should either be nest of tensors or per-replica objects containing tensors or composite tensors.
[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)IMPORTANT: Depending on the implementation of  and whether eager execution is enabled, fn may be called one or more times ( once for each replica).

#### Args:
- `fn`: The function to run. The output must be a `tf.nest` of `Tensor`s.
- `args`: (Optional) Positional arguments to `fn`.
- `kwargs`: (Optional) Keyword arguments to `fn`.
#### Returns:

Merged return value of fn across replicas. The structure of the return value is the same as the return value from fn. Each element in the structure can either be "per-replica" Tensor objects or Tensors (for example, if running on a single replica).
### reduce
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L762-L854)


```
 reduce(
    reduce_op,
    value,
    axis
)
```

Reduce value across replicas.

Given a per-replica value returned by experimental_run_v2, say a per-example loss, the batch will be divided across all the replicas. This function allows you to aggregate across replicas and optionally also across batch elements. For example, if you have a global batch size of 8 and 2 replicas, values for examples [0, 1, 2, 3] will be on replica 0 and [4, 5, 6, 7] will be on replica 1. By default, reduce will just aggregate across replicas, returning [0+4, 1+5, 2+6, 3+7]. This is useful when each replica is computing a scalar or some other value that doesn't have a "batch" dimension (like a gradient). More often you will want to aggregate across the global batch, which you can get by specifying the batch dimension as the axis, typically axis=0. In this case it would return a scalar 0+1+2+3+4+5+6+7.
[tf.distribute.ReduceOp.MEAN](https://www.tensorflow.org/api_docs/python/tf/distribute/ReduceOp#MEAN)If there is a last partial batch, you will need to specify an axis so that the resulting shape is consistent across replicas. So if the last batch has size 6 and it is divided into [0, 1, 2, 3] and [4, 5], you would get a shape mismatch unless you specify axis=0. If you specify , using axis=0 will use the correct denominator of 6. Contrast this with computing reduce_mean to get a scalar value on each replica and this function to average those means, which will weigh some values 1/8 and others 1/4.

#### Args:
- `reduce_op`: A `tf.distribute.ReduceOp` value specifying how values should be combined.
- `value`: A "per replica" `value`, e.g. returned by `experimental_run_v2` to be combined into a single tensor.
- `axis`: Specifies the dimension to reduce along within each replica's tensor. Should typically be set to the batch dimension, or `None` to only reduce across replicas (e.g. if the tensor has no batch dimension).
#### Returns:

A Tensor.
### scope
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/collective_all_reduce_strategy.py#L99-L114)


```
 scope()
```

Returns a context manager selecting this Strategy as current.

Inside a with strategy.scope(): code block, this thread will use a variable creator set by strategy, and will enter its "cross-replica context".

In MultiWorkerMirroredStrategy, all variables created inside `strategy.scope() will be mirrored on all replicas of each worker. Moreover, it also sets a default device scope so that ops without specified devices will end up on the correct worker.
#### Returns:

A context manager to use for creating variables with this strategy.
