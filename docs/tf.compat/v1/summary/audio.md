Outputs a  `Summary`  protocol buffer with audio.

```
 tf.compat.v1.summary.audio(    name,    tensor,    sample_rate,    max_outputs=3,    collections=None,    family=None) 
```

The summary has up to  `max_outputs`  summary values containing audio. Theaudio is built from  `tensor`  which must be 3-D with shape  `[batch_size,frames, channels]`  or 2-D with shape  `[batch_size, frames]` . The values areassumed to be in the range of  `[-1.0, 1.0]`  with a sample rate of `sample_rate` .

The  `tag`  in the outputted Summary.Value protobufs is generated based on thename, with a suffix depending on the max_outputs setting:

- If  `max_outputs`  is 1, the summary value tag is '*name*/audio'.
- If  `max_outputs`  is greater than 1, the summary value tags aregenerated sequentially as '*name*/audio/0', '*name*/audio/1', etc


#### 参数：
- **`name`** : A name for the generated node. Will also serve as a series name inTensorBoard.
- **`tensor`** : A 3-D  `float32`   `Tensor`  of shape  `[batch_size, frames, channels]` or a 2-D  `float32`   `Tensor`  of shape  `[batch_size, frames]` .
- **`sample_rate`** : A Scalar  `float32`   `Tensor`  indicating the sample rate of thesignal in hertz.
- **`max_outputs`** : Max number of batch elements to generate audio for.
- **`collections`** : Optional list of ops.GraphKeys.  The collections to add thesummary to.  Defaults to [_ops.GraphKeys.SUMMARIES]
- **`family`** : Optional; if provided, used as the prefix of the summary tag name,which controls the tab name used for display on Tensorboard.


#### 返回：
A scalar  `Tensor`  of type  `string` . The serialized  `Summary`  protocolbuffer.

