
Instantiates a variable and returns it.
### Aliases:
- `tf.compat.v1.keras.backend.variable`
- `tf.compat.v2.keras.backend.variable`

```
 tf.keras.backend.variable(
    value,
    dtype=None,
    name=None,
    constraint=None
)
```
#### Arguments:
- `value`: Numpy array, initial `value` of the tensor.
- `dtype`: Tensor type.
- `name`: Optional `name` string for the tensor.
- `constraint`: Optional projection function to be applied to the variable after an optimizer update.
#### Returns:

A variable instance (with Keras metadata included).
#### Examples:

```
     >>> import numpy as np
    >>> from keras import backend as K
    >>> val = np.array([[1, 2], [3, 4]])
    >>> kvar = K.variable(value=val, dtype='float64', name='example_var')
    >>> K.dtype(kvar)
    'float64'
    >>> print(kvar)
    example_var
    >>> kvar.eval()
    array([[ 1.,  2.],
           [ 3.,  4.]])
```
