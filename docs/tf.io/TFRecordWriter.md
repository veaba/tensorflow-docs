

## Class  `TFRecordWriter` 
A class to write records to a TFRecords file.



### Aliases:

- Class [ `tf.compat.v1.io.TFRecordWriter` ](/api_docs/python/tf/io/TFRecordWriter)

- Class [ `tf.compat.v1.python_io.TFRecordWriter` ](/api_docs/python/tf/io/TFRecordWriter)

- Class [ `tf.compat.v2.io.TFRecordWriter` ](/api_docs/python/tf/io/TFRecordWriter)



### Used in the tutorials:

- [TFRecord and tf.Example](https://tensorflow.google.cn/tutorials/load_data/tfrecord)

This class implements  `__enter__`  and  `__exit__` , and can be used
in  `with`  blocks like a normal file.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L200-L218)



```
 __init__(
    path,
    options=None
)
 
```

Opens file  `path`  and creates a  `TFRecordWriter`  writing to it.



#### Args:

- **`path`** : The path to the TFRecords file.

- **`options`** : (optional) String specifying compression type,
 `TFRecordCompressionType` , or  `TFRecordOptions`  object.



#### Raises:

- **`IOError`** : If  `path`  cannot be opened for writing.

- **`ValueError`** : If valid compression_type can't be determined from  `options` .



## Methods


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L221-L223)



```
 __enter__()
 
```

Enter a  `with`  block.



###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L225-L227)



```
 __exit__(
    unused_type,
    unused_value,
    unused_traceback
)
 
```

Exit a  `with`  block, closing the file.



###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L243-L246)



```
 close()
 
```

Close the file.



###  `flush` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L238-L241)



```
 flush()
 
```

Flush the file.



###  `write` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L229-L236)



```
 write(record)
 
```

Write a string record to the file.



#### Args:

- **`record`** : str

