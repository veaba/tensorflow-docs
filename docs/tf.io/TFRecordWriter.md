## Class TFRecordWriter
A class to write records to a TFRecords file.
### Aliases:
- Class `tf.compat.v1.io.TFRecordWriter`
- Class `tf.compat.v1.python_io.TFRecordWriter`
- Class `tf.compat.v2.io.TFRecordWriter`
### Used in the tutorials:
- ``T``F``R``e``c``o``r``d`` ``a``n``d`` ``t``f``.``E``x``a``m``p``l``e``
This class implements `__enter__` and `__exit__`, and can be used in `with` blocks like a normal file.
## __init__
View source

```
 __init__(
    path,
    options=None
)
```
Opens file `path` and creates a `TFRecordWriter` writing to it.
#### Args:
- `path`: The `path` to the TFRecords file.
- `options`: (optional) String specifying compression type, `TFRecordCompressionType`, or `TFRecordOptions` object.
#### Raises:
- `IOError`: If `path` cannot be opened for writing.
- `ValueError`: If valid compression_type can't be determined from `options`.
## Methods
### __enter__
View source

```
 __enter__()
```
Enter a `with` block.
### __exit__
View source

```
 __exit__(
    unused_type,
    unused_value,
    unused_traceback
)
```
Exit a `with` block, closing the file.
### close
View source

```
 close()
```
Close the file.
### flush
View source

```
 flush()
```
Flush the file.
### write
View source

```
 write(record)
```
Write a string record to the file.
#### Args:
- `record`: str
