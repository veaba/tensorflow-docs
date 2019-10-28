## Class OneDeviceStrategy
A distribution strategy for running on a single device.
Inherits From: `Strategy`
### Aliases:
- Class `tf.compat.v2.distribute.OneDeviceStrategy`
Using this strategy will place any variables created in its scope on the specified device. Input distributed through this strategy will be prefetched to the specified device. Moreover, any functions called via `strategy.experimental_run_v2` will also be placed on the specified device as well.
Typical usage of this strategy could be testing your code with the tf.distribute.Strategy API before switching to other strategies which actually distribute to multiple devices/machines.
#### For example:

```
 strategy = tf.distribute.OneDeviceStrategy(device="/gpu:0")

with strategy.scope():
  v = tf.Variable(1.0)
  print(v.device)  # /job:localhost/replica:0/task:0/device:GPU:0

def step_fn(x):
  return x * 2

result = 0
for i in range(10):
  result += strategy.experimental_run_v2(step_fn, args=(i,))
print(result)  # 90
```
## __init__
View source

```
 __init__(device)
```
Creates a `OneDeviceStrategy`.
#### Args:
- `device`: Device string identifier for the `device` on which the variables should be placed. See class docs for more details on how the `device` is used. Examples: "/cpu:0", "/gpu:0", "/`device`:CPU:0", "/`device`:GPU:0"
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
In this case, there is only one device, so this is only a thin wrapper around the input dataset. It will, however, prefetch the input data to the specified device. The returned distributed dataset can be iterated over similar to how regular datasets can.
NOTE: Currently, the user cannot add any more transformations to a distributed dataset.
#### Example:

```
 strategy = tf.distribute.OneDeviceStrategy()
dataset = tf.data.Dataset.range(10).batch(2)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
for x in dist_dataset:
  print(x)  # [0, 1], [2, 3],...
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
`dataset_fn` will be called once for each worker in the strategy. In this case, we only have one worker and one device so `dataset_fn` is called once.
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
A "distributed `Dataset`", which the caller can iterate over like regular datasets.
### experimental_local_results
View source

```
 experimental_local_results(value)
```
Returns the list of all local per-replica `value`s contained in `value`.
In `OneDeviceStrategy`, the `value` is always expected to be a single `value`, so the result is just the `value` in a tuple.
#### Args:
#### Returns:
