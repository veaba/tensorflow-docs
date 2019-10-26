Returns a list of files that match the given pattern(s).

```
 tf.compat.v1.gfile.Glob(filename)
```
#### Args:
- filename: string or iterable of strings. The glob pattern(s).
#### Returns:
A list of strings containing filenames that match the given pattern(s).
#### Raises:
- errors.OpError: If there are filesystem / directory listing errors.
