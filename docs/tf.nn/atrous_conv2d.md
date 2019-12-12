萎缩卷曲（亦称有孔卷曲或扩张卷曲）。

**别名** : [ `tf.compat.v1.nn.atrous_conv2d` ](/api_docs/python/tf/nn/atrous_conv2d), [ `tf.compat.v2.nn.atrous_conv2d` ](/api_docs/python/tf/nn/atrous_conv2d)

```
 tf.nn.atrous_conv2d(
    value,
    filters,
    rate,
    padding,
    name=None
)
 
```

This function is a simpler wrapper around the more general[ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution), and exists only for backwards compatibility. You canuse [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) to perform 1-D, 2-D, or 3-D atrous convolution.

Computes a 2-D atrous convolution, also known as convolution with holes ordilated convolution, given 4-D  `value`  and  `filters`  tensors. If the  `rate` parameter is equal to one, it performs regular 2-D convolution. If the  `rate` parameter is greater than one, it performs convolution with holes, samplingthe input values every  `rate`  pixels in the  `height`  and  `width`  dimensions.This is equivalent to convolving the input with a set of upsampled filters,produced by inserting  `rate - 1`  zeros between two consecutive values of thefilters along the  `height`  and  `width`  dimensions, hence the name atrousconvolution or convolution with holes (the French word trous means holes inEnglish).

#### 更具体地说：


```
 output[batch, height, width, out_channel] =
    sum_{dheight, dwidth, in_channel} (
        filters[dheight, dwidth, in_channel, out_channel] *
        value[batch, height + rate*dheight, width + rate*dwidth, in_channel]
    )
 
```

Atrous convolution allows us to explicitly control how densely to computefeature responses in fully convolutional networks. Used in conjunction withbilinear interpolation, it offers an alternative to  `conv2d_transpose`  indense prediction tasks such as semantic image segmentation, optical flowcomputation, or depth estimation. It also allows us to effectively enlargethe field of view of filters without increasing the number of parameters orthe amount of computation.

For a description of atrous convolution and how it can be used for densefeature extraction, please see: [Semantic Image Segmentation with DeepConvolutional Nets and Fully Connected CRFs](http://arxiv.org/abs/1412.7062).The same operation is investigated further in [Multi-Scale Context Aggregationby Dilated Convolutions](http://arxiv.org/abs/1511.07122). Previous worksthat effectively use atrous convolution in different ways are, among others,[OverFeat: Integrated Recognition, Localization and Detection usingConvolutional Networks](http://arxiv.org/abs/1312.6229) and [Fast ImageScanning with Deep Max-Pooling Convolutional NeuralNetworks](http://arxiv.org/abs/1302.1700).Atrous convolution is also closely related to the so-called noble identitiesin multi-rate signal processing.

There are many different ways to implement atrous convolution (see the refsabove). The implementation here reduces

```
     atrous_conv2d(value, filters, rate, padding=padding)
 
```

执行以下三个操作：

```
  )
    crops = ...
    net = batch_to_space(net, crops, block_size=rate)
 
```

Advanced usage. Note the following optimization: A sequence of  `atrous_conv2d` operations with identical  `rate`  parameters, 'SAME'  `padding` , and filterswith odd heights/ widths:

```
  )
 )
 )
 
```

在计算和内存方面，可以等效地以更低的成本执行：

```
  )
 )
 )
    net = batch_to_space(net, crops=pad, block_size=rate)
 
```

because a pair of consecutive  `space_to_batch`  and  `batch_to_space`  ops withthe same  `block_size`  cancel out when their respective  `paddings`  and  `crops` inputs are identical.

#### 参数：
- **`value`** : A 4-D  `Tensor`  of type  `float` . It needs to be in the default "NHWC"format. Its shape is  `[batch, in_height, in_width, in_channels]` .
- **`filters`** : A 4-D  `Tensor`  with the same type as  `value`  and shape `[filter_height, filter_width, in_channels, out_channels]` .  `filters` ' `in_channels`  dimension must match that of  `value` . Atrous convolution isequivalent to standard convolution with upsampled filters with effectiveheight  `filter_height + (filter_height - 1) * (rate - 1)`  and effectivewidth  `filter_width + (filter_width - 1) * (rate - 1)` , produced byinserting  `rate - 1`  zeros along consecutive elements across the `filters` ' spatial dimensions.
- **`rate`** : A positive int32. The stride with which we sample input values acrossthe  `height`  and  `width`  dimensions. Equivalently, the rate by which weupsample the filter values by inserting zeros across the  `height`  and `width`  dimensions. In the literature, the same parameter is sometimescalled  `input stride`  or  `dilation` .
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm.
- **`name`** : Optional name for the returned tensor.


#### 返回：
A  `Tensor`  with the same type as  `value` .Output shape with  `'VALID'`  padding is:

```
 [batch, height - 2 * (filter_width - 1),
 width - 2 * (filter_height - 1), out_channels].
 
```

Output shape with  `'SAME'`  padding is:

```
 [batch, height, width, out_channels].
 
```

#### 加薪：
- **`ValueError`** : If input/output depth does not match  `filters` ' shape, or ifpadding is other than  `'VALID'`  or  `'SAME'` .
