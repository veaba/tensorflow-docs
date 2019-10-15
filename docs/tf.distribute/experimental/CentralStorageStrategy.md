## Class CentralStorageStrategy

A one-machine strategy that puts all variables on a single device.
[Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)Inherits From: 

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L55-L69)


```
 __init__(
    compute_devices=None,
    parameter_device=None
)
```

Initialize self. See help(type(self)) for accurate signature.
## Properties
### extended
[tf.distribute.StrategyExtended](https://www.tensorflow.org/api_docs/python/tf/distribute/StrategyExtended) with additional methods.

### num_replicas_in_sync

Returns number of replicas over which gradients are aggregated.
## Methods
### experimental_distribute_dataset
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L75-L102)


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
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)Args: dataset:  to be prefetched to device.

#### Returns:

A "distributed Dataset" that the caller can iterate over.
### experimental_distribute_datasets_from_function
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L104-L144)


```
 experimental_distribute_datasets_from_function(dataset_fn)
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)Distributes  instances created by calls to dataset_fn.


dataset_fn will be called once for each worker in the strategy. In this case, we only have one worker so dataset_fn is called once. Each replica on this worker will then dequeue a batch of elements from this local dataset.
[tf.distribute.InputContext](https://www.tensorflow.org/api_docs/python/tf/distribute/InputContext)The dataset_fn should take an  instance where information about batching and input replication can be accessed.

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
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)IMPORTANT: The  returned by dataset_fn should have a per-replica batch size, unlike experimental_distribute_dataset, which uses the global batch size. This may be computed using input_context.get_per_replica_batch_size.

#### Args:
- `dataset_fn`: A function taking a `tf.distribute.InputContext` instance and returning a `tf.data.Dataset`.
#### Returns:

A "distributed Dataset", which the caller can iterate over like regular datasets.
### experimental_local_results
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L146-L160)


```
 experimental_local_results(value)
```

Returns the list of all local per-replica values contained in value.

In CentralStorageStrategy there is a single worker so the value returned will be all the values on that worker.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L162-L177)


```
 experimental_run_v2(
    fn,
    args=(),
    kwargs=None
)
```

Run fn on each replica, with the given arguments.

In CentralStorageStrategy, fn is called on each of the compute replicas, with the provided "per replica" arguments specific to that device.
#### Args:
- `fn`: The function to run. The output must be a `tf.nest` of `Tensor`s.
- `args`: (Optional) Positional arguments to `fn`.
- `kwargs`: (Optional) Keyword arguments to `fn`.
#### Returns:

Return value from running fn.
### reduce
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L179-L243)


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

#### For Example:

```
 strategy = tf.distribute.experimental.CentralStorageStrategy(
    compute_devices=['CPU:0', 'GPU:0'], parameter_device='CPU:0')
ds = tf.data.Dataset.range(10)
# Distribute that dataset
dist_dataset = strategy.experimental_distribute_dataset(ds)

with strategy.scope():
  @tf.function
  def train_step(val):
    # pass through
    return val

  # Iterate over the distributed dataset
  for x in dist_dataset:
    result = strategy.experimental_run_v2(train_step, args=(x,))

result = strategy.reduce(tf.distribute.ReduceOp.SUM, result,
                         axis=None).numpy()
# result: array([ 4,  6,  8, 10])

result = strategy.reduce(tf.distribute.ReduceOp.SUM, result, axis=0).numpy()
# result: 28
```
#### Args:
- `reduce_op`: A `tf.distribute.ReduceOp` value specifying how values should be combined.
- `value`: A "per replica" `value`, e.g. returned by `experimental_run_v2` to be combined into a single tensor.
- `axis`: Specifies the dimension to reduce along within each replica's tensor. Should typically be set to the batch dimension, or `None` to only reduce across replicas (e.g. if the tensor has no batch dimension).
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
