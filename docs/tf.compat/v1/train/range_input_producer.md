Produces the integers from 0 to limit-1 in a queue. (deprecated)



```
 tf.compat.v1.train.range_input_producer(
    limit,
    num_epochs=None,
    shuffle=True,
    seed=None,
    capacity=32,
    shared_name=None,
    name=None
)
 
```


<aside class="warning">**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.
Instructions for updating:
Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use  `tf.data.Dataset.range(limit).shuffle(limit).repeat(num_epochs)` . If  `shuffle=False` , omit the  `.shuffle(...)` .</aside>

<aside class="note">**Note:**  if  `num_epochs`  is not  `None` , this function creates local counter
 `epochs` . Use  `local_variables_initializer()`  to initialize local variables.</aside>


#### Args:

- **`limit`** : An int32 scalar tensor.

- **`num_epochs`** : An integer (optional). If specified,  `range_input_producer` 
produces each integer  `num_epochs`  times before generating an
OutOfRange error. If not specified,  `range_input_producer`  can cycle
through the integers an unlimited number of times.

- **`shuffle`** : Boolean. If true, the integers are randomly shuffled within each
epoch.

- **`seed`** : An integer (optional). Seed used if shuffle == True.

- **`capacity`** : An integer. Sets the queue capacity.

- **`shared_name`** : (optional). If set, this queue will be shared under the given
name across multiple sessions.

- **`name`** : A name for the operations (optional).



#### Returns:
A Queue with the output integers.  A  `QueueRunner`  for the Queue
is added to the current  `Graph` 's  `QUEUE_RUNNER`  collection.



#### Eager Compatibility
Input pipelines based on Queues are not supported when eager execution is
enabled. Please use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API to ingest data under eager execution.

