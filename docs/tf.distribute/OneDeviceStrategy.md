## Class OneDeviceStrategy
A distribution strategy for running on a single device.
[Strategy](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)Inherits From: 

### Aliases:
- Class tf.compat.v2.distribute.OneDeviceStrategy
Using this strategy will place any variables created in its scope on the specified device. Input distributed through this strategy will be prefetched to the specified device. Moreover, any functions called via strategy.experimental_run_v2 will also be placed on the specified device as well.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L72-L80)


```
 __init__(device)
```
Creates a OneDeviceStrategy.
#### Args:
- device: Device string identifier for the device on which the variables should be placed. See class docs for more details on how the device is used. Examples: "/cpu:0", "/gpu:0", "/device:CPU:0", "/device:GPU:0"
## Properties
### extended
[tf.distribute.StrategyExtended](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended) with additional methods.

### num_replicas_in_sync
Returns number of replicas over which gradients are aggregated.
## Methods
### experimental_distribute_dataset
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L82-L108)


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
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)Args: dataset:  to be prefetched to device.

#### Returns:
A "distributed Dataset" that the caller can iterate over.
### experimental_distribute_datasets_from_function
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L110-L148)


```
 experimental_distribute_datasets_from_function(dataset_fn)
```
[tf.data.Dataset](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)Distributes  instances created by calls to dataset_fn.

dataset_fn will be called once for each worker in the strategy. In this case, we only have one worker and one device so dataset_fn is called once.
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
A "distributed Dataset", which the caller can iterate over like regular datasets.
### experimental_local_results
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L150-L164)


```
 experimental_local_results(value)
```
Returns the list of all local per-replica values contained in value.
In OneDeviceStrategy, the value is always expected to be a single value, so the result is just the value in a tuple.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L166-L180)


```
 experimental_run_v2(
    fn,
    args=(),
    kwargs=None
)
```
Run fn on each replica, with the given arguments.
In OneDeviceStrategy, fn is simply called within a device scope for the given device, with the provided arguments.
#### Args:
- fn: The function to run. The output must be a tf.nest of Tensors.
- args: (Optional) Positional arguments to fn.
- kwargs: (Optional) Keyword arguments to fn.
#### Returns:
Return value from running fn.
### reduce
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L182-L213)


```
 reduce(
    reduce_op,
    value,
    axis
)
```
Reduce value across replicas.
In OneDeviceStrategy, there is only one replica, so if axis=None, value is simply returned. If axis is specified as something other than None, such as axis=0, value is reduced along that axis and returned.
#### Example:

```
 t = tf.range(10)

result = strategy.reduce(tf.distribute.ReduceOp.SUM, t, axis=None).numpy()
# result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

result = strategy.reduce(tf.distribute.ReduceOp.SUM, t, axis=0).numpy()
# result: 45
```
#### Args:
- reduce_op: A tf.distribute.ReduceOp value specifying how values should be combined.
- value: A "per replica" value, e.g. returned by experimental_run_v2 to be combined into a single tensor.
- axis: Specifies the dimension to reduce along within each replica's tensor. Should typically be set to the batch dimension, or None to only reduce across replicas (e.g. if the tensor has no batch dimension).
#### Returns:
A Tensor.
### scope
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L215-L229)


```
 scope()
```
Returns a context manager selecting this Strategy as current.
Inside a with strategy.scope(): code block, this thread will use a variable creator set by strategy, and will enter its "cross-replica context".
In OneDeviceStrategy, all variables created inside strategy.scope() will be on device specified at strategy construction time. See example in the docs for this class.
#### Returns:
A context manager to use for creating variables with this strategy.
