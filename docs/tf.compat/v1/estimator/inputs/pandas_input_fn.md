Returns input function that would feed Pandas DataFrame into the model.

```
 tf.compat.v1.estimator.inputs.pandas_input_fn(
    x,
    y=None,
    batch_size=128,
    num_epochs=1,
    shuffle=None,
    queue_capacity=1000,
    num_threads=1,
    target_column='target'
)
```
#### Args:
- `x`: pandas `DataFrame` object.
- `y`: pandas `Series` object or `DataFrame`. `None` if absent.
- `batch_size`: int, size of batches to return.
- `num_epochs`: int, number of epochs to iterate over data. If not `None`, read attempts that would exceed this value will raise `OutOfRangeError`.
- `shuffle`: bool, whether to read the records in random order.
- `queue_capacity`: int, size of the read queue. If `None`, it will be set roughly to the size of `x`.
- `num_threads`: Integer, number of threads used for reading and enqueueing. In order to have predicted and repeatable order of reading and enqueueing, such as in prediction and evaluation mode, `num_threads` should be 1.
- `target_column`: str, name to give the target column `y`. This parameter is not used when `y` is a `DataFrame`.
#### Returns:
Function, that has signature of ()->(dict of `features`, `target`)
#### Raises:
- `ValueError`: if `x` alread`y` contains a column with the same name as `y`, or if the inde`x`es of `x` and `y` don't match.
- `ValueError`: if 'shuffle' is not provided or a bool.
