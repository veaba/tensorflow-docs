Returns the indices of a tensor that give its sorted order along an axis.



### Aliases:

- [ `tf.compat.v1.argsort` ](/api_docs/python/tf/argsort)

- [ `tf.compat.v2.argsort` ](/api_docs/python/tf/argsort)



```
 tf.argsort(
    values,
    axis=-1,
    direction='ASCENDING',
    stable=False,
    name=None
)
 
```

For a 1D tensor,  `tf.gather(values, tf.argsort(values))`  is equivalent to
[ `tf.sort(values)` ](https://tensorflow.google.cn/api_docs/python/tf/sort). For higher dimensions, the output has the same shape as
 `values` , but along the given axis, values represent the index of the sorted
element in that slice of the tensor at the given position.



#### Usage:


```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.argsort(a,axis=-1,direction='ASCENDING',stable=False,name=None)
c = tf.keras.backend.eval(b)
# Here, c = [0 3 1 2 5 4]
 
```



#### Args:

- **`values`** : 1-D or higher numeric  `Tensor` .

- **`axis`** : The axis along which to sort. The default is -1, which sorts the last
axis.

- **`direction`** : The direction in which to sort the values ( `'ASCENDING'`  or
 `'DESCENDING'` ).

- **`stable`** : If True, equal elements in the original tensor will not be
re-ordered in the returned order. Unstable sort is not yet implemented,
but will eventually be the default for performance reasons. If you require
a stable order, pass  `stable=True`  for forwards compatibility.

- **`name`** : Optional name for the operation.



#### Returns:
An int32  `Tensor`  with the same shape as  `values` . The indices that would
    sort each slice of the given  `values`  along the given  `axis` .



#### Raises:

- **`ValueError`** : If axis is not a constant scalar, or the direction is invalid.

