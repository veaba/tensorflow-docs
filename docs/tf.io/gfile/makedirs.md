Creates a directory and all parent/intermediate directories.
### Aliases:
- `tf.compat.v1.io.gfile.makedirs`
- `tf.compat.v2.io.gfile.makedirs`

```
 tf.io.gfile.makedirs(path)
```
It succeeds if path already exists and is writable.
#### Args:
- `path`: string, name of the directory to be created
#### Raises:
- `errors.OpError`: If the operation fails.
