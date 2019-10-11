
Inserts a dimension of 1 into a tensor's shape.
### Aliases:
- `tf.compat.v2.expand_dims`

```
 tf.expand_dims(
    input,
    axis,
    name=None
)
```
### Used in the guide:
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``D``e``e``p``D``r``e``a``m``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``P``i``x``2``P``i``x``
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``T``e``x``t`` ``g``e``n``e``r``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``

Given a tensor input, this operation inserts a dimension of 1 at the dimension index axis of input's shape. The dimension index axis starts at zero; if you specify a negative number for axis it is counted backward from the end.

This operation is useful if you want to add a batch dimension to a single element. For example, if you have a single image of shape [height, width, channels], you can make it a batch of 1 image with expand_dims(image, 0), which will make the shape [1, height, width, channels].
#### Other examples:

```
 # 't' is a tensor of shape [2]
tf.shape(tf.expand_dims(t, 0))  # [1, 2]
tf.shape(tf.expand_dims(t, 1))  # [2, 1]
tf.shape(tf.expand_dims(t, -1))  # [2, 1]

# 't2' is a tensor of shape [2, 3, 5]
tf.shape(tf.expand_dims(t2, 0))  # [1, 2, 3, 5]
tf.shape(tf.expand_dims(t2, 2))  # [2, 3, 1, 5]
tf.shape(tf.expand_dims(t2, 3))  # [2, 3, 5, 1]
```

This operation requires that:

-1-input.dims() <= dim <= input.dims()

This operation is related to squeeze(), which removes dimensions of size 1.
#### Args:
- `input`: A `Tensor`.
- `axis`:` `0`-`D` ``(`sc`a`l`a``r``)`.` `S`p`ec`i`f`i`es` ``t`he` `d`i`me`n`s`i`o`n`` ``i``n`dex` ``a``t`` `wh`i`ch` ``t`o` `ex`p``a``n`d` ``t`he` `sh`a``p`e` `of` ``input`.` `M`u`s`t`` `be` ``i``n`` ``t`he` ``r``a``n`ge` `[`-``r``a``n``k``(``input``)`` ``-`` ``1``,`` ``r``a``n``k``(``input``)`].
- `n``a`me:` `The` ``n``a`me` `of` ``t`he` `o`u``t``p``u``t`` ``Tensor`` ``(`o`p``t``i`o`n``a`l`)`.
#### Returns:

A Tensor with the same data as input, but its shape has an additional dimension of size 1 added.
