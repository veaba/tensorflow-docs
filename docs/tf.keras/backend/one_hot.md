Computes the one-hot representation of an integer tensor.
### Aliases:
- `tf.compat.v1.keras.backend.one_hot`
- `tf.compat.v2.keras.backend.one_hot`

```
 tf.keras.backend.one_hot(
    indices,
    num_classes
)
```
#### Arguments:
- `indices`: nD integer tensor of shape (batch_size, dim1, dim2, ... dim(n-1))
- `num_classes`: Integer, number of classes to consider.
#### Returns:
(n + 1)D one hot representation of the input with shape (batch_size, dim1, dim2, ... dim(n-1), num_classes)
#### Returns:
The one-hot tensor.
