Computes the sum of elements across dimensions of a tensor.
### Aliases:
- `tf.compat.v2.math.reduce_sum`
- `tf.compat.v2.reduce_sum`
- `tf.reduce_sum`

```
 tf.math.reduce_sum(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
```
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
### Used in the tutorials:
- ``A``u``t``o``m``a``t``i``c`` ``d``i``f``f``e``r``e``n``t``i``a``t``i``o``n`` ``a``n``d`` ``g``r``a``d``i``e``n``t`` ``t``a``p``e``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``C``u``s``t``o``m``i``z``a``t``i``o``n`` ``b``a``s``i``c``s``:`` ``t``e``n``s``o``r``s`` ``a``n``d`` ``o``p``e``r``a``t``i``o``n``s``
Reduces `input_tensor` along the dimensions given in `axis`. Unless `keepdims` is true, the rank of the tensor is reduced by 1 for each entry in `axis`. If `keepdims` is true, the reduced dimensions are retained with length 1.
If `axis` is None, all dimensions are reduced, and a tensor with a single element is returned.
#### For example:

```
 x = tf.constant([[1, 1, 1], [1, 1, 1]])
tf.reduce_sum(x)  # 6
tf.reduce_sum(x, 0)  # [2, 2, 2]
tf.reduce_sum(x, 1)  # [3, 3]
tf.reduce_sum(x, 1, keepdims=True)  # [[3], [3]]
tf.reduce_sum(x, [0, 1])  # 6
```
#### Args:
- `input_tensor`: The tensor to reduce. Should have numeric type.
- `axis`: The dimensions to reduce. If `None` (the default), reduces all dimensions. Must be in the range [-rank(input_tensor), rank(input_tensor)).
- `keepdims`: If true, retains reduced dimensions with length 1.
- `name`: A `name` for the operation (optional).
#### Returns:
The reduced tensor, of the same dtype as the input_tensor.
#### Numpy Compatibility
Equivalent to np.sum apart the fact that numpy upcast uint8 and int32 to int64 while tensorflow returns the same dtype as the input.
