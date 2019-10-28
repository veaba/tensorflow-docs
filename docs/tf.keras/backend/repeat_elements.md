Repeats the elements of a tensor along an axis, like `np.repeat`.
### Aliases:
- `tf.compat.v1.keras.backend.repeat_elements`
- `tf.compat.v2.keras.backend.repeat_elements`

```
 tf.keras.backend.repeat_elements(
    x,
    rep,
    axis
)
```
If `x` has shape `s1, s2, s3)` and `axis` is `1`, the output will have shape (s`1`, s2 * rep, s3).
#### Arguments:
- `x`: Tensor or variable.
- `rep`: Python integer, number of times to `rep`eat.
- `axis`: Axis along which to repeat.
#### Returns:
A tensor.
#### Example:

```
   >>> b = tf.constant([1, 2, 3])
  >>> tf.keras.backend.repeat_elements(b, rep=2, axis=0)
  <tf.Tensor: id=70, shape=(6,), dtype=int32,
      numpy=array([1, 1, 2, 2, 3, 3], dtype=int32)>
```
