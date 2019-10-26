Computes the minimum of elements across dimensions of a tensor. (deprecated arguments)
### Aliases:
- tf.compat.v1.math.reduce_min

```
 tf.compat.v1.reduce_min(
    input_tensor,
    axis=None,
    keepdims=None,
    name=None,
    reduction_indices=None,
    keep_dims=None
)
```
Reduces input_tensor along the dimensions given in axis. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in axis. If keepdims is true, the reduced dimensions are retained with length 1.
If axis is None, all dimensions are reduced, and a tensor with a single element is returned.
#### Args:
- input_tensor: The tensor to reduce. Should have real numeric type.
- axis: The dimensions to reduce. If None (the default), reduces all dimensions. Must be in the range [-rank`(input_tensor)`, rank`(input_tensor)`).
- keepdims: If true, retains reduced dimensions with length 1.
- name: A name for the operation (optional).
- reduction_indices: The old (deprecated) name for axis.
- keep_dims: Deprecated alias for keepdims.
#### Returns:
The reduced tensor.
#### Numpy Compatibility
Equivalent to np.min
