## Class Strategy
A list of devices with a state & compute distribution policy.
Inherits From: `Strategy`
See the guide for overview and examples.
## __init__
View source

```
 __init__(extended)
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### extended
`tf.distribute.StrategyExtended` with additional methods.
### num_replicas_in_sync
Returns number of replicas over which gradients are aggregated.
## Methods
### experimental_distribute_dataset
View source

```
 experimental_distribute_dataset(dataset)
```
Distributes a tf.data.Dataset instance provided via `dataset`.
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
If that attempt is unsuccessful (e.g. the dataset is created from a Dataset.range), we will shard the dataset evenly at the end by appending a `.shard` operation to the end of the processing pipeline. This will cause the entire preprocessing pipeline for all the data to be run on every worker, and each worker will do redundant work. We will print a warning if this method of sharding is selected. In this case, consider using `experimental_distribute_datasets_from_function` instead.
You can disable dataset sharding across workers using the `auto_shard` option in `tf.data.experimental.DistributeOptions`.
Within each worker, we will also split the data among all the worker devices (if more than one a present), and this will happen even if multi-worker sharding is disabled using the method above.
If the above batch splitting and dataset sharding logic is undesirable, please use `experimental_distribute_datasets_from_function` instead, which does not do any automatic splitting or sharding.
#### Args:
- `dataset`: `tf.data.Dataset` that will be sharded across all replicas using the rules stated above.
#### Returns:
A "distributed `Dataset`", which acts like a `tf.data.Dataset` except it produces "per-replica" values.
### experimental_distribute_datasets_from_function
View source

```
 experimental_distribute_datasets_from_function(dataset_fn)
```
Distributes `tf.data.Dataset` instances created by calls to `dataset_fn`.
`dataset_fn` will be called once for each worker in the strategy. Each replica on that worker will dequeue one batch of inputs from the local `Dataset` (i.e. if a worker has two replicas, two batches will be dequeued from the `Dataset` every step).
This method can be used for several purposes. For example, where `experimental_distribute_dataset` is unable to shard the input files, this method might be used to manually shard the dataset (avoiding the slow fallback behavior in `experimental_distribute_dataset`). In cases where the dataset is infinite, this sharding can be done by creating dataset replicas that differ only in their random seed. `experimental_distribute_dataset` may also sometimes fail to split the batch across replicas on a worker. In that case, this method can be used where that limitation does not exist.
The `dataset_fn` should take an `tf.distribute.InputContext` instance where information about batching and input replication can be accessed:

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
IMPORTANT: The `tf.data.Dataset` returned by `dataset_fn` should have a per-replica batch size, unlike `experimental_distribute_dataset`, which uses the global batch size. This may be computed using `input_context.get_per_replica_batch_size`.
#### Args:
- `dataset_fn`: A function taking a `tf.distribute.InputContext` instance and returning a `tf.data.Dataset`.
#### Returns:
A "distributed `Dataset`", which acts like a `tf.data.Dataset` except it produces "per-replica" values.
### experimental_local_results
View source

```
 experimental_local_results(value)
```
Returns the list of all local per-replica `value`s contained in `value`.
#### Args:
#### Returns:
