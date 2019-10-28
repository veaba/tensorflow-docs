Returns file statistics for a given path.

```
 tf.compat.v1.gfile.Stat(filename)
```
#### Args:
- `filename`: string, path to a file
#### Returns:
FileStatistics struct that contains information about the path
#### Raises:
- `errors.OpError`: If the operation fails.
