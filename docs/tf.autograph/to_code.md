
Similar to to_graph, but returns Python source code as a string.
### Aliases:
- `tf.compat.v2.autograph.to_code`

```
 tf.autograph.to_code(
    entity,
    recursive=True,
    experimental_optional_features=None
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
[tf.autograph.to_graph](https://www.tensorflow.org/api_docs/python/tf/autograph/to_graph)Also see: .


to_graph returns the Python source code that can be used to generate a TensorFlow graph that is functionally identical to the input Python code.
#### Args:
- `entity`: Python callable or class to convert.
- `recursive`: Whether to `recursive`ly convert any functions that the converted function may call.
- `experimental_optional_features`: `None`, a tuple of, or a single `tf.autograph.experimental.Feature` value. Controls the use of optional features in the conversion process.
#### Returns:

The converted code as string.
