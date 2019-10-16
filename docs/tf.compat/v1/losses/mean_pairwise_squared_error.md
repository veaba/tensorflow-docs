
Adds a pairwise-errors-squared loss to the training procedure.

```
 tf.compat.v1.losses.mean_pairwise_squared_error(
    labels,
    predictions,
    weights=1.0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES
)
```

Unlike mean_squared_error, which is a measure of the differences between corresponding elements of predictions and labels, mean_pairwise_squared_error is a measure of the differences between pairs of corresponding elements of predictions and labels.

For example, if labels=[a, b, c] and predictions=[x, y, z], there are three pairs of differences are summed to compute the loss: loss = [ ((a-b) - (x-y)).^2 + ((a-c) - (x-z)).^2 + ((b-c) - (y-z)).^2 ] / 3

Note that since the inputs are of shape [batch_size, d0, ... dN], the corresponding pairs are computed within each batch sample but not across samples within a batch. For example, if predictions represents a batch of 16 grayscale images of dimension [batch_size, 100, 200], then the set of pairs is drawn from each image, but not across images.

weights acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If weights is a tensor of size [batch_size], then the total loss for each sample of the batch is rescaled by the corresponding element in the weights vector.
#### Args:
- `labels`: The ground truth output tensor, whose shape must match the shape of `predictions`.
- `predictions`:` `T`h``e`` `pr`e``d``i``c``t``e``d`` `ou`t`pu`t``s``,`` ``a`` ``t``e`n`s`or` `of` ``s``i``z``e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``d``0``,`` ``.``.`` ``d``N`]` `w`h``e`r`e`` ``N`+1` ``i``s`` ``t``h``e`` ``t`o`t``a`l` `num`b``e`r` `of` ``d``i`m`e`n`s``i`on`s`` ``i`n` ``predictions``.`
- `weights`:` `Co`e`ff`i``c``i``e`n`t``s`` `for` ``t``h``e`` `lo`s``s`` ``a`` ``s``c``a`l`a`r`,`` ``a`` ``t``e`n`s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e`]` `or` ``a`` ``t``e`n`s`or` `w`h`o`s``e`` ``s``h``a`p`e`` `m`a``t``c``h``e``s`` ``predictions``.`
- `s``c`op`e`:` `T`h``e`` ``s``c`op`e`` `for` ``t``h``e`` `op`e`r`a``t``i`on`s`` `p`e`rform`e``d`` ``i`n` ``c`ompu`t``i`ng` ``t``h``e`` `lo`s``s``.`
- `loss_collection`:` ``c`oll`e``c``t``i`on` ``t`o` `w`h``i``c``h`` ``t``h``e`` `lo`s``s`` `w`i`ll` ``b``e`` ``a``d``d``e``d``.`
#### Returns:

A scalar Tensor that returns the weighted loss.
#### Raises:
- `ValueError`: If the shape of `predictions` doesn't match that of `labels` or if the shape of `weights` is invalid. Also if `labels` or `predictions` is None.
#### Eager Compatibility
[tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model)The loss_collection argument is ignored when executing eagerly. Consider holding on to the return value or collecting losses via a .

