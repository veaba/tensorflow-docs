Deletes the file located at 'filename'.

```
 tf.compat.v1.gfile.Remove(filename)
```
#### Args:
- filename: string, a filename
#### Raises:
- errors.OpError: Propagates any errors reported by the FileSystem API. E.g., NotFoundError if the file does not exist.
