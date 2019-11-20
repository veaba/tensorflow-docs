[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/cluster_resolver/SlurmClusterResolver)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L32-L226)  
  
  
## Class `SlurmClusterResolver`

ClusterResolver for system with Slurm workload manager.

Inherits From:
[`ClusterResolver`](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

### Aliases:

  * Class [`tf.compat.v1.distribute.cluster_resolver.SlurmClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/SlurmClusterResolver)
  * Class [`tf.compat.v2.distribute.cluster_resolver.SlurmClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/SlurmClusterResolver)

This is an implementation of cluster resolvers for Slurm clusters. This allows
the specification of jobs and task counts, number of tasks per node, number of
GPUs on each node and number of GPUs for each task. It retrieves system
attributes by Slurm environment variables, resolves allocated computing node
names, constructs a cluster and returns a ClusterResolver object which can be
use for distributed TensorFlow.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L53-L127)

    
    
    __init__(
        jobs,
        port_base=8888,
        gpus_per_node=1,
        gpus_per_task=1,
        tasks_per_node=None,
        auto_set_gpu=True,
        rpc_layer='grpc'
    )
    

Creates a new SlurmClusterResolver object.

This takes in parameters and creates a SlurmClusterResolver object. It uses
those parameters to check which nodes will processes reside on and resolves
their hostnames. With the number of the GPUs on each node and number of GPUs
for each task it offsets the port number for each process and allocates GPUs
to tasks by setting environment variables. The resolver currently supports
homogeneous tasks and default Slurm process allocation.

#### Args:

  * **`jobs`** : Dictionary with job names as key and number of tasks in the job as value.
  * **`port_base`** : The first port number to start with for processes on a node.
  * **`gpus_per_node`** : Number of GPUs available on each node.
  * **`gpus_per_task`** : Number of GPUs to be used for each task.
  * **`tasks_per_node`** : Number of tasks to run on each node, if not set defaults to Slurm's output environment variable SLURM_NTASKS_PER_NODE.
  * **`auto_set_gpu`** : Set the visible CUDA devices automatically while resolving the cluster by setting CUDA_VISIBLE_DEVICES environment variable. Defaults to True.
  * **`rpc_layer`** : (Optional) The protocol TensorFlow uses to communicate between nodes. Defaults to 'grpc'.

#### Returns:

A ClusterResolver object which can be used with distributed TensorFlow.

#### Raises:

  * **`RuntimeError`** : If requested more GPUs per node then available or requested more tasks then assigned tasks.

## Properties

### `environment`

Returns the current environment which TensorFlow is running in.

There are two possible return values, "google" (when TensorFlow is running in
a Google-internal environment) or an empty string (when TensorFlow is running
elsewhere).

If you are implementing a ClusterResolver that works in both the Google
environment and the open-source world (for instance, a TPU ClusterResolver or
similar), you will have to return the appropriate string depending on the
environment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only work in
open-source TensorFlow, you do not need to implement this property.

## Methods

### `cluster_spec`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L129-L182)

    
    
    cluster_spec()
    

Returns a ClusterSpec object based on the latest instance group info.

This returns a ClusterSpec object for use based on information from the
specified initialization parameters and Slurm environment variables. The
cluster specification is resolved each time this function is called. The
resolver extract hostnames of nodes by scontrol and pack tasks in that order
until a node a has number of tasks that is equal to specification. GPUs on
nodes are allocated to tasks by specification through setting
CUDA_VISIBLE_DEVICES environment variable.

#### Returns:

A ClusterSpec containing host information retrieved from Slurm's environment
variables.

### `get_task_info`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L184-L196)

    
    
    get_task_info()
    

Returns job name and task_id for the process which calls this.

This returns the job name and task index for the process which calls this
function according to its rank and cluster specification. The job name and
task index are set after a cluster is constructed by cluster_spec otherwise
defaults to None.

#### Returns:

A string specifying job name the process belongs to and an integner specifying
the task index the process belongs to in that job.

### `master`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L198-L218)

    
    
    master(
        task_type=None,
        task_id=None,
        rpc_layer=None
    )
    

Returns the master string for connecting to a TensorFlow master.

#### Args:

  * **`task_type`** : (Optional) Overrides the default auto-selected task type.
  * **`task_id`** : (Optional) Overrides the default auto-slected task index.
  * **`rpc_layer`** : (Optional) Overrides the default RPC protocol TensorFlow uses to communicate across nodes.

#### Returns:

A connection string for connecting to a TensorFlow master.

### `num_accelerators`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/slurm_cluster_resolver.py#L220-L226)

    
    
    num_accelerators(
        task_type=None,
        task_id=None,
        config_proto=None
    )
    

Returns the number of accelerator cores per worker.

This returns the number of accelerator cores (such as GPUs and TPUs) available
per worker.

Optionally, we allow callers to specify the task_type, and task_id, for if
they want to target a specific TensorFlow process to query the number of
accelerators. This is to support heterogenous environments, where the number
of accelerators cores per host is different.

#### Args:

  * **`task_type`** : (Optional) The type of the TensorFlow task of the machine we want to query.
  * **`task_id`** : (Optional) The index of the TensorFlow task of the machine we want to query.
  * **`config_proto`** : (Optional) Configuration for starting a new session to query how many accelerator cores it has.

#### Returns:

A map of accelerator types to number of cores.

