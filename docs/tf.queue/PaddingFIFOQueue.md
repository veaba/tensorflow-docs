

## Class  `PaddingFIFOQueue` 
A FIFOQueue that supports batching variable-sized tensors by padding.

Inherits From: [ `QueueBase` ](https://tensorflow.google.cn/api_docs/python/tf/queue/QueueBase)

**Aliases** : [ `tf.compat.v1.PaddingFIFOQueue` ](/api_docs/python/tf/queue/PaddingFIFOQueue), [ `tf.compat.v1.io.PaddingFIFOQueue` ](/api_docs/python/tf/queue/PaddingFIFOQueue), [ `tf.compat.v1.queue.PaddingFIFOQueue` ](/api_docs/python/tf/queue/PaddingFIFOQueue), [ `tf.compat.v2.queue.PaddingFIFOQueue` ](/api_docs/python/tf/queue/PaddingFIFOQueue)

A  `PaddingFIFOQueue`  may contain components with dynamic shape, while alsosupporting  `dequeue_many` .  See the constructor for more details.

See [ `tf.queue.QueueBase` ](https://tensorflow.google.cn/api_docs/python/tf/queue/QueueBase) for a description of the methods onthis class.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L782-L842)

```
 __init__(
    capacity,
    dtypes,
    shapes,
    names=None,
    shared_name=None,
    name='padding_fifo_queue'
)
 
```

Creates a queue that dequeues elements in a first-in first-out order.

A  `PaddingFIFOQueue`  has bounded capacity; supports multiple concurrentproducers and consumers; and provides exactly-once delivery.

A  `PaddingFIFOQueue`  holds a list of up to  `capacity`  elements. Eachelement is a fixed-length tuple of tensors whose dtypes aredescribed by  `dtypes` , and whose shapes are described by the  `shapes` argument.

The  `shapes`  argument must be specified; each component of a queueelement must have the respective shape.  Shapes of fixedrank but variable size are allowed by setting any shape dimension to None.In this case, the inputs' shape may vary along the given dimension, and `dequeue_many`  will pad the given dimension with zeros up to the maximumshape of all elements in the given batch.

#### Args:
- **`capacity`** : An integer. The upper bound on the number of elementsthat may be stored in this queue.
- **`dtypes`** :  A list of  `DType`  objects. The length of  `dtypes`  must equalthe number of tensors in each queue element.
- **`shapes`** : A list of  `TensorShape`  objects, with the same length as `dtypes` .  Any dimension in the  `TensorShape`  containing value `None`  is dynamic and allows values to be enqueued withvariable size in that dimension.
- **`names`** : (Optional.) A list of string naming the components in the queuewith the same length as  `dtypes` , or  `None` .  If specified the dequeuemethods return a dictionary with the names as keys.
- **`shared_name`** : (Optional.) If non-empty, this queue will be shared underthe given name across multiple sessions.
- **`name`** : Optional name for the queue operation.


#### Raises:
- **`ValueError`** : If shapes is not a list of shapes, or the lengths of dtypesand shapes do not match, or if names is specified and the lengths ofdtypes and names do not match.


## Properties


###  `dtypes` 
The list of dtypes for each component of a queue element.

###  `name` 
The name of the underlying queue.

###  `names` 
The list of names for each component of a queue element.

###  `queue_ref` 
The underlying queue reference.

###  `shapes` 
The list of shapes for each component of a queue element.

## Methods


###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L544-L577)

```
 close(
    cancel_pending_enqueues=False,
    name=None
)
 
```

Closes this queue.

This operation signals that no more elements will be enqueued inthe given queue. Subsequent  `enqueue`  and  `enqueue_many` operations will fail. Subsequent  `dequeue`  and  `dequeue_many` operations will continue to succeed if sufficient elements remainin the queue. Subsequently dequeue and dequeue_many operationsthat would otherwise block waiting for more elements (if closehadn't been called) will now fail immediately.

If  `cancel_pending_enqueues`  is  `True` , all pending requests will alsobe canceled.

#### Args:
- **`cancel_pending_enqueues`** : (Optional.) A boolean, defaulting to `False`  (described above).
- **`name`** : A name for the operation (optional).


#### Returns:
The operation that closes the queue.

###  `dequeue` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L422-L458)

```
 dequeue(name=None)
 
```

Dequeues one element from this queue.

If the queue is empty when this operation executes, it will blockuntil there is an element to dequeue.

At runtime, this operation may raise an error if the queue is `tf.QueueBase.close`  before or during its execution. If thequeue is closed, the queue is empty, and there are no pendingenqueue operations that can fulfill this request,[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) will be raised. If the session is `tf.Session.close` ,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised.

#### Args:
- **`name`** : A name for the operation (optional).


#### Returns:
The tuple of tensors that was dequeued.

###  `dequeue_many` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L460-L501)

```
 dequeue_many(
    n,
    name=None
)
 
```

Dequeues and concatenates  `n`  elements from this queue.

This operation concatenates queue-element component tensors alongthe 0th dimension to make a single component tensor.  All of thecomponents in the dequeued tuple will have size  `n`  in the 0th dimension.

If the queue is closed and there are less than  `n`  elements left, then an `OutOfRange`  exception is raised.

At runtime, this operation may raise an error if the queue is `tf.QueueBase.close`  before or during its execution. If thequeue is closed, the queue contains fewer than  `n`  elements, andthere are no pending enqueue operations that can fulfill thisrequest, [ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) will be raised. If thesession is  `tf.Session.close` ,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised.

#### Args:
- **`n`** : A scalar  `Tensor`  containing the number of elements to dequeue.
- **`name`** : A name for the operation (optional).


#### Returns:
The list of concatenated tensors that was dequeued.

###  `dequeue_up_to` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L503-L542)

```
 dequeue_up_to(
    n,
    name=None
)
 
```

Dequeues and concatenates  `n`  elements from this queue.

**Note**  This operation is not supported by all queues.  If a queue does notsupport DequeueUpTo, then a [ `tf.errors.UnimplementedError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/UnimplementedError) is raised.

This operation concatenates queue-element component tensors alongthe 0th dimension to make a single component tensor. If the queuehas not been closed, all of the components in the dequeued tuplewill have size  `n`  in the 0th dimension.

If the queue is closed and there are more than  `0`  but fewer than `n`  elements remaining, then instead of raising a[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) like  `tf.QueueBase.dequeue_many` ,less than  `n`  elements are returned immediately.  If the queue isclosed and there are  `0`  elements left in the queue, then a[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) is raised just like in  `dequeue_many` .Otherwise the behavior is identical to  `dequeue_many` .

#### Args:
- **`n`** : A scalar  `Tensor`  containing the number of elements to dequeue.
- **`name`** : A name for the operation (optional).


#### Returns:
The tuple of concatenated tensors that was dequeued.

###  `enqueue` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L312-L349)

```
 enqueue(
    vals,
    name=None
)
 
```

Enqueues one element to this queue.

If the queue is full when this operation executes, it will blockuntil the element has been enqueued.

At runtime, this operation may raise an error if the queue is `tf.QueueBase.close`  before or during its execution. If thequeue is closed before this operation runs,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised. If this operation isblocked, and either (i) the queue is closed by a close operationwith  `cancel_pending_enqueues=True` , or (ii) the session is `tf.Session.close` ,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised.

#### Args:
- **`vals`** : A tensor, a list or tuple of tensors, or a dictionary containingthe values to enqueue.
- **`name`** : A name for the operation (optional).


#### Returns:
The operation that enqueues a new tuple of tensors to the queue.

###  `enqueue_many` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L351-L397)

```
 enqueue_many(
    vals,
    name=None
)
 
```

Enqueues zero or more elements to this queue.

This operation slices each component tensor along the 0th dimension tomake multiple queue elements. All of the tensors in  `vals`  must have thesame size in the 0th dimension.

If the queue is full when this operation executes, it will blockuntil all of the elements have been enqueued.

At runtime, this operation may raise an error if the queue is `tf.QueueBase.close`  before or during its execution. If thequeue is closed before this operation runs,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised. If this operation isblocked, and either (i) the queue is closed by a close operationwith  `cancel_pending_enqueues=True` , or (ii) the session is `tf.Session.close` ,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised.

#### Args:
- **`vals`** : A tensor, a list or tuple of tensors, or a dictionaryfrom which the queue elements are taken.
- **`name`** : A name for the operation (optional).


#### Returns:
The operation that enqueues a batch of tuples of tensors to the queue.

###  `from_list` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L185-L224)

```
 from_list(
    index,
    queues
)
 
```

Create a queue using the queue reference from  `queues[index]` .

#### Args:
- **`index`** : An integer scalar tensor that determines the input that getsselected.
- **`queues`** : A list of  `QueueBase`  objects.


#### Returns:
A  `QueueBase`  object.

#### Raises:
- **`TypeError`** : When  `queues`  is not a list of  `QueueBase`  objects,or when the data types of  `queues`  are not all the same.


###  `is_closed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L579-L596)

```
 is_closed(name=None)
 
```

Returns true if queue is closed.

This operation returns true if the queue is closed and false if the queueis open.

#### Args:
- **`name`** : A name for the operation (optional).


#### Returns:
True if the queue is closed and false if the queue is open.

###  `size` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L598-L612)

```
 size(name=None)
 
```

Compute the number of elements in this queue.

#### Args:
- **`name`** : A name for the operation (optional).


#### Returns:
A scalar tensor containing the number of elements in this queue.

