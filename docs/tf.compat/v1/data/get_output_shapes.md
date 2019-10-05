
Returns the output shapes of a Dataset or Iterator elements.

```
 tf.compat.v1.data.get_output_shapes(dataset_or_iterator)
```

This utility method replaces the deprecated-in-V2 tf.compat.v1.Dataset.output_shapes property.
#### Args:
- `dataset_or_iterator`: A `tf.data.Dataset` or `tf.data.Iterator`.
#### Returns:
[tf.TensorShape](https://www.tensorflow.org/api_docs/python/tf/TensorShape)A nested structure of  objects matching the structure of the dataset / iterator elements and specifying the shape of the individual components.

