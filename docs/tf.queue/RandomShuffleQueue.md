

## Class  `RandomShuffleQueue` 
按随机顺序对元素进行出列的队列实现。

Inherits From: [ `QueueBase` ](https://tensorflow.google.cn/api_docs/python/tf/queue/QueueBase)

**别名** : [ `tf.compat.v1.RandomShuffleQueue` ](/api_docs/python/tf/queue/RandomShuffleQueue), [ `tf.compat.v1.io.RandomShuffleQueue` ](/api_docs/python/tf/queue/RandomShuffleQueue), [ `tf.compat.v1.queue.RandomShuffleQueue` ](/api_docs/python/tf/queue/RandomShuffleQueue), [ `tf.compat.v2.queue.RandomShuffleQueue` ](/api_docs/python/tf/queue/RandomShuffleQueue)

See [ `tf.queue.QueueBase` ](https://tensorflow.google.cn/api_docs/python/tf/queue/QueueBase) for a description of the methods onthis class.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L633-L707)

```
 __init__(
    capacity,
    min_after_dequeue,
    dtypes,
    shapes=None,
    names=None,
    seed=None,
    shared_name=None,
    name='random_shuffle_queue'
)
 
```

创建一个队列，以随机顺序将元素出列。

A  `RandomShuffleQueue`  has bounded capacity; supports multipleconcurrent producers and consumers; and provides exactly-oncedelivery.

A  `RandomShuffleQueue`  holds a list of up to  `capacity` elements. Each element is a fixed-length tuple of tensors whosedtypes are described by  `dtypes` , and whose shapes are optionallydescribed by the  `shapes`  argument.

If the  `shapes`  argument is specified, each component of a queueelement must have the respective fixed shape. If it isunspecified, different queue elements may have different shapes,but the use of  `dequeue_many`  is disallowed.

The  `min_after_dequeue`  argument allows the caller to specify aminimum number of elements that will remain in the queue after a `dequeue`  or  `dequeue_many`  operation completes, to ensure aminimum level of mixing of elements. This invariant is maintainedby blocking those operations until sufficient elements have beenenqueued. The  `min_after_dequeue`  argument is ignored after thequeue has been closed.

#### 参数：
- **`capacity`** : An integer. The upper bound on the number of elementsthat may be stored in this queue.
- **`min_after_dequeue`** : An integer (described above).
- **`dtypes`** :  A list of  `DType`  objects. The length of  `dtypes`  must equalthe number of tensors in each queue element.
- **`shapes`** : (Optional.) A list of fully-defined  `TensorShape`  objectswith the same length as  `dtypes` , or  `None` .
- **`names`** : (Optional.) A list of string naming the components in the queuewith the same length as  `dtypes` , or  `None` .  If specified the dequeuemethods return a dictionary with the names as keys.
- **`seed`** : A Python integer. Used to create a random seed. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.
- **`shared_name`** : (Optional.) If non-empty, this queue will be shared underthe given name across multiple sessions.
- **`name`** : Optional name for the queue operation.


## 属性


###  `dtypes` 
队列元素每个组件的数据类型列表。

###  `name` 
基础队列的名称。

###  `names` 
队列元素的每个组件的名称列表。

###  `queue_ref` 
基础队列引用。

###  `shapes` 
队列元素每个组件的形状列表。

## 方法


###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L544-L577)

```
 close(
    cancel_pending_enqueues=False,
    name=None
)
 
```

关闭此队列。

This operation signals that no more elements will be enqueued inthe given queue. Subsequent  `enqueue`  and  `enqueue_many` operations will fail. Subsequent  `dequeue`  and  `dequeue_many` operations will continue to succeed if sufficient elements remainin the queue. Subsequently dequeue and dequeue_many operationsthat would otherwise block waiting for more elements (if closehadn't been called) will now fail immediately.

If  `cancel_pending_enqueues`  is  `True` , all pending requests will alsobe canceled.

#### 参数：
- **`cancel_pending_enqueues`** : (Optional.) A boolean, defaulting to `False`  (described above).
- **`name`** : A name for the operation (optional).


#### 返回：
关闭队列的操作。

###  `dequeue` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L422-L458)

```
 dequeue(name=None)
 
```

将此队列中的一个元素出列。

If the queue is empty when this operation executes, it will blockuntil there is an element to dequeue.

At runtime, this operation may raise an error if the queue is `tf.QueueBase.close`  before or during its execution. If thequeue is closed, the queue is empty, and there are no pendingenqueue operations that can fulfill this request,[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) will be raised. If the session is `tf.Session.close` ,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised.

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
出列的二元组张量。

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

#### 参数：
- **`n`** : A scalar  `Tensor`  containing the number of elements to dequeue.
- **`name`** : A name for the operation (optional).


#### 返回：
已出列的连接张量列表。

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

#### 参数：
- **`n`** : A scalar  `Tensor`  containing the number of elements to dequeue.
- **`name`** : A name for the operation (optional).


#### 返回：
已出列的连接张量的元组。

###  `enqueue` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L312-L349)

```
 enqueue(
    vals,
    name=None
)
 
```

将一个元素排入此队列。

If the queue is full when this operation executes, it will blockuntil the element has been enqueued.

At runtime, this operation may raise an error if the queue is `tf.QueueBase.close`  before or during its execution. If thequeue is closed before this operation runs,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised. If this operation isblocked, and either (i) the queue is closed by a close operationwith  `cancel_pending_enqueues=True` , or (ii) the session is `tf.Session.close` ,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised.

#### 参数：
- **`vals`** : A tensor, a list or tuple of tensors, or a dictionary containingthe values to enqueue.
- **`name`** : A name for the operation (optional).


#### 返回：
将一个新的张量元组排列到队列中的操作。

###  `enqueue_many` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L351-L397)

```
 enqueue_many(
    vals,
    name=None
)
 
```

将零个或多个元素排入此队列。

This operation slices each component tensor along the 0th dimension tomake multiple queue elements. All of the tensors in  `vals`  must have thesame size in the 0th dimension.

If the queue is full when this operation executes, it will blockuntil all of the elements have been enqueued.

At runtime, this operation may raise an error if the queue is `tf.QueueBase.close`  before or during its execution. If thequeue is closed before this operation runs,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised. If this operation isblocked, and either (i) the queue is closed by a close operationwith  `cancel_pending_enqueues=True` , or (ii) the session is `tf.Session.close` ,[ `tf.errors.CancelledError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/CancelledError) will be raised.

#### 参数：
- **`vals`** : A tensor, a list or tuple of tensors, or a dictionaryfrom which the queue elements are taken.
- **`name`** : A name for the operation (optional).


#### 返回：
将一批张量元组排队到队列中的操作。

###  `from_list` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L185-L224)

```
 from_list(
    index,
    queues
)
 
```

Create a queue using the queue reference from  `queues[index]` .

#### 参数：
- **`index`** : An integer scalar tensor that determines the input that getsselected.
- **`queues`** : A list of  `QueueBase`  objects.


#### 返回：
A  `QueueBase`  object.

#### 加薪：
- **`TypeError`** : When  `queues`  is not a list of  `QueueBase`  objects,or when the data types of  `queues`  are not all the same.


###  `is_closed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L579-L596)

```
 is_closed(name=None)
 
```

如果队列已关闭，则返回true。

This operation returns true if the queue is closed and false if the queueis open.

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
如果队列已关闭，则为true；如果队列已打开，则为false。

###  `size` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L598-L612)

```
 size(name=None)
 
```

计算此队列中的元素数。

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
包含此队列中元素数的标量张量。

