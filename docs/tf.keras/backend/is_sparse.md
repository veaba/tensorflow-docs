Returns whether a tensor is a sparse tensor.



### Aliases:

- [ `tf.compat.v1.keras.backend.is_sparse` ](/api_docs/python/tf/keras/backend/is_sparse)

- [ `tf.compat.v2.keras.backend.is_sparse` ](/api_docs/python/tf/keras/backend/is_sparse)



```
 tf.keras.backend.is_sparse(tensor)
 
```



#### Arguments:

- **`tensor`** : A tensor instance.



#### Returns:
A boolean.



#### Example:


```
     >>> from keras import backend as K
    >>> a = K.placeholder((2, 2), sparse=False)
    >>> print(K.is_sparse(a))
    False
    >>> b = K.placeholder((2, 2), sparse=True)
    >>> print(K.is_sparse(b))
    True
 
```

