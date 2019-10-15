
Library for running a computation across multiple devices.
[TensorFlow v1.x](https://www.tensorflow.org/guide/distribute_strategy)See the guide for overview and examples: , TensorFlow v2.x.

[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)The intent of this library is that you can write an algorithm in a stylized way and it will be usable with a variety of different  implementations. Each descendant will implement a different strategy for distributing the algorithm across multiple devices/machines. Furthermore, these changes can be hidden inside the specific layers and other library classes that need special treatment to run in a distributed setting, so that most users' model definition code can run unchanged. The  API works the same way with eager and graph execution.


Glossary
- ``D``a``t``a`` ``p``a``r``a``l``l``e``l``i``s``m`` ``i``s`` ``w``h``e``r``e`` ``w``e`` ``r``u``n`` ``m``u``l``t``i``p``l``e`` ``c``o``p``i``e``s`` ``o``f`` ``t``h``e`` ``m``o``d``e``l`` ``o``n`` ``d``i``f``f``e``r``e``n``t`` ``s``l``i``c``e``s`` ``o``f`` ``t``h``e`` ``i``n``p``u``t`` ``d``a``t``a``.`` ``T``h``i``s`` ``i``s`` ``i``n`` ``c``o``n``t``r``a``s``t`` ``t``o`` ``m``o``d``e``l`` ``p``a``r``a``l``l``e``l``i``s``m`` ``w``h``e``r``e`` ``w``e`` ``d``i``v``i``d``e`` ``u``p`` ``a`` ``s``i``n``g``l``e`` ``c``o``p``y`` ``o``f`` ``a`` ``m``o``d``e``l`` ``a``c``r``o``s``s`` ``m``u``l``t``i``p``l``e`` ``d``e``v``i``c``e``s``.`` ``N``o``t``e``:`` ``w``e`` ``o``n``l``y`` ``s``u``p``p``o``r``t`` ``d``a``t``a`` ``p``a``r``a``l``l``e``l``i``s``m`` ``f``o``r`` ``n``o``w``,`` ``b``u``t`` ``h``o``p``e`` ``t``o`` ``a``d``d`` ``s``u``p``p``o``r``t`` ``f``o``r`` ``m``o``d``e``l`` ``p``a``r``a``l``l``e``l``i``s``m`` ``i``n`` ``t``h``e`` ``f``u``t``u``r``e``.``
- A device is a CPU or accelerator (e.g. GPUs, TPUs) on some machine that TensorFlow can run operations on (see e.g. `tf.device`). You may have multiple devices on a single machine, or be connected to devices on multiple machines. Devices used to run computations are called worker devices. Devices used to store variables are parameter devices. For some strategies, such as `tf.distribute.MirroredStrategy`, the worker and parameter devices will be the same (see mirrored variables below). For others they will be different. For example, `tf.distribute.experimental.CentralStorageStrategy` puts the variables on a single device (which may be a worker device or may be the CPU), and `tf.distribute.experimental.ParameterServerStrategy` puts the variables on separate machines called parameter servers (see below).
- A replica is one copy of the model, running on one slice of the input data. Right now each replica is executed on its own worker device, but once we add support for model parallelism a replica may span multiple worker devices.
- A host is the CPU device on a machine with worker devices, typically used for running input pipelines.
- A worker is defined to be the physical machine(s) containing the physical devices (e.g. GPUs, TPUs) on which the replicated computation is executed. A worker may contain one or more replicas, but contains at least one replica. Typically one worker will correspond to one machine, but in the case of very large models with model parallelism, one worker may span multiple machines. We typically run one input pipeline per worker, feeding all the replicas on that worker.
- Synchronous, or more commonly sync, training is where the updates from each replica are aggregated together before updating the model variables. This is in contrast to asynchronous, or async training, where each replica updates the model variables independently. You may also have replicas partitioned into groups which are in sync within each group but async between groups.
- Parameter servers: These are machines that hold a single copy of parameters/variables, used by some strategies (right now just `tf.distribute.experimental.ParameterServerStrategy`). All replicas that want to operate on a variable retrieve it at the beginning of a step and send an update to be applied at the end of the step. These can in priniciple support either sync or async training, but right now we only have support for async training with parameter servers. Compare to `tf.distribute.experimental.CentralStorageStrategy`, which puts all variables on a single device on the same machine (and does sync training), and `tf.distribute.MirroredStrategy`, which mirrors variables to multiple devices (see below).
- Mirrored variables: These are variables that are copied to multiple devices, where we keep the copies in sync by applying the same updates to every copy. Normally would only be used with sync training.
- Reductions and all-reduce: A reduction is some method of aggregating multiple values into one value, like "sum" or "mean". If a strategy is doing sync training, we will perform a reduction on the gradients to a parameter from all replicas before applying the update. All-reduce is an algorithm for performing a reduction on values from multiple devices and making the result available on all of those devices.
[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)Note that we provide a default version of  that is used when no other strategy is in scope, that provides the same API with reasonable default behavior.

## Modules
[cluster_resolver](https://www.tensorflow.org/api_docs/python/tf/compat/v1/distribute/cluster_resolver) module: Library imports for ClusterResolvers.

[experimental](https://www.tensorflow.org/api_docs/python/tf/compat/v1/distribute/experimental) module: Experimental Distribution Strategy library.

## Classes
[class CrossDeviceOps](https://www.tensorflow.org/api_docs/python/tf/distribute/CrossDeviceOps): Base class for cross-device reduction and broadcasting algorithms.

[class HierarchicalCopyAllReduce](https://www.tensorflow.org/api_docs/python/tf/distribute/HierarchicalCopyAllReduce): Reduction using hierarchical copy all-reduce.

[class InputContext](https://www.tensorflow.org/api_docs/python/tf/distribute/InputContext): A class wrapping information needed by an input function.

[class InputReplicationMode](https://www.tensorflow.org/api_docs/python/tf/distribute/InputReplicationMode): Replication mode for input function.

[class MirroredStrategy](https://www.tensorflow.org/api_docs/python/tf/compat/v1/distribute/MirroredStrategy): Mirrors vars to distribute across multiple devices and machines.

[class NcclAllReduce](https://www.tensorflow.org/api_docs/python/tf/distribute/NcclAllReduce): Reduction using NCCL all-reduce.

[class OneDeviceStrategy](https://www.tensorflow.org/api_docs/python/tf/compat/v1/distribute/OneDeviceStrategy): A distribution strategy for running on a single device.

[class ReduceOp](https://www.tensorflow.org/api_docs/python/tf/distribute/ReduceOp): Indicates how a set of values should be reduced.

[class ReductionToOneDevice](https://www.tensorflow.org/api_docs/python/tf/distribute/ReductionToOneDevice): Always do reduction to one device first and then do broadcasting.

[class ReplicaContext](https://www.tensorflow.org/api_docs/python/tf/distribute/ReplicaContext): tf.distribute.Strategy API when in a replica context.

[class Server](https://www.tensorflow.org/api_docs/python/tf/distribute/Server): An in-process TensorFlow server, for use in distributed training.

[class Strategy](https://www.tensorflow.org/api_docs/python/tf/compat/v1/distribute/Strategy): A list of devices with a state & compute distribution policy.

[class StrategyExtended](https://www.tensorflow.org/api_docs/python/tf/compat/v1/distribute/StrategyExtended): Additional APIs for algorithms that need to be distribution-aware.

## Functions
[experimental_set_strategy(...)](https://www.tensorflow.org/api_docs/python/tf/distribute/experimental_set_strategy): Set a tf.distribute.Strategy as current without with strategy.scope().

[get_loss_reduction(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/distribute/get_loss_reduction): tf.distribute.ReduceOp corresponding to the last loss reduction.

[get_replica_context(...)](https://www.tensorflow.org/api_docs/python/tf/distribute/get_replica_context): Returns the current tf.distribute.ReplicaContext or None.

[get_strategy(...)](https://www.tensorflow.org/api_docs/python/tf/distribute/get_strategy): Returns the current tf.distribute.Strategy object.

[has_strategy(...)](https://www.tensorflow.org/api_docs/python/tf/distribute/has_strategy): Return if there is a current non-default tf.distribute.Strategy.

[in_cross_replica_context(...)](https://www.tensorflow.org/api_docs/python/tf/distribute/in_cross_replica_context): Returns True if in a cross-replica context.

