

## Class  `InputContext` 
输入函数所需的类包装信息。

**别名** : [ `tf.compat.v1.distribute.InputContext` ](/api_docs/python/tf/distribute/InputContext), [ `tf.compat.v2.distribute.InputContext` ](/api_docs/python/tf/distribute/InputContext)

This is a context class that is passed to the user's input function andcontains information about the compute replicas and input pipelines. Thenumber of compute replicas (in sync training) helps compute the local batchsize from the desired global batch size for each replica. The input pipelineinformation can be used to return a different subset of the input in eachreplica (for e.g. shard the input pipeline, use a different inputsource etc).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L355-L369)

```
 __init__(
    num_input_pipelines=1,
    input_pipeline_id=0,
    num_replicas_in_sync=1
)
 
```

初始化inputcontext对象。

#### 参数：
- **`num_input_pipelines`** : the number of input pipelines in a cluster.
- **`input_pipeline_id`** : the current input pipeline id, should be an int in[0, `num_input_pipelines` ).
- **`num_replicas_in_sync`** : the number of replicas that are in sync.


## 属性


###  `input_pipeline_id` 
返回输入管道ID。

###  `num_input_pipelines` 
Returns the number of input pipelines.

###  `num_replicas_in_sync` 
返回同步的计算副本数。

## 方法


###  `get_per_replica_batch_size` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L386-L404)

```
 get_per_replica_batch_size(global_batch_size)
 
```

Returns the per-replica batch size.

#### 参数：
- **`global_batch_size`** : the global batch size which should be divisible by `num_replicas_in_sync` .


#### 返回：
the per-replica batch size.

#### 加薪：
- **`ValueError`** : if  `global_batch_size`  not divisible by `num_replicas_in_sync` .
