
Computes softmax cross entropy between logits and labels.
### Aliases:
- `tf.compat.v2.nn.softmax_cross_entropy_with_logits`

```
 tf.nn.softmax_cross_entropy_with_logits(
    labels,
    logits,
    axis=-1,
    name=None
)
```
### Used in the guide:
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``

Measures the probability error in discrete classification tasks in which the classes are mutually exclusive (each entry is in exactly one class). For example, each CIFAR-10 image is labeled with one and only one label: an image can be a dog or a truck, but not both.

NOTE: While the classes are mutually exclusive, their probabilities need not be. All that is required is that each row of labels is a valid probability distribution. If they are not, the computation of the gradient will be incorrect.

If using exclusive labels (wherein one and only one class is true at a time), see sparse_softmax_cross_entropy_with_logits.

WARNING: This op expects unscaled logits, since it performs a softmax on logits internally for efficiency. Do not call this op with the output of softmax, as it will produce incorrect results.

A common use case is to have logits and labels of shape [batch_size, num_classes], but higher dimensions are supported, with the axis argument specifying the class dimension.

logits and labels must have the same dtype (either float16, float32, or float64).
[tf.stop_gradient](https://www.tensorflow.org/api_docs/python/tf/stop_gradient)Backpropagation will happen into both logits and labels. To disallow backpropagation into labels, pass label tensors through  before feeding it to this function.


Note that to avoid confusion, it is required to pass only named arguments to this function.
#### Args:
- `labels`:` `E`a``c``h`` `v`e``c``t`or` ``a``l`o`n`g` ``t``h``e`` ``c``l``a``s``s`` `d`i``m``e``n``s``i`o`n`` ``s``h`o`u``l`d` ``h`o`l`d` ``a`` `v`a``l``i`d` `pro`b``a``b``i``l``i``t`y` `d`i``s``t`r`i``b``u``t``i`o`n`` ``e`.g.` `for` ``t``h``e`` ``c``a``s``e`` ``i``n`` `w`h``i``c``h`` ``labels`` ``a`r`e`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s`]`,`` ``e``a``c``h`` `row` `of` ``labels`[`i`]` ``m``u``s``t`` ``b``e`` ``a`` `v`a``l``i`d` `pro`b``a``b``i``l``i``t`y` `d`i``s``t`r`i``b``u``t``i`o`n`.
- `l`og`i``t``s`:` `P`e`r-`l``a``b``e``l`` ``a``c``t``i`v`a``t``i`o`n``s``,`` ``t`yp`i``c``a``l``l`y` ``a`` ``l``i``n``e``a`r` `o`u``t`p`u``t`.` `T`h``e``s``e`` ``a``c``t``i`v`a``t``i`o`n`` ``e``n``e`rg`i``e``s`` ``a`r`e`` ``i``n``t``e`rpr`e``t``e`d` ``a``s`` ``u``n``n`or`m``a``l``i``z``e`d` ``l`og` `pro`b``a``b``i``l``i``t``i``e``s`.
- `a`x`i``s`:` `T`h``e`` ``c``l``a``s``s`` `d`i``m``e``n``s``i`o`n`.` `D`e`f`a``u``l``t``e`d` ``t`o` `-1` `w`h``i``c``h`` ``i``s`` ``t``h``e`` ``l``a``s``t`` `d`i``m``e``n``s``i`o`n`.
- `n``a``m``e`:` `A` ``n``a``m``e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A Tensor that contains the softmax cross entropy loss. Its type is the same as logits and its shape is the same as labels except that it does not have the last dimension of labels.
