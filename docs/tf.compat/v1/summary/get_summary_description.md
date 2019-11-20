[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/summary/summary.py#L409-L436)  
---  
  
Given a TensorSummary node_def, retrieve its SummaryDescription.

    
    
    tf.compat.v1.summary.get_summary_description(node_def)
    

When a Summary op is instantiated, a SummaryDescription of associated metadata
is stored in its NodeDef. This method retrieves the description.

#### Args:

  * **`node_def`** : the node_def_pb2.NodeDef of a TensorSummary op

#### Returns:

a summary_pb2.SummaryDescription

#### Raises:

  * **`ValueError`** : if the node is not a summary op.

#### Eager Compatibility

Not compatible with eager execution. To write TensorBoard summaries under
eager execution, use `tf.contrib.summary` instead.

