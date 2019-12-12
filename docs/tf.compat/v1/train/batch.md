Creates batches of tensors in  `tensors` . (deprecated)

```
 tf.compat.v1.train.batch(    tensors,    batch_size,    num_threads=1,    capacity=32,    enqueue_many=False,    shapes=None,    dynamic_pad=False,    allow_smaller_final_batch=False,    shared_name=None,    name=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use [ `tf.data.Dataset.batch(batch_size)` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#batch) (or  `padded_batch(...)`  if  `dynamic_pad=True` ).
The argument  `tensors`  can be a list or a dictionary of tensors.The value returned by the function will be of the same typeas  `tensors` .

This function is implemented using a queue. A  `QueueRunner`  for thequeue is added to the current  `Graph` 's  `QUEUE_RUNNER`  collection.

If  `enqueue_many`  is  `False` ,  `tensors`  is assumed to represent a singleexample.  An input tensor with shape  `[x, y, z]`  will be output as a tensorwith shape  `[batch_size, x, y, z]` .

If  `enqueue_many`  is  `True` ,  `tensors`  is assumed to represent a batch ofexamples, where the first dimension is indexed by example, and all members of `tensors`  should have the same size in the first dimension.  If an inputtensor has shape  `[*, x, y, z]` , the output will have shape  `[batch_size, x,y, z]` .  The  `capacity`  argument controls the how long the prefetching isallowed to grow the queues.

The returned operation is a dequeue operation and will throw[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) if the input queue is exhausted. If thisoperation is feeding another input queue, its queue runner will catchthis exception, however, if this operation is used in your main threadyou are responsible for catching this yourself.

*N.B.:* If  `dynamic_pad`  is  `False` , you must ensure that either(i) the  `shapes`  argument is passed, or (ii) all of the tensors in `tensors`  must have fully-defined shapes.  `ValueError`  will beraised if neither of these conditions holds.

If  `dynamic_pad`  is  `True` , it is sufficient that the *rank* of thetensors is known, but individual dimensions may have shape  `None` .In this case, for each enqueue the dimensions with value  `None` may have a variable length; upon dequeue, the output tensors will be paddedon the right to the maximum shape of the tensors in the current minibatch.For numbers, this padding takes value 0.  For strings, this padding isthe empty string.  See  `PaddingFIFOQueue`  for more info.

If  `allow_smaller_final_batch`  is  `True` , a smaller batch value than `batch_size`  is returned when the queue is closed and there are not enoughelements to fill the batch, otherwise the pending elements are discarded.In addition, all output tensors' static shapes, as accessed via the `shape`  property will have a first  `Dimension`  value of  `None` , andoperations that depend on fixed batch_size would fail.

#### Args:
- **`tensors`** : The list or dictionary of tensors to enqueue.
- **`batch_size`** : The new batch size pulled from the queue.
- **`num_threads`** : The number of threads enqueuing  `tensors` .  The batching willbe nondeterministic if  `num_threads > 1` .
- **`capacity`** : An integer. The maximum number of elements in the queue.
- **`enqueue_many`** : Whether each tensor in  `tensors`  is a single example.
- **`shapes`** : (Optional) The shapes for each example.  Defaults to theinferred shapes for  `tensors` .
- **`dynamic_pad`** : Boolean.  Allow variable dimensions in input shapes.The given dimensions are padded upon dequeue so that tensors within abatch have the same shapes.
- **`allow_smaller_final_batch`** : (Optional) Boolean. If  `True` , allow the finalbatch to be smaller if there are insufficient items left in the queue.
- **`shared_name`** : (Optional). If set, this queue will be shared under the givenname across multiple sessions.
- **`name`** : (Optional) A name for the operations.


#### Returns:
A list or dictionary of tensors with the same types as  `tensors`  (except ifthe input is a list of one element, then it returns a tensor, not a list).

#### Raises:
- **`ValueError`** : If the  `shapes`  are not specified, and cannot beinferred from the elements of  `tensors` .


#### Eager Compatibility
Input pipelines based on Queues are not supported when eager execution isenabled. Please use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API to ingest data under eager execution.

