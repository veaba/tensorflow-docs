Copies data from  `oldpath`  to  `newpath` .



```
 tf.compat.v1.gfile.Copy(
    oldpath,
    newpath,
    overwrite=False
)
 
```



#### Args:

- **`oldpath`** : string, name of the file who's contents need to be copied

- **`newpath`** : string, name of the file to which to copy to

- **`overwrite`** : boolean, if false it's an error for  `newpath`  to be occupied by
an existing file.



#### Raises:

- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.

