Instantiates an all-zeros variable of the same shape as another tensor.
### Aliases:
- `tf.compat.v1.keras.backend.zeros_like`
- `tf.compat.v2.keras.backend.zeros_like`

```
 tf.keras.backend.zeros_like(
    x,
    dtype=None,
    name=None
)
```
#### Arguments:
- `x`: Keras variable or Keras tensor.
- `dtype`: `dtype` of returned Keras variable. `None` uses the `dtype` of `x`.
- `name`: `name` for the variable to create.
#### Returns:
A Keras variable with the shape of `x` filled with zeros.
#### Example:

```
 from tensorflow.keras import backend as K
kvar = K.variable(np.random.random((2,3)))
kvar_zeros = K.zeros_like(kvar)
K.eval(kvar_zeros)
# array([[ 0.,  0.,  0.], [ 0.,  0.,  0.]], dtype=float32)
```
