Given a TensorSummary node_def, retrieve its SummaryDescription.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.summary.get_summary_description(node_def)
</code></pre></devsite-code>
When a Summary op is instantiated, a SummaryDescription of associated
metadata is stored in its NodeDef. This method retrieves the description.



#### Args:

- **`node_def`** : the node_def_pb2.NodeDef of a TensorSummary op



#### Returns:
a summary_pb2.SummaryDescription



#### Raises:

- **`ValueError`** : if the node is not a summary op.



#### Eager Compatibility
Not compatible with eager execution. To write TensorBoard
summaries under eager execution, use  `tf.contrib.summary`  instead.

