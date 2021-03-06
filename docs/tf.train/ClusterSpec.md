

## Class  `ClusterSpec` 
Represents a cluster as a set of "tasks", organized into "jobs".

**别名** : [ `tf.compat.v1.train.ClusterSpec` ](/api_docs/python/tf/train/ClusterSpec), [ `tf.compat.v2.train.ClusterSpec` ](/api_docs/python/tf/train/ClusterSpec)

A [ `tf.train.ClusterSpec` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterSpec) represents the set of processes thatparticipate in a distributed TensorFlow computation. Every[ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server) is constructed in a particular cluster.

To create a cluster with two jobs and five tasks, you specify themapping from job names to lists of network addresses (typicallyhostname-port pairs).

```
 cluster = tf.train.ClusterSpec({"worker": ["worker0.example.com:2222",
                                           "worker1.example.com:2222",
                                           "worker2.example.com:2222"],
                                "ps": ["ps0.example.com:2222",
                                       "ps1.example.com:2222"]})
 
```

Each job may also be specified as a sparse mapping from task indicesto network addresses. This enables a server to be configured withoutneeding to know the identity of (for example) all other workertasks:

```
 cluster = tf.train.ClusterSpec({"worker": {1: "worker1.example.com:2222"},
                                "ps": ["ps0.example.com:2222",
                                       "ps1.example.com:2222"]})
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L272-L314)

```
 __init__(cluster)
 
```

Creates a  `ClusterSpec` .

#### 参数：
- **`cluster`** : A dictionary mapping one or more job names to (i) a list ofnetwork addresses, or (ii) a dictionary mapping integer task indices tonetwork addresses; or a [ `tf.train.ClusterDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterDef) protocol buffer.


#### 加薪：
- **`TypeError`** : If  `cluster`  is not a dictionary mapping strings to listsof strings, and not a [ `tf.train.ClusterDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterDef) protobuf.


## 属性


###  `jobs` 
返回此群集中作业名称的列表。

#### 返回：
A list of strings, corresponding to the names of jobs in this cluster.

## 方法


###  `__bool__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L316-L317)

```
 __bool__()
 
```

###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L322-L323)

```
 __eq__(other)
 
```

Return self==value.

###  `__ne__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L325-L326)

```
 __ne__(other)
 
```

Return self!=value.

###  `__nonzero__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L316-L317)

```
 __nonzero__()
 
```

###  `as_cluster_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L362-L364)

```
 as_cluster_def()
 
```

Returns a [ `tf.train.ClusterDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterDef) protocol buffer based on this cluster.

###  `as_dict` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L335-L360)

```
 as_dict()
 
```

返回从作业名称到其任务的字典。

For each job, if the task index space is dense, the correspondingvalue will be a list of network addresses; otherwise it will be adictionary mapping (sparse) task indices to the correspondingaddresses.

#### 返回：
A dictionary mapping job names to lists or dictionariesdescribing the tasks in those jobs.

###  `job_tasks` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L436-L463)

```
 job_tasks(job_name)
 
```

返回从任务ID到给定作业中地址的映射。

注意：For backwards compatibility, this method returns a list. Ifthe given job was defined with a sparse set of task indices, thelength of this list may not reflect the number of tasks defined inthis job. Use the [ `tf.train.ClusterSpec.num_tasks` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterSpec#num_tasks) methodto find the number of tasks defined in a particular job.

#### 参数：
- **`job_name`** : The string name of a job in this cluster.


#### 返回：
A list of task addresses, where the index in the listcorresponds to the task index of each task. The list may contain `None`  if the job was defined with a sparse set of task indices.

#### 加薪：
- **`ValueError`** : If  `job_name`  does not name a job in this cluster.


###  `num_tasks` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L375-L391)

```
 num_tasks(job_name)
 
```

返回在给定作业中定义的任务数。

#### 参数：
- **`job_name`** : The string name of a job in this cluster.


#### 返回：
在给定作业中定义的任务数。

#### 加薪：
- **`ValueError`** : If  `job_name`  does not name a job in this cluster.


###  `task_address` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L412-L434)

```
 task_address(
    job_name,
    task_index
)
 
```

返回给定作业中给定任务的地址。

#### 参数：
- **`job_name`** : The string name of a job in this cluster.
- **`task_index`** : A non-negative integer.


#### 返回：
给定作业中给定任务的地址。

#### 加薪：
- **`ValueError`** : If  `job_name`  does not name a job in this cluster,or no task with index  `task_index`  is defined in that job.


###  `task_indices` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L393-L410)

```
 task_indices(job_name)
 
```

返回给定作业中有效任务索引的列表。

#### 参数：
- **`job_name`** : The string name of a job in this cluster.


#### 返回：
给定作业中有效任务索引的列表。

#### 加薪：
- **`ValueError`** : If  `job_name`  does not name a job in this cluster,or no task with index  `task_index`  is defined in that job.
