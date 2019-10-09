
Flatten a tensor.
### Aliases:
- `tf.compat.v1.keras.backend.flatten`
- `tf.compat.v2.keras.backend.flatten`

```
 tf.keras.backend.flatten(x)
```
#### Arguments:
- `x`: A tensor or variable.
#### Returns:

A tensor, reshaped into 1-D
#### Example:

```
   b = tf.constant([[1, 2], [3, 4]])
    &gt;&gt;&gt; b
    <tf.Tensor: id=102, shape=(2, 2), dtype=int32, numpy=
    array([[1, 2],
           [3, 4]], dtype=int32)&gt;
    &gt;&gt;&gt; tf.keras.backend.flatten(b)
    <tf.Tensor: id=105, shape=(4,), dtype=int32,
        numpy=array([1, 2, 3, 4], dtype=int32)&gt;
  
```