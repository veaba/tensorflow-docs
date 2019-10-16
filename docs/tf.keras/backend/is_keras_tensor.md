
Returns whether x is a Keras tensor.
### Aliases:
- `tf.compat.v1.keras.backend.is_keras_tensor`
- `tf.compat.v2.keras.backend.is_keras_tensor`

```
 tf.keras.backend.is_keras_tensor(x)
```

A "Keras tensor" is a tensor that was returned by a Keras layer, (Layer class) or by Input.
#### Arguments:
- `x`: A candidate tensor.
#### Returns:

A boolean: Whether the argument is a Keras tensor.
#### Raises:
- `ValueError`: In case `x` is not a symbolic tensor.
#### Examples:

```
     >>> import tensorflow as tf
    >>> import numpy
    >>> from keras import backend as K
    >>> from keras.layers import Input, Dense
    >>> np_var = numpy.array([1, 2])
    >>> K.is_keras_tensor(np_var) # A numpy array is not a symbolic tensor.
    ValueError
    >>> k_var = tf.compat.v1.placeholder('float32', shape=(1,1))
    >>> K.is_keras_tensor(k_var) # A variable indirectly created outside of
    keras is not a Keras tensor.
    False
    >>> keras_var = K.variable(np_var)
    >>> K.is_keras_tensor(keras_var)  # A variable created with the keras
    backend is not a Keras tensor.
    False
    >>> keras_placeholder = K.placeholder(shape=(2, 4, 5))
    >>> K.is_keras_tensor(keras_placeholder)  # A placeholder is not a Keras
    tensor.
    False
    >>> keras_input = Input([10])
    >>> K.is_keras_tensor(keras_input) # An Input is a Keras tensor.
    True
    >>> keras_layer_output = Dense(10)(keras_input)
    >>> K.is_keras_tensor(keras_layer_output) # Any Keras layer output is a
    Keras tensor.
    True
```
