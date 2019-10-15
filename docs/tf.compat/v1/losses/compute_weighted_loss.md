
Computes the weighted loss.

```
 tf.compat.v1.losses.compute_weighted_loss(
    losses,
    weights=1.0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES,
    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS
)
```
#### Args:
- `losses`:` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``d``1``,`` ``.``.``.`` ``d``N`]`.`
- `weights`:` `Op`t``i`on`a`l` ``Tensor`` `w`h`o`s``e`` `r`a`nk` ``i``s`` ``e``i``t``h``e`r` `0`,`` `or` ``t``h``e`` ``s``a`m`e`` `r`a`nk` ``a``s`` ``losses``,`` ``a`n`d`` `mu`s``t`` ``b``e`` ``b`ro`a``d``c``a``s``t``a``b`l`e`` ``t`o` ``losses`` `(`i``.``e``.``,`` ``a`ll` ``d``i`m`e`n`s``i`on`s`` `mu`s``t`` ``b``e`` ``e``i``t``h``e`r` ``1``,`` `or` ``t``h``e`` ``s``a`m`e`` ``a``s`` ``t``h``e`` ``c`orr`e``s`pon`d``i`ng` ``losses`` ``d``i`m`e`n`s``i`on)`.`
- `s``c`op`e`:` ``t``h``e`` ``s``c`op`e`` `for` ``t``h``e`` `op`e`r`a``t``i`on`s`` `p`e`rform`e``d`` ``i`n` ``c`ompu`t``i`ng` ``t``h``e`` `lo`s``s``.`
- `loss_collection`:` ``t``h``e`` `lo`s``s`` `w`i`ll` ``b``e`` ``a``d``d``e``d`` ``t`o` ``t``h``e``s``e`` ``c`oll`e``c``t``i`on`s``.`
- `reduction`:` `Typ`e`` `of` ``reduction`` ``t`o` ``a`pply` ``t`o` `lo`s``s``.`
#### Returns:

Weighted loss Tensor of the same type as losses. If reduction is NONE, this has the same shape as losses; otherwise, it is scalar.
#### Raises:
- `ValueError`: If `weights` is `None` or the shape is not compatible with `losses`, or if the number of dimensions (rank) of either `losses` or `weights` is missing.
#### Note:
[tf.stop_gradient](https://www.tensorflow.org/api_docs/python/tf/stop_gradient)When calculating the gradient of a weighted loss contributions from both losses and weights are considered. If your weights depend on some model parameters but you do not want this to affect the loss gradient, you need to apply  to weights before passing them to compute_weighted_loss.

#### Eager Compatibility
[tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model)The loss_collection argument is ignored when executing eagerly. Consider holding on to the return value or collecting losses via a .

