Computes the "logical and" of elements across dimensions of a tensor.
### Aliases:
- `tf.compat.v2.math.reduce_all`
- `tf.compat.v2.reduce_all`
- `tf.math.reduce_all`

```
 tf.reduce_all(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
```
Reduces `input_tensor` along the dimensions given in `axis`. Unless `keepdims` is true, the rank of the tensor is reduced by 1 for each entry in `axis`. If `keepdims` is true, the reduced dimensions are retained with length 1.
If `axis` is None, all dimensions are reduced, and a tensor with a single element is returned.
#### For example:

```
 x = tf.constant([[True,  True], [False, False]])
tf.reduce_all(x)  # False
tf.reduce_all(x, 0)  # [False, False]
tf.reduce_all(x, 1)  # [True, False]
```
#### Args:
- `input_tensor`: The boolean tensor to reduce.
#### Returns:
The reduced tensor.
#### Numpy Compatibility
Equivalent to np.all
