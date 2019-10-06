## Class ClusterResolver

Abstract class for all implementations of ClusterResolvers.
### Aliases:
- Class `tf.compat.v1.distribute.cluster_resolver.ClusterResolver`
- Class `tf.compat.v2.distribute.cluster_resolver.ClusterResolver`

This defines the skeleton for all implementations of ClusterResolvers. ClusterResolvers are a way for TensorFlow to communicate with various cluster management systems (e.g. GCE, AWS, etc...).

By letting TensorFlow communicate with these systems, we will be able to automatically discover and resolve IP addresses for various TensorFlow workers. This will eventually allow us to automatically recover from underlying machine failures and scale TensorFlow worker clusters up and down.

Note to Implementors: In addition to these abstract methods, you must also implement the task_type, task_id, and rpc_layer attributes. You may choose to implement them either as properties with getters or setters or directly set the attributes.
- ``t``a``s``k``_``t``y``p``e`` ``i``s`` ``t``h``e`` ``n``a``m``e`` ``o``f`` ``t``h``e`` ``s``e``r``v``e``r``'``s`` ``c``u``r``r``e``n``t`` ``n``a``m``e``d`` ``j``o``b`` ``(``e``.``g``.`` ``'``w``o``r``k``e``r``'``,`` ``'``p``s``'`` ``i``n`` ``a`` ``d``i``s``t``r``i``b``u``t``e``d`` ``p``a``r``a``m``e``t``e``r``i``z``e``d`` ``t``r``a``i``n``i``n``g`` ``j``o``b``)``.``
- ``t``a``s``k``_``i``d`` ``i``s`` ``t``h``e`` ``o``r``d``i``n``a``l`` ``i``n``d``e``x`` ``o``f`` ``t``h``e`` ``s``e``r``v``e``r`` ``w``i``t``h``i``n`` ``t``h``e`` ``t``a``s``k`` ``t``y``p``e``.``
- ``r``p``c``_``l``a``y``e``r`` ``i``s`` ``t``h``e`` ``p``r``o``t``o``c``o``l`` ``u``s``e``d`` ``b``y`` ``T``e``n``s``o``r``F``l``o``w`` ``t``o`` ``c``o``m``m``u``n``i``c``a``t``e`` ``w``i``t``h`` ``o``t``h``e``r`` ``T``e``n``s``o``r``F``l``o``w`` ``s``e``r``v``e``r``s`` ``i``n`` ``a`` ``d``i``s``t``r``i``b``u``t``e``d`` ``e``n``v``i``r``o``n``m``e``n``t``.``
## Properties
### environment

Returns the current environment which TensorFlow is running in.

There are two possible return values, "google" (when TensorFlow is running in a Google-internal environment) or an empty string (when TensorFlow is running elsewhere).

If you are implementing a ClusterResolver that works in both the Google environment and the open-source world (for instance, a TPU ClusterResolver or similar), you will have to return the appropriate string depending on the environment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only work in open-source TensorFlow, you do not need to implement this property.
## Methods
### cluster_spec
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L91-L105)


```
 cluster_spec()
```

Retrieve the current state of the cluster and return a ClusterSpec.
#### Returns:

A ClusterSpec representing the state of the cluster at the moment this function is called.

Implementors of this function must take care in ensuring that the ClusterSpec returned is up-to-date at the time of calling this function. This usually means retrieving the information from the underlying cluster management system every time this function is invoked and reconstructing a cluster_spec, rather than attempting to cache anything.
### master
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
- `task_type`: (Optional) The type of the TensorFlow task of the master.
- `task_id`: (Optional) The index of the TensorFlow task of the master.
- `rpc_layer`: (Optional) The RPC protocol for the given cluster.
#### Returns:

The name or URL of the session master.

Implementors of this function must take care in ensuring that the master returned is up-to-date at the time to calling this function. This usually means retrieving the master every time this function is invoked.
### num_accelerators
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L125-L160)


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
