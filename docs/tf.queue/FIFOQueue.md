## Class FIFOQueue
A queue implementation that dequeues elements in first-in first-out order.
Inherits From: `QueueBase`
### Aliases:
- Class `tf.compat.v1.FIFOQueue`
- Class `tf.compat.v1.queue.FIFOQueue`
- Class `tf.compat.v2.queue.FIFOQueue`
See `tf.queue.QueueBase` for a description of the methods on this class.
## __init__
View source

```
 __init__(
    capacity,
    dtypes,
    shapes=None,
    names=None,
    shared_name=None,
    name='fifo_queue'
)
```
Creates a queue that dequeues elements in a first-in first-out order.
A `FIFOQueue` has bounded capacity; supports multiple concurrent producers and consumers; and provides exactly-once delivery.
A `FIFOQueue` holds a list of up to `capacity` elements. Each element is a fixed-length tuple of tensors whose `dtypes` are described by `dtypes`, and whose `shapes` are optionally described by the `shapes` argument.
If the `shapes` argument is specified, each component of a queue element must have the respective fixed shape. If it is unspecified, different queue elements may have different `shapes`, but the use of `dequeue_many` is disallowed.
#### Args:
- `capacity`: An integer. The upper bound on the number of elements that may be stored in this queue.
- `dtypes`: A list of `DType` objects. The length of `dtypes` must equal the number of tensors in each queue element.
- `shapes`: (Optional.) A list of fully-defined `TensorShape` objects with the same length as `dtypes`, or `None`.
- `names`: (Optional.) A list of string naming the components in the queue with the same length as `dtypes`, or `None`. If specified the dequeue methods return a dictionary with the `names` as keys.
- `shared_name`: (Optional.) If non-empty, this queue will be shared under the given name across multiple sessions.
- `name`: Optional `name` for the queue operation.
## Properties
### dtypes
The list of dtypes for each component of a queue element.
### name
The name of the underlying queue.
### names
The list of names for each component of a queue element.
### queue_ref
The underlying queue reference.
### shapes
The list of shapes for each component of a queue element.
## Methods
### close
View source

```
 close(
    cancel_pending_enqueues=False,
    name=None
)
```
Closes this queue.
This operation signals that no more elements will be `enqueue`d in the given queue. Subsequent `enqueue` and `enqueue`_many operations will fail. Subsequent `dequeue` and `dequeue`_many operations will continue to succeed if sufficient elements remain in the queue. Subsequently `dequeue` and `dequeue`_many operations that would otherwise block waiting for more elements (if close hadn't been called) will now fail immediately.
If `cancel_pending_enqueues` is `True`, all pending requests will also be canceled.
#### Args:
- `cancel_pending_enqueues`: (Optional.) A boolean, defaulting to `False` (described above).
- `name`: A `name` for the operation (optional).
#### Returns:
The operation that closes the queue.
### dequeue
View source

```
 dequeue(name=None)
```
Dequeues one element from this queue.
If the queue is empty when this operation executes, it will block until there is an element to dequeue.
At runtime, this operation may raise an error if the queue is `tf.QueueBase.close` before or during its execution. If the queue is closed, the queue is empty, and there are no pending enqueue operations that can fulfill this request, `tf.errors.OutOfRangeError` will be raised. If the session is `tf.Session.close`, `tf.errors.CancelledError` will be raised.
#### Args:
- `name`: A `name` for the operation (optional).
#### Returns:
The tuple of tensors that was dequeued.
### dequeue_many
View source

```
 dequeue_many(
    n,
    name=None
)
```
Dequeues a`n`d co`n`cate`n`ates `n` eleme`n`ts from this queue.
This operatio`n` co`n`cate`n`ates queue-eleme`n`t compo`n`e`n`t te`n`sors alo`n`g the 0th dime`n`sio`n` to make a si`n`gle compo`n`e`n`t te`n`sor. All of the compo`n`e`n`ts i`n` the dequeued tuple will have size `n` i`n` the 0th dime`n`sio`n`.
If the queue is closed a`n`d there are less tha`n` `n` eleme`n`ts left, the`n` a`n` `OutOfRange` exceptio`n` is raised.
At ru`n`time, this operatio`n` may raise a`n` error if the queue is `tf.QueueBase.close` before or duri`n`g its executio`n`. If the queue is closed, the queue co`n`tai`n`s fewer tha`n` `n` eleme`n`ts, a`n`d there are `n`o pe`n`di`n`g e`n`queue operatio`n`s that ca`n` fulfill this request, `tf.errors.OutOfRangeError` will be raised. If the sessio`n` is `tf.Session.close`, `tf.errors.CancelledError` will be raised.
#### Args:
- `n`: A scalar `Tensor` co`n`tai`n`i`n`g the `n`umber of eleme`n`ts to dequeue.
- `name`: A `name` for the operation (optional).
#### Returns:
The list of concatenated tensors that was dequeued.
### dequeue_up_to
View source

```
 dequeue_up_to(
    n,
    name=None
)
```
Dequeues a`n`d co`n`cate`n`ates `n` eleme`n`ts from this queue.
Note This operation is not supported by all queues. If a queue does not support DequeueUpTo, then a `tf.errors.UnimplementedError` is raised.
This operatio`n` co`n`cate`n`ates queue-eleme`n`t compo`n`e`n`t te`n`sors alo`n`g the 0th dime`n`sio`n` to make a si`n`gle compo`n`e`n`t te`n`sor. If the queue has `n`ot bee`n` closed, all of the compo`n`e`n`ts i`n` the dequeued tuple will have size `n` i`n` the 0th dime`n`sio`n`.
If the queue is closed a`n`d there are more tha`n` `0` but fewer tha`n` `n` eleme`n`ts remai`n`i`n`g, the`n` i`n`stead of raisi`n`g a `tf.errors.OutOfRangeError` like `tf.QueueBase.dequeue_many`, less tha`n` `n` eleme`n`ts are retur`n`ed immediately. If the queue is closed a`n`d there are `0` eleme`n`ts left i`n` the queue, the`n` a `tf.errors.OutOfRangeError` is raised just like i`n` `dequeue_many`. Otherwise the behavior is ide`n`tical to `dequeue_many`.
#### Args:
- `n`: A scalar `Tensor` co`n`tai`n`i`n`g the `n`umber of eleme`n`ts to dequeue.
- `name`: A `name` for the operation (optional).
#### Returns:
The tuple of concatenated tensors that was dequeued.
### enqueue
View source

```
 enqueue(
    vals,
    name=None
)
```
Enqueues one element to this queue.
If the queue is full when this operation executes, it will block until the element has been enqueued.
At runtime, this operation may raise an error if the queue is `tf.QueueBase.close` before or during its execution. If the queue is closed before this operation runs, `tf.errors.CancelledError` will be raised. If this operation is blocked, and either (i) the queue is closed by a close operation with `cancel_pending_enqueues=True`, or (ii) the session is `tf.Session.close`, `tf.errors.CancelledError` will be raised.
#### Args:
- `vals`: A tensor, a list or tuple of tensors, or a dictionary containing the values to enqueue.
- `name`: A `name` for the operation (optional).
#### Returns:
The operation that enqueues a new tuple of tensors to the queue.
### enqueue_many
View source

```
 enqueue_many(
    vals,
    name=None
)
```
Enqueues zero or more elements to this queue.
This operation slices each component tensor along the 0th dimension to make multiple queue elements. All of the tensors in `vals` must have the same size in the 0th dimension.
If the queue is full when this operation executes, it will block until all of the elements have been enqueued.
At runtime, this operation may raise an error if the queue is `tf.QueueBase.close` before or during its execution. If the queue is closed before this operation runs, `tf.errors.CancelledError` will be raised. If this operation is blocked, and either (i) the queue is closed by a close operation with `cancel_pending_enqueues=True`, or (ii) the session is `tf.Session.close`, `tf.errors.CancelledError` will be raised.
#### Args:
- `vals`: A tensor, a list or tuple of tensors, or a dictionary from which the queue elements are taken.
- `name`: A `name` for the operation (optional).
#### Returns:
The operation that enqueues a batch of tuples of tensors to the queue.
### from_list
View source

```
 from_list(
    index,
    queues
)
```
Create a queue using the queue reference from `queues[index]`.
#### Args:
- `index`: An integer scalar tensor that determines the input that gets selected.
- `queues`: A list of `QueueBase` objects.
#### Returns:
A `QueueBase` object.
#### Raises:
- `TypeError`: When `queues` is not a list of `QueueBase` objects, or when the data types of `queues` are not all the same.
### is_closed
View source

```
 is_closed(name=None)
```
Returns true if queue is closed.
This operation returns true if the queue is closed and false if the queue is open.
#### Args:
- `name`: A `name` for the operation (optional).
#### Returns:
True if the queue is closed and false if the queue is open.
### size
View source

```
 size(name=None)
```
Compute the number of elements in this queue.
#### Args:
- `name`: A `name` for the operation (optional).
#### Returns:
A scalar tensor containing the number of elements in this queue.
