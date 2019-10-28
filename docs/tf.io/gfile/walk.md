Recursive directory tree generator for directories.
### Aliases:
- `tf.compat.v1.io.gfile.walk`
- `tf.compat.v2.io.gfile.walk`

```
 tf.io.gfile.walk(
    top,
    topdown=True,
    onerror=None
)
```
#### Args:
- `top`: string, a Directory name
- `topdown`: bool, Traverse pre order if True, post order if False.
- `onerror`: optional handler for errors. Should be a function, it will be called with the error as argument. Rethrowing the error aborts the walk. Errors that happen while listing directories are ignored.
#### Yields:
Each yield is a 3-tuple: the pathname of a directory, followed by lists of all its subdirectories and leaf files. (dirname, [subdirname, subdirname, ...], [filename, filename, ...]) as strings
