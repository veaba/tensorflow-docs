Returns the type specification of an element of a Dataset or Iterator.
### Aliases:
- tf.compat.v1.data.experimental.get_structure
- tf.compat.v2.data.experimental.get_structure

```
 tf.data.experimental.get_structure(dataset_or_iterator)
```
#### Args:
- dataset_or_iterator: A tf.data.Dataset or tf.data.Iterator.
#### Returns:
[tf.TypeSpec](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec)A nested structure of  objects matching the structure of an element of dataset_or_iterator and spacifying the type of individal components.

#### Raises:
- TypeError: If dataset_or_iterator is not a Dataset or Iterator object.
