## Class ClusterSpec

Represents a cluster as a set of "tasks", organized into "jobs".
### Aliases:
- Class `tf.compat.v1.train.ClusterSpec`
- Class `tf.compat.v2.train.ClusterSpec`
[tf.train.ClusterSpec](https://www.tensorflow.org/api_docs/python/tf/train/ClusterSpec)A  represents the set of processes that participate in a distributed TensorFlow computation. Every tf.distribute.Server is constructed in a particular cluster.


To create a cluster with two jobs and five tasks, you specify the mapping from job names to lists of network addresses (typically hostname-port pairs).

```
 cluster = tf.train.ClusterSpec({"worker": ["worker0.example.com:2222",
                                           "worker1.example.com:2222",
                                           "worker2.example.com:2222"],
                                "ps": ["ps0.example.com:2222",
                                       "ps1.example.com:2222"]})
```

Each job may also be specified as a sparse mapping from task indices to network addresses. This enables a server to be configured without needing to know the identity of (for example) all other worker tasks:

```
 cluster = tf.train.ClusterSpec({"worker": {1: "worker1.example.com:2222"},
                                "ps": ["ps0.example.com:2222",
                                       "ps1.example.com:2222"]})
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L272-L314)


```
 __init__(cluster)
```

Creates a ClusterSpec.
#### Args:
- `cluster`: A dictionary mapping one or more job names to (i) a list of network addresses, or (ii) a dictionary mapping integer task indices to network addresses; or a `tf.train.ClusterDef` protocol buffer.
#### Raises:
- `TypeError`: If `cluster` is not a dictionary mapping strings to lists of strings, and not a `tf.train.ClusterDef` protobuf.
## Properties
### jobs

Returns a list of job names in this cluster.
#### Returns:

A list of strings, corresponding to the names of jobs in this cluster.
## Methods
### __bool__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L316-L317)


```
 __bool__()
```
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L322-L323)


```
 __eq__(other)
```

Return self==value.
### __ne__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L325-L326)


```
 __ne__(other)
```

Return self!=value.
### __nonzero__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L316-L317)


```
 __nonzero__()
```
### as_cluster_def
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L362-L364)


```
 as_cluster_def()
```
[tf.train.ClusterDef](https://www.tensorflow.org/api_docs/python/tf/train/ClusterDef)Returns a  protocol buffer based on this cluster.

### as_dict
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L335-L360)


```
 as_dict()
```

Returns a dictionary from job names to their tasks.

For each job, if the task index space is dense, the corresponding value will be a list of network addresses; otherwise it will be a dictionary mapping (sparse) task indices to the corresponding addresses.
#### Returns:

A dictionary mapping job names to lists or dictionaries describing the tasks in those jobs.
### job_tasks
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L436-L463)


```
 job_tasks(job_name)
```

Returns a mapping from task ID to address in the given job.
[tf.train.ClusterSpec.num_tasks](https://www.tensorflow.org/api_docs/python/tf/train/ClusterSpec#num_tasks)NOTE: For backwards compatibility, this method returns a list. If the given job was defined with a sparse set of task indices, the length of this list may not reflect the number of tasks defined in this job. Use the  method to find the number of tasks defined in a particular job.

#### Args:
- `job_name`: The string name of a job in this cluster.
#### Returns:

A list of task addresses, where the index in the list corresponds to the task index of each task. The list may contain None if the job was defined with a sparse set of task indices.
#### Raises:
- `ValueError`: If `job_name` does not name a job in this cluster.
### num_tasks
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L375-L391)


```
 num_tasks(job_name)
```

Returns the number of tasks defined in the given job.
#### Args:
- `job_name`: The string name of a job in this cluster.
#### Returns:

The number of tasks defined in the given job.
#### Raises:
- `ValueError`: If `job_name` does not name a job in this cluster.
### task_address
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L412-L434)


```
 task_address(
    job_name,
    task_index
)
```

Returns the address of the given task in the given job.
#### Args:
- `job_name`: The string name of a job in this cluster.
- `task_index`: A non-negative integer.
#### Returns:

The address of the given task in the given job.
#### Raises:
- `ValueError`: If `job_name` does not name a job in this cluster, or no task with index `task_index` is defined in that job.
### task_indices
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L393-L410)


```
 task_indices(job_name)
```

Returns a list of valid task indices in the given job.
#### Args:
- `job_name`: The string name of a job in this cluster.
#### Returns:

A list of valid task indices in the given job.
#### Raises:
- `ValueError`: If `job_name` does not name a job in this cluster, or no task with index `task_index` is defined in that job.
