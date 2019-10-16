
Returns the truth value of (x == y) element-wise.
### Aliases:
- `tf.compat.v1.equal`
- `tf.compat.v1.math.equal`
- `tf.compat.v2.equal`
- `tf.compat.v2.math.equal`
- `tf.equal`

```
 tf.math.equal(
    x,
    y,
    name=None
)
```
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
#### Usage:

```
 x = tf.constant([2, 4])
y = tf.constant(2)
tf.math.equal(x, y) ==> array([True, False])

x = tf.constant([2, 4])
y = tf.constant([2, 4])
tf.math.equal(x, y) ==> array([True,  True])
```
[here](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)NOTE: Equal supports broadcasting. More about broadcasting 

#### Args:
- `x`: A `Tensor` or `SparseTensor` or `IndexedSlices`.
- `y`: A `Tensor` or `SparseTensor` or `IndexedSlices`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool with the same size as that of x or y.
