
Computes the mean of elements across dimensions of a tensor.
### Aliases:
- `tf.compat.v1.math.reduce_mean`

```
 tf.compat.v1.reduce_mean(
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
#### For example:

```
 x = tf.constant([[1., 1.], [2., 2.]])
tf.reduce_mean(x)  # 1.5
tf.reduce_mean(x, 0)  # [1.5, 1.5]
tf.reduce_mean(x, 1)  # [1.,  2.]
```
#### Args:
- `input_tensor`: The tensor to reduce. Should have numeric type.
#### Returns:

The reduced tensor.
#### Numpy Compatibility

Equivalent to np.mean
[tf.reduce_mean](https://www.tensorflow.org/api_docs/python/tf/math/reduce_mean)Please note that np.mean has a dtype parameter that could be used to specify the output type. By default this is dtype=float64. On the other hand,  has an aggressive type inference from input_tensor, for example:


```
 x = tf.constant([1, 0, 1, 0])
tf.reduce_mean(x)  # 0
y = tf.constant([1., 0., 1., 0.])
tf.reduce_mean(y)  # 0.5
```
