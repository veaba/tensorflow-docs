Returns the size of a tensor.

```
 tf.compat.v1.size(
    input,
    name=None,
    out_type=tf.dtypes.int32
)
```
Returns a 0-D `Tensor` representing the number of elements in `input` of type `out_type`. Defaults to tf.int32.
#### For example:

```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.size(t)  # 12
```
#### Args:
- `input`: A `Tensor` or `SparseTensor`.
- `name`: A `name` for the operation (optional).
- `out_type`: (Optional) The specified non-quantized numeric output type of the operation. Defaults to `tf.int32`.
#### Returns:
A `Tensor` of type `out_type`. Defaults to `tf.int32`.
#### Numpy Compatibility
Equivalent to np.size()
