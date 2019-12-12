

## Class  `TFRecordWriter` 
将记录写入tfrecords文件的类。

**别名** : [ `tf.compat.v1.io.TFRecordWriter` ](/api_docs/python/tf/io/TFRecordWriter), [ `tf.compat.v1.python_io.TFRecordWriter` ](/api_docs/python/tf/io/TFRecordWriter), [ `tf.compat.v2.io.TFRecordWriter` ](/api_docs/python/tf/io/TFRecordWriter)

### 在教程中使用：
- [TFRecord and tf.Example](https://tensorflow.google.cn/tutorials/load_data/tfrecord)
This class implements  `__enter__`  and  `__exit__` , and can be usedin  `with`  blocks like a normal file.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L200-L218)

```
 __init__(
    path,
    options=None
)
 
```

Opens file  `path`  and creates a  `TFRecordWriter`  writing to it.

#### 参数：
- **`path`** : The path to the TFRecords file.
- **`options`** : (optional) String specifying compression type, `TFRecordCompressionType` , or  `TFRecordOptions`  object.


#### 加薪：
- **`IOError`** : If  `path`  cannot be opened for writing.
- **`ValueError`** : If valid compression_type can't be determined from  `options` .


## 方法


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

关闭文件。

###  `flush` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L238-L241)

```
 flush()
 
```

刷新文件。

###  `write` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/tf_record.py#L229-L236)

```
 write(record)
 
```

将字符串记录写入文件。

#### 参数：
- **`record`** : str
