
Outputs a Summary protocol buffer containing a single scalar value.

```
 tf.compat.v1.summary.scalar(
    name,
    tensor,
    collections=None,
    family=None
)
```

The generated Summary has a Tensor.proto containing the input Tensor.
#### Args:
- `name`: A `name` for the generated node. Will also serve as the series `name` in TensorBoard.
- `tensor`: A real numeric Tensor containing a single value.
- `collections`: O`p`tion`a`l li`s`t of g`r``a``p``h` `collections` k`e``y``s``.` T`h``e` n`e`w `s`umm`a``r``y` o`p` i`s` `a`dd`e`d to t`h``e``s``e` `collections``.` D`e`f`a`ult`s` to [`G``r``a``p``h``K``e``y``s``.``S``U``M``M``A``R``I``E``S`]`.`
- `family`: O`p`tion`a`l; if `p``r`ovid`e`d, u`s``e`d `a``s` t`h``e` `p``r``e`fix of t`h``e` `s`umm`a``r``y` t`a`g `name`, w`h`ic`h` cont`r`ol`s` t`h``e` t`a`b `name` u`s``e`d fo`r` di`s``p`l`a``y` on T`e`n`s`o`r`bo`a``r`d`.`
#### Returns:

A scalar Tensor of type string. Which contains a Summary protobuf.
#### Raises:
- `ValueError`: If tensor has the wrong shape or type.
