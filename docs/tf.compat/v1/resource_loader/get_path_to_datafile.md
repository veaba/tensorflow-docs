
Get the path to the specified file in the data dependencies.

```
 tf.compat.v1.resource_loader.get_path_to_datafile(path)
```

The path is relative to tensorflow/
#### Args:
- `path`: a string resource `path` relative to tensorflow/
#### Returns:

The path to the specified file present in the data attribute of py_test or py_binary.
#### Raises:
- `IOError`: If the path is not found, or the resource can't be opened.
