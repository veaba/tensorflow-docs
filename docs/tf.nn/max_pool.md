Performs the max pooling on the input.
### Aliases:
- tf.compat.v1.nn.max_pool_v2
- tf.compat.v2.nn.max_pool

```
 tf.nn.max_pool(
    input,
    ksize,
    strides,
    padding,
    data_format=None,
    name=None
)
```
#### Args:
- input: Tensor of rank N+2, of shape [batch_size] + input_spatial_shape + [num_channels] if data_format does not start with "NC" (default), or [batch_size, num_channels] + input_spatial_shape if data_format starts with "NC". Pooling happens over the spatial dimensions only.
- ksize: An int or list of ints that has length 1, N or N+2. The size of the window for each dimension of the input tensor.
- strides: An int or list of ints that has length 1, N or N+2. The stride of the sliding window for each dimension of the input tensor.
- padding: A string, either 'VALID' or 'SAME'. The padding algorithm. See the "returns" section of tf.nn.convolution for details.
- data_format: A string. Specifies the channel dimension. For N=1 it can be either "NWC" (default) or "NCW", for N=2 it can be either "NHWC" (default) or "NCHW" and for N=3 either "NDHWC" (default) or "NCDHW".
- name: Optional name for the operation.
#### Returns:
A Tensor of format specified by data_format. The max pooled output tensor.
