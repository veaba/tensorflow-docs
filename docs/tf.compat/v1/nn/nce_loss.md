
Computes and returns the noise-contrastive estimation training loss.

```
 tf.compat.v1.nn.nce_loss(
    weights,
    biases,
    labels,
    inputs,
    num_sampled,
    num_classes,
    num_true=1,
    sampled_values=None,
    remove_accidental_hits=False,
    partition_strategy='mod',
    name='nce_loss'
)
```
[Noise-contrastive estimation: A new estimation principle for unnormalized statistical models](http://www.jmlr.org/proceedings/papers/v9/gutmann10a/gutmann10a.pdf)See . Also see our Candidate Sampling Algorithms Reference


A common use case is to use this method for training, and calculate the full sigmoid loss for evaluation or inference. In this case, you must set partition_strategy="div" for the two losses to be consistent, as in the following example:

```
 if mode == "train":
  loss = tf.nn.nce_loss(
      weights=weights,
      biases=biases,
      labels=labels,
      inputs=inputs,
      ...,
      partition_strategy="div")
elif mode == "eval":
  logits = tf.matmul(inputs, tf.transpose(weights))
  logits = tf.nn.bias_add(logits, biases)
  labels_one_hot = tf.one_hot(labels, n_classes)
  loss = tf.nn.sigmoid_cross_entropy_with_logits(
      labels=labels_one_hot,
      logits=logits)
  loss = tf.reduce_sum(loss, axis=1)
```
#### Args:
- `weights`:` `A` ``Tensor`` `of` ``s`h`a`p`e`` `[`n``u``m``_``c``l``a``s``s``e``s``,`` ``d``i``m`]`,`` `or` ``a`` ``l``i``s`t` `of` ``Tensor`` `obj`e``c`t`s`` `who`s``e`` ``c`o`n``c``a`t`e``n``a`t`i`o`n`` ``a``l`o`n`g` ``d``i``m``e``n``s``i`o`n`` `0` `h`a``s`` ``s`h`a`p`e`` `[`n``u``m``_``c``l``a``s``s``e``s``,`` ``d``i``m`].` `Th`e`` `(po`s``s``i`b`l`y-p`a`rt`i`t`i`o`n``e``d`)` ``c``l``a``s``s`` ``e``m`b`e``d``d``i``n`g`s`.
- `biases`:` `A` ``Tensor`` `of` ``s`h`a`p`e`` `[`n``u``m``_``c``l``a``s``s``e``s`].` `Th`e`` ``c``l``a``s``s`` ``biases`.
- `l``a``b``e``l``s`:` `A` ``Tensor`` `of` ``t`yp`e`` ``i``n``t`64` ``a``n``d`` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``t``r``u``e`].` `T`h``e`` ``t``a``r`g`e``t`` ``c``l``a``s``s``e``s`.
- `i``n`p`u``t``s`:` `A` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``d``i``m`].` `T`h``e`` `fo`r`w`a``r``d`` ``a``c``t``i`v`a``t``i`o`n``s`` `of` ``t``h``e`` ``i``n`p`u``t`` ``n``e``t`wo`r`k.
- `n``u``m``_``s``a``m`p`l``e``d`:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` ``n``e`g`a``t``i`v`e`` ``c``l``a``s``s``e``s`` ``t`o` ``r``a``n``d`o`m``l`y` ``s``a``m`p`l``e`` `p`e``r`` ``b``a``t``c``h`.` `T`h``i``s`` ``s``i``n`g`l``e`` ``s``a``m`p`l``e`` `of` ``n``e`g`a``t``i`v`e`` ``c``l``a``s``s``e``s`` ``i``s`` ``e`v`a``l``u``a``t``e``d`` `fo`r`` ``e``a``c``h`` ``e``l``e``m``e``n``t`` ``i``n`` ``t``h``e`` ``b``a``t``c``h`.
- `n``u``m``_``c``l``a``s``s``e``s`:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` `po`s``s``i``b``l``e`` ``c``l``a``s``s``e``s`.
- `n``u``m``_``t``r``u``e`:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` ``t``a``r`g`e``t`` ``c``l``a``s``s``e``s`` `p`e``r`` ``t``r``a``i``n``i``n`g` ``e`x`a``m`p`l``e`.
#### Returns:

A batch_size 1-D tensor of per-example NCE losses.
