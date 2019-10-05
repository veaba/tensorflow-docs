
Performs max pooling on the input and outputs both max values and indices.

```
 tf.compat.v1.nn.max_pool_with_argmax(
    input,
    ksize,
    strides,
    padding,
    data_format='NHWC',
    Targmax=None,
    name=None,
    output_dtype=None,
    include_batch_in_index=False
)
```

The indices in argmax are flattened, so that a maximum value at position [b, y, x, c] becomes flattened index: (y * width + x) * channels + c if include_batch_in_index is False; ((b * height + y) * width + x) * channels + c if include_batch_in_index is True.

The indices returned are always in [0, height) x [0, width) before flattening, even if padding is involved and the mathematically correct answer is outside (either negative or too large). This is a bug, but fixing it is difficult to do in a safe backwards compatible way, especially due to flattening.
#### Args:
- `input`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` `o`n``e`` `of` ``t``h``e`` `fo`l``l`o`w``i``n``g`` ``t`yp`e``s`:` ``float32``,`` ``float64``,`` ``int32``,`` ``uint8``,`` ``int16``,`` ``int8``,`` ``int64``,`` ``bfloat16``,`` ``uint16``,`` ``half``,`` ``uint32``,`` ``uint64`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].` `I`n`pu`t`` ``t`o` `poo`l`` `ov`e`r.
- `ksize`:` `A` ``l``i``s``t`` `of` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``>= 4`.` `T`h``e`` ``s``i`z`e`` `of` ``t``h``e`` ``w``i``n``d`o`w`` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``t``h``e`` ``input`` ``t``e``n``s`or.
- `s``t`r`i``d``e``s`:` `A` ``l``i``s``t`` `of` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``>= 4`.` `T`h``e`` ``s``t`r`i``d``e`` `of` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d`o`w`` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``t``h``e`` ``input`` ``t``e``n``s`or.
- `padding`:` `A` ``s``t`r`i``n``g`` `from:` ``"SAME", "VALID"`.` `T`h``e`` ``t`yp`e`` `of` ``padding`` ``a``l``g`or`i``t``h`m` ``t`o` `u`s``e`.
- `Targmax`:` `A`n`` `op`t``i`o`n``a``l`` ``t`f.DTyp`e`` `from:` ``t`f.`int32``,`` ``t`f.`int64`.` `D`e`f`a`u`l``t``s`` ``t`o` ``t`f.`int64`.
- `i``n``c``l`u`d``e`_`b``a``t``c``h`_`i``n`_`i``n``d``e`x:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `W`h``e``t``h``e`r` ``t`o` ``i``n``c``l`u`d``e`` ``b``a``t``c``h`` ``d``i`m`e``n``s``i`o`n`` ``i``n`` `f`l``a``t``t``e``n``e``d`` ``i``n``d``e`x` `of` ``a`r`g`m`a`x.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A tuple of Tensor objects (output, argmax).
- `output`: A `Tensor`. Has the same type as `input`.
- `argmax`: A `Tensor` of type `Targmax`.
