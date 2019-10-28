Splits a tensor into sub tensors.
### Aliases:
- `tf.compat.v1.split`
- `tf.compat.v2.split`

```
 tf.split(
    value,
    num_or_size_splits,
    axis=0,
    num=None,
    name='split'
)
```
### Used in the guide:
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
If `num_or_size_splits` is an integer, then `value` is split along dimension `axis` into `num_split` smaller tensors. This requires that `num_split` evenly divides `value`.shape[`axis`].
