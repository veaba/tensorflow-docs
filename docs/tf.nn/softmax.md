Computes softmax activations.
### Aliases:
- tf.compat.v2.math.softmax
- tf.compat.v2.nn.softmax
- tf.math.softmax

```
 tf.nn.softmax(
    logits,
    axis=None,
    name=None
)
```
### Used in the tutorials:
- Custom training: walkthrough
- Image captioning with visual attention
- Neural machine translation with attention
- Transformer model for language understanding
This function performs the equivalent of

```
 softmax = tf.exp(logits) / tf.reduce_sum(tf.exp(logits), axis)
```
#### Args:
- logits: A non-empty Tensor. Must be one of the following types: half, float32, float64.
- axis: The dimension softmax would be performed on. The default is -1 which indicates the last dimension.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type and shape as logits.
#### Raises:
- InvalidArgumentError: if logits is empty or axis is beyond the last dimension of logits.
