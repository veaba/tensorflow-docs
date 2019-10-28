Builds a graph operator that runs a replicated TPU computation.

```
 tf.compat.v1.tpu.replicate(
    computation,
    inputs=None,
    infeed_queue=None,
    device_assignment=None,
    name=None,
    maximum_shapes=None
)
```
#### Args:
- `computation`: A Python function that builds the `computation` to replicate.
- `inputs`: A list of lists of input tensors or `None` (equivalent to `[[]]`), indexed by `[replica_num][input_num]`. All replicas must have the same number of `inputs`. Each input can be a nested structure containing values that are convertible to tensors. Note that passing an N-dimension list of compatible values will result in a N-dimension list of scalar tensors rather than a single Rank-N tensors. If you need different behavior, convert part of `inputs` to tensors with `tf.convert_to_tensor`.
- `infeed_queue`: If not `None`, the `InfeedQueue` from which to append a tuple of arguments as inputs to computation.
- `device_assignment`: If not `None`, a `DeviceAssignment` describing the mapping between logical cores in the computation with physical cores in the TPU topology. Uses a default device assignment if `None`. The `DeviceAssignment` may be omitted if each replica of the computation uses only one core, and there is either only one replica, or the number of replicas is equal to the number of cores in the TPU system.
- `name`: (Deprecated) Does nothing.
- `maximum_shapes`: A nested structure of tf.TensorShape representing the shape to which the respective component of each input element in each replica should be padded. Any unknown dimensions (e.g. tf.compat.v1.Dimension(None) in a tf.TensorShape or -1 in a tensor-like object) will be padded to the maximum size of that dimension over all replicas. The structure of `maximum_shapes` needs to be the same as `inputs[0]`.
#### Returns:
A list of outputs, indexed by `[replica_num]` each output can be a nested structure same as what computation() returns with a few exceptions.
Exceptions include: 1) None output: a NoOp would be returned which control-depends on computation. 2) Single value output: A tuple containing the value would be returned. 3) Operation-only outputs: a NoOp would be returned which control-depends on computation. TODO(b/121383831): Investigate into removing these special cases.
#### Raises:
- `ValueError`: If all replicas do not have equal numbers of input tensors.
- `ValueError`: If the number of inputs per replica does not match the number of formal parameters to `computation`.
- `ValueError`: If the static `inputs` dimensions don't match with the values given in `maximum_shapes`.
- `ValueError`: If the structure of inputs per replica does not match the structure of `maximum_shapes`.
