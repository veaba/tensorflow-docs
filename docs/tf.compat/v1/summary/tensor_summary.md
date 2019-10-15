
Outputs a Summary protocol buffer with a serialized tensor.proto.

```
 tf.compat.v1.summary.tensor_summary(
    name,
    tensor,
    summary_description=None,
    collections=None,
    summary_metadata=None,
    family=None,
    display_name=None
)
```
#### Args:
- `name`: A `name` for the generated node. If display_`name` is not set, it will also serve as the tag `name` in TensorBoard. (In that case, the tag `name` will inherit tf `name` scopes.)
- `tensor`: A `tensor` of any type and shape to serialize.
- `summary_description`: A long description of the summary sequence. Markdown is supported.
- `collections`: O`p`tion`a`l li`s`t of g`r``a``p``h` `collections` k`e``y``s``.` T`h``e` n`e`w `s`umm`a``r``y` o`p` i`s` `a`dd`e`d to t`h``e``s``e` `collections``.` D`e`f`a`ult`s` to [`G``r``a``p``h``K``e``y``s``.``S``U``M``M``A``R``I``E``S`]`.`
- `s`umm`a``r``y`_m`e`t`a`d`a`t`a`: O`p`tion`a`l `S`umm`a``r``y``M``e`t`a`d`a`t`a` `p``r`oto (w`h`ic`h` d`e``s`c`r`ib`e``s` w`h`ic`h` `p`lugin`s` m`a``y` u`s``e` t`h``e` `s`umm`a``r``y` v`a`lu`e`)`.`
- `family`: O`p`tion`a`l; if `p``r`ovid`e`d, u`s``e`d `a``s` t`h``e` `p``r``e`fix of t`h``e` `s`umm`a``r``y` t`a`g, w`h`ic`h` cont`r`ol`s` t`h``e` `name` u`s``e`d fo`r` di`s``p`l`a``y` on T`e`n`s`o`r`Bo`a``r`d w`h``e`n di`s``p`l`a``y`_`name` i`s` not `s``e`t`.`
- `display_name`: `A` `s`t`r`ing u`s``e`d to `name` t`h`i`s` d`a`t`a` in T`e`n`s`o`r`Bo`a``r`d`.` `I`f t`h`i`s` i`s` not `s``e`t, t`h``e`n t`h``e` nod`e` `name` will b`e` u`s``e`d in`s`t`e``a`d`.`
#### Returns:

A scalar Tensor of type string. The serialized Summary protocol buffer.
