BatchToSpace for 4-D tensors of type T.

```
 tf.compat.v1.batch_to_space(
    input,
    crops,
    block_size,
    name=None,
    block_shape=None
)
 
```

这是更通用的batchtospacend的遗留版本。

Rearranges (permutes) data from batch into blocks of spatial data, followed bycropping. This is the reverse transformation of SpaceToBatch. More specifically,this op outputs a copy of the input tensor where values from the  `batch` dimension are moved in spatial blocks to the  `height`  and  `width`  dimensions,followed by cropping along the  `height`  and  `width`  dimensions.

#### 参数：
- **`input`** : A  `Tensor` . 4-D tensor with shape `[batch*block_size*block_size, height_pad/block_size, width_pad/block_size,depth]` . Note that the batch size of the input tensor must be divisible by `block_size * block_size` .
- **`crops`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .2-D tensor of non-negative integers with shape  `[2, 2]` . It specifieshow many elements to crop from the intermediate result across the spatialdimensions as follows:

crops = [[crop_top, crop_bottom], [crop_left, crop_right]]


- **`block_size`** : An  `int`  that is  `>= 2` .


- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

