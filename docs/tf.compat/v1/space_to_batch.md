SpaceToBatch for 4-D tensors of type T.



### Aliases:

- [ `tf.compat.v1.nn.space_to_batch` ](/api_docs/python/tf/compat/v1/space_to_batch)



```
 tf.compat.v1.space_to_batch(
    input,
    paddings,
    block_size=None,
    name=None,
    block_shape=None
)
 
```

This is a legacy version of the more general SpaceToBatchND.

Zero-pads and then rearranges (permutes) blocks of spatial data into batch.
More specifically, this op outputs a copy of the input tensor where values from
the  `height`  and  `width`  dimensions are moved to the  `batch`  dimension. After
the zero-padding, both  `height`  and  `width`  of the input must be divisible by the
block size.



#### Args:

- **`input`** : A  `Tensor` . 4-D with shape  `[batch, height, width, depth]` .

- **`paddings`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .
2-D tensor of non-negative integers with shape  `[2, 2]` . It specifies
the padding of the input with zeros across the spatial dimensions as follows:


<devsite-code> `paddings = [[pad_top, pad_bottom], [pad_left, pad_right]]<br>` </pre></devsite-code>
The effective spatial dimensions of the zero-padded input tensor will be:


<devsite-code> `height_pad = pad_top + height + pad_bottom<br>width_pad = pad_left + width + pad_right<br>` </pre></devsite-code>
The attr  `block_size`  must be greater than one. It indicates the block size.

The shape of the output will be:

[batch<em>block_size</em>block_size, height_pad/block_size, width_pad/block_size,
   depth]

Some examples:

(1) For the following input of shape  `[1, 2, 2, 1]`  and block_size of 2:




    - Non-overlapping blocks of size  `block_size x block size`  in the height and
width dimensions are rearranged into the batch dimension at each location.

    - The batch of the output tensor is  `batch * block_size * block_size` .

    - Both height_pad and width_pad must be divisible by block_size.


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = [[[[1], [2]], [[3], [4]]]]<br>` </pre></devsite-code>
The output tensor has shape  `[4, 1, 1, 1]`  and value:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `[[[[1]]], [[[2]]], [[[3]]], [[[4]]]]<br>` </pre></devsite-code>
(2) For the following input of shape  `[1, 2, 2, 3]`  and block_size of 2:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = [[[[1, 2, 3], [4, 5, 6]],<br>&nbsp; &nbsp; &nbsp; [[7, 8, 9], [10, 11, 12]]]]<br>` </pre></devsite-code>
The output tensor has shape  `[4, 1, 1, 3]`  and value:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `[[[[1, 2, 3]]], [[[4, 5, 6]]], [[[7, 8, 9]]], [[[10, 11, 12]]]]<br>` </pre></devsite-code>
(3) For the following input of shape  `[1, 4, 4, 1]`  and block_size of 2:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = [[[[1], &nbsp; [2], &nbsp;[3], &nbsp;[4]],<br>&nbsp; &nbsp; &nbsp; [[5], &nbsp; [6], &nbsp;[7], &nbsp;[8]],<br>&nbsp; &nbsp; &nbsp; [[9], &nbsp;[10], [11], &nbsp;[12]],<br>&nbsp; &nbsp; &nbsp; [[13], [14], [15], &nbsp;[16]]]]<br>` </pre></devsite-code>
The output tensor has shape  `[4, 2, 2, 1]`  and value:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = [[[[1], [3]], [[9], [11]]],<br>&nbsp; &nbsp; &nbsp;[[[2], [4]], [[10], [12]]],<br>&nbsp; &nbsp; &nbsp;[[[5], [7]], [[13], [15]]],<br>&nbsp; &nbsp; &nbsp;[[[6], [8]], [[14], [16]]]]<br>` </pre></devsite-code>
(4) For the following input of shape  `[2, 2, 4, 1]`  and block_size of 2:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = [[[[1], &nbsp; [2], &nbsp;[3], &nbsp;[4]],<br>&nbsp; &nbsp; &nbsp; [[5], &nbsp; [6], &nbsp;[7], &nbsp;[8]]],<br>&nbsp; &nbsp; &nbsp;[[[9], &nbsp;[10], [11], &nbsp;[12]],<br>&nbsp; &nbsp; &nbsp; [[13], [14], [15], &nbsp;[16]]]]<br>` </pre></devsite-code>
The output tensor has shape  `[8, 1, 2, 1]`  and value:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = [[[[1], [3]]], [[[9], [11]]], [[[2], [4]]], [[[10], [12]]],<br>&nbsp; &nbsp; &nbsp;[[[5], [7]]], [[[13], [15]]], [[[6], [8]]], [[[14], [16]]]]<br>` </pre></devsite-code>
Among others, this operation is useful for reducing atrous convolution into
  regular convolution.


- **`block_size`** : An  `int`  that is  `>= 2` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `input` .

