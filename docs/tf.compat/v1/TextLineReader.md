

## Class  `TextLineReader` 
输出由换行符分隔的文件行的读取器。

Inherits From: [ `ReaderBase` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ReaderBase)

Newlines are stripped from the output.See ReaderBase for supported methods.

#### 迫切的兼容性
Readers are not compatible with eager execution. Instead, pleaseuse [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) to get data into your model.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L358-L371)

```
 __init__(
    skip_header_lines=None,
    name=None
)
 
```

Create a TextLineReader. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use [ `tf.data.TextLineDataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/TextLineDataset).


#### 参数：
- **`skip_header_lines`** : An optional int. Defaults to 0.  Number of linesto skip from the beginning of every file.
- **`name`** : A name for the operation (optional).


## 属性


###  `reader_ref` 
实现读取器的操作。

###  `supports_serialize` 
读取器实现是否可以序列化其状态。

## 方法


###  `num_records_produced` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L211-L229)

```
 num_records_produced(name=None)
 
```

返回此读取器生成的记录数。

This is the same as the number of Read executions that havesucceeded.

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
int64张量。

###  `num_work_units_completed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L231-L245)

```
 num_work_units_completed(name=None)
 
```

返回此读取器已完成处理的工作单元数。

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
int64张量。

###  `read` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L144-L171)

```
 read(
    queue,
    name=None
)
 
```

Returns the next record (key, value) pair produced by a reader.

Will dequeue a work unit from queue if necessary (e.g. when theReader needs to start reading from a new file since it hasfinished with the previous file).

#### 参数：
- **`queue`** : A Queue or a mutable string Tensor representing a handleto a Queue, with string work items.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of Tensors (key, value).

- **`key`** : A string scalar Tensor.
- **`value`** : A string scalar Tensor.


###  `read_up_to` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L173-L209)

```
 read_up_to(
    queue,
    num_records,
    name=None
)
 
```

Returns up to num_records (key, value) pairs produced by a reader.

Will dequeue a work unit from queue if necessary (e.g., when theReader needs to start reading from a new file since it hasfinished with the previous file).It may return less than num_records even before the last batch.

#### 参数：
- **`queue`** : A Queue or a mutable string Tensor representing a handleto a Queue, with string work items.
- **`num_records`** : Number of records to read.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of Tensors (keys, values).

- **`keys`** : A 1-D string Tensor.
- **`values`** : A 1-D string Tensor.


###  `reset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L289-L301)

```
 reset(name=None)
 
```

将读取器还原到其初始干净状态。

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
创建的操作。

###  `restore_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L264-L282)

```
 restore_state(
    state,
    name=None
)
 
```

将读取器还原到以前保存的状态。

Not all Readers support being restored, so this can produce anUnimplemented error.

#### 参数：
- **`state`** : A string Tensor.Result of a SerializeState of a Reader with matching type.
- **`name`** : A name for the operation (optional).


#### 返回：
创建的操作。

###  `serialize_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L247-L262)

```
 serialize_state(name=None)
 
```

产生一个字符串张量来编码读卡器的状态。

Not all Readers support being serialized, so this can produce anUnimplemented error.

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
弦张量

