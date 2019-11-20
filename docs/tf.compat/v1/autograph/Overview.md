[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v1/autograph)  
---  
  
Conversion of plain Python into TensorFlow graph code.

NOTE: In TensorFlow 2.0, AutoGraph is automatically applied when using
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function).
This module contains lower-level APIs for advanced use.

For more information, see the [AutoGraph
guide](https://tensorflow.google.cn/guide/autograph).

By equivalent graph code we mean code that generates a TensorFlow graph when
run. The generated graph has the same effects as the original code when
executed (for example with
[`tf.function`](https://tensorflow.google.cn/api_docs/python/tf/function) or
[`tf.compat.v1.Session.run`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session#run)).
In other words, using AutoGraph can be thought of as running Python in
TensorFlow.

## Modules

[`experimental`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/autograph/experimental)
module: Public API for tf.autograph.experimental namespace.

## Functions

[`set_verbosity(...)`](https://tensorflow.google.cn/api_docs/python/tf/autograph/set_verbosity):
Sets the AutoGraph verbosity level.

[`to_code(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/autograph/to_code):
Similar to `to_graph`, but returns Python source code as a string.

[`to_graph(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/autograph/to_graph):
Converts a Python entity into a TensorFlow graph.

[`trace(...)`](https://tensorflow.google.cn/api_docs/python/tf/autograph/trace):
Traces argument information at compilation time.

