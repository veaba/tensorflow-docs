[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/atrous_conv2d_transpose) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_ops.py#L2278-L2427)  
  
  
The transpose of `atrous_conv2d`.

### Aliases:

  * [`tf.compat.v1.nn.atrous_conv2d_transpose`](/api_docs/python/tf/nn/atrous_conv2d_transpose)
  * [`tf.compat.v2.nn.atrous_conv2d_transpose`](/api_docs/python/tf/nn/atrous_conv2d_transpose)

    
    
    tf.nn.atrous_conv2d_transpose(
        value,
        filters,
        output_shape,
        rate,
        padding,
        name=None
    )
    

This operation is sometimes called "deconvolution" after [Deconvolutional
Networks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf),
but is really the transpose (gradient) of `atrous_conv2d` rather than an
actual deconvolution.

#### Args:

  * **`value`** : A 4-D `Tensor` of type `float`. It needs to be in the default `NHWC` format. Its shape is `[batch, in_height, in_width, in_channels]`.
  * **`filters`** : A 4-D `Tensor` with the same type as `value` and shape `[filter_height, filter_width, out_channels, in_channels]`. `filters`' `in_channels` dimension must match that of `value`. Atrous convolution is equivalent to standard convolution with upsampled filters with effective height `filter_height + (filter_height - 1) * (rate - 1)` and effective width `filter_width + (filter_width - 1) * (rate - 1)`, produced by inserting `rate - 1` zeros along consecutive elements across the `filters`' spatial dimensions.
  * **`output_shape`** : A 1-D `Tensor` of shape representing the output shape of the deconvolution op.
  * **`rate`** : A positive int32. The stride with which we sample input values across the `height` and `width` dimensions. Equivalently, the rate by which we upsample the filter values by inserting zeros across the `height` and `width` dimensions. In the literature, the same parameter is sometimes called `input stride` or `dilation`.
  * **`padding`** : A string, either `'VALID'` or `'SAME'`. The padding algorithm.
  * **`name`** : Optional name for the returned tensor.

#### Returns:

A `Tensor` with the same type as `value`.

#### Raises:

  * **`ValueError`** : If input/output depth does not match `filters`' shape, or if padding is other than `'VALID'` or `'SAME'`, or if the `rate` is less than one, or if the output_shape is not a tensor with 4 elements.

