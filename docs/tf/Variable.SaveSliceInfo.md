

## Class  `SaveSliceInfo` 

Information on how to save this Variable as a slice.


### Aliases:
- Class [ `tf.compat.v1.Variable.SaveSliceInfo` ](/api_docs/python/tf/Variable/SaveSliceInfo)
- Class [ `tf.compat.v2.Variable.SaveSliceInfo` ](/api_docs/python/tf/Variable/SaveSliceInfo)

Provides internal support for saving variables as slices of a largervariable.  This API is not public and is subject to change.


#### Available properties:
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


#### Args:
- **`full_name`** : Name of the full variable of which this  `Variable`  is aslice.
- **`full_shape`** : Shape of the full variable, as a list of int.
- **`var_offset`** : Offset of this  `Variable`  into the full variable, as a listof int.
- **`var_shape`** : Shape of this  `Variable` , as a list of int.
- **`save_slice_info_def`** :  `SaveSliceInfoDef`  protocol buffer. If not  `None` ,recreates the SaveSliceInfo object its contents.  `save_slice_info_def` and other arguments are mutually exclusive.
- **`import_scope`** : Optional  `string` . Name scope to add. Only used wheninitializing from protocol buffer.


## Properties


###  `spec` 

Computes the spec string used for saving.


## Methods


###  `to_proto` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L1336-L1358)


```
to_proto(export_scope=None)

```


Returns a SaveSliceInfoDef() proto.


#### Args:
- **`export_scope`** : Optional  `string` . Name scope to remove.


#### Returns:

A  `SaveSliceInfoDef`  protocol buffer, or None if the  `Variable`  is notin the specified name scope.
