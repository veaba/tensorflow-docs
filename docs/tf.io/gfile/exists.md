Determines whether a path exists or not.

**Aliases** : [ `tf.compat.v1.io.gfile.exists` ](/api_docs/python/tf/io/gfile/exists), [ `tf.compat.v2.io.gfile.exists` ](/api_docs/python/tf/io/gfile/exists)

```
 tf.io.gfile.exists(path)
 
```

#### Args:
- **`path`** : string, a path


#### Returns:
True if the path exists, whether it's a file or a directory.False if the path does not exist and there are no filesystem errors.

#### Raises:
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API.
