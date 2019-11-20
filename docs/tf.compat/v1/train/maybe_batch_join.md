[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/input.py#L1190-L1244)  
---  
  
Runs a list of tensors to conditionally fill a queue to create batches.
(deprecated)

    
    
    tf.compat.v1.train.maybe_batch_join(
        tensors_list,
        keep_input,
        batch_size,
        capacity=32,
        enqueue_many=False,
        shapes=None,
        dynamic_pad=False,
        allow_smaller_final_batch=False,
        shared_name=None,
        name=None
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Queue-based input pipelines have been
replaced by [`tf.data`](https://tensorflow.google.cn/api_docs/python/tf/data).
Use `tf.data.Dataset.interleave(...).filter(...).batch(batch_size)` (or
`padded_batch(...)` if `dynamic_pad=True`).

See docstring in `batch_join` for more details.

#### Args:

  * **`tensors_list`** : A list of tuples or dictionaries of tensors to enqueue.
  * **`keep_input`** : A `bool` Tensor. This tensor controls whether the input is added to the queue or not. If it is a scalar and evaluates `True`, then `tensors` are all added to the queue. If it is a vector and `enqueue_many` is `True`, then each example is added to the queue only if the corresponding value in `keep_input` is `True`. This tensor essentially acts as a filtering mechanism.
  * **`batch_size`** : An integer. The new batch size pulled from the queue.
  * **`capacity`** : An integer. The maximum number of elements in the queue.
  * **`enqueue_many`** : Whether each tensor in `tensor_list_list` is a single example.
  * **`shapes`** : (Optional) The shapes for each example. Defaults to the inferred shapes for `tensor_list_list[i]`.
  * **`dynamic_pad`** : Boolean. Allow variable dimensions in input shapes. The given dimensions are padded upon dequeue so that tensors within a batch have the same shapes.
  * **`allow_smaller_final_batch`** : (Optional) Boolean. If `True`, allow the final batch to be smaller if there are insufficient items left in the queue.
  * **`shared_name`** : (Optional) If set, this queue will be shared under the given name across multiple sessions.
  * **`name`** : (Optional) A name for the operations.

#### Returns:

A list or dictionary of tensors with the same number and types as
`tensors_list[i]`.

#### Raises:

  * **`ValueError`** : If the `shapes` are not specified, and cannot be inferred from the elements of `tensor_list_list`.

