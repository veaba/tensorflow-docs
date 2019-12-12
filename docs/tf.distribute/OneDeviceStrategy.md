

## Class  `OneDeviceStrategy` 
在单一设备上运行的一种分配策略。

Inherits From: [ `Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)

Using this strategy will place any variables created in its scope on thespecified device. Input distributed through this strategy will beprefetched to the specified device. Moreover, any functions called via `strategy.experimental_run_v2`  will also be placed on the specified deviceas well.

Typical usage of this strategy could be testing your code with thetf.distribute.Strategy API before switching to other strategies whichactually distribute to multiple devices/machines.

#### 例如：


```
 strategy)

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

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L72-L80)

```
 __init__(device)
 
```

Creates a  `OneDeviceStrategy` .

#### 参数：
- **`device`** : Device string identifier for the device on which the variablesshould be placed. See class docs for more details on how the device isused. Examples: "/cpu:0", "/gpu:0", "/device:CPU:0", "/device:GPU:0"


## 属性


###  `extended` 
[ `tf.distribute.StrategyExtended` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended) with additional methods.

###  `num_replicas_in_sync` 
返回聚合渐变的副本数。

## 方法


###  `experimental_distribute_dataset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L82-L108)

```
 experimental_distribute_dataset(dataset)
 
```

分发通过数据集提供的tf.data.dataset实例。

In this case, there is only one device, so this is only a thin wrapperaround the input dataset. It will, however, prefetch the input data to thespecified device. The returned distributed dataset can be iterated oversimilar to how regular datasets can.

注意：Currently, the user cannot add any more transformations to adistributed dataset.

#### 示例：


```
 strategy = tf.distribute.OneDeviceStrategy()
dataset = tf.data.Dataset.range(10).batch(2)
dist_dataset = strategy.experimental_distribute_dataset(dataset)
for x in dist_dataset:
  print(x)  # [0, 1], [2, 3],...
 
```

Args:  dataset: [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) to be prefetched to device.

#### 返回：
A "distributed  `Dataset` " that the caller can iterate over.

###  `experimental_distribute_datasets_from_function` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L110-L148)

```
 experimental_distribute_datasets_from_function(dataset_fn)
 
```

Distributes [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) instances created by calls to  `dataset_fn` .

 `dataset_fn`  will be called once for each worker in the strategy. In thiscase, we only have one worker and one device so  `dataset_fn`  is calledonce.

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
A "distributed  `Dataset` ", which the caller can iterate over like regulardatasets.

###  `experimental_local_results` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L150-L164)

```
 experimental_local_results(value)
 
```

Returns the list of all local per-replica values contained in  `value` .

In  `OneDeviceStrategy` , the  `value`  is always expected to be a singlevalue, so the result is just the value in a tuple.

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L166-L180)

```
 experimental_run_v2(
    fn,
    args=(),
    kwargs=None
)
 
```

Run  `fn`  on each replica, with the given arguments.

In  `OneDeviceStrategy` ,  `fn`  is simply called within a device scope for thegiven device, with the provided arguments.

#### 参数：
- **`fn`** : The function to run. The output must be a [ `tf.nest` ](https://tensorflow.google.cn/api_docs/python/tf/nest) of  `Tensor` s.
- **`args`** : (Optional) Positional arguments to  `fn` .
- **`kwargs`** : (Optional) Keyword arguments to  `fn` .


#### 返回：
Return value from running  `fn` .

###  `reduce` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L182-L213)

```
 reduce(
    reduce_op,
    value,
    axis
)
 
```

Reduce  `value`  across replicas.

In  `OneDeviceStrategy` , there is only one replica, so if axis=None, valueis simply returned. If axis is specified as something other than None,such as axis=0, value is reduced along that axis and returned.

#### 示例：


```
 t = tf.range(10)

result = strategy.reduce(tf.distribute.ReduceOp.SUM, t, axis=None).numpy()
# result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

result = strategy.reduce(tf.distribute.ReduceOp.SUM, t, axis=0).numpy()
# result: 45
 
```

#### 参数：
- **`reduce_op`** : A [ `tf.distribute.ReduceOp` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) value specifying how values shouldbe combined.
- **`value`** : A "per replica" value, e.g. returned by  `experimental_run_v2`  tobe combined into a single tensor.
- **`axis`** : Specifies the dimension to reduce along within eachreplica's tensor. Should typically be set to the batch dimension, or `None`  to only reduce across replicas (e.g. if the tensor has no batchdimension).


#### 返回：
A  `Tensor` .

###  `scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/one_device_strategy.py#L215-L229)

```
 scope()
 
```

返回选择此策略为当前策略的上下文管理器。

Inside a  `with strategy.scope():`  code block, this threadwill use a variable creator set by  `strategy` , and willenter its "cross-replica context".

In  `OneDeviceStrategy` , all variables created inside  `strategy.scope()` will be on  `device`  specified at strategy construction time.See example in the docs for this class.

#### 返回：
用于使用此策略创建变量的上下文管理器。

