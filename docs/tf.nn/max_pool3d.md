[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/max_pool3d) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_ops.py#L3901-L3939)  
  
  
Performs the max pooling on the input.

### Aliases:

  * [`tf.compat.v1.nn.max_pool3d`](/api_docs/python/tf/nn/max_pool3d)
  * [`tf.compat.v2.nn.max_pool3d`](/api_docs/python/tf/nn/max_pool3d)

    
    
    tf.nn.max_pool3d(
        input,
        ksize,
        strides,
        padding,
        data_format='NDHWC',
        name=None
    )
    

#### Args:

  * **`input`** : A 5-D `Tensor` of the format specified by `data_format`.
  * **`ksize`** : An int or list of `ints` that has length `1`, `3` or `5`. The size of the window for each dimension of the input tensor.
  * **`strides`** : An int or list of `ints` that has length `1`, `3` or `5`. The stride of the sliding window for each dimension of the input tensor.
  * **`padding`** : A string, either `'VALID'` or `'SAME'`. The padding algorithm. See the "returns" section of [`tf.nn.convolution`](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
  * **`data_format`** : An optional string from: "NDHWC", "NCDHW". Defaults to "NDHWC". The data format of the input and output data. With the default format "NDHWC", the data is stored in the order of: [batch, in_depth, in_height, in_width, in_channels]. Alternatively, the format could be "NCDHW", the data storage order is: [batch, in_channels, in_depth, in_height, in_width].
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of format specified by `data_format`. The max pooled output tensor.

