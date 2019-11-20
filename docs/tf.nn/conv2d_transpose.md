[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/conv2d_transpose) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_ops.py#L2207-L2275)  
---|---  
  
The transpose of `conv2d`.

### Aliases:

  * [`tf.compat.v2.nn.conv2d_transpose`](/api_docs/python/tf/nn/conv2d_transpose)

    
    
    tf.nn.conv2d_transpose(
        input,
        filters,
        output_shape,
        strides,
        padding='SAME',
        data_format='NHWC',
        dilations=None,
        name=None
    )
    

This operation is sometimes called "deconvolution" after [Deconvolutional
Networks](http://www.matthewzeiler.com/pubs/cvpr2010/cvpr2010.pdf), but is
actually the transpose (gradient) of `conv2d` rather than an actual
deconvolution.

#### Args:

  * **`input`** : A 4-D `Tensor` of type `float` and shape `[batch, height, width, in_channels]` for `NHWC` data format or `[batch, in_channels, height, width]` for `NCHW` data format.
  * **`filters`** : A 4-D `Tensor` with the same type as `input` and shape `[height, width, output_channels, in_channels]`. `filter`'s `in_channels` dimension must match that of `input`.
  * **`output_shape`** : A 1-D `Tensor` representing the output shape of the deconvolution op.
  * **`strides`** : An int or list of `ints` that has length `1`, `2` or `4`. The stride of the sliding window for each dimension of `input`. If a single value is given it is replicated in the `H` and `W` dimension. By default the `N` and `C` dimensions are set to 0. The dimension order is determined by the value of `data_format`, see below for details.
  * **`padding`** : A string, either `'VALID'` or `'SAME'`. The padding algorithm. See the "returns" section of [`tf.nn.convolution`](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
  * **`data_format`** : A string. 'NHWC' and 'NCHW' are supported.
  * **`dilations`** : An int or list of `ints` that has length `1`, `2` or `4`, defaults to 1. The dilation factor for each dimension of`input`. If a single value is given it is replicated in the `H` and `W` dimension. By default the `N` and `C` dimensions are set to 1. If set to k > 1, there will be k-1 skipped cells between each filter element on that dimension. The dimension order is determined by the value of `data_format`, see above for details. Dilations in the batch and depth dimensions if a 4-d tensor must be 1.
  * **`name`** : Optional name for the returned tensor.

#### Returns:

A `Tensor` with the same type as `input`.

#### Raises:

  * **`ValueError`** : If input/output depth does not match `filter`'s shape, or if padding is other than `'VALID'` or `'SAME'`.

