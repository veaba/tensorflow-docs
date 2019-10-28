Returns the output shapes of a `Dataset` or `Iterator` elements.

```
 tf.compat.v1.data.get_output_types(dataset_or_iterator)
```
This utility method replaces the deprecated-in-V2 `tf.compat.v1.Dataset.output_types` property.
#### Args:
- `dataset_or_iterator`: A `tf.data.Dataset` or `tf.data.Iterator`.
#### Returns:
A nested structure of `tf.DType` objects objects matching the structure of dataset / iterator elements and specifying the shape of the individual components.
