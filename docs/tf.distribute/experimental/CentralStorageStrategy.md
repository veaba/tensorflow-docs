

## Class  `CentralStorageStrategy` 
A one-machine strategy that puts all variables on a single device.

Inherits From: [ `Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)

### Used in the guide:
- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)
Variables are assigned to local CPU or the only GPU. If there is morethan one GPU, compute operations (other than variable update operations)will be replicated across all GPUs.

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

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L55-L69)

```
 __init__(
    compute_devices=None,
    parameter_device=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Properties


###  `extended` 
[ `tf.distribute.StrategyExtended` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended) with additional methods.

###  `num_replicas_in_sync` 
Returns number of replicas over which gradients are aggregated.

## Methods


###  `experimental_distribute_dataset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L75-L102)

```
 experimental_distribute_dataset(dataset)
 
```

Distributes a tf.data.Dataset instance provided via dataset.

The returned dataset is a wrapped strategy dataset which creates amultidevice iterator under the hood. It prefetches the input data to thespecified devices on the worker. The returned distributed dataset can beiterated over similar to how regular datasets can.

NOTE: Currently, the user cannot add any more transformations to adistributed dataset.

#### For Example:


```
 strategy = tf.distribute.CentralStorageStrategy()  # with 1 CPU and 1 GPU
dataset = tf.data.Dataset.range(10).batch(2)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
for x in dist_dataset:
  print(x)  # Prints PerReplica values [0, 1], [2, 3],...

 
```

Args:  dataset: [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) to be prefetched to device.

#### Returns:
A "distributed  `Dataset` " that the caller can iterate over.

###  `experimental_distribute_datasets_from_function` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L104-L144)

```
 experimental_distribute_datasets_from_function(dataset_fn)
 
```

Distributes [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) instances created by calls to  `dataset_fn` .

 `dataset_fn`  will be called once for each worker in the strategy. In thiscase, we only have one worker so  `dataset_fn`  is called once. Each replicaon this worker will then dequeue a batch of elements from this localdataset.

The  `dataset_fn`  should take an [ `tf.distribute.InputContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/InputContext) instance whereinformation about batching and input replication can be accessed.

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

IMPORTANT: The [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) returned by  `dataset_fn`  should have aper-replica batch size, unlike  `experimental_distribute_dataset` , which usesthe global batch size.  This may be computed using `input_context.get_per_replica_batch_size` .

#### Args:
- **`dataset_fn`** : A function taking a [ `tf.distribute.InputContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/InputContext) instance andreturning a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).


#### Returns:
A "distributed  `Dataset` ", which the caller can iterate over like regulardatasets.

###  `experimental_local_results` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L146-L160)

```
 experimental_local_results(value)
 
```

Returns the list of all local per-replica values contained in  `value` .

In  `CentralStorageStrategy`  there is a single worker so the value returnedwill be all the values on that worker.

#### Args:
- **`value`** : A value returned by  `experimental_run()` ,  `experimental_run_v2()` , `extended.call_for_each_replica()` , or a variable created in  `scope` .


#### Returns:
A tuple of values contained in  `value` . If  `value`  represents a singlevalue, this returns  `(value,).` 

###  `experimental_make_numpy_dataset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L575-L601)

```
 experimental_make_numpy_dataset(numpy_input)
 
```

Makes a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) for input provided via a numpy array.

This avoids adding  `numpy_input`  as a large constant in the graph,and copies the data to the machine or machines that will be processingthe input.

Note that you will likely need to use  `experimental_distribute_dataset` with the returned dataset to further distribute it with the strategy.

#### Example:


```
 numpy_input = np.ones([10], dtype=np.float32)
dataset = strategy.experimental_make_numpy_dataset(numpy_input)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
 
```

#### Args:
- **`numpy_input`** : A nest of NumPy input arrays that will be converted into adataset. Note that lists of Numpy arrays are stacked, as that is normal[ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) behavior.


#### Returns:
A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) representing  `numpy_input` .

###  `experimental_run_v2` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L162-L177)

```
 experimental_run_v2(
    fn,
    args=(),
    kwargs=None
)
 
```

Run  `fn`  on each replica, with the given arguments.

In  `CentralStorageStrategy` ,  `fn`  is  called on each of the computereplicas, with the provided "per replica" arguments specific to that device.

#### Args:
- **`fn`** : The function to run. The output must be a [ `tf.nest` ](https://tensorflow.google.cn/api_docs/python/tf/nest) of  `Tensor` s.
- **`args`** : (Optional) Positional arguments to  `fn` .
- **`kwargs`** : (Optional) Keyword arguments to  `fn` .


#### Returns:
Return value from running  `fn` .

###  `reduce` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/central_storage_strategy.py#L179-L243)

```
 reduce(
    reduce_op,
    value,
    axis
)
 
```

Reduce  `value`  across replicas.

Given a per-replica value returned by  `experimental_run_v2` , say aper-example loss, the batch will be divided across all the replicas. Thisfunction allows you to aggregate across replicas and optionally also acrossbatch elements.  For example, if you have a global batch size of 8 and 2replicas, values for examples  `[0, 1, 2, 3]`  will be on replica 0 and `[4, 5, 6, 7]`  will be on replica 1. By default,  `reduce`  will justaggregate across replicas, returning  `[0+4, 1+5, 2+6, 3+7]` . This is usefulwhen each replica is computing a scalar or some other value that doesn'thave a "batch" dimension (like a gradient). More often you will want toaggregate across the global batch, which you can get by specifying the batchdimension as the  `axis` , typically  `axis=0` . In this case it would return ascalar  `0+1+2+3+4+5+6+7` .

If there is a last partial batch, you will need to specify an axis sothat the resulting shape is consistent across replicas. So if the lastbatch has size 6 and it is divided into [0, 1, 2, 3] and [4, 5], youwould get a shape mismatch unless you specify  `axis=0` . If you specify[ `tf.distribute.ReduceOp.MEAN` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN), using  `axis=0`  will use the correctdenominator of 6. Contrast this with computing  `reduce_mean`  to get ascalar value on each replica and this function to average those means,which will weigh some values  `1/8`  and others  `1/4` .

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
- **`reduce_op`** : A [ `tf.distribute.ReduceOp` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) value specifying how values shouldbe combined.
- **`value`** : A "per replica" value, e.g. returned by  `experimental_run_v2`  tobe combined into a single tensor.
- **`axis`** : Specifies the dimension to reduce along within eachreplica's tensor. Should typically be set to the batch dimension, or `None`  to only reduce across replicas (e.g. if the tensor has no batchdimension).


#### Returns:
A  `Tensor` .

###  `scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L541-L551)

```
 scope()
 
```

Returns a context manager selecting this Strategy as current.

Inside a  `with strategy.scope():`  code block, this threadwill use a variable creator set by  `strategy` , and willenter its "cross-replica context".

#### Returns:
A context manager.

