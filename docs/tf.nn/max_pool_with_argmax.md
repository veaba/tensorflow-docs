Performs max pooling on the input and outputs both max values and indices.
### Aliases:
- tf.compat.v2.nn.max_pool_with_argmax

```
 tf.nn.max_pool_with_argmax(
    input,
    ksize,
    strides,
    padding,
    data_format='NHWC',
    output_dtype=tf.dtypes.int64,
    include_batch_in_index=False,
    name=None
)
```
The indices in argmax are flattened, so that a maximum value at position [b, y, x, c] becomes flattened index: (y * width + x) * channels + c if include_batch_in_index is False; ((b * height + y) * width + x) * channels + c if include_batch_in_index is True.
The indices returned are always in [0, height) x [0, width) before flattening, even if padding is involved and the mathematically correct answer is outside (either negative or too large). This is a bug, but fixing it is difficult to do in a safe backwards compatible way, especially due to flattening.
#### Args:
- input: A Tensor. Must be one of the following types: float32, float64, int32, uint8, int16, int8, int64, bfloat16, uint16, half, uint32, uint64. 4-D with shape [batch, height, width, channels]. Input to pool over.
- ksize: An int or list of ints that has length 1, 2 or 4. The size of the window for each dimension of the input tensor.
- strides: An int or list of ints that has length 1, 2 or 4. The stride of the sliding window for each dimension of the input tensor.
- padding: A string from: "SAME", "VALID". The type of padding algorithm to use.
- data_format: An optional string, must be set to "NHWC". Defaults to "NHWC". Specify the data format of the input and output data.
- output_dtype: An optional tf.DType from: tf.int32, tf.int64. Defaults to tf.int64. The dtype of the returned argmax tensor.
- include_batch_in_index: An optional boolean. Defaults to False. Whether to include batch dimension in flattened index of argmax.
- name: A name for the operation (optional).
#### Returns:
A tuple of Tensor objects (output, argmax).
- output: A Tensor. Has the same type as input.
- argmax: A Tensor of type output_dtype.
