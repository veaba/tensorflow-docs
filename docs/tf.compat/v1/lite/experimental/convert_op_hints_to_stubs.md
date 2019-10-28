Converts a graphdef with LiteOp hints into stub operations.

```
 tf.compat.v1.lite.experimental.convert_op_hints_to_stubs(
    session=None,
    graph_def=None,
    write_callback=(lambda graph_def, comments: None)
)
```
This is used to prepare for toco conversion of complex intrinsic usages. Note: only one of session or graph_def should be used, not both.
#### Args:
- `session`: A TensorFlow `session` that contains the graph to convert.
- `graph_def`: A graph def that we should convert.
- `write_callback`: A function pointer that can be used to write intermediate steps of graph transformation (optional).
#### Returns:
A new graphdef with all ops contained in OpHints being replaced by a single op call with the right parameters.
#### Raises:
- `ValueError`: If both session and graph_def are provided.
