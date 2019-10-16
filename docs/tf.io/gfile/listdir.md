
Returns a list of entries contained within a directory.
### Aliases:
- `tf.compat.v1.io.gfile.listdir`
- `tf.compat.v2.io.gfile.listdir`

```
 tf.io.gfile.listdir(path)
```

The list is in arbitrary order. It does not contain the special entries "." and "..".
#### Args:
- `path`: string, `path` to a directory
#### Returns:

[filename1, filename2, ... filenameN] as strings
#### Raises:

errors.NotFoundError if directory doesn't exist
