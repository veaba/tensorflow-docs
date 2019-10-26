Concatenates a list of tensors alongside the specified axis.
### Aliases:
- tf.compat.v1.keras.backend.concatenate
- tf.compat.v2.keras.backend.concatenate

```
 tf.keras.backend.concatenate(
    tensors,
    axis=-1
)
```
#### Arguments:
- tensors: list of tensors to concatenate.
- axis: concatenation axis.
#### Returns:
A tensor.
#### Example:

```
 >>> a = tf.constant([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
>>> b = tf.constant([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
>>> tf.keras.backend.concatenate((a, b), axis=-1)
<tf.Tensor: id=14, shape=(3, 6), dtype=int32, numpy=
array([[ 1,  2,  3, 10, 20, 30],
       [ 4,  5,  6, 40, 50, 60],
       [ 7,  8,  9, 70, 80, 90]], dtype=int32)>
```
