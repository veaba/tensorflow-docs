

## Class  `TextFileInitializer` 
文本文件中的表初始值设定项。

**别名** : [ `tf.compat.v1.lookup.TextFileInitializer` ](/api_docs/python/tf/lookup/TextFileInitializer), [ `tf.compat.v2.lookup.TextFileInitializer` ](/api_docs/python/tf/lookup/TextFileInitializer)

此初始值设定项为文件中的每一行在表中分配一个条目。

The key and value type of the table to initialize is given by  `key_dtype`  and `value_dtype` .

The key and value content to get from each line is specified bythe  `key_index`  and  `value_index` .

- [ `TextFileIndex.LINE_NUMBER` ](https://tensorflow.google.cn/api_docs/python/tf/lookup/TextFileIndex#LINE_NUMBER) means use the line number starting from zero,expects data type int64.
- [ `TextFileIndex.WHOLE_LINE` ](https://tensorflow.google.cn/api_docs/python/tf/lookup/TextFileIndex#WHOLE_LINE) means use the whole line content, expects datatype string.
- A value  `>=0`  means use the index (starting at zero) of the split line basedon  `delimiter` .
例如，如果我们有一个包含以下内容的文件：

```
 emerson 10lake 20palmer 30 
```

The following snippet initializes a table with the first column as keys andsecond column as values:

-  `emerson -> 10` 
-  `lake -> 20` 
-  `palmer -> 30` 


```
 table), -1)...table.init.run() 
```

类似地，将整行初始化为键，将行号初始化为值。

-  `emerson 10 -> 0` 
-  `lake 20 -> 1` 
-  `palmer 30 -> 2` 


```
 table), -1)...table.init.run() 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L552-L632)

```
 __init__(    filename,    key_dtype,    key_index,    value_dtype,    value_index,    vocab_size=None,    delimiter='\t',    name=None) 
```

构造要从文本文件填充的表初始值设定项对象。

It generates one key-value pair per line. The type of table key andvalue are specified by  `key_dtype`  and  `value_dtype` , respectively.Similarly the content of the key and value are specified by the key_indexand value_index.

- TextFileIndex.LINE_NUMBER means use the line number starting from zero,expects data type int64.
- TextFileIndex.WHOLE_LINE means use the whole line content, expects datatype string.
- A value >=0 means use the index (starting at zero) of the split line basedon  `delimiter` .


#### 参数：
- **`filename`** : The filename of the text file to be used for initialization. Thepath must be accessible from wherever the graph is initialized (eg.trainer or eval workers). The filename may be a scalar  `Tensor` .
- **`key_dtype`** : The  `key`  data type.
- **`key_index`** : the index that represents information of a line to get thetable 'key' values from.
- **`value_dtype`** : The  `value`  data type.
- **`value_index`** : the index that represents information of a line to get thetable 'value' values from.'
- **`vocab_size`** : The number of elements in the file, if known.
- **`delimiter`** : The delimiter to separate fields in a line.
- **`name`** : A name for the operation (optional).


#### 加薪：
- **`ValueError`** : when the filename is empty, or when the table key and valuedata types do not match the expected data types.


## 属性


###  `key_dtype` 
所需的表键dtype。

###  `value_dtype` 
所需的表值DTYPE。

## 方法


###  `initialize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L634-L660)

```
 initialize(table) 
```

从文本文件初始化表。

#### 参数：
- **`table`** : The table to be initialized.


#### 返回：
初始化表的操作。

#### 加薪：
- **`TypeError`** : when the keys and values data types do not match the tablekey and value data types.
