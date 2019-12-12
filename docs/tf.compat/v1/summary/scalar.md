Outputs a  `Summary`  protocol buffer containing a single scalar value.

```
 tf.compat.v1.summary.scalar(
    name,
    tensor,
    collections=None,
    family=None
)
 
```

生成的摘要具有包含输入张量的tensor.proto。

#### 参数：
- **`name`** : A name for the generated node. Will also serve as the series name inTensorBoard.
- **`tensor`** : A real numeric Tensor containing a single value.
- **`collections`** : Optional list of graph collections keys. The new summary op isadded to these collections. Defaults to  `[GraphKeys.SUMMARIES]` .
- **`family`** : Optional; if provided, used as the prefix of the summary tag name,which controls the tab name used for display on Tensorboard.


#### 返回：
A scalar  `Tensor`  of type  `string` . Which contains a  `Summary`  protobuf.

#### 加薪：
- **`ValueError`** : If tensor has the wrong shape or type.
