DepthToSpace for tensors of type T.
### Aliases:
- `tf.compat.v2.nn.depth_to_space`

```
 tf.nn.depth_to_space(
    input,
    block_size,
    data_format='NHWC',
    name=None
)
```
Rearranges data from `depth` into blocks of spatial data. This is the reverse transformation of SpaceToDepth. More specifically, this op outputs a copy of the input tensor where values from the `depth` dimension are moved in spatial blocks to the `height` and `width` dimensions. The attr `block_size` indicates the input block size and how the data is moved.
- Chunks of data of size block_size * block_size from depth are rearranged into non-overlapping blocks of size `block_size x block_size`
- The width the output tensor is input_depth * block_size, whereas the height is input_height * block_size.
- ``T``h``e`` ``Y``,`` ``X`` ``c``o``o``r``d``i``n``a``t``e``s`` ``w``i``t``h``i``n`` ``e``a``c``h`` ``b``l``o``c``k`` ``o``f`` ``t``h``e`` ``o``u``t``p``u``t`` ``i``m``a``g``e`` ``a``r``e`` ``d``e``t``e``r``m``i``n``e``d`` ``b``y`` ``t``h``e`` ``h``i``g``h`` ``o``r``d``e``r`` ``c``o``m``p``o``n``e``n``t`` ``o``f`` ``t``h``e`` ``i``n``p``u``t`` ``c``h``a``n``n``e``l`` ``i``n``d``e``x``.``
- The depth of the input tensor must be divisible by block_size * block_size.
The `data_format` attr specifies the layout of the input and output tensors with the following options: "NHWC": `[ batch, height, width, channels ]` "NCHW": `[ batch, channels, height, width ]` "NCHW_VECT_C": `qint8 [ batch, channels / 4, height, width, 4 ]`
It is useful to consider the operation as transforming a 6-D Tensor. e.g. for data_format = NHWC, Each element in the input tensor can be specified via 6 coordinates, ordered by decreasing memory layout significance as: n,iY,iX,bY,bX,oC (where n=batch index, iX, iY means X or Y coordinates within the input image, bX, bY means coordinates within the output block, oC means output channels). The output would be the input transposed to the following layout: n,iY,bY,iX,bX,oC
This operation is useful for resizing the activations between convolutions (but keeping all data), e.g. instead of pooling. It is also useful for training purely convolutional models.
For example, given an input of shape `[1, 1, 1, 4]`, data_format = "NHWC" and block_size = 2:

```
 x = [[[[1, 2, 3, 4]]]]
```
This operation will output a tensor of shape `[1, 2, 2, 1]`:

```
    [[[[1], [2]],
     [[3], [4]]]]
```
