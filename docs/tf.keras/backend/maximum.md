Element-wise maximum of two tensors.

**Aliases** : [ `tf.compat.v1.keras.backend.maximum` ](/api_docs/python/tf/keras/backend/maximum), [ `tf.compat.v2.keras.backend.maximum` ](/api_docs/python/tf/keras/backend/maximum)

```
 tf.keras.backend.maximum(    x,    y) 
```

#### Arguments:
- **`x`** : Tensor or variable.
- **`y`** : Tensor or variable.


#### Returns:
A tensor with the element wise maximum value(s) of  `x`  and  `y` .

#### Examples:


```
     # maximum of two tensors
    >>> x = tf.Variable([[1, 2], [3, 4]])
    >>> y = tf.Variable([[2, 1], [0, -1]])
    >>> m = tf.keras.backend.maximum(x, y)
    >>> m
    <tf.Tensor: id=42, shape=(2, 2), dtype=int32, numpy=
    array([[2, 2],
           [3, 4]], dtype=int32)>
 
```

