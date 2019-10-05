
Returns the output classes of a Dataset or Iterator elements.

```
 tf.compat.v1.data.get_output_classes(dataset_or_iterator)
```

This utility method replaces the deprecated-in-V2 tf.compat.v1.Dataset.output_classes property.
#### Args:
- `dataset_or_iterator`: A `tf.data.Dataset` or `tf.data.IteratorV2`.
#### Returns:

A nested structure of Python type objects matching the structure of the dataset / iterator elements and specifying the class of the individual components.
