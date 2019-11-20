[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/cluster_resolver/TFConfigClusterResolver)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L52-L177)  
  
  
## Class `TFConfigClusterResolver`

Implementation of a ClusterResolver which reads the TF_CONFIG EnvVar.

Inherits From:
[`ClusterResolver`](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

### Aliases:

  * Class [`tf.compat.v1.distribute.cluster_resolver.TFConfigClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/TFConfigClusterResolver)
  * Class [`tf.compat.v2.distribute.cluster_resolver.TFConfigClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/TFConfigClusterResolver)

This is an implementation of cluster resolvers when using TF_CONFIG to set
information about the cluster. The cluster spec returned will be initialized
from the TF_CONFIG environment variable.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L60-L79)

    
    
    __init__(
        task_type=None,
        task_id=None,
        rpc_layer=None,
        environment=None
    )
    

Creates a new TFConfigClusterResolver.

#### Args:

  * **`task_type`** : (String, optional) Overrides the task type specified in the TF_CONFIG environment variable.
  * **`task_id`** : (Integer, optional) Overrides the task index specified in the TF_CONFIG environment variable.
  * **`rpc_layer`** : (String, optional) Overrides the rpc layer TensorFlow uses.
  * **`environment`** : (String, optional) Overrides the environment TensorFlow operates in.

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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L129-L138)

    
    
    cluster_spec()
    

Returns a ClusterSpec based on the TF_CONFIG environment variable.

#### Returns:

A ClusterSpec with information from the TF_CONFIG environment variable.

### `master`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L140-L177)

    
    
    master(
        task_type=None,
        task_id=None,
        rpc_layer=None
    )
    

Returns the master address to use when creating a TensorFlow session.

#### Args:

  * **`task_type`** : (String, optional) Overrides and sets the task_type of the master.
  * **`task_id`** : (Integer, optional) Overrides and sets the task id of the master.
  * **`rpc_layer`** : (String, optional) Overrides and sets the protocol over which TensorFlow nodes communicate with each other.

#### Returns:

The address of the master.

#### Raises:

  * **`RuntimeError`** : If the task_type or task_id is not specified and the `TF_CONFIG` environment variable does not contain a task section.

### `num_accelerators`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L120-L127)

    
    
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

