
Creates a cross-entropy loss using tf.nn.sigmoid_cross_entropy_with_logits.

```
 tf.compat.v1.losses.sigmoid_cross_entropy(
    multi_class_labels,
    logits,
    weights=1.0,
    label_smoothing=0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES,
    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS
)
```

weights acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If weights is a tensor of shape [batch_size], then the loss weights apply to each corresponding sample.

If label_smoothing is nonzero, smooth the labels towards 1/2:

```
 new_multiclass_labels = multiclass_labels * (1 - label_smoothing)
                        + 0.5 * label_smoothing
```
#### Args:
- `multi_class_labels`:` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s`]` ``t``a`rg`e``t`` ``i``n``t``e`g`e`r` ``l``a``b``e``l``s`` ``i``n`` ``{0, 1}`.
- `l`og`i``t``s`:` `F`l`o`a``t`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s`]` ``l`og`i``t``s`` `o`u``t`p`u``t``s`` `of` ``t``h``e`` ``n``e``t`work.
- `weights`:` `Op`t``i`o`n``a``l`` ``Tensor`` `w`h`o`s``e`` `r`a``n`k` ``i``s`` ``e``i``t``h``e`r` `0`,`` `or` ``t``h``e`` ``s``a``m``e`` `r`a``n`k` ``a``s`` ``l``a``b``e``l``s``,`` ``a``n`d` ``m``u``s``t`` ``b``e`` ``b`ro`a`d`c``a``s``t``a``b``l``e`` ``t`o` ``l``a``b``e``l``s`` `(`i`.`e`.`,`` ``a``l``l`` `d`i``m``e``n``s``i`o`n``s`` ``m``u``s``t`` ``b``e`` ``e``i``t``h``e`r` ``1``,`` `or` ``t``h``e`` ``s``a``m``e`` ``a``s`` ``t``h``e`` ``c`orr`e``s`po`n`d`i``n`g` ``l`o`s``s``e``s`` `d`i``m``e``n``s``i`o`n`).
- `l``a``b``e``l``_``s``m`oo`t``h``i``n`g:` `If` `gr`e``a``t``e`r` ``t``h``a``n`` ``0`` ``t``h``e``n`` ``s``m`oo`t``h`` ``t``h``e`` ``l``a``b``e``l``s`.
- `s``c`op`e`:` `T`h``e`` ``s``c`op`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n``s`` `p`e`rfor`m``e`d` ``i``n`` ``c`o`m`p`u``t``i``n`g` ``t``h``e`` ``l`o`s``s`.
- `l`o`s``s``_``c`o`l``l``e``c``t``i`o`n`:` ``c`o`l``l``e``c``t``i`o`n`` ``t`o` `w`h``i``c``h`` ``t``h``e`` ``l`o`s``s`` `w`i``l``l`` ``b``e`` ``a`dd`e`d.
- `reduction`:` `Typ`e`` `of` ``reduction`` ``t`o` ``a`pp`l`y` ``t`o` ``l`o`s``s`.
#### Returns:

Weighted loss Tensor of the same type as logits. If reduction is NONE, this has the same shape as logits; otherwise, it is scalar.
#### Raises:
- `ValueError`: If the shape of `logits` doesn't match that of `multi_class_labels` or if the shape of `weights` is invalid, or if `weights` is None. Also if `multi_class_labels` or `logits` is None.
#### Eager Compatibility
[tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model)The loss_collection argument is ignored when executing eagerly. Consider holding on to the return value or collecting losses via a .

