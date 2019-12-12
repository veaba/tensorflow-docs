Turn a nD tensor into a 2D tensor with same 0th dimension.

**Aliases** : [ `tf.compat.v1.keras.backend.batch_flatten` ](/api_docs/python/tf/keras/backend/batch_flatten), [ `tf.compat.v2.keras.backend.batch_flatten` ](/api_docs/python/tf/keras/backend/batch_flatten)

```
 tf.keras.backend.batch_flatten(x) 
```

In other words, it flattens each data samples of a batch.

#### Arguments:
- **`x`** : A tensor or variable.


#### Returns:
A tensor.

#### Examples:
Flattening a 3D tensor to 2D by collapsing the last dimension.

```
     >>> from tensorflow.keras import backend as K
    >>> x_batch = K.ones(shape=(2, 3, 4, 5))
    >>> x_batch_flatten = K.batch_flatten(x_batch)
    >>> K.int_shape(x_batch_flatten)
    (2, 60)
 
```

