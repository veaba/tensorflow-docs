
Outputs a Summary protocol buffer with a histogram.

```
 tf.compat.v1.summary.histogram(
    name,
    values,
    collections=None,
    family=None
)
```
[here](https://www.tensorflow.org/get_started/tensorboard_histograms)Adding a histogram summary makes it possible to visualize your data's distribution in TensorBoard. You can see a detailed explanation of the TensorBoard histogram dashboard .

[Summary](https://www.tensorflow.org/code/tensorflow/core/framework/summary.proto)The generated  has one summary value containing a histogram for values.


This op reports an InvalidArgument error if any value is not finite.
#### Args:
- `name`: A `name` for the generated node. Will also serve as a series `name` in TensorBoard.
- `values`: A real numeric `Tensor`. Any shape. Values to use to build the histogram.
- `collections`: O`p`tion`a`l li`s`t of g`r``a``p``h` `collections` k`e``y``s``.` T`h``e` n`e`w `s`umm`a``r``y` o`p` i`s` `a`dd`e`d to t`h``e``s``e` `collections``.` D`e`f`a`ult`s` to [`G``r``a``p``h``K``e``y``s``.``S``U``M``M``A``R``I``E``S`]`.`
- `family`: O`p`tion`a`l; if `p``r`ovid`e`d, u`s``e`d `a``s` t`h``e` `p``r``e`fix of t`h``e` `s`umm`a``r``y` t`a`g `name`, w`h`ic`h` cont`r`ol`s` t`h``e` t`a`b `name` u`s``e`d fo`r` di`s``p`l`a``y` on `Tensor`bo`a``r`d`.`
#### Returns:

A scalar Tensor of type string. The serialized Summary protocol buffer.
