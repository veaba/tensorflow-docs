Performs the average pooling on the input.
### Aliases:
- `tf.compat.v1.nn.avg_pool3d`
- `tf.compat.v2.nn.avg_pool3d`

```
 tf.nn.avg_pool3d(
    input,
    ksize,
    strides,
    padding,
    data_format='NDHWC',
    name=None
)
```
Each entry in `output` is the mean of the corresponding size `ksize` window in `value`.
#### Args:
- `input`: A 5-D `Tensor` of shape `[batch, height, width, channels]` and type `float32`, `float64`, `qint8`, `quint8`, or `qint32`.
- `ksize`: An int or list of `ints` that has length `1`, `3` or `5`. The size of the window for each dimension of the input tensor.
- `strides`: An int or list of `ints` that has length `1`, `3` or `5`. The stride of the sliding window for each dimension of the input tensor.
- `padding`: A string, either `'VALID'` or `'SAME'`. The `padding` algorithm. See the "returns" section of `tf.nn.convolution` for details.
- `data_format`: A string. 'NDHWC' and 'NCDHW' are supported.
- `name`: Optional `name` for the operation.
#### Returns:
A `Tensor` with the same type as `value`. The average pooled output tensor.
