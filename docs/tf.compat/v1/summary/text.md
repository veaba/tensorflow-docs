总结文本数据。

```
 tf.compat.v1.summary.text(
    name,
    tensor,
    collections=None
)
 
```

Text data summarized via this plugin will be visible in the Text Dashboardin TensorBoard. The standard TensorBoard Text Dashboard will render markdownin the strings, and will automatically organize 1d and 2d tensors into tables.If a tensor with more than 2 dimensions is provided, a 2d subarray will bedisplayed along with a warning message. (Note that this behavior is notintrinsic to the text summary api, but rather to the default TensorBoard textplugin.)

#### 参数：
- **`name`** : A name for the generated node. Will also serve as a series name inTensorBoard.
- **`tensor`** : a string-type Tensor to summarize.
- **`collections`** : Optional list of ops.GraphKeys.  The collections to add thesummary to.  Defaults to [_ops.GraphKeys.SUMMARIES]


#### 返回：
A TensorSummary op that is configured so that TensorBoard will recognizethat it contains textual data. The TensorSummary is a scalar  `Tensor`  oftype  `string`  which contains  `Summary`  protobufs.

#### 加薪：
- **`ValueError`** : If tensor has the wrong type.
