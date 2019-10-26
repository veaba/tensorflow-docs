Base class for different Reader types, that produce a record every step.
Conceptually, Readers convert string 'work units' into records (key, value pairs). Typically the 'work units' are filenames and the records are extracted from the contents of those files. We want a single record produced per step, but a work unit can correspond to many records.
Therefore we introduce some decoupling using a queue. The queue contains the work units and the Reader dequeues from the queue when it is asked to produce a record (via Read()) but it has finished the last work unit.
#### Eager Compatibility
[tf.data](https://tensorflow.google.cn/api_docs/python/tf/data)Readers are not compatible with eager execution. Instead, please use  to get data into your model.

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L120-L137)


```
 __init__(
    reader_ref,
    supports_serialize=False
)
```
Creates a new ReaderBase.
#### Args:
- reader_ref: The operation that implements the reader.
- supports_serialize: True if the reader implementation can serialize its state.
#### Raises:
- RuntimeError: If eager execution is enabled.
## Properties
### reader_ref
Op that implements the reader.
### supports_serialize
Whether the Reader implementation can serialize its state.
## Methods
### num_records_produced
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L211-L229)


```
 num_records_produced(name=None)
```
Returns the number of records this reader has produced.
This is the same as the number of Read executions that have succeeded.
#### Args:
- name: A name for the operation (optional).
#### Returns:
An int64 Tensor.
### num_work_units_completed
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L231-L245)


```
 num_work_units_completed(name=None)
```
Returns the number of work units this reader has finished processing.
#### Args:
- name: A name for the operation (optional).
#### Returns:
An int64 Tensor.
### read
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L144-L171)


```
 read(
    queue,
    name=None
)
```
Returns the next record (key, value) pair produced by a reader.
Will dequeue a work unit from queue if necessary (e.g. when the Reader needs to start reading from a new file since it has finished with the previous file).
#### Args:
- queue: A Queue or a mutable string Tensor representing a handle to a Queue, with string work items.
- name: A name for the operation (optional).
#### Returns:
A tuple of Tensors (key, value).
- key: A string scalar Tensor.
- value: A string scalar Tensor.
### read_up_to
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L173-L209)


```
 read_up_to(
    queue,
    num_records,
    name=None
)
```
Returns up to num_records (key, value) pairs produced by a reader.
Will dequeue a work unit from queue if necessary (e.g., when the Reader needs to start reading from a new file since it has finished with the previous file). It may return less than num_records even before the last batch.
#### Args:
- queue: A Queue or a mutable string Tensor representing a handle to a Queue, with string work items.
- num_records: Number of records to read.
- name: A name for the operation (optional).
#### Returns:
A tuple of Tensors (keys, values).
- keys: A 1-D string Tensor.
- values: A 1-D string Tensor.
### reset
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L289-L301)


```
 reset(name=None)
```
Restore a reader to its initial clean state.
#### Args:
- name: A name for the operation (optional).
#### Returns:
The created Operation.
### restore_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L264-L282)


```
 restore_state(
    state,
    name=None
)
```
Restore a reader to a previously saved state.
Not all Readers support being restored, so this can produce an Unimplemented error.
#### Args:
- state: A string Tensor. Result of a SerializeState of a Reader with matching type.
- name: A name for the operation (optional).
#### Returns:
The created Operation.
### serialize_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/io_ops.py#L247-L262)


```
 serialize_state(name=None)
```
Produce a string tensor that encodes the state of a reader.
Not all Readers support being serialized, so this can produce an Unimplemented error.
#### Args:
- name: A name for the operation (optional).
#### Returns:
A string Tensor.
