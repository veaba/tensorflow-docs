Creates batches by randomly shuffling tensors. (deprecated)

```
 tf.compat.v1.train.shuffle_batch(    tensors,    batch_size,    capacity,    min_after_dequeue,    num_threads=1,    seed=None,    enqueue_many=False,    shapes=None,    allow_smaller_final_batch=False,    shared_name=None,    name=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use  `tf.data.Dataset.shuffle(min_after_dequeue).batch(batch_size)` .
This function adds the following to the current  `Graph` :

- A shuffling queue into which tensors from  `tensors`  are enqueued.
- A  `dequeue_many`  operation to create batches from the queue.
- A  `QueueRunner`  to  `QUEUE_RUNNER`  collection, to enqueue the tensorsfrom  `tensors` .
If  `enqueue_many`  is  `False` ,  `tensors`  is assumed to represent asingle example.  An input tensor with shape  `[x, y, z]`  will be outputas a tensor with shape  `[batch_size, x, y, z]` .

If  `enqueue_many`  is  `True` ,  `tensors`  is assumed to represent abatch of examples, where the first dimension is indexed by example,and all members of  `tensors`  should have the same size in thefirst dimension.  If an input tensor has shape  `[*, x, y, z]` , theoutput will have shape  `[batch_size, x, y, z]` .

The  `capacity`  argument controls the how long the prefetching is allowed togrow the queues.

The returned operation is a dequeue operation and will throw[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError) if the input queue is exhausted. If thisoperation is feeding another input queue, its queue runner will catchthis exception, however, if this operation is used in your main threadyou are responsible for catching this yourself.

#### 例如：


```
 # Creates batches of 32 images and 32 labels.
image_batch, label_batch = tf.compat.v1.train.shuffle_batch(
      [single_image, single_label],
      batch_size=32,
      num_threads=4,
      capacity=50000,
      min_after_dequeue=10000)
 
```

*N.B.:* You must ensure that either (i) the  `shapes`  argument ispassed, or (ii) all of the tensors in  `tensors`  must havefully-defined shapes.  `ValueError`  will be raised if neither ofthese conditions holds.

If  `allow_smaller_final_batch`  is  `True` , a smaller batch value than `batch_size`  is returned when the queue is closed and there are not enoughelements to fill the batch, otherwise the pending elements are discarded.In addition, all output tensors' static shapes, as accessed via the `shape`  property will have a first  `Dimension`  value of  `None` , andoperations that depend on fixed batch_size would fail.

#### 参数：
- **`tensors`** : The list or dictionary of tensors to enqueue.
- **`batch_size`** : The new batch size pulled from the queue.
- **`capacity`** : An integer. The maximum number of elements in the queue.
- **`min_after_dequeue`** : Minimum number elements in the queue after adequeue, used to ensure a level of mixing of elements.
- **`num_threads`** : The number of threads enqueuing  `tensor_list` .
- **`seed`** : Seed for the random shuffling within the queue.
- **`enqueue_many`** : Whether each tensor in  `tensor_list`  is a single example.
- **`shapes`** : (Optional) The shapes for each example.  Defaults to theinferred shapes for  `tensor_list` .
- **`allow_smaller_final_batch`** : (Optional) Boolean. If  `True` , allow the finalbatch to be smaller if there are insufficient items left in the queue.
- **`shared_name`** : (Optional) If set, this queue will be shared under the givenname across multiple sessions.
- **`name`** : (Optional) A name for the operations.


#### 返回：
A list or dictionary of tensors with the types as  `tensors` .

#### 加薪：
- **`ValueError`** : If the  `shapes`  are not specified, and cannot beinferred from the elements of  `tensors` .


#### 迫切的兼容性
Input pipelines based on Queues are not supported when eager execution isenabled. Please use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API to ingest data under eager execution.

