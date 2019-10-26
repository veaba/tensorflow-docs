Create an op that groups multiple operations.
### Aliases:
- tf.compat.v1.group
- tf.compat.v2.group

```
 tf.group(
    *inputs,
    **kwargs
)
```
### Used in the guide:
- Migrate your TensorFlow 1 code to TensorFlow 2
- Training checkpoints
When this op finishes, all ops in inputs have finished. This op has no output.
[tf.tuple](https://tensorflow.google.cn/api_docs/python/tf/tuple)See also  and tf.control_dependencies.

#### Args:
- *inputs: Zero or more tensors to group.
- name: A name for this operation (optional).
#### Returns:
An Operation that executes all its inputs.
#### Raises:
- ValueError: If an unknown keyword argument is provided.
