
Save the list of files matching pattern, so it is only computed once.
### Aliases:
- `tf.compat.v1.io.match_filenames_once`
- `tf.compat.v1.train.match_filenames_once`
- `tf.compat.v2.io.match_filenames_once`

```
 tf.io.match_filenames_once(
    pattern,
    name=None
)
```

NOTE: The order of the files returned is deterministic.
#### Args:
- `pattern`: A file `pattern` (glob), or 1D tensor of file `pattern`s.
- `name`: A `name` for the operations (optional).
#### Returns:

A variable that is initialized to the list of files matching the pattern(s).
