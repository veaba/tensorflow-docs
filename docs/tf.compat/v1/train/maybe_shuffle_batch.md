Creates batches by randomly shuffling conditionally-enqueued tensors. (deprecated)

```
 tf.compat.v1.train.maybe_shuffle_batch(
    tensors,
    batch_size,
    capacity,
    min_after_dequeue,
    keep_input,
    num_threads=1,
    seed=None,
    enqueue_many=False,
    shapes=None,
    allow_smaller_final_batch=False,
    shared_name=None,
    name=None
)
```
See docstring in shuffle_batch for more details.
#### Args:
- tensors: The list or dictionary of tensors to enqueue.
- batch_size: The new batch size pulled from the queue.
- capacity: An integer. The maximum number of elements in the queue.
- min_after_dequeue: Minimum number elements in the queue after a dequeue, used to ensure a level of mixing of elements.
- keep_input: A bool Tensor. This tensor controls whether the input is added to the queue or not. If it is a scalar and evaluates True, then tensors are all added to the queue. If it is a vector and enqueue_many is True, then each example is added to the queue only if the corresponding value in keep_input is True. This tensor essentially acts as a filtering mechanism.
- num_threads: The number of threads enqueuing tensor_list.
- seed: Seed for the random shuffling within the queue.
- enqueue_many: Whether each tensor in tensor_list is a single example.
- shapes: (Optional) The shapes for each example. Defaults to the inferred shapes for tensor_list.
- allow_smaller_final_batch: (Optional) Boolean. If True, allow the final batch to be smaller if there are insufficient items left in the queue.
- shared_name: (Optional) If set, this queue will be shared under the given name across multiple sessions.
- name: (Optional) A name for the operations.
#### Returns:
A list or dictionary of tensors with the types as tensors.
#### Raises:
- ValueError: If the shapes are not specified, and cannot be inferred from the elements of tensors.
#### Eager Compatibility
[tf.data](https://tensorflow.google.cn/api_docs/python/tf/data)Input pipelines based on Queues are not supported when eager execution is enabled. Please use the  API to ingest data under eager execution.

