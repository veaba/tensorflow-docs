
Repeats a 2D tensor.
### Aliases:
- `tf.compat.v1.keras.backend.repeat`
- `tf.compat.v2.keras.backend.repeat`

```
 tf.keras.backend.repeat(
    x,
    n
)
```

if x has shape (samples, dim) and n is 2, the output will have shape (samples, 2, dim).
#### Arguments:
- `x`: Tensor or variable.
- `n`: Pytho`n` i`n`teger, `n`umber of times to repeat.
#### Returns:

A tensor.
#### Example:

```
   b = tf.constant([[1, 2], [3, 4]])
    &gt;&gt;&gt; b
    <tf.Tensor: id=78, shape=(2, 2), dtype=int32, numpy=
    array([[1, 2],
           [3, 4]], dtype=int32)&gt;
    &gt;&gt;&gt; tf.keras.backend.repeat(b, n=2)
    <tf.Tensor: id=82, shape=(2, 2, 2), dtype=int32, numpy=
    array([[[1, 2],
            [1, 2]],
           [[3, 4],
            [3, 4]]], dtype=int32)&gt;
  
```