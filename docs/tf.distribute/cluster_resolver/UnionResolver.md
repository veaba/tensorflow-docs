

## Class  `UnionResolver` 
Performs a union on underlying ClusterResolvers.

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

**Aliases** : [ `tf.compat.v1.distribute.cluster_resolver.UnionResolver` ](/api_docs/python/tf/distribute/cluster_resolver/UnionResolver), [ `tf.compat.v2.distribute.cluster_resolver.UnionResolver` ](/api_docs/python/tf/distribute/cluster_resolver/UnionResolver)

This class performs a union given two or more existing ClusterResolvers. Itmerges the underlying ClusterResolvers, and returns one unified ClusterSpecwhen cluster_spec is called. The details of the merge function isdocumented in the cluster_spec function.

For additional ClusterResolver properties such as task type, task index,rpc layer, environment, etc..., we will return the value from the firstClusterResolver in the union.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L296-L327)

```
 __init__(
    *args,
    **kwargs
)
 
```

Initializes a UnionClusterResolver with other ClusterResolvers.

#### Args:
- **`*args`** :  `ClusterResolver`  objects to be unionized.
- **`**kwargs`** :   rpc_layer - (Optional) Override value for the RPC layer used byTensorFlow.task_type - (Optional) Override value for the current task type.task_id - (Optional) Override value for the current task index.


#### Raises:
- **`TypeError`** : If any argument is not a subclass of  `ClusterResolvers` .
- **`ValueError`** : If there are no arguments passed.


## Properties


###  `environment` 
Returns the current environment which TensorFlow is running in.

There are two possible return values, "google" (when TensorFlow is runningin a Google-internal environment) or an empty string (when TensorFlow isrunning elsewhere).

If you are implementing a ClusterResolver that works in both the Googleenvironment and the open-source world (for instance, a TPU ClusterResolveror similar), you will have to return the appropriate string depending on theenvironment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only workin open-source TensorFlow, you do not need to implement this property.

###  `rpc_layer` 


###  `task_id` 


###  `task_type` 


## Methods


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L329-L401)

```
 cluster_spec()
 
```

Returns a union of all the ClusterSpecs from the ClusterResolvers.

#### Returns:
A ClusterSpec containing host information merged from all the underlyingClusterResolvers.

#### Raises:
- **`KeyError`** : If there are conflicting keys detected when merging two ormore dictionaries, this exception is raised.

**Note:**  If there are multiple ClusterResolvers exposing ClusterSpecs with thesame job name, we will merge the list/dict of workers.
If *all* underlying ClusterSpecs expose the set of workers as lists, we willconcatenate the lists of workers, starting with the list of workers fromthe first ClusterResolver passed into the constructor.

If *any* of the ClusterSpecs expose the set of workers as a dict, we willtreat all the sets of workers as dicts (even if they are returned as lists)and will only merge them into a dict if there is no conflicting keys. Ifthere is a conflicting key, we will raise a  `KeyError` .

###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L403-L421)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

Returns the master address to use when creating a session.

This usually returns the master from the first ClusterResolver passed in,but you can override this by specifying the task_type and task_id.

#### Args:
- **`task_type`** : (Optional) The type of the TensorFlow task of the master.
- **`task_id`** : (Optional) The index of the TensorFlow task of the master.
- **`rpc_layer`** : (Optional) The RPC protocol for the given cluster.


#### Returns:
The name or URL of the session master.

###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L443-L448)

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

