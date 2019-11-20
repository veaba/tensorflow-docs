[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v1/summary)  
---  
  
Operations for writing summary data, for use in analysis and visualization.

See the [Summaries and
TensorBoard](https://tensorflow.google.cn/guide/summaries_and_tensorboard)
guide.

## Classes

[`class
Event`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Event): A
ProtocolMessage

[`class
FileWriter`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/FileWriter):
Writes `Summary` protocol buffers to event files.

[`class
FileWriterCache`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/FileWriterCache):
Cache for file writers.

[`class
SessionLog`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/SessionLog):
A ProtocolMessage

[`class
Summary`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Summary):
A ProtocolMessage

[`class
SummaryDescription`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/SummaryDescription):
A ProtocolMessage

[`class
TaggedRunMetadata`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/TaggedRunMetadata):
A ProtocolMessage

## Functions

[`all_v2_summary_ops(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/all_v2_summary_ops):
Returns all V2-style summary ops defined in the current default graph.

[`audio(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/audio):
Outputs a `Summary` protocol buffer with audio.

[`get_summary_description(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/get_summary_description):
Given a TensorSummary node_def, retrieve its SummaryDescription.

[`histogram(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/histogram):
Outputs a `Summary` protocol buffer with a histogram.

[`image(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/image):
Outputs a `Summary` protocol buffer with images.

[`initialize(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/initialize):
Initializes summary writing for graph execution mode.

[`merge(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/merge):
Merges summaries.

[`merge_all(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/merge_all):
Merges all summaries collected in the default graph.

[`scalar(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/scalar):
Outputs a `Summary` protocol buffer containing a single scalar value.

[`tensor_summary(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/tensor_summary):
Outputs a `Summary` protocol buffer with a serialized tensor.proto.

[`text(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/text):
Summarizes textual data.

