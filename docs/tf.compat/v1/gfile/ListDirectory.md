Returns a list of entries contained within a directory.



```
 tf.compat.v1.gfile.ListDirectory(dirname)
 
```

The list is in arbitrary order. It does not contain the special entries "."
and "..".



#### Args:

- **`dirname`** : string, path to a directory



#### Returns:
[filename1, filename2, ... filenameN] as strings



#### Raises:
errors.NotFoundError if directory doesn't exist

