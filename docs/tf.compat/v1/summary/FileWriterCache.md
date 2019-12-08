

## Class  `FileWriterCache` 
Cache for file writers.

This class caches file writers, one per directory.



## Methods


###  `clear` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer_cache.py#L40-L48)



```
 @staticmethod
clear()
 
```

Clear cached summary writers. Currently only used for unit tests.



###  `get` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer_cache.py#L50-L64)



```
 @staticmethod
get(logdir)
 
```

Returns the FileWriter for the specified directory.



#### Args:

- **`logdir`** : str, name of the directory.



#### Returns:
A  `FileWriter` .

