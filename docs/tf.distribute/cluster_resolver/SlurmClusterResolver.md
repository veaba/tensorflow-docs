

## Class  `SlurmClusterResolver` 
具有slurm工作负载管理器的系统的ClusterResolver。

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

**别名** : [ `tf.compat.v1.distribute.cluster_resolver.SlurmClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/SlurmClusterResolver), [ `tf.compat.v2.distribute.cluster_resolver.SlurmClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/SlurmClusterResolver)

This is an implementation of cluster resolvers for Slurm clusters. This allowsthe specification of jobs and task counts, number of tasks per node, number ofGPUs on each node and number of GPUs for each task. It retrieves systemattributes by Slurm environment variables, resolves allocated computing nodenames, constructs a cluster and returns a ClusterResolver object which can beuse for distributed TensorFlow.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L53-L127)

```
 __init__(
    jobs,
    port_base=8888,
    gpus_per_node=1,
    gpus_per_task=1,
    tasks_per_node=None,
    auto_set_gpu=True,
    rpc_layer='grpc'
)
 
```

创建新的slurmClusterResolver对象。

This takes in parameters and creates a SlurmClusterResolver object. It usesthose parameters to check which nodes will processes reside on and resolvestheir hostnames. With the number of the GPUs on each node and number of GPUsfor each task it offsets the port number for each process and allocatesGPUs to tasks by setting environment variables. The resolver currentlysupports homogeneous tasks and default Slurm process allocation.

#### 参数：
- **`jobs`** : Dictionary with job names as key and number of tasks in the job asvalue.
- **`port_base`** : The first port number to start with for processes on a node.
- **`gpus_per_node`** : Number of GPUs available on each node.
- **`gpus_per_task`** : Number of GPUs to be used for each task.
- **`tasks_per_node`** : Number of tasks to run on each node, if not set defaultsto Slurm's output environment variable SLURM_NTASKS_PER_NODE.
- **`auto_set_gpu`** : Set the visible CUDA devices automatically while resolvingthe cluster by setting CUDA_VISIBLE_DEVICES environment variable.Defaults to True.
- **`rpc_layer`** : (Optional) The protocol TensorFlow uses to communicate betweennodes. Defaults to 'grpc'.


#### 返回：
可用于分布式TensorFlow的ClusterResolver对象。

#### 加薪：
- **`RuntimeError`** : If requested more GPUs per node then available or requestedmore tasks then assigned tasks.


## 属性


###  `environment` 
返回TensorFlow正在运行的当前环境。

There are two possible return values, "google" (when TensorFlow is runningin a Google-internal environment) or an empty string (when TensorFlow isrunning elsewhere).

If you are implementing a ClusterResolver that works in both the Googleenvironment and the open-source world (for instance, a TPU ClusterResolveror similar), you will have to return the appropriate string depending on theenvironment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only workin open-source TensorFlow, you do not need to implement this property.

## 方法


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L129-L182)

```
 cluster_spec()
 
```

根据最新的实例组信息返回ClusterSpec对象。

This returns a ClusterSpec object for use based on information from thespecified initialization parameters and Slurm environment variables. Thecluster specification is resolved each time this function is called. Theresolver extract hostnames of nodes by scontrol and pack tasks in thatorder until a node a has number of tasks that is equal to specification.GPUs on nodes are allocated to tasks by specification through settingCUDA_VISIBLE_DEVICES environment variable.

#### 返回：
A ClusterSpec containing host information retrieved from Slurm's  environment variables.

###  `get_task_info` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L184-L196)

```
 get_task_info()
 
```

Returns job name and task_id for the process which calls this.

This returns the job name and task index for the process which calls thisfunction according to its rank and cluster specification. The job name andtask index are set after a cluster is constructed by cluster_spec otherwisedefaults to None.

#### 返回：
A string specifying job name the process belongs to and an integner  specifying the task index the process belongs to in that job.

###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L198-L218)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

返回用于连接TensorFlow主控形状的主字符串。

#### 参数：
- **`task_type`** : (Optional) Overrides the default auto-selected task type.
- **`task_id`** : (Optional) Overrides the default auto-slected task index.
- **`rpc_layer`** : (Optional) Overrides the default RPC protocol TensorFlow usesto communicate across nodes.


#### 返回：
用于连接tensorflow主机的连接字符串。

###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L220-L226)

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

