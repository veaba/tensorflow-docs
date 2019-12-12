Output the rows of  `input_tensor`  to a queue for an input pipeline. (deprecated)

```
 tf.compat.v1.train.input_producer(
    input_tensor,
    element_shape=None,
    num_epochs=None,
    shuffle=True,
    seed=None,
    capacity=32,
    shared_name=None,
    summary_name=None,
    name=None,
    cancel_op=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use  `tf.data.Dataset.from_tensor_slices(input_tensor).shuffle(tf.shape(input_tensor, out_type=tf.int64)[0]).repeat(num_epochs)` . If  `shuffle=False` , omit the  `.shuffle(...)` .

**Note:**  if  `num_epochs`  is not  `None` , this function creates local counter `epochs` . Use  `local_variables_initializer()`  to initialize local variables.


#### Args:
- **`input_tensor`** : A tensor with the rows to produce. Must be at leastone-dimensional. Must either have a fully-defined shape, or `element_shape`  must be defined.
- **`element_shape`** : (Optional.) A  `TensorShape`  representing the shape of arow of  `input_tensor` , if it cannot be inferred.
- **`num_epochs`** : (Optional.) An integer. If specified  `input_producer`  produceseach row of  `input_tensor`   `num_epochs`  times before generating an `OutOfRange`  error. If not specified,  `input_producer`  can cycle throughthe rows of  `input_tensor`  an unlimited number of times.
- **`shuffle`** : (Optional.) A boolean. If true, the rows are randomly shuffledwithin each epoch.
- **`seed`** : (Optional.) An integer. The seed to use if  `shuffle`  is true.
- **`capacity`** : (Optional.) The capacity of the queue to be used for bufferingthe input.
- **`shared_name`** : (Optional.) If set, this queue will be shared under the givenname across multiple sessions.
- **`summary_name`** : (Optional.) If set, a scalar summary for the current queuesize will be generated, using this name as part of the tag.
- **`name`** : (Optional.) A name for queue.
- **`cancel_op`** : (Optional.) Cancel op for the queue


#### Returns:
A queue with the output rows.  A  `QueueRunner`  for the queue isadded to the current  `QUEUE_RUNNER`  collection of the currentgraph.

#### Raises:
- **`ValueError`** : If the shape of the input cannot be inferred from the arguments.
- **`RuntimeError`** : If called with eager execution enabled.


#### Eager Compatibility
Input pipelines based on Queues are not supported when eager execution isenabled. Please use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API to ingest data under eager execution.

