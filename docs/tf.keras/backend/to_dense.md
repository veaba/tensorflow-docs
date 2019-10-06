
Converts a sparse tensor into a dense tensor and returns it.
### Aliases:
- `tf.compat.v1.keras.backend.to_dense`
- `tf.compat.v2.keras.backend.to_dense`

```
 tf.keras.backend.to_dense(tensor)
```
#### Arguments:
- `tensor`: A `tensor` instance (potentially sparse).
#### Returns:

A dense tensor.
#### Examples:

```
     >>> from keras import backend as K
    >>> b = K.placeholder((2, 2), sparse=True)
    >>> print(K.is_sparse(b))
    True
    >>> c = K.to_dense(b)
    >>> print(K.is_sparse(c))
    False
```
