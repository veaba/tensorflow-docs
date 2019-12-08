

## Class  `SimpleClusterResolver` 
Simple implementation of ClusterResolver that accepts a ClusterSpec.

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)



### Aliases:

- Class [ `tf.compat.v1.distribute.cluster_resolver.SimpleClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/SimpleClusterResolver)

- Class [ `tf.compat.v2.distribute.cluster_resolver.SimpleClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/SimpleClusterResolver)



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L185-L204)



```
 __init__(
    cluster_spec,
    master='',
    task_type=None,
    task_id=None,
    environment='',
    num_accelerators=None,
    rpc_layer=None
)
 
```

Creates a SimpleClusterResolver from a ClusterSpec.



## Properties


###  `environment` 
Returns the current environment which TensorFlow is running in.

There are two possible return values, "google" (when TensorFlow is running
in a Google-internal environment) or an empty string (when TensorFlow is
running elsewhere).

If you are implementing a ClusterResolver that works in both the Google
environment and the open-source world (for instance, a TPU ClusterResolver
or similar), you will have to return the appropriate string depending on the
environment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only work
in open-source TensorFlow, you do not need to implement this property.



###  `rpc_layer` 


###  `task_id` 


###  `task_type` 


## Methods


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L206-L208)



```
 cluster_spec()
 
```

Returns the ClusterSpec passed into the constructor.



###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L210-L229)



```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

Returns the master address to use when creating a session.



#### Args:

- **`task_type`** : (Optional) The type of the TensorFlow task of the master.

- **`task_id`** : (Optional) The index of the TensorFlow task of the master.

- **`rpc_layer`** : (Optional) The RPC used by distributed TensorFlow.



#### Returns:
The name or URL of the session master.

If a task_type and task_id is given, this will override the  `master` 
string passed into the initialization function.



###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L251-L271)



```
 num_accelerators(
    task_type=None,
    task_id=None,
    config_proto=None
)
 
```

Returns the number of accelerator cores per worker.

The SimpleClusterResolver does not do automatic detection of accelerators,
so a TensorFlow session will never be created, and thus all arguments are
unused and we simply assume that the type of accelerator is a GPU and return
the value in provided to us in the constructor.



#### Args:

- **`task_type`** : Unused.

- **`task_id`** : Unused.

- **`config_proto`** : Unused.

