
Rename or move a file / directory.
### Aliases:
- `tf.compat.v1.io.gfile.rename`
- `tf.compat.v2.io.gfile.rename`

```
 tf.io.gfile.rename(
    src,
    dst,
    overwrite=False
)
```
#### Args:
- `src`: string, pathname for a file
- `dst`: string, pathname to which the file needs to be moved
- `overwrite`: boolean, if false it's an error for `dst` to be occupied by an existing file.
#### Raises:
- `errors.OpError`: If the operation fails.
