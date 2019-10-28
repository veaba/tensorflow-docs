Bring in all of the public TensorFlow interface into this module.
## Modules
`app` module: Generic entry point script.
`audio` module: Public API for tf.`audio` namespace.
`autograph` module: Conversion of plain Python into TensorFlow graph code.
`bitwise` module: Operations for manipulating the binary representations of integers.
`compat` module: Functions for Python 2 vs. 3 `compat`ibility.
`config` module: Public API for tf.`config` namespace.
`data` module: `tf.data.Dataset` API for input pipelines.
`debugging` module: Public API for tf.`debugging` namespace.
`distribute` module: Library for running a computation across multiple devices.
`distributions` module: Core module for TensorFlow distribution objects and helpers.
`dtypes` module: Public API for tf.`dtypes` namespace.
`errors` module: Exception types for TensorFlow `errors`.
`estimator` module: Estimator: High level tools for working with models.
`experimental` module: Public API for tf.`experimental` namespace.
`feature_column` module: Public API for tf.`feature_column` namespace.
`flags` module: Import router for absl.`flags`. See https://github.com/abseil/abseil-py.
`gfile` module: Import router for file_io.
`graph_util` module: Helpers to manipulate a tensor graph in python.
`image` module: Image processing and decoding ops.
`initializers` module: Public API for tf.`initializers` namespace.
`io` module: Public API for tf.`io` namespace.
`keras` module: Implementation of the Keras API meant to be a high-level API for TensorFlow.
`layers` module: Public API for tf.`layers` namespace.
`linalg` module: Operations for linear algebra.
`lite` module: Public API for tf.`lite` namespace.
`logging` module: Logging and Summary Operations.
`lookup` module: Public API for tf.`lookup` namespace.
`losses` module: Loss operations for use in neural networks.
`manip` module: Operators for `manip`ulating tensors.
`math` module: Math Operations.
`metrics` module: Evaluation-related `metrics`.
`nest` module: Public API for tf.`nest` namespace.
`nn` module: Wrappers for primitive Neural Net (NN) Operations.
`profiler` module: Public API for tf.`profiler` namespace.
`python_io` module: Python functions for directly manipulating TFRecord-formatted files.
`quantization` module: Public API for tf.`quantization` namespace.
`queue` module: Public API for tf.`queue` namespace.
`ragged` module: Ragged Tensors.
`random` module: Public API for tf.`random` namespace.
`raw_ops` module: Public API for tf.`raw_ops` namespace.
`resource_loader` module: Resource management library.
`saved_model` module: Public API for tf.`saved_model` namespace.
`sets` module: Tensorflow set operations.
`signal` module: Signal processing operations.
`sparse` module: Sparse Tensor Representation.
`spectral` module: Public API for tf.`spectral` namespace.
`strings` module: Operations for working with string Tensors.
`summary` module: Operations for writing `summary` data, for use in analysis and visualization.
`sysconfig` module: System configuration library.
`test` module: Testing.
`tpu` module: Ops related to Tensor Processing Units.
`train` module: Support for `train`ing models.
`user_ops` module: Public API for tf.`user_ops` namespace.
`version` module: Public API for tf.`version` namespace.
`xla` module: Public API for tf.`xla` namespace.
## Classes
`class AggregationMethod`: A class listing aggregation methods used to combine gradients.
`class AttrValue`: A ProtocolMessage
`class ConditionalAccumulator`: A conditional accumulator for aggregating gradients.
`class ConditionalAccumulatorBase`: A conditional accumulator for aggregating gradients.
`class ConfigProto`: A ProtocolMessage
`class CriticalSection`: Critical section.
`class DType`: Represents the type of the elements in a `Tensor`.
`class DeviceSpec`: Represents a (possibly partial) specification for a TensorFlow device.
`class Dimension`: Represents the value of one dimension in a TensorShape.
`class Event`: A ProtocolMessage
`class FIFOQueue`: A queue implementation that dequeues elements in first-in first-out order.
`class FixedLenFeature`: Configuration for parsing a fixed-length input feature.
`class FixedLenSequenceFeature`: Configuration for parsing a variable-length input feature into a `Tensor`.
`class FixedLengthRecordReader`: A Reader that outputs fixed-length records from a file.
`class GPUOptions`: A ProtocolMessage
`class GradientTape`: Record operations for automatic differentiation.
`class Graph`: A TensorFlow computation, represented as a dataflow graph.
`class GraphDef`: A ProtocolMessage
`class GraphKeys`: Standard names to use for graph collections.
`class GraphOptions`: A ProtocolMessage
`class HistogramProto`: A ProtocolMessage
`class IdentityReader`: A Reader that outputs the queued work as both the key and value.
`class IndexedSlices`: A sparse representation of a set of tensor slices at given indices.
`class IndexedSlicesSpec`: Type specification for a `tf.IndexedSlices`.
`class InteractiveSession`: A TensorFlow `Session` for use in interactive contexts, such as a shell.
`class LMDBReader`: A Reader that outputs the records from a LMDB file.
`class LogMessage`: A ProtocolMessage
`class MetaGraphDef`: A ProtocolMessage
`class Module`: Base neural network module class.
`class NameAttrList`: A ProtocolMessage
`class NodeDef`: A ProtocolMessage
`class OpError`: A generic error that is raised when TensorFlow execution fails.
`class Operation`: Represents a graph node that performs computation on tensors.
`class OptimizerOptions`: A ProtocolMessage
`class OptionalSpec`: Represents an optional potentially containing a structured value.
`class PaddingFIFOQueue`: A FIFOQueue that supports batching variable-sized tensors by padding.
`class PriorityQueue`: A queue implementation that dequeues elements in prioritized order.
`class QueueBase`: Base class for queue implementations.
`class RaggedTensor`: Represents a ragged tensor.
`class RaggedTensorSpec`: Type specification for a `tf.RaggedTensor`.
`class RandomShuffleQueue`: A queue implementation that dequeues elements in a random order.
`class ReaderBase`: Base class for different Reader types, that produce a record every step.
`class RegisterGradient`: A decorator for registering the gradient function for an op type.
`class RunMetadata`: A ProtocolMessage
`class RunOptions`: A ProtocolMessage
`class Session`: A class for running TensorFlow operations.
`class SessionLog`: A ProtocolMessage
`class SparseConditionalAccumulator`: A conditional accumulator for aggregating sparse gradients.
`class SparseFeature`: Configuration for parsing a sparse input feature from an `Example`.
`class SparseTensor`: Represents a sparse tensor.
`class SparseTensorSpec`: Type specification for a `tf.SparseTensor`.
`class SparseTensorValue`: SparseTensorValue(indices, values, dense_shape)
`class Summary`: A ProtocolMessage
`class SummaryMetadata`: A ProtocolMessage
`class TFRecordReader`: A Reader that outputs the records from a TFRecords file.
`class Tensor`: Represents one of the outputs of an `Operation`.
`class TensorArray`: Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays.
`class TensorArraySpec`: Type specification for a `tf.TensorArray`.
`class TensorInfo`: A ProtocolMessage
`class TensorShape`: Represents the shape of a `Tensor`.
`class TensorSpec`: Describes a tf.Tensor.
`class TextLineReader`: A Reader that outputs the lines of a file delimited by newlines.
`class TypeSpec`: Specifies a TensorFlow value type.
`class UnconnectedGradients`: Controls how gradient computation behaves when y does not depend on x.
`class VarLenFeature`: Configuration for parsing a variable-length input feature.
`class Variable`: See the Variables Guide.
`class VariableAggregation`: Indicates how a distributed variable will be aggregated.
`class VariableScope`: Variable scope object to carry defaults to provide to `get_variable`.
`class VariableSynchronization`: Indicates when a distributed variable will be synced.
`class WholeFileReader`: A Reader that outputs the entire contents of a file as a value.
`class constant_initializer`: Initializer that generates tensors with constant values.
`class glorot_normal_initializer`: The Glorot normal initializer, also called Xavier normal initializer.
`class glorot_uniform_initializer`: The Glorot uniform initializer, also called Xavier uniform initializer.
`class name_scope`: A context manager for use when defining a Python op.
`class ones_initializer`: Initializer that generates tensors initialized to 1.
`class orthogonal_initializer`: Initializer that generates an orthogonal matrix.
`class random_normal_initializer`: Initializer that generates tensors with a normal distribution.
`class random_uniform_initializer`: Initializer that generates tensors with a uniform distribution.
`class truncated_normal_initializer`: Initializer that generates a truncated normal distribution.
`class uniform_unit_scaling_initializer`: Initializer that generates tensors without scaling variance.
`class variable_scope`: A context manager for defining ops that creates variables (layers).
`class variance_scaling_initializer`: Initializer capable of adapting its scale to the shape of weights tensors.
`class zeros_initializer`: Initializer that generates tensors initialized to 0.
## Functions
