(window.webpackJsonp=window.webpackJsonp||[]).push([[1175],{1364:function(e,t,o){"use strict";o.r(t);var r=o(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Library for running a computation across multiple devices.\n"),o("a",{attrs:{href:"https://www.tensorflow.org/guide/distribute_strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("TensorFlow v1.x"),o("OutboundLink")],1),e._v("See the guide for overview and examples: , TensorFlow v2.x.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.Strategy"),o("OutboundLink")],1),e._v("The intent of this library is that you can write an algorithm in a stylized way and it will be usable with a variety of different  implementations. Each descendant will implement a different strategy for distributing the algorithm across multiple devices/machines. Furthermore, these changes can be hidden inside the specific layers and other library classes that need special treatment to run in a distributed setting, so that most users' model definition code can run unchanged. The  API works the same way with eager and graph execution.")]),e._v(" "),o("p",[e._v("Glossary")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("D")]),e._v("a"),o("code",[e._v("t")]),e._v("a"),o("code"),e._v("p"),o("code",[e._v("a")]),e._v("r"),o("code",[e._v("a")]),e._v("l"),o("code",[e._v("l")]),e._v("e"),o("code",[e._v("l")]),e._v("i"),o("code",[e._v("s")]),e._v("m"),o("code"),e._v("i"),o("code",[e._v("s")]),e._v(" "),o("code",[e._v("w")]),e._v("h"),o("code",[e._v("e")]),e._v("r"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("w")]),e._v("e"),o("code"),e._v("r"),o("code",[e._v("u")]),e._v("n"),o("code"),e._v("m"),o("code",[e._v("u")]),e._v("l"),o("code",[e._v("t")]),e._v("i"),o("code",[e._v("p")]),e._v("l"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("c")]),e._v("o"),o("code",[e._v("p")]),e._v("i"),o("code",[e._v("e")]),e._v("s"),o("code"),e._v("o"),o("code",[e._v("f")]),e._v(" "),o("code",[e._v("t")]),e._v("h"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("m")]),e._v("o"),o("code",[e._v("d")]),e._v("e"),o("code",[e._v("l")]),e._v(" "),o("code",[e._v("o")]),e._v("n"),o("code"),e._v("d"),o("code",[e._v("i")]),e._v("f"),o("code",[e._v("f")]),e._v("e"),o("code",[e._v("r")]),e._v("e"),o("code",[e._v("n")]),e._v("t"),o("code"),e._v("s"),o("code",[e._v("l")]),e._v("i"),o("code",[e._v("c")]),e._v("e"),o("code",[e._v("s")]),e._v(" "),o("code",[e._v("o")]),e._v("f"),o("code"),e._v("t"),o("code",[e._v("h")]),e._v("e"),o("code"),e._v("i"),o("code",[e._v("n")]),e._v("p"),o("code",[e._v("u")]),e._v("t"),o("code"),e._v("d"),o("code",[e._v("a")]),e._v("t"),o("code",[e._v("a")]),e._v("."),o("code"),e._v("T"),o("code",[e._v("h")]),e._v("i"),o("code",[e._v("s")]),e._v(" "),o("code",[e._v("i")]),e._v("s"),o("code"),e._v("i"),o("code",[e._v("n")]),e._v(" "),o("code",[e._v("c")]),e._v("o"),o("code",[e._v("n")]),e._v("t"),o("code",[e._v("r")]),e._v("a"),o("code",[e._v("s")]),e._v("t"),o("code"),e._v("t"),o("code",[e._v("o")]),e._v(" "),o("code",[e._v("m")]),e._v("o"),o("code",[e._v("d")]),e._v("e"),o("code",[e._v("l")]),e._v(" "),o("code",[e._v("p")]),e._v("a"),o("code",[e._v("r")]),e._v("a"),o("code",[e._v("l")]),e._v("l"),o("code",[e._v("e")]),e._v("l"),o("code",[e._v("i")]),e._v("s"),o("code",[e._v("m")]),e._v(" "),o("code",[e._v("w")]),e._v("h"),o("code",[e._v("e")]),e._v("r"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("w")]),e._v("e"),o("code"),e._v("d"),o("code",[e._v("i")]),e._v("v"),o("code",[e._v("i")]),e._v("d"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("u")]),e._v("p"),o("code"),e._v("a"),o("code"),e._v("s"),o("code",[e._v("i")]),e._v("n"),o("code",[e._v("g")]),e._v("l"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("c")]),e._v("o"),o("code",[e._v("p")]),e._v("y"),o("code"),e._v("o"),o("code",[e._v("f")]),e._v(" "),o("code",[e._v("a")]),e._v(" "),o("code",[e._v("m")]),e._v("o"),o("code",[e._v("d")]),e._v("e"),o("code",[e._v("l")]),e._v(" "),o("code",[e._v("a")]),e._v("c"),o("code",[e._v("r")]),e._v("o"),o("code",[e._v("s")]),e._v("s"),o("code"),e._v("m"),o("code",[e._v("u")]),e._v("l"),o("code",[e._v("t")]),e._v("i"),o("code",[e._v("p")]),e._v("l"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("d")]),e._v("e"),o("code",[e._v("v")]),e._v("i"),o("code",[e._v("c")]),e._v("e"),o("code",[e._v("s")]),e._v("."),o("code"),e._v("N"),o("code",[e._v("o")]),e._v("t"),o("code",[e._v("e")]),e._v(":"),o("code"),e._v("w"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("o")]),e._v("n"),o("code",[e._v("l")]),e._v("y"),o("code"),e._v("s"),o("code",[e._v("u")]),e._v("p"),o("code",[e._v("p")]),e._v("o"),o("code",[e._v("r")]),e._v("t"),o("code"),e._v("d"),o("code",[e._v("a")]),e._v("t"),o("code",[e._v("a")]),e._v(" "),o("code",[e._v("p")]),e._v("a"),o("code",[e._v("r")]),e._v("a"),o("code",[e._v("l")]),e._v("l"),o("code",[e._v("e")]),e._v("l"),o("code",[e._v("i")]),e._v("s"),o("code",[e._v("m")]),e._v(" "),o("code",[e._v("f")]),e._v("o"),o("code",[e._v("r")]),e._v(" "),o("code",[e._v("n")]),e._v("o"),o("code",[e._v("w")]),e._v(","),o("code"),e._v("b"),o("code",[e._v("u")]),e._v("t"),o("code"),e._v("h"),o("code",[e._v("o")]),e._v("p"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("t")]),e._v("o"),o("code"),e._v("a"),o("code",[e._v("d")]),e._v("d"),o("code"),e._v("s"),o("code",[e._v("u")]),e._v("p"),o("code",[e._v("p")]),e._v("o"),o("code",[e._v("r")]),e._v("t"),o("code"),e._v("f"),o("code",[e._v("o")]),e._v("r"),o("code"),e._v("m"),o("code",[e._v("o")]),e._v("d"),o("code",[e._v("e")]),e._v("l"),o("code"),e._v("p"),o("code",[e._v("a")]),e._v("r"),o("code",[e._v("a")]),e._v("l"),o("code",[e._v("l")]),e._v("e"),o("code",[e._v("l")]),e._v("i"),o("code",[e._v("s")]),e._v("m"),o("code"),e._v("i"),o("code",[e._v("n")]),e._v(" "),o("code",[e._v("t")]),e._v("h"),o("code",[e._v("e")]),e._v(" "),o("code",[e._v("f")]),e._v("u"),o("code",[e._v("t")]),e._v("u"),o("code",[e._v("r")]),e._v("e"),o("code",[e._v(".")])]),e._v(" "),o("li",[e._v("A device is a CPU or accelerator (e.g. GPUs, TPUs) on some machine that TensorFlow can run operations on (see e.g. "),o("code",[e._v("tf.device")]),e._v("). You may have multiple devices on a single machine, or be connected to devices on multiple machines. Devices used to run computations are called worker devices. Devices used to store variables are parameter devices. For some strategies, such as "),o("code",[e._v("tf.distribute.MirroredStrategy")]),e._v(", the worker and parameter devices will be the same (see mirrored variables below). For others they will be different. For example, "),o("code",[e._v("tf.distribute.experimental.CentralStorageStrategy")]),e._v(" puts the variables on a single device (which may be a worker device or may be the CPU), and "),o("code",[e._v("tf.distribute.experimental.ParameterServerStrategy")]),e._v(" puts the variables on separate machines called parameter servers (see below).")]),e._v(" "),o("li",[e._v("A replica is one copy of the model, running on one slice of the input data. Right now each replica is executed on its own worker device, but once we add support for model parallelism a replica may span multiple worker devices.")]),e._v(" "),o("li",[e._v("A host is the CPU device on a machine with worker devices, typically used for running input pipelines.")]),e._v(" "),o("li",[e._v("A worker is defined to be the physical machine(s) containing the physical devices (e.g. GPUs, TPUs) on which the replicated computation is executed. A worker may contain one or more replicas, but contains at least one replica. Typically one worker will correspond to one machine, but in the case of very large models with model parallelism, one worker may span multiple machines. We typically run one input pipeline per worker, feeding all the replicas on that worker.")]),e._v(" "),o("li",[e._v("Synchronous, or more commonly sync, training is where the updates from each replica are aggregated together before updating the model variables. This is in contrast to asynchronous, or async training, where each replica updates the model variables independently. You may also have replicas partitioned into groups which are in sync within each group but async between groups.")]),e._v(" "),o("li",[e._v("Parameter servers: These are machines that hold a single copy of parameters/variables, used by some strategies (right now just "),o("code",[e._v("tf.distribute.experimental.ParameterServerStrategy")]),e._v("). All replicas that want to operate on a variable retrieve it at the beginning of a step and send an update to be applied at the end of the step. These can in priniciple support either sync or async training, but right now we only have support for async training with parameter servers. Compare to "),o("code",[e._v("tf.distribute.experimental.CentralStorageStrategy")]),e._v(", which puts all variables on a single device on the same machine (and does sync training), and "),o("code",[e._v("tf.distribute.MirroredStrategy")]),e._v(", which mirrors variables to multiple devices (see below).")]),e._v(" "),o("li",[e._v("Mirrored variables: These are variables that are copied to multiple devices, where we keep the copies in sync by applying the same updates to every copy. Normally would only be used with sync training.")]),e._v(" "),o("li",[e._v('Reductions and all-reduce: A reduction is some method of aggregating multiple values into one value, like "sum" or "mean". If a strategy is doing sync training, we will perform a reduction on the gradients to a parameter from all replicas before applying the update. All-reduce is an algorithm for performing a reduction on values from multiple devices and making the result available on all of those devices.\n'),o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.Strategy"),o("OutboundLink")],1),e._v("Note that we provide a default version of  that is used when no other strategy is in scope, that provides the same API with reasonable default behavior.")])]),e._v(" "),o("h2",{attrs:{id:"modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver",target:"_blank",rel:"noopener noreferrer"}},[e._v("cluster_resolver"),o("OutboundLink")],1),e._v(" module: Library imports for ClusterResolvers.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/experimental",target:"_blank",rel:"noopener noreferrer"}},[e._v("experimental"),o("OutboundLink")],1),e._v(" module: Experimental Distribution Strategy library.")]),e._v(" "),o("h2",{attrs:{id:"classes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#classes","aria-hidden":"true"}},[e._v("#")]),e._v(" Classes")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/CrossDeviceOps",target:"_blank",rel:"noopener noreferrer"}},[e._v("class CrossDeviceOps"),o("OutboundLink")],1),e._v(": Base class for cross-device reduction and broadcasting algorithms.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/HierarchicalCopyAllReduce",target:"_blank",rel:"noopener noreferrer"}},[e._v("class HierarchicalCopyAllReduce"),o("OutboundLink")],1),e._v(": Reduction using hierarchical copy all-reduce.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/InputContext",target:"_blank",rel:"noopener noreferrer"}},[e._v("class InputContext"),o("OutboundLink")],1),e._v(": A class wrapping information needed by an input function.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/InputReplicationMode",target:"_blank",rel:"noopener noreferrer"}},[e._v("class InputReplicationMode"),o("OutboundLink")],1),e._v(": Replication mode for input function.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/MirroredStrategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("class MirroredStrategy"),o("OutboundLink")],1),e._v(": Mirrors vars to distribute across multiple devices and machines.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/NcclAllReduce",target:"_blank",rel:"noopener noreferrer"}},[e._v("class NcclAllReduce"),o("OutboundLink")],1),e._v(": Reduction using NCCL all-reduce.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/OneDeviceStrategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("class OneDeviceStrategy"),o("OutboundLink")],1),e._v(": A distribution strategy for running on a single device.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/ReduceOp",target:"_blank",rel:"noopener noreferrer"}},[e._v("class ReduceOp"),o("OutboundLink")],1),e._v(": Indicates how a set of values should be reduced.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/ReductionToOneDevice",target:"_blank",rel:"noopener noreferrer"}},[e._v("class ReductionToOneDevice"),o("OutboundLink")],1),e._v(": Always do reduction to one device first and then do broadcasting.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/ReplicaContext",target:"_blank",rel:"noopener noreferrer"}},[e._v("class ReplicaContext"),o("OutboundLink")],1),e._v(": tf.distribute.Strategy API when in a replica context.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Server",target:"_blank",rel:"noopener noreferrer"}},[e._v("class Server"),o("OutboundLink")],1),e._v(": An in-process TensorFlow server, for use in distributed training.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("class Strategy"),o("OutboundLink")],1),e._v(": A state & compute distribution policy on a list of devices.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/StrategyExtended",target:"_blank",rel:"noopener noreferrer"}},[e._v("class StrategyExtended"),o("OutboundLink")],1),e._v(": Additional APIs for algorithms that need to be distribution-aware.")]),e._v(" "),o("h2",{attrs:{id:"functions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/experimental_set_strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("experimental_set_strategy(...)"),o("OutboundLink")],1),e._v(": Set a tf.distribute.Strategy as current without with strategy.scope().")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/get_replica_context",target:"_blank",rel:"noopener noreferrer"}},[e._v("get_replica_context(...)"),o("OutboundLink")],1),e._v(": Returns the current tf.distribute.ReplicaContext or None.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/get_strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("get_strategy(...)"),o("OutboundLink")],1),e._v(": Returns the current tf.distribute.Strategy object.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/has_strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("has_strategy(...)"),o("OutboundLink")],1),e._v(": Return if there is a current non-default tf.distribute.Strategy.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/in_cross_replica_context",target:"_blank",rel:"noopener noreferrer"}},[e._v("in_cross_replica_context(...)"),o("OutboundLink")],1),e._v(": Returns True if in a cross-replica context.")])])}),[],!1,null,null,null);t.default=a.exports}}]);