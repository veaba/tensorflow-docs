An iterator that read the records from a TFRecords file. (deprecated)
### Aliases:
- `tf.compat.v1.python_io.tf_record_iterator`

```
 tf.compat.v1.io.tf_record_iterator(
    path,
    options=None
)
```
#### Args:
- `path`: The `path` to the TFRecords file.
- `options`: (optional) A TFRecordOptions object.
#### Yields:
Strings.
#### Raises:
- `IOError`: If `path` cannot be opened for reading.
