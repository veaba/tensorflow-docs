Bring in all of the public TensorFlow interface into this module.
## Modules
`audio` module: Public API for tf.`audio` namespace.
`autograph` module: Conversion of plain Python into TensorFlow graph code.
`bitwise` module: Operations for manipulating the binary representations of integers.
`compat` module: Functions for Python 2 vs. 3 `compat`ibility.
`config` module: Public API for tf.`config` namespace.
`data` module: `tf.data.Dataset` API for input pipelines.
`debugging` module: Public API for tf.`debugging` namespace.
`distribute` module: Library for running a computation across multiple devices.
`dtypes` module: Public API for tf.`dtypes` namespace.
`errors` module: Exception types for TensorFlow `errors`.
`estimator` module: Estimator: High level tools for working with models.
`experimental` module: Public API for tf.`experimental` namespace.
`feature_column` module: Public API for tf.`feature_column` namespace.
`graph_util` module: Helpers to manipulate a tensor graph in python.
`image` module: Image processing and decoding ops.
`initializers` module: Keras initializer serialization / deserialization.
`io` module: Public API for tf.`io` namespace.
`keras` module: Implementation of the Keras API meant to be a high-level API for TensorFlow.
`linalg` module: Operations for linear algebra.
`lite` module: Public API for tf.`lite` namespace.
`lookup` module: Public API for tf.`lookup` namespace.
`losses` module: Built-in loss functions.
`math` module: Math Operations.
`metrics` module: Built-in `metrics`.
`nest` module: Public API for tf.`nest` namespace.
`nn` module: Wrappers for primitive Neural Net (NN) Operations.
`optimizers` module: Built-in optimizer classes.
`quantization` module: Public API for tf.`quantization` namespace.
`queue` module: Public API for tf.`queue` namespace.
`ragged` module: Ragged Tensors.
`random` module: Public API for tf.`random` namespace.
`raw_ops` module: Public API for tf.`raw_ops` namespace.
`saved_model` module: Public API for tf.`saved_model` namespace.
`sets` module: Tensorflow set operations.
`signal` module: Signal processing operations.
`sparse` module: Sparse Tensor Representation.
`strings` module: Operations for working with string Tensors.
`summary` module: Operations for writing `summary` data, for use in analysis and visualization.
`sysconfig` module: System configuration library.
`test` module: Testing.
`tpu` module: Ops related to Tensor Processing Units.
`train` module: Support for `train`ing models.
`version` module: Public API for tf.`version` namespace.
`xla` module: Public API for tf.`xla` namespace.
## Classes
`class AggregationMethod`: A class listing aggregation methods used to combine gradients.
`class CriticalSection`: Critical section.
`class DType`: Represents the type of the elements in a `Tensor`.
`class DeviceSpec`: Represents a (possibly partial) specification for a TensorFlow device.
`class GradientTape`: Record operations for automatic differentiation.
`class Graph`: A TensorFlow computation, represented as a dataflow graph.
`class IndexedSlices`: A sparse representation of a set of tensor slices at given indices.
`class IndexedSlicesSpec`: Type specification for a `tf.IndexedSlices`.
`class Module`: Base neural network module class.
`class Operation`: Represents a graph node that performs computation on tensors.
`class OptionalSpec`: Represents an optional potentially containing a structured value.
`class RaggedTensor`: Represents a ragged tensor.
`class RaggedTensorSpec`: Type specification for a `tf.RaggedTensor`.
`class RegisterGradient`: A decorator for registering the gradient function for an op type.
`class SparseTensor`: Represents a sparse tensor.
`class SparseTensorSpec`: Type specification for a `tf.SparseTensor`.
`class Tensor`: Represents one of the outputs of an `Operation`.
`class TensorArray`: Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays.
`class TensorArraySpec`: Type specification for a `tf.TensorArray`.
`class TensorShape`: Represents the shape of a `Tensor`.
`class TensorSpec`: Describes a tf.Tensor.
`class TypeSpec`: Specifies a TensorFlow value type.
`class UnconnectedGradients`: Controls how gradient computation behaves when y does not depend on x.
`class Variable`: See the Variables Guide.
`class VariableAggregation`: Indicates how a distributed variable will be aggregated.
`class VariableSynchronization`: Indicates when a distributed variable will be synced.
`class constant_initializer`: Initializer that generates tensors with constant values.
`class name_scope`: A context manager for use when defining a Python op.
`class ones_initializer`: Initializer that generates tensors initialized to 1.
`class random_normal_initializer`: Initializer that generates tensors with a normal distribution.
`class random_uniform_initializer`: Initializer that generates tensors with a uniform distribution.
`class zeros_initializer`: Initializer that generates tensors initialized to 0.
## Functions
