Batches the computation done by the decorated function.
### Aliases:
- `tf.compat.v1.nondifferentiable_batch_function`
- `tf.compat.v2.nondifferentiable_batch_function`

```
 tf.nondifferentiable_batch_function(
    num_batch_threads,
    max_batch_size,
    batch_timeout_micros,
    allowed_batch_sizes=None,
    max_enqueued_batches=10,
    autograph=True
)
```
So, for example, in the following code

```
 @batch_function(1, 2, 3)
def layer(a):
  return tf.matmul(a, a)

b = layer(w)
```
if more than one session.run call is simultaneously trying to compute `b` the values of `w` `w`ill `b`e gathered, non-deterministically concatenated along the first axis, and only one thread `w`ill run the computation. See the documentation of the `Batch` op for more details.
Assumes that all arguments of the decorated function are Tensors which will be batched along their first dimension.
SparseTensor is not supported. The return value of the decorated function must be a Tensor or a list/tuple of Tensors.
#### Args:
- `num_batch_threads`: Number of scheduling threads for processing batches of work. Determines the number of batches processed in parallel.
- `max_batch_size`: Batch sizes will never be bigger than this.
- `batch_timeout_micros`: Maximum number of microseconds to wait before outputting an incomplete batch.
- `allowed_batch_sizes`: Optional list of allowed batch sizes. If left empty, does nothing. Otherwise, supplies a list of batch sizes, causing the op to pad batches up to one of those sizes. The entries must increase monotonically, and the final entry must equal max_batch_size.
- `max_enqueued_batches`: The maximum depth of the batch queue. Defaults to 10.
- `autograph`: Whether to use `autograph` to compile python and eager style code for efficient graph-mode execution.
#### Returns:
The decorated function will return the unbatched computation output Tensors.
