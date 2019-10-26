Associates a string prefix with an integer counter in a TensorFlow graph.
### Aliases:
- tf.compat.v1.keras.backend.get_uid
- tf.compat.v2.keras.backend.get_uid

```
 tf.keras.backend.get_uid(prefix='')
```
#### Arguments:
- prefix: String prefix to index.
#### Returns:
Unique integer ID.
#### Example:

```
   >>> get_uid('dense')
  1
  >>> get_uid('dense')
  2
```
