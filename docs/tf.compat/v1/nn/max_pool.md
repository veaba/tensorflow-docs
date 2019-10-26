Performs the max pooling on the input.

```
 tf.compat.v1.nn.max_pool(
    value,
    ksize,
    strides,
    padding,
    data_format='NHWC',
    name=None,
    input=None
)
```
#### Args:
- value: A 4-D Tensor of the format specified by data_format.
- ksize: An int or list of ints that has length 1, 2 or 4. The size of the window for each dimension of the input tensor.
- strides: An int or list of ints that has length 1, 2 or 4. The stride of the sliding window for each dimension of the input tensor.
- padding: A string, either 'VALID' or 'SAME'. The padding algorithm. See the "returns" section of tf.nn.convolution for details.
- data_format: A string. 'NHWC', 'NCHW' and 'NCHW_VECT_C' are supported.
- name: Optional name for the operation.
- input: Alias for value.
#### Returns:
A Tensor of format specified by data_format. The max pooled output tensor.
