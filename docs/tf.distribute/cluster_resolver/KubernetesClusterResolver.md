## Class KubernetesClusterResolver
ClusterResolver for Kubernetes.
Inherits From: `ClusterResolver`
### Aliases:
- Class `tf.compat.v1.distribute.cluster_resolver.KubernetesClusterResolver`
- Class `tf.compat.v2.distribute.cluster_resolver.KubernetesClusterResolver`
This is an implementation of cluster resolvers for Kubernetes. When given the the Kubernetes namespace and label selector for pods, we will retrieve the pod IP addresses of all running pods matching the selector, and return a ClusterSpec based on that information.
## __init__
View source

```
 __init__(
    job_to_label_mapping=None,
    tf_server_port=8470,
    rpc_layer='grpc',
    override_client=None
)
```
Initializes a new KubernetesClusterResolver.
This initializes a new Kubernetes ClusterResolver. The ClusterResolver will attempt to talk to the Kubernetes master to retrieve all the instances of pods matching a label selector.
#### Args:
- `job_to_label_mapping`: A mapping of TensorFlow jobs to label selectors. This allows users to specify many TensorFlow jobs in one Cluster Resolver, and each job can have pods belong with different label selectors. For example, a sample mapping might be
#### Raises:
- `ImportError`: If the Kubernetes Python client is not installed and no `override_client` is passed in.
- `RuntimeError`: If autoresolve_task is not a boolean or a callable.
## Properties
### environment
Returns the current environment which TensorFlow is running in.
There are two possible return values, "google" (when TensorFlow is running in a Google-internal environment) or an empty string (when TensorFlow is running elsewhere).
If you are implementing a ClusterResolver that works in both the Google environment and the open-source world (for instance, a TPU ClusterResolver or similar), you will have to return the appropriate string depending on the environment, which you will have to detect.
Otherwise, if you are implementing a ClusterResolver that will only work in open-source TensorFlow, you do not need to implement this property.
## Methods
### cluster_spec
View source

```
 cluster_spec()
```
Returns a ClusterSpec object based on the latest info from Kubernetes.
We retrieve the information from the Kubernetes master every time this method is called.
#### Returns:
A ClusterSpec containing host information returned from Kubernetes.
#### Raises:
- `RuntimeError`: If any of the pods returned by the master is not in the `Running` phase.
### master
View source

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
```
Returns the master address to use when creating a session.
You must have set the `task_type` and `task_id` object properties before calling this function, or pass in the `task_type` and `task_id` parameters when using this function. If you do both, the function parameters will override the object properties.
#### Args:
- `task_type`: (Optional) The type of the TensorFlow task of the master.
- `task_id`: (Optional) The index of the TensorFlow task of the master.
- `rpc_layer`: (Optional) The RPC protocol for the given cluster.
#### Returns:
The name or URL of the session master.
### num_accelerators
View source

```
 num_accelerators(
    task_type=None,
    task_id=None,
    config_proto=None
)
```
Returns the number of accelerator cores per worker.
This returns the number of accelerator cores (such as GPUs and TPUs) available per worker.
Optionally, we allow callers to specify the task_type, and task_id, for if they want to target a specific TensorFlow process to query the number of accelerators. This is to support heterogenous environments, where the number of accelerators cores per host is different.
#### Args:
- `task_type`: (Optional) The type of the TensorFlow task of the machine we want to query.
- `task_id`: (Optional) The index of the TensorFlow task of the machine we want to query.
- `config_proto`: (Optional) Configuration for starting a new session to query how many accelerator cores it has.
#### Returns:
A map of accelerator types to number of cores.
