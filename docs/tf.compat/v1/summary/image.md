Outputs a  `Summary`  protocol buffer with images.

```
 tf.compat.v1.summary.image(    name,    tensor,    max_outputs=3,    collections=None,    family=None) 
```

The summary has up to  `max_outputs`  summary values containing images. Theimages are built from  `tensor`  which must be 4-D with shape  `[batch_size,height, width, channels]`  and where  `channels`  can be:

- 1:  `tensor`  is interpreted as Grayscale.
- 3:  `tensor`  is interpreted as RGB.
- 4:  `tensor`  is interpreted as RGBA.
The images have the same number of channels as the input tensor. For floatinput, the values are normalized one image at a time to fit in the range `[0, 255]` .   `uint8`  values are unchanged.  The op uses two differentnormalization algorithms:

- If the input values are all positive, they are rescaled so the largest oneis 255.


- If any input value is negative, the values are shifted so input value 0.0is at 127.  They are then rescaled so that either the smallest value is 0,or the largest one is 255.


The  `tag`  in the outputted Summary.Value protobufs is generated based on thename, with a suffix depending on the max_outputs setting:

- If  `max_outputs`  is 1, the summary value tag is '*name*/image'.
- If  `max_outputs`  is greater than 1, the summary value tags aregenerated sequentially as '*name*/image/0', '*name*/image/1', etc.


#### 参数：
- **`name`** : A name for the generated node. Will also serve as a series name inTensorBoard.
- **`tensor`** : A 4-D  `uint8`  or  `float32`   `Tensor`  of shape  `[batch_size, height,width, channels]`  where  `channels`  is 1, 3, or 4.
- **`max_outputs`** : Max number of batch elements to generate images for.
- **`collections`** : Optional list of ops.GraphKeys.  The collections to add thesummary to.  Defaults to [_ops.GraphKeys.SUMMARIES]
- **`family`** : Optional; if provided, used as the prefix of the summary tag name,which controls the tab name used for display on Tensorboard.


#### 返回：
A scalar  `Tensor`  of type  `string` . The serialized  `Summary`  protocolbuffer.

