Similar to to_graph, but returns Python source code as a string.

```
 tf.compat.v1.autograph.to_code(
    entity,
    recursive=True,
    arg_values=None,
    arg_types=None,
    indentation='  ',
    experimental_optional_features=None
)
```
[tf.autograph.to_graph](https://tensorflow.google.cn/api_docs/python/tf/autograph/to_graph)Also see: .

to_graph returns the Python source code that can be used to generate a TensorFlow graph that is functionally identical to the input Python code.
#### Args:
- entity: Python callable or class to convert.
- recursive: Whether to recursively convert any functions that the converted function may call.
- arg_values: Deprecated.
- arg_types: Deprecated.
- indentation: Deprecated.
- experimental_optional_features: None, a tuple of, or a single tf.autograph.experimental.Feature value. Controls the use of optional features in the conversion process.
#### Returns:
The converted code as string.
