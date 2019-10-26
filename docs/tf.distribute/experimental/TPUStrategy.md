## Class TPUStrategy
TPU distribution strategy implementation.
[Strategy](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)Inherits From: 

### Aliases:
- Class tf.compat.v2.distribute.experimental.TPUStrategy
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/tpu_strategy.py#L88-L101)


```
 __init__(
    tpu_cluster_resolver=None,
    device_assignment=None
)
```
Initializes the TPUStrategy object.
#### Args:
- tpu_cluster_resolver: A tf.distribute.cluster_resolver.TPUClusterResolver, which provides information about the TPU cluster.
- device_assignment: Optional tf.tpu.experimental.DeviceAssignment to specify the placement of replicas on the TPU cluster. Currently only supports the usecase of using a single core within a TPU cluster.
## Properties
### extended
[tf.distribute.StrategyExtended](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended) with additional methods.

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
[tf.data.experimental.DistributeOptions](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/DistributeOptions)You can disable dataset sharding across workers using the auto_shard option in .

Within each worker, we will also split the data among all the worker devices (if more than one a present), and this will happen even if multi-worker sharding is disabled using the method above.
If the above batch splitting and dataset sharding logic is undesirable, please use experimental_distribute_datasets_from_function instead, which does not do any automatic splitting or sharding.
#### Args:
- dataset: tf.data.Dataset that will be sharded across all replicas using the rules stated above.
#### Returns:
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)A "distributed Dataset", which acts like a  except it produces "per-replica" values.

### experimental_distribute_datasets_from_function
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L676-L724)


```
 experimental_distribute_datasets_from_function(dataset_fn)
```
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)Distributes  instances created by calls to dataset_fn.

dataset_fn will be called once for each worker in the strategy. Each replica on that worker will dequeue one batch of inputs from the local Dataset (i.e. if a worker has two replicas, two batches will be dequeued from the Dataset every step).
This method can be used for several purposes. For example, where experimental_distribute_dataset is unable to shard the input files, this method might be used to manually shard the dataset (avoiding the slow fallback behavior in experimental_distribute_dataset). In cases where the dataset is infinite, this sharding can be done by creating dataset replicas that differ only in their random seed. experimental_distribute_dataset may also sometimes fail to split the batch across replicas on a worker. In that case, this method can be used where that limitation does not exist.
[tf.distribute.InputContext](https://tensorflow.google.cn/api_docs/python/tf/distribute/InputContext)The dataset_fn should take an  instance where information about batching and input replication can be accessed:


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
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)IMPORTANT: The  returned by dataset_fn should have a per-replica batch size, unlike experimental_distribute_dataset, which uses the global batch size. This may be computed using input_context.get_per_replica_batch_size.

#### Args:
- dataset_fn: A function taking a tf.distribute.InputContext instance and returning a tf.data.Dataset.
#### Returns:
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)A "distributed Dataset", which acts like a  except it produces "per-replica" values.

### experimental_local_results
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L878-L895)


```
 experimental_local_results(value)
```
Returns the list of all local per-replica values contained in value.
#### Args:
- value: A value returned by experimental_run(), experimental_run_v2(), extended.call_for_each_replica(), or a variable created in scope.
#### Returns:
A tuple of values contained in value. If value represents a single value, this returns (value,).
### experimental_make_numpy_dataset
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L575-L601)


```
 experimental_make_numpy_dataset(numpy_input)
```
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)Makes a  for input provided via a numpy array.

This avoids adding numpy_input as a large constant in the graph, and copies the data to the machine or machines that will be processing the input.
Note that you will likely need to use experimental_distribute_dataset with the returned dataset to further distribute it with the strategy.
#### Example:

```
 numpy_input = np.ones([10], dtype=np.float32)
dataset = strategy.experimental_make_numpy_dataset(numpy_input)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
```
#### Args:
- numpy_input: A nest of NumPy input arrays that will be converted into a dataset. Note that lists of Numpy arrays are stacked, as that is normal tf.data.Dataset behavior.
#### Returns:
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)A  representing numpy_input.

### experimental_run_v2
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/tpu_strategy.py#L106-L111)


```
 experimental_run_v2(
    fn,
    args=(),
    kwargs=None
)
```
See base class.
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
[tf.distribute.ReduceOp.MEAN](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN)If there is a last partial batch, you will need to specify an axis so that the resulting shape is consistent across replicas. So if the last batch has size 6 and it is divided into [0, 1, 2, 3] and [4, 5], you would get a shape mismatch unless you specify axis=0. If you specify , using axis=0 will use the correct denominator of 6. Contrast this with computing reduce_mean to get a scalar value on each replica and this function to average those means, which will weigh some values 1/8 and others 1/4.

#### Args:
- reduce_op: A tf.distribute.ReduceOp value specifying how values should be combined.
- value: A "per replica" value, e.g. returned by experimental_run_v2 to be combined into a single tensor.
- axis: Specifies the dimension to reduce along within each replica's tensor. Should typically be set to the batch dimension, or None to only reduce across replicas (e.g. if the tensor has no batch dimension).
#### Returns:
A Tensor.
### scope
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L541-L551)


```
 scope()
```
Returns a context manager selecting this Strategy as current.
Inside a with strategy.scope(): code block, this thread will use a variable creator set by strategy, and will enter its "cross-replica context".
#### Returns:
A context manager.
