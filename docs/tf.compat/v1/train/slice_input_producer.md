[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/input.py#L322-L376)  
---  
  
Produces a slice of each `Tensor` in `tensor_list`. (deprecated)

    
    
    tf.compat.v1.train.slice_input_producer(
        tensor_list,
        num_epochs=None,
        shuffle=True,
        seed=None,
        capacity=32,
        shared_name=None,
        name=None
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Queue-based input pipelines have been
replaced by [`tf.data`](https://tensorflow.google.cn/api_docs/python/tf/data).
Use
`tf.data.Dataset.from_tensor_slices(tuple(tensor_list)).shuffle(tf.shape(input_tensor,
out_type=tf.int64)[0]).repeat(num_epochs)`. If `shuffle=False`, omit the
`.shuffle(...)`.

Implemented using a Queue -- a `QueueRunner` for the Queue is added to the
current `Graph`'s `QUEUE_RUNNER` collection.

#### Args:

  * **`tensor_list`** : A list of `Tensor` objects. Every `Tensor` in `tensor_list` must have the same size in the first dimension.
  * **`num_epochs`** : An integer (optional). If specified, `slice_input_producer` produces each slice `num_epochs` times before generating an `OutOfRange` error. If not specified, `slice_input_producer` can cycle through the slices an unlimited number of times.
  * **`shuffle`** : Boolean. If true, the integers are randomly shuffled within each epoch.
  * **`seed`** : An integer (optional). Seed used if shuffle == True.
  * **`capacity`** : An integer. Sets the queue capacity.
  * **`shared_name`** : (optional). If set, this queue will be shared under the given name across multiple sessions.
  * **`name`** : A name for the operations (optional).

#### Returns:

A list of tensors, one for each element of `tensor_list`. If the tensor in
`tensor_list` has shape `[N, a, b, .., z]`, then the corresponding output
tensor will have shape `[a, b, ..., z]`.

#### Raises:

  * **`ValueError`** : if `slice_input_producer` produces nothing from `tensor_list`.

#### Eager Compatibility

Input pipelines based on Queues are not supported when eager execution is
enabled. Please use the
[`tf.data`](https://tensorflow.google.cn/api_docs/python/tf/data) API to
ingest data under eager execution.

