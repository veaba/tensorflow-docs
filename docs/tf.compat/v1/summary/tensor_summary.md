Outputs a  `Summary`  protocol buffer with a serialized tensor.proto.

```
 tf.compat.v1.summary.tensor_summary(    name,    tensor,    summary_description=None,    collections=None,    summary_metadata=None,    family=None,    display_name=None) 
```

#### 参数：
- **`name`** : A name for the generated node. If display_name is not set, it willalso serve as the tag name in TensorBoard. (In that case, the tagname will inherit tf name scopes.)
- **`tensor`** : A tensor of any type and shape to serialize.
- **`summary_description`** : A long description of the summary sequence. Markdownis supported.
- **`collections`** : Optional list of graph collections keys. The new summary op isadded to these collections. Defaults to  `[GraphKeys.SUMMARIES]` .
- **`summary_metadata`** : Optional SummaryMetadata proto (which describes whichplugins may use the summary value).
- **`family`** : Optional; if provided, used as the prefix of the summary tag,which controls the name used for display on TensorBoard whendisplay_name is not set.
- **`display_name`** : A string used to name this data in TensorBoard. If this isnot set, then the node name will be used instead.


#### 返回：
A scalar  `Tensor`  of type  `string` . The serialized  `Summary`  protocolbuffer.

