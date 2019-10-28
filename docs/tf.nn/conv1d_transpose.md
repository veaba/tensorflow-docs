The transpose of `conv1d`.
### Aliases:
- `tf.compat.v1.nn.conv1d_transpose`
- `tf.compat.v2.nn.conv1d_transpose`

```
 tf.nn.conv1d_transpose(
    input,
    filters,
    output_shape,
    strides,
    padding='SAME',
    data_format='NWC',
    dilations=None,
    name=None
)
```
This operation is sometimes called "deconvolution" after Deconvolutional Networks, but is really the transpose (gradient) of `conv1d` rather than an actual deconvolution.
#### Args:
- `input`: A 3-D `Tensor` of type `float` and shape `[batch, in_width, in_channels]` for `NWC` data format or `[batch, in_channels, in_width]` for `NCW` data format.
- `filters`: A 3-D `Tensor` with the same type as `value` and shape `[filter_width, output_channels, in_channels]`. `filter`'s `in_channels` dimension must match that of `value`.
- `output_shape`: A 1-D `Tensor`, containing three elements, representing the output shape of the deconvolution op.
- `strides`: An int or list of `ints` that has length `1` or `3`. The number of entries by which the filter is moved right at each step.
- `padding`: A string, either `'VALID'` or `'SAME'`. The `padding` algorithm. See the "returns" section of `tf.nn.convolution` for details.
- `data_format`: A string. `'NWC'` and `'NCW'` are supported.
- `dilations`: An int or list of `ints` that has length `1` or `3` which defaults to `1`. The dilation factor for each dimension of input. If set to k > `1`, there will be k-`1` skipped cells between each filter element on that dimension. Dilations in the batch and depth dimensions must be `1`.
- `name`: Optional `name` for the returned tensor.
#### Returns:
A `Tensor` with the same type as `value`.
#### Raises:
- `ValueError`: If input/output depth does not match `filter`'s shape, if `output_shape` is not at 3-element vector, if `padding` is other than `'VALID'` or `'SAME'`, or if `data_format` is invalid.
