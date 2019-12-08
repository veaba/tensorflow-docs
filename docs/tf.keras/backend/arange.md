Creates a 1D tensor containing a sequence of integers.



### Aliases:

- [ `tf.compat.v1.keras.backend.arange` ](/api_docs/python/tf/keras/backend/arange)

- [ `tf.compat.v2.keras.backend.arange` ](/api_docs/python/tf/keras/backend/arange)



```
 tf.keras.backend.arange(
    start,
    stop=None,
    step=1,
    dtype='int32'
)
 
```

The function arguments use the same convention as
Theano's arange: if only one argument is provided,
it is in fact the "stop" argument and "start" is 0.

The default type of the returned tensor is  `'int32'`  to
match TensorFlow's default.



#### Arguments:

- **`start`** : Start value.

- **`stop`** : Stop value.

- **`step`** : Difference between two successive values.

- **`dtype`** : Integer dtype to use.



#### Returns:
An integer tensor.



#### Example:


```
   >>> tf.keras.backend.arange(start=0, stop=10, step=1.5)
  <tf.Tensor: id=96, shape=(7,), dtype=float32,
      numpy=array([0. , 1.5, 3. , 4.5, 6. , 7.5, 9. ], dtype=float32)>

 
```

