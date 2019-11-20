[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf)  
---  
  
## TensorFlow

    
    
    pip install tensorflow  
    

## Modules

[`audio`](https://tensorflow.google.cn/api_docs/python/tf/audio) module:
Public API for tf.audio namespace.

[`autograph`](https://tensorflow.google.cn/api_docs/python/tf/autograph)
module: Conversion of plain Python into TensorFlow graph code.

[`bitwise`](https://tensorflow.google.cn/api_docs/python/tf/bitwise) module:
Operations for manipulating the binary representations of integers.

[`compat`](https://tensorflow.google.cn/api_docs/python/tf/compat) module:
Functions for Python 2 vs. 3 compatibility.

[`config`](https://tensorflow.google.cn/api_docs/python/tf/config) module:
Public API for tf.config namespace.

[`data`](https://tensorflow.google.cn/api_docs/python/tf/data) module:
[`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)
API for input pipelines.

[`debugging`](https://tensorflow.google.cn/api_docs/python/tf/debugging)
module: Public API for tf.debugging namespace.

[`distribute`](https://tensorflow.google.cn/api_docs/python/tf/distribute)
module: Library for running a computation across multiple devices.

[`dtypes`](https://tensorflow.google.cn/api_docs/python/tf/dtypes) module:
Public API for tf.dtypes namespace.

[`errors`](https://tensorflow.google.cn/api_docs/python/tf/errors) module:
Exception types for TensorFlow errors.

[`estimator`](https://tensorflow.google.cn/api_docs/python/tf/estimator)
module: Estimator: High level tools for working with models.

[`experimental`](https://tensorflow.google.cn/api_docs/python/tf/experimental)
module: Public API for tf.experimental namespace.

[`feature_column`](https://tensorflow.google.cn/api_docs/python/tf/feature_column)
module: Public API for tf.feature_column namespace.

[`graph_util`](https://tensorflow.google.cn/api_docs/python/tf/graph_util)
module: Helpers to manipulate a tensor graph in python.

[`image`](https://tensorflow.google.cn/api_docs/python/tf/image) module: Image
processing and decoding ops.

[`initializers`](https://tensorflow.google.cn/api_docs/python/tf/initializers)
module: Keras initializer serialization / deserialization.

[`io`](https://tensorflow.google.cn/api_docs/python/tf/io) module: Public API
for tf.io namespace.

[`keras`](https://tensorflow.google.cn/api_docs/python/tf/keras) module:
Implementation of the Keras API meant to be a high-level API for TensorFlow.

[`linalg`](https://tensorflow.google.cn/api_docs/python/tf/linalg) module:
Operations for linear algebra.

[`lite`](https://tensorflow.google.cn/api_docs/python/tf/lite) module: Public
API for tf.lite namespace.

[`lookup`](https://tensorflow.google.cn/api_docs/python/tf/lookup) module:
Public API for tf.lookup namespace.

[`losses`](https://tensorflow.google.cn/api_docs/python/tf/losses) module:
Built-in loss functions.

[`math`](https://tensorflow.google.cn/api_docs/python/tf/math) module: Math
Operations.

[`metrics`](https://tensorflow.google.cn/api_docs/python/tf/metrics) module:
Built-in metrics.

[`nest`](https://tensorflow.google.cn/api_docs/python/tf/nest) module: Public
API for tf.nest namespace.

[`nn`](https://tensorflow.google.cn/api_docs/python/tf/nn) module: Wrappers
for primitive Neural Net (NN) Operations.

[`optimizers`](https://tensorflow.google.cn/api_docs/python/tf/optimizers)
module: Built-in optimizer classes.

[`quantization`](https://tensorflow.google.cn/api_docs/python/tf/quantization)
module: Public API for tf.quantization namespace.

[`queue`](https://tensorflow.google.cn/api_docs/python/tf/queue) module:
Public API for tf.queue namespace.

[`ragged`](https://tensorflow.google.cn/api_docs/python/tf/ragged) module:
Ragged Tensors.

[`random`](https://tensorflow.google.cn/api_docs/python/tf/random) module:
Public API for tf.random namespace.

[`raw_ops`](https://tensorflow.google.cn/api_docs/python/tf/raw_ops) module:
Public API for tf.raw_ops namespace.

[`saved_model`](https://tensorflow.google.cn/api_docs/python/tf/saved_model)
module: Public API for tf.saved_model namespace.

[`sets`](https://tensorflow.google.cn/api_docs/python/tf/sets) module:
Tensorflow set operations.

[`signal`](https://tensorflow.google.cn/api_docs/python/tf/signal) module:
Signal processing operations.

[`sparse`](https://tensorflow.google.cn/api_docs/python/tf/sparse) module:
Sparse Tensor Representation.

[`strings`](https://tensorflow.google.cn/api_docs/python/tf/strings) module:
Operations for working with string Tensors.

[`summary`](https://tensorflow.google.cn/api_docs/python/tf/summary) module:
Operations for writing summary data, for use in analysis and visualization.

[`sysconfig`](https://tensorflow.google.cn/api_docs/python/tf/sysconfig)
module: System configuration library.

[`test`](https://tensorflow.google.cn/api_docs/python/tf/test) module:
Testing.

[`tpu`](https://tensorflow.google.cn/api_docs/python/tf/tpu) module: Ops
related to Tensor Processing Units.

[`train`](https://tensorflow.google.cn/api_docs/python/tf/train) module:
Support for training models.

[`version`](https://tensorflow.google.cn/api_docs/python/tf/version) module:
Public API for tf.version namespace.

[`xla`](https://tensorflow.google.cn/api_docs/python/tf/xla) module: Public
API for tf.xla namespace.

## Classes

[`class
AggregationMethod`](https://tensorflow.google.cn/api_docs/python/tf/AggregationMethod):
A class listing aggregation methods used to combine gradients.

[`class
CriticalSection`](https://tensorflow.google.cn/api_docs/python/tf/CriticalSection):
Critical section.

[`class DType`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType):
Represents the type of the elements in a `Tensor`.

[`class
DeviceSpec`](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec):
Represents a (possibly partial) specification for a TensorFlow device.

[`class
GradientTape`](https://tensorflow.google.cn/api_docs/python/tf/GradientTape):
Record operations for automatic differentiation.

[`class Graph`](https://tensorflow.google.cn/api_docs/python/tf/Graph): A
TensorFlow computation, represented as a dataflow graph.

[`class
IndexedSlices`](https://tensorflow.google.cn/api_docs/python/tf/IndexedSlices):
A sparse representation of a set of tensor slices at given indices.

[`class
IndexedSlicesSpec`](https://tensorflow.google.cn/api_docs/python/tf/IndexedSlicesSpec):
Type specification for a
[`tf.IndexedSlices`](https://tensorflow.google.cn/api_docs/python/tf/IndexedSlices).

[`class Module`](https://tensorflow.google.cn/api_docs/python/tf/Module): Base
neural network module class.

[`class
Operation`](https://tensorflow.google.cn/api_docs/python/tf/Operation):
Represents a graph node that performs computation on tensors.

[`class
OptionalSpec`](https://tensorflow.google.cn/api_docs/python/tf/OptionalSpec):
Represents an optional potentially containing a structured value.

[`class
RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor):
Represents a ragged tensor.

[`class
RaggedTensorSpec`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensorSpec):
Type specification for a
[`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor).

[`class
RegisterGradient`](https://tensorflow.google.cn/api_docs/python/tf/RegisterGradient):
A decorator for registering the gradient function for an op type.

[`class
SparseTensor`](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor):
Represents a sparse tensor.

[`class
SparseTensorSpec`](https://tensorflow.google.cn/api_docs/python/tf/SparseTensorSpec):
Type specification for a
[`tf.SparseTensor`](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).

[`class Tensor`](https://tensorflow.google.cn/api_docs/python/tf/Tensor):
Represents one of the outputs of an `Operation`.

[`class
TensorArray`](https://tensorflow.google.cn/api_docs/python/tf/TensorArray):
Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays.

[`class
TensorArraySpec`](https://tensorflow.google.cn/api_docs/python/tf/TensorArraySpec):
Type specification for a
[`tf.TensorArray`](https://tensorflow.google.cn/api_docs/python/tf/TensorArray).

[`class
TensorShape`](https://tensorflow.google.cn/api_docs/python/tf/TensorShape):
Represents the shape of a `Tensor`.

[`class
TensorSpec`](https://tensorflow.google.cn/api_docs/python/tf/TensorSpec):
Describes a tf.Tensor.

[`class TypeSpec`](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec):
Specifies a TensorFlow value type.

[`class
UnconnectedGradients`](https://tensorflow.google.cn/api_docs/python/tf/UnconnectedGradients):
Controls how gradient computation behaves when y does not depend on x.

[`class Variable`](https://tensorflow.google.cn/api_docs/python/tf/Variable):
See the [Variables Guide](https://tensorflow.org/guide/variables).

[`class
VariableAggregation`](https://tensorflow.google.cn/api_docs/python/tf/VariableAggregation):
Indicates how a distributed variable will be aggregated.

[`class
VariableSynchronization`](https://tensorflow.google.cn/api_docs/python/tf/VariableSynchronization):
Indicates when a distributed variable will be synced.

[`class
constant_initializer`](https://tensorflow.google.cn/api_docs/python/tf/constant_initializer):
Initializer that generates tensors with constant values.

[`class
name_scope`](https://tensorflow.google.cn/api_docs/python/tf/name_scope): A
context manager for use when defining a Python op.

[`class
ones_initializer`](https://tensorflow.google.cn/api_docs/python/tf/ones_initializer):
Initializer that generates tensors initialized to 1.

[`class
random_normal_initializer`](https://tensorflow.google.cn/api_docs/python/tf/random_normal_initializer):
Initializer that generates tensors with a normal distribution.

[`class
random_uniform_initializer`](https://tensorflow.google.cn/api_docs/python/tf/random_uniform_initializer):
Initializer that generates tensors with a uniform distribution.

[`class
zeros_initializer`](https://tensorflow.google.cn/api_docs/python/tf/zeros_initializer):
Initializer that generates tensors initialized to 0.

## Functions

[`Assert(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/Assert):
Asserts that the given condition is true.

[`abs(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/abs):
Computes the absolute value of a tensor.

[`acos(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/acos):
Computes acos of x element-wise.

[`acosh(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/acosh):
Computes inverse hyperbolic cosine of x element-wise.

[`add(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/add):
Returns x + y element-wise.

[`add_n(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/add_n):
Adds all input tensors element-wise.

[`argmax(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/argmax):
Returns the index with the largest value across axes of a tensor.

[`argmin(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/argmin):
Returns the index with the smallest value across axes of a tensor.

[`argsort(...)`](https://tensorflow.google.cn/api_docs/python/tf/argsort):
Returns the indices of a tensor that give its sorted order along an axis.

[`as_dtype(...)`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/as_dtype):
Converts the given `type_value` to a `DType`.

[`as_string(...)`](https://tensorflow.google.cn/api_docs/python/tf/strings/as_string):
Converts each entry in the given tensor to strings.

[`asin(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/asin):
Computes the trignometric inverse sine of x element-wise.

[`asinh(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/asinh):
Computes inverse hyperbolic sine of x element-wise.

[`assert_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_equal):
Assert the condition `x == y` holds element-wise.

[`assert_greater(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_greater):
Assert the condition `x > y` holds element-wise.

[`assert_less(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_less):
Assert the condition `x < y` holds element-wise.

[`assert_rank(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_rank):
Assert that `x` has rank equal to `rank`.

[`atan(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/atan):
Computes the trignometric inverse tangent of x element-wise.

[`atan2(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/atan2):
Computes arctangent of `y/x` element-wise, respecting signs of the arguments.

[`atanh(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/atanh):
Computes inverse hyperbolic tangent of x element-wise.

[`batch_to_space(...)`](https://tensorflow.google.cn/api_docs/python/tf/batch_to_space):
BatchToSpace for N-D tensors of type T.

[`bitcast(...)`](https://tensorflow.google.cn/api_docs/python/tf/bitcast):
Bitcasts a tensor from one type to another without copying data.

[`boolean_mask(...)`](https://tensorflow.google.cn/api_docs/python/tf/boolean_mask):
Apply boolean mask to tensor.

[`broadcast_dynamic_shape(...)`](https://tensorflow.google.cn/api_docs/python/tf/broadcast_dynamic_shape):
Computes the shape of a broadcast given symbolic shapes.

[`broadcast_static_shape(...)`](https://tensorflow.google.cn/api_docs/python/tf/broadcast_static_shape):
Computes the shape of a broadcast given known shapes.

[`broadcast_to(...)`](https://tensorflow.google.cn/api_docs/python/tf/broadcast_to):
Broadcast an array for a compatible shape.

[`case(...)`](https://tensorflow.google.cn/api_docs/python/tf/case): Create a
case operation.

[`cast(...)`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/cast):
Casts a tensor to a new type.

[`clip_by_global_norm(...)`](https://tensorflow.google.cn/api_docs/python/tf/clip_by_global_norm):
Clips values of multiple tensors by the ratio of the sum of their norms.

[`clip_by_norm(...)`](https://tensorflow.google.cn/api_docs/python/tf/clip_by_norm):
Clips tensor values to a maximum L2-norm.

[`clip_by_value(...)`](https://tensorflow.google.cn/api_docs/python/tf/clip_by_value):
Clips tensor values to a specified min and max.

[`complex(...)`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/complex):
Converts two real numbers to a complex number.

[`concat(...)`](https://tensorflow.google.cn/api_docs/python/tf/concat):
Concatenates tensors along one dimension.

[`cond(...)`](https://tensorflow.google.cn/api_docs/python/tf/cond): Return
`true_fn()` if the predicate `pred` is true else `false_fn()`.

[`constant(...)`](https://tensorflow.google.cn/api_docs/python/tf/constant):
Creates a constant tensor.

[`control_dependencies(...)`](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies):
Wrapper for
[`Graph.control_dependencies()`](https://tensorflow.google.cn/api_docs/python/tf/Graph#control_dependencies)
using the default graph.

[`convert_to_tensor(...)`](https://tensorflow.google.cn/api_docs/python/tf/convert_to_tensor):
Converts the given `value` to a `Tensor`.

[`cos(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/cos):
Computes cos of x element-wise.

[`cosh(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/cosh):
Computes hyperbolic cosine of x element-wise.

[`cumsum(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/cumsum):
Compute the cumulative sum of the tensor `x` along `axis`.

[`custom_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/custom_gradient):
Decorator to define a function with a custom gradient.

[`device(...)`](https://tensorflow.google.cn/api_docs/python/tf/device):
Specifies the device for ops created/executed in this context.

[`divide(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/divide):
Computes Python style division of `x` by `y`.

[`dynamic_partition(...)`](https://tensorflow.google.cn/api_docs/python/tf/dynamic_partition):
Partitions `data` into `num_partitions` tensors using indices from
`partitions`.

[`dynamic_stitch(...)`](https://tensorflow.google.cn/api_docs/python/tf/dynamic_stitch):
Interleave the values from the `data` tensors into a single tensor.

[`edit_distance(...)`](https://tensorflow.google.cn/api_docs/python/tf/edit_distance):
Computes the Levenshtein distance between sequences.

[`einsum(...)`](https://tensorflow.google.cn/api_docs/python/tf/einsum): A
generalized contraction between tensors of arbitrary dimension.

[`ensure_shape(...)`](https://tensorflow.google.cn/api_docs/python/tf/ensure_shape):
Updates the shape of a tensor and checks at runtime that the shape holds.

[`equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/equal):
Returns the truth value of (x == y) element-wise.

[`executing_eagerly(...)`](https://tensorflow.google.cn/api_docs/python/tf/executing_eagerly):
Returns True if the current thread has eager execution enabled.

[`exp(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/exp):
Computes exponential of x element-wise. \\(y = e^x\\).

[`expand_dims(...)`](https://tensorflow.google.cn/api_docs/python/tf/expand_dims):
Inserts a dimension of 1 into a tensor's shape.

[`extract_volume_patches(...)`](https://tensorflow.google.cn/api_docs/python/tf/extract_volume_patches):
Extract `patches` from `input` and put them in the "depth" output dimension.
3D extension of `extract_image_patches`.

[`eye(...)`](https://tensorflow.google.cn/api_docs/python/tf/eye): Construct
an identity matrix, or a batch of matrices.

[`fill(...)`](https://tensorflow.google.cn/api_docs/python/tf/fill): Creates a
tensor filled with a scalar value.

[`fingerprint(...)`](https://tensorflow.google.cn/api_docs/python/tf/fingerprint):
Generates fingerprint values.

[`floor(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/floor):
Returns element-wise largest integer not greater than x.

[`foldl(...)`](https://tensorflow.google.cn/api_docs/python/tf/foldl): foldl
on the list of tensors unpacked from `elems` on dimension 0.

[`foldr(...)`](https://tensorflow.google.cn/api_docs/python/tf/foldr): foldr
on the list of tensors unpacked from `elems` on dimension 0.

[`function(...)`](https://tensorflow.google.cn/api_docs/python/tf/function):
Creates a callable TensorFlow graph from a Python function.

[`gather(...)`](https://tensorflow.google.cn/api_docs/python/tf/gather):
Gather slices from params axis axis according to indices.

[`gather_nd(...)`](https://tensorflow.google.cn/api_docs/python/tf/gather_nd):
Gather slices from `params` into a Tensor with shape specified by `indices`.

[`get_logger(...)`](https://tensorflow.google.cn/api_docs/python/tf/get_logger):
Return TF logger instance.

[`get_static_value(...)`](https://tensorflow.google.cn/api_docs/python/tf/get_static_value):
Returns the constant value of the given tensor, if efficiently calculable.

[`grad_pass_through(...)`](https://tensorflow.google.cn/api_docs/python/tf/grad_pass_through):
Creates a grad-pass-through op with the forward behavior provided in f.

[`gradients(...)`](https://tensorflow.google.cn/api_docs/python/tf/gradients):
Constructs symbolic derivatives of sum of `ys` w.r.t. x in `xs`.

[`greater(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/greater):
Returns the truth value of (x > y) element-wise.

[`greater_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/greater_equal):
Returns the truth value of (x >= y) element-wise.

[`group(...)`](https://tensorflow.google.cn/api_docs/python/tf/group): Create
an op that groups multiple operations.

[`guarantee_const(...)`](https://tensorflow.google.cn/api_docs/python/tf/guarantee_const):
Gives a guarantee to the TF runtime that the input tensor is a constant.

[`hessians(...)`](https://tensorflow.google.cn/api_docs/python/tf/hessians):
Constructs the Hessian of sum of `ys` with respect to `x` in `xs`.

[`histogram_fixed_width(...)`](https://tensorflow.google.cn/api_docs/python/tf/histogram_fixed_width):
Return histogram of values.

[`histogram_fixed_width_bins(...)`](https://tensorflow.google.cn/api_docs/python/tf/histogram_fixed_width_bins):
Bins the given values for use in a histogram.

[`identity(...)`](https://tensorflow.google.cn/api_docs/python/tf/identity):
Return a tensor with the same shape and contents as input.

[`identity_n(...)`](https://tensorflow.google.cn/api_docs/python/tf/identity_n):
Returns a list of tensors with the same shapes and contents as the input

[`import_graph_def(...)`](https://tensorflow.google.cn/api_docs/python/tf/graph_util/import_graph_def):
Imports the graph from `graph_def` into the current default `Graph`.
(deprecated arguments)

[`init_scope(...)`](https://tensorflow.google.cn/api_docs/python/tf/init_scope):
A context manager that lifts ops out of control-flow scopes and function-
building graphs.

[`is_tensor(...)`](https://tensorflow.google.cn/api_docs/python/tf/is_tensor):
Checks whether `x` is a tensor or "tensor-like".

[`less(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/less):
Returns the truth value of (x < y) element-wise.

[`less_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/less_equal):
Returns the truth value of (x <= y) element-wise.

[`linspace(...)`](https://tensorflow.google.cn/api_docs/python/tf/linspace):
Generates values in an interval.

[`load_library(...)`](https://tensorflow.google.cn/api_docs/python/tf/load_library):
Loads a TensorFlow plugin.

[`load_op_library(...)`](https://tensorflow.google.cn/api_docs/python/tf/load_op_library):
Loads a TensorFlow plugin, containing custom ops and kernels.

[`logical_and(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_and):
Returns the truth value of x AND y element-wise.

[`logical_not(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_not):
Returns the truth value of NOT x element-wise.

[`logical_or(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_or):
Returns the truth value of x OR y element-wise.

[`make_ndarray(...)`](https://tensorflow.google.cn/api_docs/python/tf/make_ndarray):
Create a numpy ndarray from a tensor.

[`make_tensor_proto(...)`](https://tensorflow.google.cn/api_docs/python/tf/make_tensor_proto):
Create a TensorProto.

[`map_fn(...)`](https://tensorflow.google.cn/api_docs/python/tf/map_fn): map
on the list of tensors unpacked from `elems` on dimension 0.

[`matmul(...)`](https://tensorflow.google.cn/api_docs/python/tf/linalg/matmul):
Multiplies matrix `a` by matrix `b`, producing `a` * `b`.

[`matrix_square_root(...)`](https://tensorflow.google.cn/api_docs/python/tf/linalg/sqrtm):
Computes the matrix square root of one or more square matrices:

[`maximum(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/maximum):
Returns the max of x and y (i.e. x > y ? x : y) element-wise.

[`meshgrid(...)`](https://tensorflow.google.cn/api_docs/python/tf/meshgrid):
Broadcasts parameters for evaluation on an N-D grid.

[`minimum(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/minimum):
Returns the min of x and y (i.e. x < y ? x : y) element-wise.

[`multiply(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/multiply):
Returns x * y element-wise.

[`negative(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/negative):
Computes numerical negative value element-wise.

[`no_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/no_gradient):
Specifies that ops of type `op_type` is not differentiable.

[`no_op(...)`](https://tensorflow.google.cn/api_docs/python/tf/no_op): Does
nothing. Only useful as a placeholder for control edges.

[`nondifferentiable_batch_function(...)`](https://tensorflow.google.cn/api_docs/python/tf/nondifferentiable_batch_function):
Batches the computation done by the decorated function.

[`norm(...)`](https://tensorflow.google.cn/api_docs/python/tf/norm): Computes
the norm of vectors, matrices, and tensors.

[`not_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/not_equal):
Returns the truth value of (x != y) element-wise.

[`numpy_function(...)`](https://tensorflow.google.cn/api_docs/python/tf/numpy_function):
Wraps a python function and uses it as a TensorFlow op.

[`one_hot(...)`](https://tensorflow.google.cn/api_docs/python/tf/one_hot):
Returns a one-hot tensor.

[`ones(...)`](https://tensorflow.google.cn/api_docs/python/tf/ones): Creates a
tensor with all elements set to 1.

[`ones_like(...)`](https://tensorflow.google.cn/api_docs/python/tf/ones_like):
Creates a tensor with all elements set to one.

[`pad(...)`](https://tensorflow.google.cn/api_docs/python/tf/pad): Pads a
tensor.

[`parallel_stack(...)`](https://tensorflow.google.cn/api_docs/python/tf/parallel_stack):
Stacks a list of rank-`R` tensors into one rank-`(R+1)` tensor in parallel.

[`pow(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/pow):
Computes the power of one value to another.

[`print(...)`](https://tensorflow.google.cn/api_docs/python/tf/print): Print
the specified inputs.

[`py_function(...)`](https://tensorflow.google.cn/api_docs/python/tf/py_function):
Wraps a python function into a TensorFlow op that executes it eagerly.

[`range(...)`](https://tensorflow.google.cn/api_docs/python/tf/range): Creates
a sequence of numbers.

[`rank(...)`](https://tensorflow.google.cn/api_docs/python/tf/rank): Returns
the rank of a tensor.

[`realdiv(...)`](https://tensorflow.google.cn/api_docs/python/tf/realdiv):
Returns x / y element-wise for real types.

[`recompute_grad(...)`](https://tensorflow.google.cn/api_docs/python/tf/recompute_grad):
An eager-compatible version of recompute_grad.

[`reduce_all(...)`](https://tensorflow.google.cn/api_docs/python/tf/reduce_all):
Computes the "logical and" of elements across dimensions of a tensor.

[`reduce_any(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_any):
Computes the "logical or" of elements across dimensions of a tensor.

[`reduce_logsumexp(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_logsumexp):
Computes log(sum(exp(elements across dimensions of a tensor))).

[`reduce_max(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_max):
Computes the maximum of elements across dimensions of a tensor.

[`reduce_mean(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_mean):
Computes the mean of elements across dimensions of a tensor.

[`reduce_min(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_min):
Computes the minimum of elements across dimensions of a tensor.

[`reduce_prod(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_prod):
Computes the product of elements across dimensions of a tensor.

[`reduce_sum(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_sum):
Computes the sum of elements across dimensions of a tensor.

[`register_tensor_conversion_function(...)`](https://tensorflow.google.cn/api_docs/python/tf/register_tensor_conversion_function):
Registers a function for converting objects of `base_type` to `Tensor`.

[`required_space_to_batch_paddings(...)`](https://tensorflow.google.cn/api_docs/python/tf/required_space_to_batch_paddings):
Calculate padding required to make block_shape divide input_shape.

[`reshape(...)`](https://tensorflow.google.cn/api_docs/python/tf/reshape):
Reshapes a tensor.

[`reverse(...)`](https://tensorflow.google.cn/api_docs/python/tf/reverse):
Reverses specific dimensions of a tensor.

[`reverse_sequence(...)`](https://tensorflow.google.cn/api_docs/python/tf/reverse_sequence):
Reverses variable length slices.

[`roll(...)`](https://tensorflow.google.cn/api_docs/python/tf/roll): Rolls the
elements of a tensor along an axis.

[`round(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/round):
Rounds the values of a tensor to the nearest integer, element-wise.

[`saturate_cast(...)`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/saturate_cast):
Performs a safe saturating cast of `value` to `dtype`.

[`scalar_mul(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/scalar_mul):
Multiplies a scalar times a `Tensor` or `IndexedSlices` object.

[`scan(...)`](https://tensorflow.google.cn/api_docs/python/tf/scan): scan on
the list of tensors unpacked from `elems` on dimension 0.

[`scatter_nd(...)`](https://tensorflow.google.cn/api_docs/python/tf/scatter_nd):
Scatter `updates` into a new tensor according to `indices`.

[`searchsorted(...)`](https://tensorflow.google.cn/api_docs/python/tf/searchsorted):
Searches input tensor for values on the innermost dimension.

[`sequence_mask(...)`](https://tensorflow.google.cn/api_docs/python/tf/sequence_mask):
Returns a mask tensor representing the first N positions of each cell.

[`shape(...)`](https://tensorflow.google.cn/api_docs/python/tf/shape): Returns
the shape of a tensor.

[`shape_n(...)`](https://tensorflow.google.cn/api_docs/python/tf/shape_n):
Returns shape of tensors.

[`sigmoid(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/sigmoid):
Computes sigmoid of `x` element-wise.

[`sign(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/sign):
Returns an element-wise indication of the sign of a number.

[`sin(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/sin):
Computes sine of x element-wise.

[`sinh(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/sinh):
Computes hyperbolic sine of x element-wise.

[`size(...)`](https://tensorflow.google.cn/api_docs/python/tf/size)

[`slice(...)`](https://tensorflow.google.cn/api_docs/python/tf/slice):
Extracts a slice from a tensor.

[`sort(...)`](https://tensorflow.google.cn/api_docs/python/tf/sort): Sorts a
tensor.

[`space_to_batch(...)`](https://tensorflow.google.cn/api_docs/python/tf/space_to_batch):
SpaceToBatch for N-D tensors of type T.

[`space_to_batch_nd(...)`](https://tensorflow.google.cn/api_docs/python/tf/space_to_batch_nd):
SpaceToBatch for N-D tensors of type T.

[`split(...)`](https://tensorflow.google.cn/api_docs/python/tf/split): Splits
a tensor into sub tensors.

[`sqrt(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/sqrt):
Computes square root of x element-wise.

[`square(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/square):
Computes square of x element-wise.

[`squeeze(...)`](https://tensorflow.google.cn/api_docs/python/tf/squeeze):
Removes dimensions of size 1 from the shape of a tensor.

[`stack(...)`](https://tensorflow.google.cn/api_docs/python/tf/stack): Stacks
a list of rank-`R` tensors into one rank-`(R+1)` tensor.

[`stop_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/stop_gradient):
Stops gradient computation.

[`strided_slice(...)`](https://tensorflow.google.cn/api_docs/python/tf/strided_slice):
Extracts a strided slice of a tensor (generalized python array indexing).

[`subtract(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/subtract):
Returns x - y element-wise.

[`switch_case(...)`](https://tensorflow.google.cn/api_docs/python/tf/switch_case):
Create a switch/case operation, i.e. an integer-indexed conditional.

[`tan(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/tan):
Computes tan of x element-wise.

[`tanh(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/tanh):
Computes hyperbolic tangent of `x` element-wise.

[`tensor_scatter_nd_add(...)`](https://tensorflow.google.cn/api_docs/python/tf/tensor_scatter_nd_add):
Adds sparse `updates` to an existing tensor according to `indices`.

[`tensor_scatter_nd_sub(...)`](https://tensorflow.google.cn/api_docs/python/tf/tensor_scatter_nd_sub):
Subtracts sparse `updates` from an existing tensor according to `indices`.

[`tensor_scatter_nd_update(...)`](https://tensorflow.google.cn/api_docs/python/tf/tensor_scatter_nd_update):
Scatter `updates` into an existing tensor according to `indices`.

[`tensordot(...)`](https://tensorflow.google.cn/api_docs/python/tf/tensordot):
Tensor contraction of a and b along specified axes.

[`tile(...)`](https://tensorflow.google.cn/api_docs/python/tf/tile):
Constructs a tensor by tiling a given tensor.

[`timestamp(...)`](https://tensorflow.google.cn/api_docs/python/tf/timestamp):
Provides the time since epoch in seconds.

[`transpose(...)`](https://tensorflow.google.cn/api_docs/python/tf/transpose):
Transposes `a`.

[`truediv(...)`](https://tensorflow.google.cn/api_docs/python/tf/math/truediv):
Divides x / y elementwise (using Python 3 division operator semantics).

[`truncatediv(...)`](https://tensorflow.google.cn/api_docs/python/tf/truncatediv):
Returns x / y element-wise for integer types.

[`truncatemod(...)`](https://tensorflow.google.cn/api_docs/python/tf/truncatemod):
Returns element-wise remainder of division. This emulates C semantics in that

[`tuple(...)`](https://tensorflow.google.cn/api_docs/python/tf/tuple): Group
tensors together.

[`unique(...)`](https://tensorflow.google.cn/api_docs/python/tf/unique): Finds
unique elements in a 1-D tensor.

[`unique_with_counts(...)`](https://tensorflow.google.cn/api_docs/python/tf/unique_with_counts):
Finds unique elements in a 1-D tensor.

[`unravel_index(...)`](https://tensorflow.google.cn/api_docs/python/tf/unravel_index):
Converts a flat index or array of flat indices into a tuple of

[`unstack(...)`](https://tensorflow.google.cn/api_docs/python/tf/unstack):
Unpacks the given dimension of a rank-`R` tensor into rank-`(R-1)` tensors.

[`variable_creator_scope(...)`](https://tensorflow.google.cn/api_docs/python/tf/variable_creator_scope):
Scope which defines a variable creation function to be used by variable().

[`vectorized_map(...)`](https://tensorflow.google.cn/api_docs/python/tf/vectorized_map):
Parallel map on the list of tensors unpacked from `elems` on dimension 0.

[`where(...)`](https://tensorflow.google.cn/api_docs/python/tf/where): Return
the elements, either from `x` or `y`, depending on the `condition`.

[`while_loop(...)`](https://tensorflow.google.cn/api_docs/python/tf/while_loop):
Repeat `body` while the condition `cond` is true.

[`zeros(...)`](https://tensorflow.google.cn/api_docs/python/tf/zeros): Creates
a tensor with all elements set to zero.

[`zeros_like(...)`](https://tensorflow.google.cn/api_docs/python/tf/zeros_like):
Creates a tensor with all elements set to zero.

## Other Members

  * `__version__ = '2.0.0'`
  * `bfloat16`
  * `bool`
  * `complex128`
  * `complex64`
  * `double`
  * `float16`
  * `float32`
  * `float64`
  * `half`
  * `int16`
  * `int32`
  * `int64`
  * `int8`
  * `qint16`
  * `qint32`
  * `qint8`
  * `quint16`
  * `quint8`
  * `resource`
  * `string`
  * `uint16`
  * `uint32`
  * `uint64`
  * `uint8`
  * `variant`

