
Instantiates an all-ones variable of the same shape as another tensor.
### Aliases:
- `tf.compat.v1.keras.backend.ones_like`
- `tf.compat.v2.keras.backend.ones_like`

```
 tf.keras.backend.ones_like(
    x,
    dtype=None,
    name=None
)
```
#### Arguments:
- `x`: Keras variable or tensor.
- `dtype`: String, `dtype` of returned Keras variable. None uses the `dtype` of `x`.
- `name`: String, `name` for the variable to create.
#### Returns:

A Keras variable with the shape of x filled with ones.
#### Example:

```
     >>> from keras import backend as K
    >>> kvar = K.variable(np.random.random((2,3)))
    >>> kvar_ones = K.ones_like(kvar)
    >>> K.eval(kvar_ones)
    array([[ 1.,  1.,  1.],
           [ 1.,  1.,  1.]], dtype=float32)
```
