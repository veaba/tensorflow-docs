
Returns the truth value of (x != y) element-wise.
### Aliases:
- `tf.compat.v1.math.not_equal`
- `tf.compat.v1.not_equal`
- `tf.compat.v2.math.not_equal`
- `tf.compat.v2.not_equal`
- `tf.not_equal`

```
 tf.math.not_equal(
    x,
    y,
    name=None
)
```
### Used in the guide:
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``
[here](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)NOTE: NotEqual supports broadcasting. More about broadcasting 

#### Args:
- `x`: A `Tensor` or `SparseTensor` or `IndexedSlices`.
- `y`: A `Tensor` or `SparseTensor` or `IndexedSlices`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool with the same size as that of x or y.
