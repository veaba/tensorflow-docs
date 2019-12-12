

## Class  `UnionResolver` 
在底层的ClusterResolver上执行联合。

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

**别名** : [ `tf.compat.v1.distribute.cluster_resolver.UnionResolver` ](/api_docs/python/tf/distribute/cluster_resolver/UnionResolver), [ `tf.compat.v2.distribute.cluster_resolver.UnionResolver` ](/api_docs/python/tf/distribute/cluster_resolver/UnionResolver)

This class performs a union given two or more existing ClusterResolvers. Itmerges the underlying ClusterResolvers, and returns one unified ClusterSpecwhen cluster_spec is called. The details of the merge function isdocumented in the cluster_spec function.

For additional ClusterResolver properties such as task type, task index,rpc layer, environment, etc..., we will return the value from the firstClusterResolver in the union.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L296-L327)

```
 __init__(
    *args,
    **kwargs
)
 
```

使用其他ClusterResolver初始化UnionClusterResolver。

#### 参数：
- **`*args`** :  `ClusterResolver`  objects to be unionized.
- **`**kwargs`** :   rpc_layer - (Optional) Override value for the RPC layer used byTensorFlow.task_type - (Optional) Override value for the current task type.task_id - (Optional) Override value for the current task index.


#### 加薪：
- **`TypeError`** : If any argument is not a subclass of  `ClusterResolvers` .
- **`ValueError`** : If there are no arguments passed.


## 属性


###  `environment` 
返回TensorFlow正在运行的当前环境。

There are two possible return values, "google" (when TensorFlow is runningin a Google-internal environment) or an empty string (when TensorFlow isrunning elsewhere).

If you are implementing a ClusterResolver that works in both the Googleenvironment and the open-source world (for instance, a TPU ClusterResolveror similar), you will have to return the appropriate string depending on theenvironment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only workin open-source TensorFlow, you do not need to implement this property.

###  `rpc_layer` 


###  `task_id` 


###  `task_type` 


## 方法


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L329-L401)

```
 cluster_spec()
 
```

从ClusterResolver返回所有ClusterSpec的并集。

#### 返回：
A ClusterSpec containing host information merged from all the underlyingClusterResolvers.

#### 加薪：
- **`KeyError`** : If there are conflicting keys detected when merging two ormore dictionaries, this exception is raised.

**Note:**  If there are multiple ClusterResolvers exposing ClusterSpecs with thesame job name, we will merge the list/dict of workers.
If *all* underlying ClusterSpecs expose the set of workers as lists, we willconcatenate the lists of workers, starting with the list of workers fromthe first ClusterResolver passed into the constructor.

If *any* of the ClusterSpecs expose the set of workers as a dict, we willtreat all the sets of workers as dicts (even if they are returned as lists)and will only merge them into a dict if there is no conflicting keys. Ifthere is a conflicting key, we will raise a  `KeyError` .

###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L403-L421)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

返回创建会话时要使用的主地址。

This usually returns the master from the first ClusterResolver passed in,but you can override this by specifying the task_type and task_id.

#### 参数：
- **`task_type`** : (Optional) The type of the TensorFlow task of the master.
- **`task_id`** : (Optional) The index of the TensorFlow task of the master.
- **`rpc_layer`** : (Optional) The RPC protocol for the given cluster.


#### 返回：
会话主机的名称或url。

###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L443-L448)

```
 num_accelerators(
    task_type=None,
    task_id=None,
    config_proto=None
)
 
```

返回每个工作进程的加速器核心数。

This returns the number of accelerator cores (such as GPUs and TPUs)available per worker.

Optionally, we allow callers to specify the task_type, and task_id, forif they want to target a specific TensorFlow process to querythe number of accelerators. This is to support heterogenous environments,where the number of accelerators cores per host is different.

#### 参数：
- **`task_type`** : (Optional) The type of the TensorFlow task of the machine wewant to query.
- **`task_id`** : (Optional) The index of the TensorFlow task of the machine wewant to query.
- **`config_proto`** : (Optional) Configuration for starting a new session toquery how many accelerator cores it has.


#### 返回：
加速器类型与核心数的映射。

