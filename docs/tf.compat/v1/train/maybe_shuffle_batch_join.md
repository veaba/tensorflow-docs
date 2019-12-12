Create batches by randomly shuffling conditionally-enqueued tensors. (deprecated)

```
 tf.compat.v1.train.maybe_shuffle_batch_join(
    tensors_list,
    batch_size,
    capacity,
    min_after_dequeue,
    keep_input,
    seed=None,
    enqueue_many=False,
    shapes=None,
    allow_smaller_final_batch=False,
    shared_name=None,
    name=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use  `tf.data.Dataset.interleave(...).filter(...).shuffle(min_after_dequeue).batch(batch_size)` .
See docstring in  `shuffle_batch_join`  for more details.

#### 参数：
- **`tensors_list`** : A list of tuples or dictionaries of tensors to enqueue.
- **`batch_size`** : An integer. The new batch size pulled from the queue.
- **`capacity`** : An integer. The maximum number of elements in the queue.
- **`min_after_dequeue`** : Minimum number elements in the queue after adequeue, used to ensure a level of mixing of elements.
- **`keep_input`** : A  `bool`  Tensor.  This tensor controls whether the input isadded to the queue or not.  If it is a scalar and evaluates  `True` , then `tensors`  are all added to the queue. If it is a vector and  `enqueue_many` is  `True` , then each example is added to the queue only if thecorresponding value in  `keep_input`  is  `True` . This tensor essentiallyacts as a filtering mechanism.
- **`seed`** : Seed for the random shuffling within the queue.
- **`enqueue_many`** : Whether each tensor in  `tensor_list_list`  is a singleexample.
- **`shapes`** : (Optional) The shapes for each example.  Defaults to theinferred shapes for  `tensors_list[i]` .
- **`allow_smaller_final_batch`** : (Optional) Boolean. If  `True` , allow the finalbatch to be smaller if there are insufficient items left in the queue.
- **`shared_name`** : (optional). If set, this queue will be shared under the givenname across multiple sessions.
- **`name`** : (Optional) A name for the operations.


#### 返回：
A list or dictionary of tensors with the same number and types as `tensors_list[i]` .

#### 加薪：
- **`ValueError`** : If the  `shapes`  are not specified, and cannot beinferred from the elements of  `tensors_list` .


#### 迫切的兼容性
Input pipelines based on Queues are not supported when eager execution isenabled. Please use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API to ingest data under eager execution.

