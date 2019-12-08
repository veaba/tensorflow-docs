Returns the number of axes in a tensor, as an integer.



### Aliases:

- [ `tf.compat.v1.keras.backend.ndim` ](/api_docs/python/tf/keras/backend/ndim)

- [ `tf.compat.v2.keras.backend.ndim` ](/api_docs/python/tf/keras/backend/ndim)



```
 tf.keras.backend.ndim(x)
 
```



#### Arguments:

- **`x`** : Tensor or variable.



#### Returns:
Integer (scalar), number of axes.



#### Examples:


```
     >>> from keras import backend as K
    >>> input = K.placeholder(shape=(2, 4, 5))
    >>> val = np.array([[1, 2], [3, 4]])
    >>> kvar = K.variable(value=val)
    >>> K.ndim(input)
    3
    >>> K.ndim(kvar)
    2
 
```

