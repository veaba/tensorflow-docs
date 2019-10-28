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
