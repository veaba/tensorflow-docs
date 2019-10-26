Merges all summaries collected in the default graph.
- key: GraphKey used to collect the summaries. Defaults to GraphKeys.SUMMARIES.
- scope: Optional scope used to filter the summary ops, using re.match
If no summaries were collected, returns None. Otherwise returns a scalar Tensor of type string containing the serialized Summary protocol buffer resulting from the merging.
- RuntimeError: If called with eager execution enabled.
Not compatible with eager execution. To write TensorBoard summaries under eager execution, use tf.contrib.summary instead.
