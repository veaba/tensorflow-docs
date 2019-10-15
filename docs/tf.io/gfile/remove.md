
Deletes the path located at 'path'.
### Aliases:
- `tf.compat.v1.io.gfile.remove`
- `tf.compat.v2.io.gfile.remove`

```
 tf.io.gfile.remove(path)
```
#### Args:
- `path`: string, a `path`
#### Raises:
- `errors.OpError`: Propagates any errors reported by the FileSystem API. E.g., NotFoundError if the path does not exist.
