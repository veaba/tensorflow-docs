

## Class  `FixedLengthRecordReader` 
A Reader that outputs fixed-length records from a file.

Inherits From: [ `ReaderBase` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ReaderBase)

See ReaderBase for supported methods.

#### Eager Compatibility
Readers are not compatible with eager execution. Instead, pleaseuse [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) to get data into your model.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L390-L417)

```
 __init__(
    record_bytes,
    header_bytes=None,
    footer_bytes=None,
    hop_bytes=None,
    name=None,
    encoding=None
)
 
```

Create a FixedLengthRecordReader. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use [ `tf.data.FixedLengthRecordDataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/FixedLengthRecordDataset).


#### Args:
- **`record_bytes`** : An int.
- **`header_bytes`** : An optional int. Defaults to 0.
- **`footer_bytes`** : An optional int. Defaults to 0.
- **`hop_bytes`** : An optional int. Defaults to 0.
- **`name`** : A name for the operation (optional).
- **`encoding`** : The type of encoding for the file. Defaults to none.


## Properties


###  `reader_ref` 
Op that implements the reader.

###  `supports_serialize` 
Whether the Reader implementation can serialize its state.

## Methods


###  `num_records_produced` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L211-L229)

```
 num_records_produced(name=None)
 
```

Returns the number of records this reader has produced.

This is the same as the number of Read executions that havesucceeded.

#### Args:
- **`name`** : A name for the operation (optional).


#### Returns:
An int64 Tensor.

###  `num_work_units_completed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L231-L245)

```
 num_work_units_completed(name=None)
 
```

Returns the number of work units this reader has finished processing.

#### Args:
- **`name`** : A name for the operation (optional).


#### Returns:
An int64 Tensor.

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

#### Args:
- **`queue`** : A Queue or a mutable string Tensor representing a handleto a Queue, with string work items.
- **`name`** : A name for the operation (optional).


#### Returns:
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

#### Args:
- **`queue`** : A Queue or a mutable string Tensor representing a handleto a Queue, with string work items.
- **`num_records`** : Number of records to read.
- **`name`** : A name for the operation (optional).


#### Returns:
A tuple of Tensors (keys, values).

- **`keys`** : A 1-D string Tensor.
- **`values`** : A 1-D string Tensor.


###  `reset` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L289-L301)

```
 reset(name=None)
 
```

Restore a reader to its initial clean state.

#### Args:
- **`name`** : A name for the operation (optional).


#### Returns:
The created Operation.

###  `restore_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L264-L282)

```
 restore_state(
    state,
    name=None
)
 
```

Restore a reader to a previously saved state.

Not all Readers support being restored, so this can produce anUnimplemented error.

#### Args:
- **`state`** : A string Tensor.Result of a SerializeState of a Reader with matching type.
- **`name`** : A name for the operation (optional).


#### Returns:
The created Operation.

###  `serialize_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L247-L262)

```
 serialize_state(name=None)
 
```

Produce a string tensor that encodes the state of a reader.

Not all Readers support being serialized, so this can produce anUnimplemented error.

#### Args:
- **`name`** : A name for the operation (optional).


#### Returns:
A string Tensor.

