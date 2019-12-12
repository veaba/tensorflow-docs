Determines whether a path exists or not.

```
 tf.compat.v1.gfile.Exists(filename)
 
```

#### Args:
- **`filename`** : string, a path


#### Returns:
True if the path exists, whether it's a file or a directory.False if the path does not exist and there are no filesystem errors.

#### Raises:
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API.
