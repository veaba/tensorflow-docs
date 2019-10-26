Rewrites computation for execution on a TPU system.

```
 tf.compat.v1.tpu.rewrite(
    computation,
    inputs=None,
    infeed_queue=None,
    device_assignment=None,
    name=None
)
```
#### Args:
- computation: A Python function that builds a computation to apply to the input. If the function takes n inputs, 'inputs' should be a list of n tensors.
computation may return a list of operations and tensors. Tensors must come before operations in the returned list. The return value of rewrite is a list of tensors corresponding to the tensors from the output of computation.
All Operations constructed during computation will be executed when evaluating any of the returned output tensors, not just the ones returned.
- inputs: A list of input tensors or None (equivalent to an empty list). Each input can be a nested structure containing values that are convertible to tensors. Note that passing an N-dimension list of compatible values will result in a N-dimention list of scalar tensors rather than a single Rank-N tensors. If you need different behavior, convert part of inputs to tensors with tf.convert_to_tensor.
- infeed_queue: If not None, the InfeedQueue from which to append a tuple of arguments as inputs to computation.
- device_assignment: if not None, a DeviceAssignment describing the mapping between logical cores in the computation with physical cores in the TPU topology. May be omitted for a single-core computation, in which case the core attached to task 0, TPU device 0 is used.
- name: (Deprecated) Does nothing.
#### Returns:
Same data structure as if computation(*inputs) is called directly with some exceptions for correctness. Exceptions include: 1) None output: a NoOp would be returned which control-depends on computation. 2) Single value output: A tuple containing the value would be returned. 3) Operation-only outputs: a NoOp would be returned which control-depends on computation. TODO(b/121383831): Investigate into removing these special cases.
