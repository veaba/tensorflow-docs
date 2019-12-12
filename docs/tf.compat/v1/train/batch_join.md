Runs a list of tensors to fill a queue to create batches of examples. (deprecated)

```
 tf.compat.v1.train.batch_join(
    tensors_list,
    batch_size,
    capacity=32,
    enqueue_many=False,
    shapes=None,
    dynamic_pad=False,
    allow_smaller_final_batch=False,
    shared_name=None,
    name=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use  `tf.data.Dataset.interleave(...).batch(batch_size)`  (or  `padded_batch(...)`  if  `dynamic_pad=True` ).
The  `tensors_list`  argument is a list of tuples of tensors, or a list ofdictionaries of tensors.  Each element in the list is treated similarlyto the  `tensors`  argument of [ `tf.compat.v1.train.batch()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/batch).

WARNING: This function is nondeterministic, since it starts a separate threadfor each tensor.

Enqueues a different list of tensors in different threads.Implemented using a queue -- a  `QueueRunner`  for the queueis added to the current  `Graph` 's  `QUEUE_RUNNER`  collection.

 `len(tensors_list)`  threads will be started,with thread  `i`  enqueuing the tensors from `tensors_list[i]` .  `tensors_list[i1][j]`  must match `tensors_list[i2][j]`  in type and shape, except in the firstdimension if  `enqueue_many`  is true.

If  `enqueue_many`  is  `False` , each  `tensors_list[i]`  is assumedto represent a single example. An input tensor  `x`  will be output as atensor with shape  `[batch_size] + x.shape` .

If  `enqueue_many`  is  `True` ,  `tensors_list[i]`  is assumed torepresent a batch of examples, where the first dimension is indexedby example, and all members of  `tensors_list[i]`  should have thesame size in the first dimension.  The slices of any input tensor `x`  are treated as examples, and the output tensors will have shape `[batch_size] + x.shape[1:]` .

The  `capacity`  argument controls the how long the prefetching is allowed togrow the queues.

The returned operation is a dequeue operation and will throw[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) if the input queue is exhausted. If thisoperation is feeding another input queue, its queue runner will catchthis exception, however, if this operation is used in your main threadyou are responsible for catching this yourself.

*N.B.:* If  `dynamic_pad`  is  `False` , you must ensure that either(i) the  `shapes`  argument is passed, or (ii) all of the tensors in `tensors_list`  must have fully-defined shapes.  `ValueError`  will beraised if neither of these conditions holds.

If  `dynamic_pad`  is  `True` , it is sufficient that the *rank* of thetensors is known, but individual dimensions may have value  `None` .In this case, for each enqueue the dimensions with value  `None` may have a variable length; upon dequeue, the output tensors will be paddedon the right to the maximum shape of the tensors in the current minibatch.For numbers, this padding takes value 0.  For strings, this padding isthe empty string.  See  `PaddingFIFOQueue`  for more info.

If  `allow_smaller_final_batch`  is  `True` , a smaller batch value than `batch_size`  is returned when the queue is closed and there are not enoughelements to fill the batch, otherwise the pending elements are discarded.In addition, all output tensors' static shapes, as accessed via the `shape`  property will have a first  `Dimension`  value of  `None` , andoperations that depend on fixed batch_size would fail.

#### 参数：
- **`tensors_list`** : A list of tuples or dictionaries of tensors to enqueue.
- **`batch_size`** : An integer. The new batch size pulled from the queue.
- **`capacity`** : An integer. The maximum number of elements in the queue.
- **`enqueue_many`** : Whether each tensor in  `tensor_list_list`  is a singleexample.
- **`shapes`** : (Optional) The shapes for each example.  Defaults to theinferred shapes for  `tensor_list_list[i]` .
- **`dynamic_pad`** : Boolean.  Allow variable dimensions in input shapes.The given dimensions are padded upon dequeue so that tensors within abatch have the same shapes.
- **`allow_smaller_final_batch`** : (Optional) Boolean. If  `True` , allow the finalbatch to be smaller if there are insufficient items left in the queue.
- **`shared_name`** : (Optional) If set, this queue will be shared under the givenname across multiple sessions.
- **`name`** : (Optional) A name for the operations.


#### 返回：
A list or dictionary of tensors with the same number and types as `tensors_list[i]` .

#### 加薪：
- **`ValueError`** : If the  `shapes`  are not specified, and cannot beinferred from the elements of  `tensor_list_list` .


#### 迫切的兼容性
Input pipelines based on Queues are not supported when eager execution isenabled. Please use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API to ingest data under eager execution.

