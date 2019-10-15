
Atrous convolution (a.k.a. convolution with holes or dilated convolution).
### Aliases:
- `tf.compat.v1.nn.atrous_conv2d`
- `tf.compat.v2.nn.atrous_conv2d`

```
 tf.nn.atrous_conv2d(
    value,
    filters,
    rate,
    padding,
    name=None
)
```
[tf.nn.convolution](https://www.tensorflow.org/api_docs/python/tf/nn/convolution)This function is a simpler wrapper around the more general , and exists only for backwards compatibility. You can use  to perform 1-D, 2-D, or 3-D atrous convolution.


Computes a 2-D atrous convolution, also known as convolution with holes or dilated convolution, given 4-D value and filters tensors. If the rate parameter is equal to one, it performs regular 2-D convolution. If the rate parameter is greater than one, it performs convolution with holes, sampling the input values every rate pixels in the height and width dimensions. This is equivalent to convolving the input with a set of upsampled filters, produced by inserting rate - 1 zeros between two consecutive values of the filters along the height and width dimensions, hence the name atrous convolution or convolution with holes (the French word trous means holes in English).
#### More specifically:

```
 output[batch, height, width, out_channel] =
    sum_{dheight, dwidth, in_channel} (
        filters[dheight, dwidth, in_channel, out_channel] *
        value[batch, height + rate*dheight, width + rate*dwidth, in_channel]
    )
```

Atrous convolution allows us to explicitly control how densely to compute feature responses in fully convolutional networks. Used in conjunction with bilinear interpolation, it offers an alternative to conv2d_transpose in dense prediction tasks such as semantic image segmentation, optical flow computation, or depth estimation. It also allows us to effectively enlarge the field of view of filters without increasing the number of parameters or the amount of computation.
[Semantic Image Segmentation with Deep Convolutional Nets and Fully Connected CRFs](http://arxiv.org/abs/1412.7062)For a description of atrous convolution and how it can be used for dense feature extraction, please see: . The same operation is investigated further in Multi-Scale Context Aggregation by Dilated Convolutions. Previous works that effectively use atrous convolution in different ways are, among others, OverFeat: Integrated Recognition, Localization and Detection using Convolutional Networks and Fast Image Scanning with Deep Max-Pooling Convolutional Neural Networks. Atrous convolution is also closely related to the so-called noble identities in multi-rate signal processing.


There are many different ways to implement atrous convolution (see the refs above). The implementation here reduces

```
     atrous_conv2d(value, filters, rate, padding=padding)
```

to the following three operations:

```
     paddings = ...
    net = space_to_batch(value, paddings, block_size=rate)
    net = conv2d(net, filters, strides=[1, 1, 1, 1], padding="VALID")
    crops = ...
    net = batch_to_space(net, crops, block_size=rate)
```

Advanced usage. Note the following optimization: A sequence of atrous_conv2d operations with identical rate parameters, 'SAME' padding, and filters with odd heights/ widths:

```
     net = atrous_conv2d(net, filters1, rate, padding="SAME")
    net = atrous_conv2d(net, filters2, rate, padding="SAME")
    ...
    net = atrous_conv2d(net, filtersK, rate, padding="SAME")
```

can be equivalently performed cheaper in terms of computation and memory as:

```
     pad = ...  # padding so that the input dims are multiples of rate
    net = space_to_batch(net, paddings=pad, block_size=rate)
    net = conv2d(net, filters1, strides=[1, 1, 1, 1], padding="SAME")
    net = conv2d(net, filters2, strides=[1, 1, 1, 1], padding="SAME")
    ...
    net = conv2d(net, filtersK, strides=[1, 1, 1, 1], padding="SAME")
    net = batch_to_space(net, crops=pad, block_size=rate)
```

because a pair of consecutive space_to_batch and batch_to_space ops with the same block_size cancel out when their respective paddings and crops inputs are identical.
#### Args:
- `value`:` `A` `4-D` ``Tensor`` `of` ``t`yp`e`` ``float`.` `I`t`` ``n``e``e``d``s`` ``t`o` ``b``e`` ``i``n`` ``t``h``e`` ``d``e`f`a`u`l``t`` `"NHWC"` `form`a``t`.` `I`t``s`` ``s``h``a`p`e`` ``i``s`` `[`b``a``t``c``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`].
- `filters`:` `A` `4-D` ``Tensor`` ``w``i``t``h`` ``t``h``e`` ``s``a`m`e`` ``t`yp`e`` ``a``s`` ``value`` ``a``n``d`` ``s``h``a`p`e`` `[`f``i``l``t``e``r``_``h``e``i``g``h``t``,`` ``f``i``l``t``e``r``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``o``u``t``_``c``h``a``n``n``e``l``s`].` ``filters`'` ``i``n``_``c``h``a``n``n``e``l``s`` ``d``i`m`e``n``s``i``o``n`` `m`u``s``t`` `m`a``t``c``h`` ``t``h``a``t`` ``o``f`` ``value`.` `A`t``r``o``u``s`` ``c``o``n`v`o``l``u``t``i``o``n`` ``i``s`` ``e`q`u``i`v`a``l``e``n``t`` ``t``o`` ``s``t``a``n``d``a``r``d`` ``c``o``n`v`o``l``u``t``i``o``n`` ``w``i``t``h`` ``u`p`s``a`mp`l``e``d`` ``filters`` ``w``i``t``h`` ``e``f``f``e``c``t``i`v`e`` ``h``e``i``g``h``t`` ``f``i``l``t``e``r``_``h``e``i``g``h``t`` `+` `(`f``i``l``t``e``r``_``h``e``i``g``h``t`` `-` `1)` `*` `(`r``a``t``e`` `-` `1)` ``a``n``d`` ``e``f``f``e``c``t``i`v`e`` ``w``i``d``t``h`` ``f``i``l``t``e``r``_``w``i``d``t``h`` `+` `(`f``i``l``t``e``r``_``w``i``d``t``h`` `-` `1)` `*` `(`r``a``t``e`` `-` `1)`,`` `p`r``o``d``u``c``e``d`` ``b`y` ``i``n``s``e``r``t``i``n``g`` ``r``a``t``e`` `-` `1` `z`e``r``o``s`` ``a``l``o``n``g`` ``c``o``n``s``e``c``u``t``i`v`e`` ``e``l``e`m`e``n``t``s`` ``a``c``r``o``s``s`` ``t``h``e`` ``filters`'` ``s`p`a``t``i``a``l`` ``d``i`m`e``n``s``i``o``n``s`.
- `r``a``t``e`:` `A` `p`o``s``i``t``i`v`e`` ``i``n``t`32.` `T`h``e`` ``s``t``r``i``d``e`` ``w``i``t``h`` ``w``h``i``c``h`` ``w``e`` ``s``a`mp`l``e`` ``i``n`p`u``t`` ``value``s`` ``a``c``r``o``s``s`` ``t``h``e`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i`m`e``n``s``i``o``n``s`.` `Eq`u``i`v`a``l``e``n``t``l`y`,`` ``t``h``e`` ``r``a``t``e`` ``b`y` ``w``h``i``c``h`` ``w``e`` ``u`p`s``a`mp`l``e`` ``t``h``e`` ``f``i``l``t``e``r`` ``value``s`` ``b`y` ``i``n``s``e``r``t``i``n``g`` `z`e``r``o``s`` ``a``c``r``o``s``s`` ``t``h``e`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i`m`e``n``s``i``o``n``s`.` `I`n`` ``t``h``e`` ``l``i``t``e``r``a``t``u``r``e``,`` ``t``h``e`` ``s``a`m`e`` `p`a``r``a`m`e``t``e``r`` ``i``s`` ``s``o`m`e``t``i`m`e``s`` ``c``a``l``l``e``d`` ``i``n`p`u``t`` ``s``t``r``i``d``e`` ``o``r`` ``d``i``l``a``t``i``o``n`.
- `padding`:` `A` ``s``t``r``i``n``g``,`` ``e``i``t``h``e``r`` ``'VALID'`` ``o``r`` ``'SAME'`.` `T`h``e`` ``padding`` ``a``l``g``o``r``i``t``h`m.
- `n``a`m`e`:` `Op`t``i``o``n``a``l`` ``n``a`m`e`` ``f``o``r`` ``t``h``e`` ``r``e``t``u``r``n``e``d`` ``t``e``n``s``o``r`.
#### Returns:

A Tensor with the same type as value. Output shape with 'VALID' padding is:

```
 [batch, height - 2 * (filter_width - 1),
 width - 2 * (filter_height - 1), out_channels].
```

Output shape with 'SAME' padding is:

```
 [batch, height, width, out_channels].
```
#### Raises:
- `ValueError`: If input/output depth does not match `filters`' shape, or if padding is other than `'VALID'` or `'SAME'`.
