

## Class  `TPUStrategy` 
tpu分销策略的实施。

Inherits From: [ `Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/tpu_strategy.py#L88-L101)

```
 __init__(
    tpu_cluster_resolver=None,
    device_assignment=None
)
 
```

初始化tpustrategy对象。

#### 参数：
- **`tpu_cluster_resolver`** : A tf.distribute.cluster_resolver.TPUClusterResolver,which provides information about the TPU cluster.
- **`device_assignment`** : Optional [ `tf.tpu.experimental.DeviceAssignment` ](https://tensorflow.google.cn/api_docs/python/tf/tpu/experimental/DeviceAssignment) tospecify the placement of replicas on the TPU cluster. Currently onlysupports the usecase of using a single core within a TPU cluster.


## 属性


###  `extended` 
[ `tf.distribute.StrategyExtended` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended) with additional methods.

###  `num_replicas_in_sync` 
返回聚合渐变的副本数。

## 方法


###  `experimental_distribute_dataset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L610-L674)

```
 experimental_distribute_dataset(dataset)
 
```

Distributes a tf.data.Dataset instance provided via  `dataset` .

The returned distributed dataset can be iterated over similar to howregular datasets can.注意：Currently, the user cannot add any more transformations to adistributed dataset.

下面是一个例子：

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

We will assume that the input dataset is batched by theglobal batch size. With this assumption, we will make a best effort todivide each batch across all the replicas (one or more workers).

In a multi-worker setting, we will first attempt to distribute the datasetby attempting to detect whether the dataset is being created out ofReaderDatasets (e.g. TFRecordDataset, TextLineDataset, etc.) and if so,attempting to shard the input files. Note that there has to be at least oneinput file per worker. If you have less than one input file per worker, wesuggest that you should disable distributing your dataset using the methodbelow.

If that attempt is unsuccessful (e.g. the dataset is created from aDataset.range), we will shard the dataset evenly at the end by appending a `.shard`  operation to the end of the processing pipeline. This will causethe entire preprocessing pipeline for all the data to be run on everyworker, and each worker will do redundant work. We will print a warningif this method of sharding is selected. In this case, consider using `experimental_distribute_datasets_from_function`  instead.

You can disable dataset sharding across workers using the  `auto_shard` option in [ `tf.data.experimental.DistributeOptions` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/DistributeOptions).

Within each worker, we will also split the data among all the workerdevices (if more than one a present), and this will happen even ifmulti-worker sharding is disabled using the method above.

If the above batch splitting and dataset sharding logic is undesirable,please use  `experimental_distribute_datasets_from_function`  instead, whichdoes not do any automatic splitting or sharding.

#### 参数：
- **`dataset`** : [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) that will be sharded across all replicas usingthe rules stated above.


#### 返回：
A "distributed  `Dataset` ", which acts like a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) exceptit produces "per-replica" values.

###  `experimental_distribute_datasets_from_function` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L676-L724)

```
 experimental_distribute_datasets_from_function(dataset_fn)
 
```

Distributes [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) instances created by calls to  `dataset_fn` .

 `dataset_fn`  will be called once for each worker in the strategy. Eachreplica on that worker will dequeue one batch of inputs from the local `Dataset`  (i.e. if a worker has two replicas, two batches will be dequeuedfrom the  `Dataset`  every step).

This method can be used for several purposes. For example, where `experimental_distribute_dataset`  is unable to shard the input files, thismethod might be used to manually shard the dataset (avoiding the slowfallback behavior in  `experimental_distribute_dataset` ). In cases where thedataset is infinite, this sharding can be done by creating dataset replicasthat differ only in their random seed. `experimental_distribute_dataset`  may also sometimes fail to split thebatch across replicas on a worker. In that case, this method can be usedwhere that limitation does not exist.

The  `dataset_fn`  should take an [ `tf.distribute.InputContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/InputContext) instance whereinformation about batching and input replication can be accessed:

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

#### 参数：
- **`dataset_fn`** : A function taking a [ `tf.distribute.InputContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/InputContext) instance andreturning a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).


#### 返回：
A "distributed  `Dataset` ", which acts like a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) exceptit produces "per-replica" values.

###  `experimental_local_results` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L878-L895)

```
 experimental_local_results(value)
 
```

Returns the list of all local per-replica values contained in  `value` .


**Note:**  This only returns values on the worker initiated by this client.When using a [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) like[ `tf.distribute.experimental.MultiWorkerMirroredStrategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/experimental/MultiWorkerMirroredStrategy), each workerwill be its own client, and this function will only return valuescomputed on that worker.


#### 参数：
- **`value`** : A value returned by  `experimental_run()` ,  `experimental_run_v2()` , `extended.call_for_each_replica()` , or a variable created in  `scope` .


#### 返回：
A tuple of values contained in  `value` . If  `value`  represents a singlevalue, this returns  `(value,).` 

###  `experimental_make_numpy_dataset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L575-L601)

```
 experimental_make_numpy_dataset(numpy_input)
 
```

Makes a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) for input provided via a numpy array.

This avoids adding  `numpy_input`  as a large constant in the graph,and copies the data to the machine or machines that will be processingthe input.

Note that you will likely need to use  `experimental_distribute_dataset` with the returned dataset to further distribute it with the strategy.

#### 示例：


```
 numpy_input = np.ones([10], dtype=np.float32)
dataset = strategy.experimental_make_numpy_dataset(numpy_input)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
 
```

#### 参数：
- **`numpy_input`** : A nest of NumPy input arrays that will be converted into adataset. Note that lists of Numpy arrays are stacked, as that is normal[ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) behavior.


#### 返回：
A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) representing  `numpy_input` .

###  `experimental_run_v2` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/tpu_strategy.py#L106-L111)

```
 experimental_run_v2(
    fn,
    args=(),
    kwargs=None
)
 
```

见基类。

###  `reduce` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L762-L854)

```
 reduce(
    reduce_op,
    value,
    axis
)
 
```

Reduce  `value`  across replicas.

Given a per-replica value returned by  `experimental_run_v2` , say aper-example loss, the batch will be divided across all the replicas.  Thisfunction allows you to aggregate across replicas and optionally also acrossbatch elements.  For example, if you have a global batch size of 8 and 2replicas, values for examples  `[0, 1, 2, 3]`  will be on replica 0 and `[4, 5, 6, 7]`  will be on replica 1. By default,  `reduce`  will justaggregate across replicas, returning  `[0+4, 1+5, 2+6, 3+7]` . This is usefulwhen each replica is computing a scalar or some other value that doesn'thave a "batch" dimension (like a gradient). More often you will want toaggregate across the global batch, which you can get by specifying the batchdimension as the  `axis` , typically  `axis=0` . In this case it would return ascalar  `0+1+2+3+4+5+6+7` .

If there is a last partial batch, you will need to specify an axis sothat the resulting shape is consistent across replicas. So if the lastbatch has size 6 and it is divided into [0, 1, 2, 3] and [4, 5], youwould get a shape mismatch unless you specify  `axis=0` . If you specify[ `tf.distribute.ReduceOp.MEAN` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#MEAN), using  `axis=0`  will use the correctdenominator of 6. Contrast this with computing  `reduce_mean`  to get ascalar value on each replica and this function to average those means,which will weigh some values  `1/8`  and others  `1/4` .

#### 参数：
- **`reduce_op`** : A [ `tf.distribute.ReduceOp` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) value specifying how values shouldbe combined.
- **`value`** : A "per replica" value, e.g. returned by  `experimental_run_v2`  tobe combined into a single tensor.
- **`axis`** : Specifies the dimension to reduce along within eachreplica's tensor. Should typically be set to the batch dimension, or `None`  to only reduce across replicas (e.g. if the tensor has no batchdimension).


#### 返回：
A  `Tensor` .

###  `scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L541-L551)

```
 scope()
 
```

返回选择此策略为当前策略的上下文管理器。

Inside a  `with strategy.scope():`  code block, this threadwill use a variable creator set by  `strategy` , and willenter its "cross-replica context".

#### 返回：
上下文管理器。

