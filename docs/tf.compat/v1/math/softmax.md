Computes softmax activations. (deprecated arguments)
- tf.compat.v1.nn.softmax

```
 tf.compat.v1.math.softmax(
    logits,
    axis=None,
    name=None,
    dim=None
)
```
This function performs the equivalent of

```
 softmax = tf.exp(logits) / tf.reduce_sum(tf.exp(logits), axis)
```
#### Args:
- logits: A non-empty Tensor. Must be one of the following types: half, float32, float64.
- axis: The dimension softmax would be performed on. The default is -1 which indicates the last dimension.
- name: A name for the operation (optional).
- dim: Deprecated alias for axis.
#### Returns:
A Tensor. Has the same type and shape as logits.
#### Raises:
- InvalidArgumentError: if logits is empty or axis is beyond the last dimension of logits.
