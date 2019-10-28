Computes sums of N-D convolutions (actually cross-correlation).

```
 tf.compat.v1.nn.convolution(
    input,
    filter,
    padding,
    strides=None,
    dilation_rate=None,
    name=None,
    data_format=None,
    filters=None,
    dilations=None
)
```
This also supports either output striding via the optional `strides` parameter or atrous convolution (also known as convolution with holes or dilated convolution, based on the French word "trous" meaning holes in English) via the optional `dilation_rate` parameter. Currently, however, output striding is not supported for atrous convolutions.
Specifically, in the case that `data_format` does not start with "NC", given a rank (N+2) `input` Tensor of shape
[num_batches, input_spatial_shape[0], ..., input_spatial_shape[N-1], num_input_channels],
a rank (N+2) `filter` Tensor of shape
[spatial_filter_shape[0], ..., spatial_filter_shape[N-1], num_input_channels, num_output_channels],
an optional `dilation_rate` tensor of shape N specifying the filter upsampling/input downsampling rate, and an optional list of N `strides` (defaulting [1]*N), this computes for each N-D spatial output position (x[0], ..., x[N-1]):

```
   output[b, x[0], ..., x[N-1], k] =
      sum_{z[0], ..., z[N-1], q}
          filter[z[0], ..., z[N-1], q, k] *
          padded_input[b,
                       x[0]*strides[0] + dilation_rate[0]*z[0],
                       ...,
                       x[N-1]*strides[N-1] + dilation_rate[N-1]*z[N-1],
                       q]
```
