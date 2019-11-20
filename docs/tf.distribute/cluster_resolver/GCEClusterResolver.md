[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/cluster_resolver/GCEClusterResolver)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/gce_cluster_resolver.py#L35-L188)  
  
  
## Class `GCEClusterResolver`

ClusterResolver for Google Compute Engine.

Inherits From:
[`ClusterResolver`](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

### Aliases:

  * Class [`tf.compat.v1.distribute.cluster_resolver.GCEClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/GCEClusterResolver)
  * Class [`tf.compat.v2.distribute.cluster_resolver.GCEClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/GCEClusterResolver)

This is an implementation of cluster resolvers for the Google Compute Engine
instance group platform. By specifying a project, zone, and instance group,
this will retrieve the IP address of all the instances within the instance
group and return a ClusterResolver object suitable for use for distributed
TensorFlow.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/gce_cluster_resolver.py#L45-L104)

    
    
    __init__(
        project,
        zone,
        instance_group,
        port,
        task_type='worker',
        task_id=0,
        rpc_layer='grpc',
        credentials='default',
        service=None
    )
    

Creates a new GCEClusterResolver object.

This takes in a few parameters and creates a GCEClusterResolver project. It
will then use these parameters to query the GCE API for the IP addresses of
each instance in the instance group.

#### Args:

  * **`project`** : Name of the GCE project.
  * **`zone`** : Zone of the GCE instance group.
  * **`instance_group`** : Name of the GCE instance group.
  * **`port`** : Port of the listening TensorFlow server (default: 8470)
  * **`task_type`** : Name of the TensorFlow job this GCE instance group of VM instances belong to.
  * **`task_id`** : The task index for this particular VM, within the GCE instance group. In particular, every single instance should be assigned a unique ordinal index within an instance group manually so that they can be distinguished from each other.
  * **`rpc_layer`** : The RPC layer TensorFlow should use to communicate across instances.
  * **`credentials`** : GCE Credentials. If nothing is specified, this defaults to GoogleCredentials.get_application_default().
  * **`service`** : The GCE API object returned by the googleapiclient.discovery function. (Default: discovery.build('compute', 'v1')). If you specify a custom service object, then the credentials parameter will be ignored.

#### Raises:

  * **`ImportError`** : If the googleapiclient is not installed.

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

### `rpc_layer`

### `task_id`

### `task_type`

## Methods

### `cluster_spec`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/gce_cluster_resolver.py#L106-L149)

    
    
    cluster_spec()
    

Returns a ClusterSpec object based on the latest instance group info.

This returns a ClusterSpec object for use based on information from the
specified instance group. We will retrieve the information from the GCE APIs
every time this method is called.

#### Returns:

A ClusterSpec containing host information retrieved from GCE.

### `master`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/gce_cluster_resolver.py#L151-L162)

    
    
    master(
        task_type=None,
        task_id=None,
        rpc_layer=None
    )
    

Retrieves the name or URL of the session master.

#### Args:

  * **`task_type`** : (Optional) The type of the TensorFlow task of the master.
  * **`task_id`** : (Optional) The index of the TensorFlow task of the master.
  * **`rpc_layer`** : (Optional) The RPC protocol for the given cluster.

#### Returns:

The name or URL of the session master.

Implementors of this function must take care in ensuring that the master
returned is up-to-date at the time to calling this function. This usually
means retrieving the master every time this function is invoked.

### `num_accelerators`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L125-L160)

    
    
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

