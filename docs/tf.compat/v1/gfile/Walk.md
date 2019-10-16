
Recursive directory tree generator for directories.

```
 tf.compat.v1.gfile.Walk(
    top,
    in_order=True
)
```
#### Args:
- `top`: string, a Directory name
- `in_order`: bool, Traverse in order if True, post order if False. Errors that happen while listing directories are ignored.
#### Yields:

Each yield is a 3-tuple: the pathname of a directory, followed by lists of all its subdirectories and leaf files. (dirname, [subdirname, subdirname, ...], [filename, filename, ...]) as strings
