
Computes sigmoid of x element-wise.
### Aliases:
- `tf.compat.v1.math.sigmoid`
- `tf.compat.v1.nn.sigmoid`
- `tf.compat.v1.sigmoid`
- `tf.compat.v2.math.sigmoid`
- `tf.compat.v2.nn.sigmoid`
- `tf.compat.v2.sigmoid`
- `tf.nn.sigmoid`
- `tf.sigmoid`

```
 tf.math.sigmoid(
    x,
    name=None
)
```
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``

Specifically, y = 1 / (1 + exp(-x)).
#### Args:
- `x`: A Tensor with type `float16`, `float32`, `float64`, `complex64`, or `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor with the same type as x.
#### Scipy Compatibility

Equivalent to scipy.special.expit
