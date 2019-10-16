
Computes the maximum of elements across dimensions of a tensor.
### Aliases:
- `tf.compat.v2.math.reduce_max`
- `tf.compat.v2.reduce_max`
- `tf.reduce_max`

```
 tf.math.reduce_max(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
```

Reduces input_tensor along the dimensions given in axis. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in axis. If keepdims is true, the reduced dimensions are retained with length 1.

If axis is None, all dimensions are reduced, and a tensor with a single element is returned.
#### Args:
- `input_tensor`: The tensor to reduce. Should have real numeric type.
#### Returns:

The reduced tensor.
#### Numpy Compatibility

Equivalent to np.max
