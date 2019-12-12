Returns the static number of elements in a variable or tensor.

**Aliases** : [ `tf.compat.v1.keras.backend.count_params` ](/api_docs/python/tf/keras/backend/count_params), [ `tf.compat.v2.keras.backend.count_params` ](/api_docs/python/tf/keras/backend/count_params)

```
 tf.keras.backend.count_params(x) 
```

#### Arguments:
- **`x`** : Variable or tensor.


#### Returns:
Integer, the number of scalars in  `x` .

#### Example:


```
     >>> kvar = K.zeros((2,3))
    >>> K.count_params(kvar)
    6
    >>> K.eval(kvar)
    array([[ 0.,  0.,  0.],
           [ 0.,  0.,  0.]], dtype=float32)
 
```

