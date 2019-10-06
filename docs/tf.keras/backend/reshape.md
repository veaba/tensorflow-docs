
Reshapes a tensor to the specified shape.
### Aliases:
- `tf.compat.v1.keras.backend.reshape`
- `tf.compat.v2.keras.backend.reshape`

```
 tf.keras.backend.reshape(
    x,
    shape
)
```
#### Arguments:
- `x`: Tensor or variable.
- `shape`: Target `shape` tuple.
#### Returns:

A tensor.
#### Example:

```
   a = tf.constant([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
    &gt;&gt;&gt; a
    <tf.Tensor: id=32, shape=(4, 3), dtype=int32, numpy=
    array([[ 1,  2,  3],
           [ 4,  5,  6],
           [ 7,  8,  9],
           [10, 11, 12]], dtype=int32)&gt;
    &gt;&gt;&gt; tf.keras.backend.reshape(a, shape=(2, 6))
    <tf.Tensor: id=35, shape=(2, 6), dtype=int32, numpy=
    array([[ 1,  2,  3,  4,  5,  6],
           [ 7,  8,  9, 10, 11, 12]], dtype=int32)&gt;
  
```
