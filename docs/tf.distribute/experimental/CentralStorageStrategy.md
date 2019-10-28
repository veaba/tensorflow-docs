## Class CentralStorageStrategy
A one-machine strategy that puts all variables on a single device.
Inherits From: `Strategy`
### Aliases:
- Class `tf.compat.v2.distribute.experimental.CentralStorageStrategy`
### Used in the guide:
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
Variables are assigned to local CPU or the only GPU. If there is more than one GPU, compute operations (other than variable update operations) will be replicated across all GPUs.
#### For Example:

```
 strategy = tf.distribute.experimental.CentralStorageStrategy()
# Create a dataset
ds = tf.data.Dataset.range(5).batch(2)
# Distribute that dataset
dist_dataset = strategy.experimental_distribute_dataset(ds)

with strategy.scope():
  @tf.function
  def train_step(val):
    return val + 1

  # Iterate over the distributed dataset
  for x in dist_dataset:
    # process dataset elements
    strategy.experimental_run_v2(train_step, args=(x,))
```
## __init__
View source

```
 __init__(
    compute_devices=None,
    parameter_device=None
)
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
Distributes a tf.data.Dataset instance provided via dataset.
The returned dataset is a wrapped strategy dataset which creates a multidevice iterator under the hood. It prefetches the input data to the specified devices on the worker. The returned distributed dataset can be iterated over similar to how regular datasets can.
NOTE: Currently, the user cannot add any more transformations to a distributed dataset.
#### For Example:

```
 strategy = tf.distribute.CentralStorageStrategy()  # with 1 CPU and 1 GPU
dataset = tf.data.Dataset.range(10).batch(2)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
for x in dist_dataset:
  print(x)  # Prints PerReplica values [0, 1], [2, 3],...
```
Args: dataset: `tf.data.Dataset` to be prefetched to device.
#### Returns:
A "distributed `Dataset`" that the caller can iterate over.
### experimental_distribute_datasets_from_function
View source

```
 experimental_distribute_datasets_from_function(dataset_fn)
```
Distributes `tf.data.Dataset` instances created by calls to `dataset_fn`.
`dataset_fn` will be called once for each worker in the strategy. In this case, we only have one worker so `dataset_fn` is called once. Each replica on this worker will then dequeue a batch of elements from this local dataset.
The `dataset_fn` should take an `tf.distribute.InputContext` instance where information about batching and input replication can be accessed.
#### For Example:

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
A "distributed `Dataset`", which the caller can iterate over like regular datasets.
### experimental_local_results
View source

```
 experimental_local_results(value)
```
Returns the list of all local per-replica `value`s contained in `value`.
In `CentralStorageStrategy` there is a single worker so the value returned will be all the values on that worker.
#### Args:
#### Returns:
