Creates a directory and all parent/intermediate directories.

```
 tf.compat.v1.gfile.MakeDirs(dirname)
```
It succeeds if dirname already exists and is writable.
#### Args:
- dirname: string, name of the directory to be created
#### Raises:
- errors.OpError: If the operation fails.
