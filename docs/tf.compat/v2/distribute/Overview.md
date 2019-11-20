[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v2/distribute)  
---  
  
Library for running a computation across multiple devices.

See the guide for overview and examples: [TensorFlow
v1.x](https://tensorflow.google.cn/guide/distribute_strategy), [TensorFlow
v2.x](https://tensorflow.google.cn/alpha/guide/distribute_strategy).

The intent of this library is that you can write an algorithm in a stylized
way and it will be usable with a variety of different
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
implementations. Each descendant will implement a different strategy for
distributing the algorithm across multiple devices/machines. Furthermore,
these changes can be hidden inside the specific layers and other library
classes that need special treatment to run in a distributed setting, so that
most users' model definition code can run unchanged. The
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
API works the same way with eager and graph execution.

_Glossary_

  * _Data parallelism_ is where we run multiple copies of the model on different slices of the input data. This is in contrast to _model parallelism_ where we divide up a single copy of a model across multiple devices. Note: we only support data parallelism for now, but hope to add support for model parallelism in the future.
  * A _device_ is a CPU or accelerator (e.g. GPUs, TPUs) on some machine that TensorFlow can run operations on (see e.g. [`tf.device`](https://tensorflow.google.cn/api_docs/python/tf/device)). You may have multiple devices on a single machine, or be connected to devices on multiple machines. Devices used to run computations are called _worker devices_. Devices used to store variables are _parameter devices_. For some strategies, such as [`tf.distribute.MirroredStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/MirroredStrategy), the worker and parameter devices will be the same (see mirrored variables below). For others they will be different. For example, [`tf.distribute.experimental.CentralStorageStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/experimental/CentralStorageStrategy) puts the variables on a single device (which may be a worker device or may be the CPU), and [`tf.distribute.experimental.ParameterServerStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/experimental/ParameterServerStrategy) puts the variables on separate machines called parameter servers (see below).
  * A _replica_ is one copy of the model, running on one slice of the input data. Right now each replica is executed on its own worker device, but once we add support for model parallelism a replica may span multiple worker devices.
  * A _host_ is the CPU device on a machine with worker devices, typically used for running input pipelines.
  * A _worker_ is defined to be the physical machine(s) containing the physical devices (e.g. GPUs, TPUs) on which the replicated computation is executed. A worker may contain one or more replicas, but contains at least one replica. Typically one worker will correspond to one machine, but in the case of very large models with model parallelism, one worker may span multiple machines. We typically run one input pipeline per worker, feeding all the replicas on that worker.
  * _Synchronous_ , or more commonly _sync_ , training is where the updates from each replica are aggregated together before updating the model variables. This is in contrast to _asynchronous_ , or _async_ training, where each replica updates the model variables independently. You may also have replicas partitioned into groups which are in sync within each group but async between groups.
  * _Parameter servers_ : These are machines that hold a single copy of parameters/variables, used by some strategies (right now just [`tf.distribute.experimental.ParameterServerStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/experimental/ParameterServerStrategy)). All replicas that want to operate on a variable retrieve it at the beginning of a step and send an update to be applied at the end of the step. These can in priniciple support either sync or async training, but right now we only have support for async training with parameter servers. Compare to [`tf.distribute.experimental.CentralStorageStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/experimental/CentralStorageStrategy), which puts all variables on a single device on the same machine (and does sync training), and [`tf.distribute.MirroredStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/MirroredStrategy), which mirrors variables to multiple devices (see below).
  * _Mirrored variables_ : These are variables that are copied to multiple devices, where we keep the copies in sync by applying the same updates to every copy. Normally would only be used with sync training.
  * Reductions and all-reduce: A _reduction_ is some method of aggregating multiple values into one value, like "sum" or "mean". If a strategy is doing sync training, we will perform a reduction on the gradients to a parameter from all replicas before applying the update. _All-reduce_ is an algorithm for performing a reduction on values from multiple devices and making the result available on all of those devices.

Note that we provide a default version of
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
that is used when no other strategy is in scope, that provides the same API
with reasonable default behavior.

## Modules

[`cluster_resolver`](https://tensorflow.google.cn/api_docs/python/tf/compat/v2/distribute/cluster_resolver)
module: Library imports for ClusterResolvers.

[`experimental`](https://tensorflow.google.cn/api_docs/python/tf/compat/v2/distribute/experimental)
module: Experimental Distribution Strategy library.

## Classes

[`class
CrossDeviceOps`](https://tensorflow.google.cn/api_docs/python/tf/distribute/CrossDeviceOps):
Base class for cross-device reduction and broadcasting algorithms.

[`class
HierarchicalCopyAllReduce`](https://tensorflow.google.cn/api_docs/python/tf/distribute/HierarchicalCopyAllReduce):
Reduction using hierarchical copy all-reduce.

[`class
InputContext`](https://tensorflow.google.cn/api_docs/python/tf/distribute/InputContext):
A class wrapping information needed by an input function.

[`class
InputReplicationMode`](https://tensorflow.google.cn/api_docs/python/tf/distribute/InputReplicationMode):
Replication mode for input function.

[`class
MirroredStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/MirroredStrategy):
Mirrors vars to distribute across multiple devices and machines.

[`class
NcclAllReduce`](https://tensorflow.google.cn/api_docs/python/tf/distribute/NcclAllReduce):
Reduction using NCCL all-reduce.

[`class
OneDeviceStrategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/OneDeviceStrategy):
A distribution strategy for running on a single device.

[`class
ReduceOp`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp):
Indicates how a set of values should be reduced.

[`class
ReductionToOneDevice`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReductionToOneDevice):
Always do reduction to one device first and then do broadcasting.

[`class
ReplicaContext`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext):
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
API when in a replica context.

[`class
Server`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server):
An in-process TensorFlow server, for use in distributed training.

[`class
Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy):
A state & compute distribution policy on a list of devices.

[`class
StrategyExtended`](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended):
Additional APIs for algorithms that need to be distribution-aware.

## Functions

[`experimental_set_strategy(...)`](https://tensorflow.google.cn/api_docs/python/tf/distribute/experimental_set_strategy):
Set a
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
as current without `with strategy.scope()`.

[`get_replica_context(...)`](https://tensorflow.google.cn/api_docs/python/tf/distribute/get_replica_context):
Returns the current
[`tf.distribute.ReplicaContext`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext)
or `None`.

[`get_strategy(...)`](https://tensorflow.google.cn/api_docs/python/tf/distribute/get_strategy):
Returns the current
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
object.

[`has_strategy(...)`](https://tensorflow.google.cn/api_docs/python/tf/distribute/has_strategy):
Return if there is a current non-default
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy).

[`in_cross_replica_context(...)`](https://tensorflow.google.cn/api_docs/python/tf/distribute/in_cross_replica_context):
Returns `True` if in a cross-replica context.

