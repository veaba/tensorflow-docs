
Computes log(sum(exp(elements across dimensions of a tensor))).
### Aliases:
- `tf.compat.v2.math.reduce_logsumexp`
- `tf.compat.v2.reduce_logsumexp`
- `tf.reduce_logsumexp`

```
 tf.math.reduce_logsumexp(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
```

Reduces input_tensor along the dimensions given in axis. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in axis. If keepdims is true, the reduced dimensions are retained with length 1.

If axis has no entries, all dimensions are reduced, and a tensor with a single element is returned.

This function is more numerically stable than log(sum(exp(input))). It avoids overflows caused by taking the exp of large inputs and underflows caused by taking the log of small inputs.
#### For example:

```
 x = tf.constant([[0., 0., 0.], [0., 0., 0.]])
tf.reduce_logsumexp(x)  # log(6)
tf.reduce_logsumexp(x, 0)  # [log(2), log(2), log(2)]
tf.reduce_logsumexp(x, 1)  # [log(3), log(3)]
tf.reduce_logsumexp(x, 1, keepdims=True)  # [[log(3)], [log(3)]]
tf.reduce_logsumexp(x, [0, 1])  # log(6)
```
#### Args:
- `input_tensor`: The tensor to reduce. Should have numeric type.
#### Returns:

The reduced tensor.
