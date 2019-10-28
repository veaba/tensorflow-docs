Evaluates the value of a variable.
### Aliases:
- `tf.compat.v1.keras.backend.eval`
- `tf.compat.v2.keras.backend.eval`

```
 tf.keras.backend.eval(x)
```
#### Arguments:
- `x`: A variable.
#### Returns:
A Numpy array.
#### Examples:

```
     >>> from keras import backend as K
    >>> kvar = K.variable(np.array([[1, 2], [3, 4]]), dtype='float32')
    >>> K.eval(kvar)
    array([[ 1.,  2.],
           [ 3.,  4.]], dtype=float32)
```
