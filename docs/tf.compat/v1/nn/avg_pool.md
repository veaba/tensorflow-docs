
Performs the average pooling on the input.
### Aliases:
- `tf.compat.v1.nn.avg_pool2d`

```
 tf.compat.v1.nn.avg_pool(
    value,
    ksize,
    strides,
    padding,
    data_format='NHWC',
    name=None,
    input=None
)
```

Each entry in output is the mean of the corresponding size ksize window in value.
#### Args:
- `value`:` `A` `4-D` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` ``a``n``d`` ``t`yp`e`` ``float32``,`` ``float64``,`` ``qint8``,`` ``quint8``,`` `or` ``qint32`.
- `ksize`:` `A`n`` ``i``n``t`` `or` ``l``i``s``t`` `of` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` `or` ``4`.` `T`h``e`` ``s``i`z`e`` `of` ``t``h``e`` ``w``i``n``d`o`w`` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``t``h``e`` ``i``n`pu`t`` ``t``e``n``s`or.
- `s``t`r`i``d``e``s`:` `A`n`` ``i``n``t`` `or` ``l``i``s``t`` `of` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` `or` ``4`.` `T`h``e`` ``s``t`r`i``d``e`` `of` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d`o`w`` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``t``h``e`` ``i``n`pu`t`` ``t``e``n``s`or.
- `padding`:` `A` ``s``t`r`i``n``g``,`` ``e``i``t``h``e`r` ``'VALID'`` `or` ``'SAME'`.` `T`h``e`` ``padding`` ``a``l``g`or`i``t``h`m.` `S`e``e`` ``t``h``e`` `"r`e``t`ur`n``s`"` ``s``e``c``t``i`o`n`` `of` ``t`f.`n``n`.`c`o`n`vo`l`u`t``i`o`n`` `for` ``d``e``t``a``i``l``s`.
- `d``a``t``a`_form`a``t`:` `A` ``s``t`r`i``n``g`.` `'NHWC'` ``a``n``d`` `'NCHW'` ``a`r`e`` ``s`uppor`t``e``d`.
- `n``a`m`e`:` `Op`t``i`o`n``a``l`` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`.
- `i``n`pu`t`:` `A`l``i``a``s`` `for` ``value`.
#### Returns:

A Tensor with the same type as value. The average pooled output tensor.
