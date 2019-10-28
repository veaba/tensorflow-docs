Batchwise dot product.
### Aliases:
- `tf.compat.v1.keras.backend.batch_dot`
- `tf.compat.v2.keras.backend.batch_dot`

```
 tf.keras.backend.batch_dot(
    x,
    y,
    axes=None
)
```
`batch_dot` is used to compute dot product of `x` and `y` when `x` and `y` are data in batch, i.e. in a shape of `batch_size, :)`. `batch_dot` results in a tensor or variable with less dimensions than the input. If the number of dimensions is reduced to 1, we use `expand_dims` to make sure that ndim is at least 2.
#### Arguments:
- `x`: Keras tensor or variable with `ndim >= 2`.
- `y`: Keras tensor or variable with `ndim >= 2`.
- `axes`: Tuple or list of integers with target dimensions, or single integer. The sizes of `x.shape[axes[0]]` and `y.shape[axes[1]]` should be equal.
#### Returns:
A tensor with shape equal to the concatenation of `x`'s shape (less the dimension that was summed over) and `y`'s shape (less the batch dimension and the dimension that was summed over). If the final rank is 1, we reshape it to `batch_size, 1)`.
#### Examples:
