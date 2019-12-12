

## Class  `SaveSliceInfo` 
有关如何将此变量保存为切片的信息。

**别名** : [ `tf.compat.v1.Variable.SaveSliceInfo` ](/api_docs/python/tf/Variable/SaveSliceInfo), [ `tf.compat.v2.Variable.SaveSliceInfo` ](/api_docs/python/tf/Variable/SaveSliceInfo)

Provides internal support for saving variables as slices of a largervariable.  This API is not public and is subject to change.

#### 可用属性：
- full_name
- full_shape
- var_offset
- var_shape


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L1293-L1326)

```
 __init__(
    full_name=None,
    full_shape=None,
    var_offset=None,
    var_shape=None,
    save_slice_info_def=None,
    import_scope=None
)
 
```

Create a  `SaveSliceInfo` .

#### 参数：
- **`full_name`** : Name of the full variable of which this  `Variable`  is aslice.
- **`full_shape`** : Shape of the full variable, as a list of int.
- **`var_offset`** : Offset of this  `Variable`  into the full variable, as a listof int.
- **`var_shape`** : Shape of this  `Variable` , as a list of int.
- **`save_slice_info_def`** :  `SaveSliceInfoDef`  protocol buffer. If not  `None` ,recreates the SaveSliceInfo object its contents.  `save_slice_info_def` and other arguments are mutually exclusive.
- **`import_scope`** : Optional  `string` . Name scope to add. Only used wheninitializing from protocol buffer.


## 属性


###  `spec` 
计算用于保存的规范字符串。

## 方法


###  `to_proto` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L1336-L1358)

```
 to_proto(export_scope=None)
 
```

返回saveSliceInfoDef（）协议。

#### 参数：
- **`export_scope`** : Optional  `string` . Name scope to remove.


#### 返回：
A  `SaveSliceInfoDef`  protocol buffer, or None if the  `Variable`  is notin the specified name scope.

