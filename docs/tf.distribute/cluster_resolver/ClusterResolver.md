

## Class  `ClusterResolver` 
Abstract class for all implementations of ClusterResolvers.

**Aliases** : [ `tf.compat.v1.distribute.cluster_resolver.ClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver), [ `tf.compat.v2.distribute.cluster_resolver.ClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

This defines the skeleton for all implementations of ClusterResolvers.ClusterResolvers are a way for TensorFlow to communicate with various clustermanagement systems (e.g. GCE, AWS, etc...).

By letting TensorFlow communicate with these systems, we will be able toautomatically discover and resolve IP addresses for various TensorFlowworkers. This will eventually allow us to automatically recover fromunderlying machine failures and scale TensorFlow worker clusters up and down.

Note to Implementors: In addition to these abstract methods, you must alsoimplement the task_type, task_id, and rpc_layer attributes. You may chooseto implement them either as properties with getters or setters or directlyset the attributes.

- task_type is the name of the server's current named job (e.g. 'worker','ps' in a distributed parameterized training job).
- task_id is the ordinal index of the server within the task type.
- rpc_layer is the protocol used by TensorFlow to communicate with otherTensorFlow servers in a distributed environment.


## Properties


###  `environment` 
Returns the current environment which TensorFlow is running in.

There are two possible return values, "google" (when TensorFlow is runningin a Google-internal environment) or an empty string (when TensorFlow isrunning elsewhere).

If you are implementing a ClusterResolver that works in both the Googleenvironment and the open-source world (for instance, a TPU ClusterResolveror similar), you will have to return the appropriate string depending on theenvironment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only workin open-source TensorFlow, you do not need to implement this property.

## Methods


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L91-L105)

```
 cluster_spec()
 
```

Retrieve the current state of the cluster and return a ClusterSpec.

#### Returns:
A ClusterSpec representing the state of the cluster at the moment thisfunction is called.

Implementors of this function must take care in ensuring that theClusterSpec returned is up-to-date at the time of calling this function.This usually means retrieving the information from the underlying clustermanagement system every time this function is invoked and reconstructinga cluster_spec, rather than attempting to cache anything.

###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L107-L123)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

Retrieves the name or URL of the session master.

#### Args:
- **`task_type`** : (Optional) The type of the TensorFlow task of the master.
- **`task_id`** : (Optional) The index of the TensorFlow task of the master.
- **`rpc_layer`** : (Optional) The RPC protocol for the given cluster.


#### Returns:
The name or URL of the session master.

Implementors of this function must take care in ensuring that the masterreturned is up-to-date at the time to calling this function. This usuallymeans retrieving the master every time this function is invoked.

###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L125-L160)

```
 num_accelerators(
    task_type=None,
    task_id=None,
    config_proto=None
)
 
```

Returns the number of accelerator cores per worker.

This returns the number of accelerator cores (such as GPUs and TPUs)available per worker.

Optionally, we allow callers to specify the task_type, and task_id, forif they want to target a specific TensorFlow process to querythe number of accelerators. This is to support heterogenous environments,where the number of accelerators cores per host is different.

#### Args:
- **`task_type`** : (Optional) The type of the TensorFlow task of the machine wewant to query.
- **`task_id`** : (Optional) The index of the TensorFlow task of the machine wewant to query.
- **`config_proto`** : (Optional) Configuration for starting a new session toquery how many accelerator cores it has.


#### Returns:
A map of accelerator types to number of cores.

