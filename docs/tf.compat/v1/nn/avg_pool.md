Performs the average pooling on the input.
### Aliases:
- `tf.compat.v1.nn.avg_pool2d`

```
 tf.compat.v1.nn.avg_pool(
    value,
    ksize,
    strides,
    padding,
    data_format='NHWC',
    name=None,
    input=None
)
```
Each entry in `output` is the mean of the corresponding size `ksize` window in `value`.
#### Args:
- `value`: A 4-D `Tensor` of shape `[batch, height, width, channels]` and type `float32`, `float64`, `qint8`, `quint8`, or `qint32`.
- `ksize`: An int or list of `ints` that has length `1`, `2` or `4`. The size of the window for each dimension of the input tensor.
- `strides`: An int or list of `ints` that has length `1`, `2` or `4`. The stride of the sliding window for each dimension of the input tensor.
- `padding`: A string, either `'VALID'` or `'SAME'`. The `padding` algorithm. See the "returns" section of `tf.nn.convolution` for details.
- `data_format`: A string. 'NHWC' and 'NCHW' are supported.
- `name`: Optional `name` for the operation.
- `input`: Alias for value.
#### Returns:
A `Tensor` with the same type as `value`. The average pooled output tensor.
