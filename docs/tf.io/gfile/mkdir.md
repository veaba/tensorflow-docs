Creates a directory with the name given by 'path'.
### Aliases:
- `tf.compat.v1.io.gfile.mkdir`
- `tf.compat.v2.io.gfile.mkdir`

```
 tf.io.gfile.mkdir(path)
```
#### Args:
- `path`: string, name of the directory to be created Notes: The parent directories need to exist. Use recursive_create_dir instead if there is the possibility that the parent dirs don't exist.
#### Raises:
- `errors.OpError`: If the operation fails.
