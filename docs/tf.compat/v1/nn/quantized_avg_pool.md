
Defined in generated file: python/ops/gen_nn_ops.py

Produces the average pool of the input tensor for quantized types.

```
 tf.compat.v1.nn.quantized_avg_pool(
    input,
    min_input,
    max_input,
    ksize,
    strides,
    padding,
    name=None
)
```
#### Args:
- `input`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` `o`n``e`` `of` ``t``h``e`` `fo`l``l`o`w``i``n``g`` ``t`yp`e``s`:` ``qint8``,`` ``quint8``,`` ``qint32``,`` ``qint16``,`` ``quint16`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `min_input`:` `A` ``Tensor`` `of` ``t`yp`e`` ``float32`.` `T`h``e`` `f`l`o`a``t`` `v`a``l`u`e`` ``t``h``a``t`` ``t``h``e`` ``l`o`w``e``s``t`` `qu`a``n``t``i`z`e``d`` ``input`` `v`a``l`u`e`` `r`e`pr`e``s``e``n``t``s`.
- `max_input`:` `A` ``Tensor`` `of` ``t`yp`e`` ``float32`.` `T`h``e`` `f`l`o`a``t`` `v`a``l`u`e`` ``t``h``a``t`` ``t``h``e`` ``h``i``g``h``e``s``t`` `qu`a``n``t``i`z`e``d`` ``input`` `v`a``l`u`e`` `r`e`pr`e``s``e``n``t``s`.
- `ksize`:` `A` ``l``i``s``t`` `of` ``i``n``t``s`.` `T`h``e`` ``s``i`z`e`` `of` ``t``h``e`` ``w``i``n``d`o`w`` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``t``h``e`` ``input`` ``t``e``n``s`or.` `T`h``e`` ``l``e``n``g``t``h`` `mu`s``t`` ``b``e`` `4` ``t`o` `m`a``t``c``h`` ``t``h``e`` ``n`um`b``e`r` `of` ``d``i`m`e``n``s``i`o`n``s`` `of` ``t``h``e`` ``input`.
- `s``t`r`i``d``e``s`:` `A` ``l``i``s``t`` `of` ``i``n``t``s`.` `T`h``e`` ``s``t`r`i``d``e`` `of` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d`o`w`` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``t``h``e`` ``input`` ``t``e``n``s`or.` `T`h``e`` ``l``e``n``g``t``h`` `mu`s``t`` ``b``e`` `4` ``t`o` `m`a``t``c``h`` ``t``h``e`` ``n`um`b``e`r` `of` ``d``i`m`e``n``s``i`o`n``s`` `of` ``t``h``e`` ``input`.
- `padding`:` `A` ``s``t`r`i``n``g`` `from:` ``"SAME", "VALID"`.` `T`h``e`` ``t`yp`e`` `of` ``padding`` ``a``l``g`or`i``t``h`m` ``t`o` `u`s``e`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A tuple of Tensor objects (output, min_output, max_output).
- `output`: A `Tensor`. Has the same type as `input`.
- `min_output`: A `Tensor` of type `float32`.
- `max_output`: A `Tensor` of type `float32`.
