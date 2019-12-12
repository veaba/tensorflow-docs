

## Class  `FastGFile` 
无线程锁定的文件I/O包装器。

Note, that this  is somewhat like builtin Python  file I/O, butthere are  semantic differences to  make it more  efficient forsome backing filesystems.  For example, a write  mode file willnot  be opened  until the  first  write call  (to minimize  RPCinvocations in network filesystems).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/gfile.py#L66-L68)

```
 __init__(
    name,
    mode='r'
)
 
```

不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use tf.gfile.GFile.


## 属性


###  `mode` 
返回打开文件的模式。

###  `name` 
返回文件名。

## 方法


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L202-L204)

```
 __enter__()
 
```

使用“with”语句。

###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L206-L208)

```
 __exit__(
    unused_type,
    unused_value,
    unused_traceback
)
 
```

使用“with”语句。

###  `__iter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L210-L211)

```
 __iter__()
 
```

###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L234-L241)

```
 close()
 
```

关闭文件IO。应该调用以刷新可写文件。

###  `flush` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L222-L232)

```
 flush()
 
```

刷新可写文件。

This only ensures that the data has made its way out of the process withoutany guarantees on whether it's written to disk. This means that thedata would survive an application crash but not necessarily an OS crash.

###  `next` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L213-L217)

```
 next()
 
```

###  `read` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L110-L128)

```
 read(n=-1)
 
```

以字符串形式返回文件的内容。

开始读取文件中的当前位置。

#### 参数：
- **`n`** : Read 'n' bytes if n != -1. If n = -1, reads to end of file.


#### 返回：
'n' bytes of the file (or whole file) in bytes mode or 'n' bytes of thestring if in string (regular) mode.

###  `readline` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L176-L179)

```
 readline()
 
```

Reads the next line from the file. Leaves the '\n' at the end.

###  `readlines` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L181-L190)

```
 readlines()
 
```

返回列表中文件的所有行。

###  `seek` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L130-L174)

```
 seek(
    offset=None,
    whence=0,
    position=None
)
 
```

Seeks to the offset in the file. (deprecated arguments)


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(position)` . They will be removed in a future version.Instructions for updating:position is deprecated in favor of the offset argument.


#### 参数：
- **`offset`** : The byte count relative to the whence argument.
- **`whence`** : Valid values for whence are:0: start of the file (default)1: relative to the current position of the file2: relative to the end of file. offset is usually negative.


###  `seekable` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L243-L245)

```
 seekable()
 
```

Returns True as FileIO supports random access ops of seek()/tell()

###  `size` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L100-L102)

```
 size()
 
```

返回文件的大小。

###  `tell` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L192-L200)

```
 tell()
 
```

返回文件中的当前位置。

###  `write` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L104-L108)

```
 write(file_content)
 
```

Writes file_content to the file. Appends to the end of the file.

