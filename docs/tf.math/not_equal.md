Returns the truth value of (x != y) element-wise.
### Aliases:
- tf.compat.v1.math.not_equal
- tf.compat.v1.not_equal
- tf.compat.v2.math.not_equal
- tf.compat.v2.not_equal
- tf.not_equal

```
 tf.math.not_equal(
    x,
    y,
    name=None
)
```
### Used in the guide:
- tf.data: Build TensorFlow input pipelines
- Masking and padding with Keras
### Used in the tutorials:
- Unicode strings
[here](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)NOTE: NotEqual supports broadcasting. More about broadcasting 

#### Args:
- x: A Tensor or SparseTensor or IndexedSlices.
- y: A Tensor or SparseTensor or IndexedSlices.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type bool with the same size as that of x or y.
