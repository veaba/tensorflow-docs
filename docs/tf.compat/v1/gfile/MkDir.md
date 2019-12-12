Creates a directory with the name 'dirname'.

```
 tf.compat.v1.gfile.MkDir(dirname) 
```

#### Args:
- **`dirname`** : string, name of the directory to be createdNotes: The parent directories need to exist. Use recursive_create_dir insteadif there is the possibility that the parent dirs don't exist.


#### Raises:
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.
