Instantiates a placeholder tensor and returns it.
### Aliases:
- tf.compat.v1.keras.backend.placeholder
- tf.compat.v2.keras.backend.placeholder

```
 tf.keras.backend.placeholder(
    shape=None,
    ndim=None,
    dtype=None,
    sparse=False,
    name=None,
    ragged=False
)
```
#### Arguments:
- shape: Shape of the placeholder (integer tuple, may include None entries).
- ndim: Number of axes of the tensor. At least one of {shape, ndim} must be specified. If both are specified, shape is used.
- dtype: Placeholder type.
- sparse: Boolean, whether the placeholder should have a sparse type.
- name: Optional name string for the placeholder.
- ragged: Boolean, whether the placeholder should have a ragged type. In this case, values of 'None' in the 'shape' argument represent ragged dimensions. For more information about RaggedTensors, see this guide.
#### Raises:
- ValueError: If called with eager execution
- ValueError: If called with sparse = True and ragged = True.
#### Returns:
Tensor instance (with Keras metadata included).
#### Examples:

```
     >>> from keras import backend as K
    >>> input_ph = K.placeholder(shape=(2, 4, 5))
    >>> input_ph
    <tf.Tensor 'Placeholder_4:0' shape=(2, 4, 5) dtype=float32>
```
