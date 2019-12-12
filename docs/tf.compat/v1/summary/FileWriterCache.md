

## Class  `FileWriterCache` 
文件写入程序的缓存。

This class caches file writers, one per directory.

## 方法


###  `clear` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer_cache.py#L40-L48)

```
 @staticmethod
clear()
 
```

清除缓存的摘要编写器。目前只用于单元测试。

###  `get` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/writer/writer_cache.py#L50-L64)

```
 @staticmethod
get(logdir)
 
```

返回指定目录的文件写入程序。

#### 参数：
- **`logdir`** : str, name of the directory.


#### 返回：
A  `FileWriter` .

