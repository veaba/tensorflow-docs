Computes log softmax activations.
### Aliases:
- `tf.compat.v2.math.log_softmax`
- `tf.compat.v2.nn.log_softmax`
- `tf.math.log_softmax`

```
 tf.nn.log_softmax(
    logits,
    axis=None,
    name=None
)
```
For each batch `i` and class `j` we have

```
 logsoftmax = logits - log(reduce_sum(exp(logits), axis))
```
#### Args:
- `logits`: A non-empty `Tensor`. Must be one of the following types: `half`, `float32`, `float64`.
- `axis`: The dimension softmax would be performed on. The default is -1 which indicates the last dimension.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `logits`. Same shape as `logits`.
#### Raises:
- `InvalidArgumentError`: if `logits` is empty or `axis` is beyond the last dimension of `logits`.
