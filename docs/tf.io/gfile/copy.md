Copies data from `src` to `dst`.
### Aliases:
- `tf.compat.v1.io.gfile.copy`
- `tf.compat.v2.io.gfile.copy`

```
 tf.io.gfile.copy(
    src,
    dst,
    overwrite=False
)
```
#### Args:
- `src`: string, name of the file whose contents need to be copied
- `dst`: string, name of the file to which to copy to
- `overwrite`: boolean, if false it's an error for `dst` to be occupied by an existing file.
#### Raises:
- `errors.OpError`: If the operation fails.
