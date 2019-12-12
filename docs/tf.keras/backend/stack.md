Stacks a list of rank  `R`  tensors into a rank  `R+1`  tensor.

**Aliases** : [ `tf.compat.v1.keras.backend.stack` ](/api_docs/python/tf/keras/backend/stack), [ `tf.compat.v2.keras.backend.stack` ](/api_docs/python/tf/keras/backend/stack)

```
 tf.keras.backend.stack(
    x,
    axis=0
)
 
```

#### Arguments:
- **`x`** : List of tensors.
- **`axis`** : Axis along which to perform stacking.


#### Returns:
A tensor.

#### Example:


```
   >>> a = tf.constant([[1, 2],[3, 4]])
  >>> b = tf.constant([[10, 20],[30, 40]])
  >>> tf.keras.backend.stack((a, b))
  <tf.Tensor: id=146, shape=(2, 2, 2), dtype=int32, numpy=
  array([[[ 1,  2],
          [ 3,  4]],
         [[10, 20],
          [30, 40]]], dtype=int32)>
 
```

