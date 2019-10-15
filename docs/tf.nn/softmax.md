
Computes softmax activations.
### Aliases:
- `tf.compat.v2.math.softmax`
- `tf.compat.v2.nn.softmax`
- `tf.math.softmax`

```
 tf.nn.softmax(
    logits,
    axis=None,
    name=None
)
```
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``

This function performs the equivalent of

```
 softmax = tf.exp(logits) / tf.reduce_sum(tf.exp(logits), axis)
```
#### Args:
- `logits`: A non-empty `Tensor`. Must be one of the following types: `half`, `float32`, `float64`.
- `axis`: The dimension softmax would be performed on. The default is -1 which indicates the last dimension.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type and shape as logits.
#### Raises:
- `InvalidArgumentError`: if `logits` is empty or `axis` is beyond the last dimension of `logits`.
