
Outputs a Summary protocol buffer with audio.

```
 tf.compat.v1.summary.audio(
    name,
    tensor,
    sample_rate,
    max_outputs=3,
    collections=None,
    family=None
)
```

The summary has up to max_outputs summary values containing audio. The audio is built from tensor which must be 3-D with shape [batch_size, frames, channels] or 2-D with shape [batch_size, frames]. The values are assumed to be in the range of [-1.0, 1.0] with a sample rate of sample_rate.

The tag in the outputted Summary.Value protobufs is generated based on the name, with a suffix depending on the max_outputs setting:
- If `max_outputs` is 1, the summary value tag is 'name/audio'.
- If `max_outputs` is greater than 1, the summary value tags are generated sequentially as 'name/audio/0', 'name/audio/1', etc
#### Args:
- `name`: A `name` for the generated node. Will also serve as a series `name` in TensorBoard.
- `tensor`:` `A` `3-D` ``float32`` ``Tensor`` `o`f`` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``f``r``a``m``e``s``,`` ``c``h``a``n``n``e``l``s`]` `o`r`` ``a`` `2-D` ``float32`` ``Tensor`` `o`f`` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``f``r``a``m``e``s`].
- `s``a``m`p`l``e``_``r``a``t``e`:` `A` `S`c``a``l``a``r`` ``float32`` ``Tensor`` ``i``n`d`i``c``a``t``i``n`g` ``t``h``e`` ``s``a``m`p`l``e`` ``r``a``t``e`` `o`f`` ``t``h``e`` ``s``i`g`n``a``l`` ``i``n`` ``h``e``r``t``z`.
- `m``a`x`_`ou`t`pu`t``s`:` `M`a`x` ``n`u`m``b``e``r`` `o`f`` ``b``a``t``c``h`` ``e``l``e``m``e``n``t``s`` ``t`o` `g`e``n``e``r``a``t``e`` ``a`ud`i`o` ``f`o`r`.
- `c`o`l``l``e``c``t``i`o`n``s`:` `Op`t``i`o`n``a``l`` ``l``i``s``t`` `o`f`` `op`s`.G`r``a`p`h`K`e`y`s`.` `T`h``e`` ``c`o`l``l``e``c``t``i`o`n``s`` ``t`o` ``a`dd` ``t``h``e`` ``s`u`m``m``a``r`y` ``t`o.` `D`e``f``a`u`l``t``s`` ``t`o` `[`_`op`s`.G`r``a`p`h`K`e`y`s`.SUMMARIES]
- `f``a``m``i``l`y:` `Op`t``i`o`n``a``l`;` ``i``f`` `p`r`ov`i`d`e`d`,`` `u`s``e`d` ``a``s`` ``t``h``e`` `p`r``e``f``i`x` `o`f`` ``t``h``e`` ``s`u`m``m``a``r`y` ``t``a`g` ``name``,`` `w`h``i``c``h`` ``c`o`n``t``r`o`l``s`` ``t``h``e`` ``t``a``b`` ``name`` `u`s``e`d` ``f`o`r`` `d`i``s`p`l``a`y` `o`n`` ``Tensor``b`o`a``r`d.
#### Returns:

A scalar Tensor of type string. The serialized Summary protocol buffer.
