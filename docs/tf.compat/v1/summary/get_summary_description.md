Given a TensorSummary node_def, retrieve its SummaryDescription.

```
 tf.compat.v1.summary.get_summary_description(node_def) 
```

When a Summary op is instantiated, a SummaryDescription of associatedmetadata is stored in its NodeDef. This method retrieves the description.

#### 参数：
- **`node_def`** : the node_def_pb2.NodeDef of a TensorSummary op


#### 返回：
a summary_pb2.SummaryDescription

#### 加薪：
- **`ValueError`** : if the node is not a summary op.


#### 迫切的兼容性
Not compatible with eager execution. To write TensorBoardsummaries under eager execution, use  `tf.contrib.summary`  instead.

