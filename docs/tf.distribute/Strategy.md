## Class Strategy
A state & compute distribution policy on a list of devices.
### Aliases:
- Class tf.compat.v2.distribute.Strategy
[the guide](https://tensorflow.google.cn/alpha/guide/distribute_strategy)See  for overview and examples.

#### In short:
- To use it with Keras compile/fit, please read.
- You may pass descendant of tf.distribute.Strategy to tf.estimator.RunConfig to specify how a tf.estimator.Estimator should distribute its computation. See guide.
- Otherwise, use tf.distribute.Strategy.scope to specify that a strategy should be used when building an executing your model. (This puts you in the "cross-replica context" for this strategy, which means the strategy is put in control of things like variable placement.)
- If you are writing a custom training loop, you will need to call a few more methods, see the guide:
Start by either creating a tf.data.Dataset normally or using tf.distribute.experimental_make_numpy_dataset to make a dataset out of a numpy array.
Use tf.distribute.Strategy.experimental_distribute_dataset to convert a tf.data.Dataset to something that produces "per-replica" values. If you want to manually specify how the dataset should be partitioned across replicas, use tf.distribute.Strategy.experimental_distribute_datasets_from_function instead.
Use tf.distribute.Strategy.experimental_run_v2 to run a function once per replica, taking values that may be "per-replica" (e.g. from a distributed dataset) and returning "per-replica" values. This function is executed in "replica context", which means each operation is performed separately on each replica.
Finally use a method (such as tf.distribute.Strategy.reduce) to convert the resulting "per-replica" values into ordinary Tensors.
- Start by either creating a tf.data.Dataset normally or using tf.distribute.experimental_make_numpy_dataset to make a dataset out of a numpy array.
- Use tf.distribute.Strategy.experimental_distribute_dataset to convert a tf.data.Dataset to something that produces "per-replica" values. If you want to manually specify how the dataset should be partitioned across replicas, use tf.distribute.Strategy.experimental_distribute_datasets_from_function instead.
- Use tf.distribute.Strategy.experimental_run_v2 to run a function once per replica, taking values that may be "per-replica" (e.g. from a distributed dataset) and returning "per-replica" values. This function is executed in "replica context", which means each operation is performed separately on each replica.
- Finally use a method (such as tf.distribute.Strategy.reduce) to convert the resulting "per-replica" values into ordinary Tensors.
A custom training loop can be as simple as:

```
 with my_strategy.scope():
  @tf.function
  def distribute_train_epoch(dataset):
    def replica_fn(input):
      # process input and return result
      return result

    total_result = 0
    for x in dataset:
      per_replica_result = my_strategy.experimental_run_v2(replica_fn,
                                                           args=(x,))
      total_result += my_strategy.reduce(tf.distribute.ReduceOp.SUM,
                                         per_replica_result, axis=None)
    return total_result

  dist_dataset = my_strategy.experimental_distribute_dataset(dataset)
  for _ in range(EPOCHS):
    train_result = distribute_train_epoch(dist_dataset)
```
[tf.distribute.Strategy](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)This takes an ordinary dataset and replica_fn and runs it distributed using a particular  named my_strategy above. Any variables created in replica_fn are created using my_strategy's policy, and library functions called by replica_fn can use the get_replica_context() API to implement distributed-specific behavior.

[tf.keras.metrics](https://tensorflow.google.cn/api_docs/python/tf/keras/metrics)You can use the reduce API to aggregate results across replicas and use this as a return value from one iteration over the distributed dataset. Or you can use  (such as loss, accuracy, etc.) to accumulate metrics across steps in a given epoch.

[custom training loop tutorial](https://tensorflow.google.cn/alpha/tutorials/distribute/training_loops)See the  for a more detailed example.

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L503-L519)


```
 __init__(extended)
```
Initialize self. See help(type(self)) for accurate signature.
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
[tf.distribute.get_replica_context()](https://tensorflow.google.cn/api_docs/python/tf/distribute/get_replica_context)fn may call  to access members such as all_reduce.

All arguments in args or kwargs should either be nest of tensors or per-replica objects containing tensors or composite tensors.
[tf.distribute.Strategy](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)IMPORTANT: Depending on the implementation of  and whether eager execution is enabled, fn may be called one or more times ( once for each replica).

#### Args:
- fn: The function to run. The output must be a tf.nest of Tensors.
- args: (Optional) Positional arguments to fn.
- kwargs: (Optional) Keyword arguments to fn.
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
