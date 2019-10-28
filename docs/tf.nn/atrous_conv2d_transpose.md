The transpose of `atrous_conv2d`.
### Aliases:
- `tf.compat.v1.nn.atrous_conv2d_transpose`
- `tf.compat.v2.nn.atrous_conv2d_transpose`

```
 tf.nn.atrous_conv2d_transpose(
    value,
    filters,
    output_shape,
    rate,
    padding,
    name=None
)
```
This operation is sometimes called "deconvolution" after Deconvolutional Networks, but is really the transpose (gradient) of `atrous_conv2d` rather than an actual deconvolution.
#### Args:
- `value`: A 4-D `Tensor` of type `float`. It needs to be in the default `NHWC` format. Its shape is `[batch, in_height, in_width, in_channels]`.
#### Returns:
A `Tensor` with the same type as `value`.
#### Raises:
- `ValueError`: If input/output depth does not match `filters`' shape, or if padding is other than `'VALID'` or `'SAME'`, or if the `rate` is less than one, or if the output_shape is not a tensor with 4 elements.
